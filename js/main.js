(function(){
	const qs=(s,ctx=document)=>ctx.querySelector(s);
	const qsa=(s,ctx=document)=>Array.from(ctx.querySelectorAll(s));

	async function includeComponents(){
		await Promise.all(qsa('[data-include]').map(async el=>{
			const file=el.getAttribute('data-include');
			try{
				const res=await fetch(file);
				el.innerHTML=await res.text();
			} catch(e){
				el.innerHTML='<div class="container" style="padding:.8rem 0">Component failed to load.</div>';
			}
		}));
	}

	function setupScrollReveal(){
		const io=new IntersectionObserver(entries=>{
			entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target);}});
		},{threshold:.12});
		qsa('.reveal').forEach(el=>io.observe(el));
	}

	function setupScrollTop(){
		const btn=qs('#scrollTop');
		if(!btn) return;
		window.addEventListener('scroll',()=>{
			if(window.scrollY>400){btn.classList.add('show')}else{btn.classList.remove('show')}
		});
		btn.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
	}

	function setupDarkMode(){
		const prefersDark=window.matchMedia('(prefers-color-scheme: dark)').matches;
		const stored=localStorage.getItem('theme');
		if(stored==='dark' || (!stored && prefersDark)) document.documentElement.dataset.theme='dark';
		const toggle=()=>{
			const isDark=document.documentElement.dataset.theme==='dark';
			document.documentElement.dataset.theme=isDark?'light':'dark';
			localStorage.setItem('theme', document.documentElement.dataset.theme);
		};
		window.__toggleTheme=toggle;
	}

	function setupChatbot(){
		const toggle=()=>win.toggleAttribute('hidden');
		const root=qs('#chatbot');
		if(!root) return;
		const win=qs('#chatbotWindow');
		qs('#chatbotToggle')?.addEventListener('click',toggle);
		qs('#chatbotClose')?.addEventListener('click',toggle);
		const list=qs('#chatbotMessages');
		const form=qs('#chatbotForm');
		const input=qs('#chatbotInput');
		const send=(text,role)=>{
			const li=document.createElement('li');
			li.textContent=(role==='bot'?'AI: ':'You: ')+text;
			list.appendChild(li);
			list.scrollTop=list.scrollHeight;
		};
		['Welcome to Alumni Nexus! Ask about directory, events, or mentorship.','Tip: Use filters to narrow down results.','Data is demo-only, no backend required.'].forEach(t=>send(t,'bot'));
		form?.addEventListener('submit',e=>{
			e.preventDefault();
			const v=input.value.trim(); if(!v) return;
			send(v,'user');
			setTimeout(()=>{
				const reply=(/mentor/i.test(v)?'Use Mentorship → search skills and Request Mentor.':/event/i.test(v)?'Open Events page and click Register to simulate.':/directory|alumni/i.test(v)?'Go to Directory → search by dept/year.':'Thanks! Explore the pages via the navbar.');
				send(reply,'bot');
			},400);
			input.value='';
		});
	}

	function afterComponentsLoaded(){
		if(window.__initNavbar) window.__initNavbar();
		const yearEl=document.getElementById('year');
		if(yearEl) yearEl.textContent=String(new Date().getFullYear());
		const themeBtn=document.getElementById('themeToggle');
		if(themeBtn) themeBtn.addEventListener('click',()=>window.__toggleTheme?.());
	}

	(async function init(){
		setupDarkMode();
		await includeComponents();
		afterComponentsLoaded();
		setupScrollReveal();
		setupScrollTop();
		setupChatbot();
	})();
})();

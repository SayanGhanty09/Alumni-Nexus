(function(){
	window.__initNavbar=function(){
		const nav=document.querySelector('.nav');
		const btn=document.querySelector('.nav__toggle');
		const links=document.querySelector('.nav__links');
		if(btn && links){
			btn.addEventListener('click',()=>{
				const open=links.classList.toggle('show');
				btn.setAttribute('aria-expanded', String(open));
			});
			links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
				links.classList.remove('show');
				btn.setAttribute('aria-expanded','false');
			}));
		}
		if(nav){
			const onScroll=()=>{
				if(window.scrollY>10) nav.classList.add('scrolled'); else nav.classList.remove('scrolled');
			};
			onScroll();
			window.addEventListener('scroll', onScroll, {passive:true});
		}
	};
})();

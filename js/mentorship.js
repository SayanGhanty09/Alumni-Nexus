(function(){
	const grid=document.getElementById('mentorsGrid');
	const skillSearch=document.getElementById('skillSearch');
	const modal=document.getElementById('requestModal');
	const closeBtn=document.getElementById('closeModal');
	const matchForm=document.getElementById('matchForm');
	const interest=document.getElementById('interest');
	const goal=document.getElementById('goal');

	const mentors=[
		{id:1,name:'Priya Nair',dept:'CS',batch:2020,skills:['frontend','react','ui'],title:'Senior Frontend Engineer'},
		{id:2,name:'Omar Faruk',dept:'EE',batch:2019,skills:['hardware','embedded','iot'],title:'Hardware Engineer'},
		{id:3,name:'Grace Kim',dept:'CS',batch:2018,skills:['ml','data','python'],title:'ML Engineer'},
		{id:4,name:'Ivan Petrov',dept:'ME',batch:2021,skills:['cad','manufacturing','automation'],title:'Automation Engineer'},
		{id:5,name:'Leila Haddad',dept:'CS',batch:2017,skills:['backend','node','cloud'],title:'Backend Engineer'}
	];

	function render(list){
		grid.innerHTML='';
		list.forEach(m=>{
			const el=document.createElement('article');
			el.className='card mentor';
			el.innerHTML=`<h3>${m.name}</h3><div class="meta">${m.dept} • ${m.batch} • ${m.title}</div><div>Skills: ${m.skills.join(', ')}</div><button class="btn btn--primary" data-id="${m.id}">Request Mentor</button>`;
			grid.appendChild(el);
		});
		grid.querySelectorAll('button[data-id]').forEach(b=>b.addEventListener('click',()=>{
			modal.classList.remove('hide');
		}));
	}

	function search(){
		const q=(skillSearch?.value||'').toLowerCase();
		const list=mentors.filter(m=>!q || m.skills.join(' ').toLowerCase().includes(q));
		render(list);
	}
	closeBtn?.addEventListener('click',()=>modal.classList.add('hide'));
	skillSearch?.addEventListener('input',search);
	matchForm?.addEventListener('submit',e=>{
		e.preventDefault();
		const iq=(interest?.value||'').toLowerCase();
		const gq=(goal?.value||'').toLowerCase();
		const scored=mentors.map(m=>({m,score:(m.skills.join(' ').toLowerCase().includes(iq)?2:0)+(gq?1:0)})).sort((a,b)=>b.score-a.score).slice(0,3).map(x=>x.m);
		render(scored);
	});

	render(mentors);
})();

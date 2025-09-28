(function(){
	const grid=document.getElementById('directoryGrid');
	const search=document.getElementById('searchInput');
	const dept=document.getElementById('filterDept');
	const year=document.getElementById('filterYear');
	const role=document.getElementById('filterRole');

	const alumni=[
		{id:1,name:'Aisha Khan',dept:'Computer Science',year:'2023',role:'Engineer',title:'Frontend Engineer',company:'Nimbus',linkedin:'#'},
		{id:2,name:'Rahul Mehta',dept:'Electrical',year:'2022',role:'Manager',title:'Product Manager',company:'Voltix',linkedin:'#'},
		{id:3,name:'Sara Lee',dept:'Mechanical',year:'2024',role:'Engineer',title:'Robotics Engineer',company:'MechaWorks',linkedin:'#'},
		{id:4,name:'Daniel Park',dept:'Civil',year:'2021',role:'Founder',title:'Founder & CEO',company:'UrbanIQ',linkedin:'#'},
		{id:5,name:'Elena Garcia',dept:'Computer Science',year:'2020',role:'Engineer',title:'Backend Engineer',company:'Cloudary',linkedin:'#'},
		{id:6,name:'Mohit Sharma',dept:'Electrical',year:'2023',role:'Engineer',title:'Hardware Engineer',company:'Quantum Circuits',linkedin:'#'}
	];

	function render(list){
		grid.innerHTML='';
		list.forEach(a=>{
			const card=document.createElement('article');
			card.className='card alumni';
			card.innerHTML=`<h3>${a.name}</h3>
				<div class="alumni__meta">${a.dept} • Batch ${a.year} • ${a.role}</div>
				<div>${a.title} @ ${a.company}</div>
				<div class="alumni__actions">
					<a class="btn btn--ghost" href="${a.linkedin}" target="_blank" rel="noreferrer">LinkedIn</a>
					<a class="btn btn--primary" href="#">Message</a>
				</div>`;
			grid.appendChild(card);
		});
	}

	function applyFilters(){
		const q=(search?.value||'').toLowerCase();
		const d=dept?.value||''; const y=year?.value||''; const r=role?.value||'';
		const list=alumni.filter(a=>{
			const matchesSearch=(`${a.name} ${a.title} ${a.company}`.toLowerCase().includes(q));
			const matchesDept=!d || a.dept===d;
			const matchesYear=!y || a.year===y;
			const matchesRole=!r || a.role===r;
			return matchesSearch && matchesDept && matchesYear && matchesRole;
		});
		render(list);
	}

	[search,dept,year,role].forEach(el=>el?.addEventListener('input',applyFilters));
	render(alumni);
})();

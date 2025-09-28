(function(){
	const root=document.getElementById('campaigns');
	const campaigns=[
		{id:1,title:'Scholarship Fund',desc:'Support need-based scholarships for students.',goal:50000,raised:18500},
		{id:2,title:'Innovation Lab',desc:'Equip the new lab with cutting-edge tools.',goal:80000,raised:42000},
		{id:3,title:'Library Upgrade',desc:'Expand digital resources and study spaces.',goal:30000,raised:29800}
	];
	function render(){
		root.innerHTML='';
		campaigns.forEach(c=>{
			const pct=Math.min(100, Math.round((c.raised/c.goal)*100));
			const el=document.createElement('article');
			el.className='card campaign';
			el.innerHTML=`<h3>${c.title}</h3><p class="muted">${c.desc}</p>
				<div class="progress"><div class="progress__bar" style="width:${pct}%"></div></div>
				<div class="muted">$${c.raised.toLocaleString()} raised of $${c.goal.toLocaleString()} • ${pct}%</div>
				<div>
					<button class="btn btn--primary" data-id="${c.id}">Donate</button>
				</div>`;
			root.appendChild(el);
		});
		root.querySelectorAll('button[data-id]').forEach(b=>b.addEventListener('click',()=>{
			alert('Thank you for your support! (demo)');
		}));
	}
	render();
})();

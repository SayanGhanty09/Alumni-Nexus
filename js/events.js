(function(){
	const grid=document.getElementById('eventsGrid');
	const events=[
		{id:1,title:'Global Alumni Meetup',date:'2025-10-12',desc:'Reconnect with peers and network across industries.'},
		{id:2,title:'Career Webinar: AI in 2025',date:'2025-11-05',desc:'Insights from alumni leaders in AI and product.'},
		{id:3,title:'Campus Reunion 2025',date:'2025-12-18',desc:'Celebrate achievements and tour the new labs.'}
	];
	function render(){
		grid.innerHTML='';
		events.forEach(e=>{
			const card=document.createElement('article');
			card.className='card event';
			card.innerHTML=`<h3>${e.title}</h3><div class="meta">${new Date(e.date).toDateString()}</div><p>${e.desc}</p><button class="btn btn--primary" data-id="${e.id}">Register</button>`;
			grid.appendChild(card);
		});
		grid.querySelectorAll('button[data-id]').forEach(btn=>btn.addEventListener('click',()=>{
			btn.textContent='Registered ✅';
			btn.disabled=true;
		}));
	}
	render();
})();

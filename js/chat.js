(function(){
	const list=document.getElementById('messages');
	const form=document.getElementById('chatForm');
	const input=document.getElementById('chatInput');
	const seed=['Welcome to the community chat!','Share opportunities and updates with your peers.'];
	seed.forEach(t=>{const li=document.createElement('li');li.textContent=t;list.appendChild(li);});
	form?.addEventListener('submit',e=>{
		e.preventDefault();
		const v=input.value.trim(); if(!v) return;
		const li=document.createElement('li'); li.textContent=v; list.appendChild(li); list.scrollTop=list.scrollHeight; input.value='';
	});
})();

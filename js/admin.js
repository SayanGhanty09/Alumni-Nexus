(function(){
	const ctx=document.getElementById('trafficChart');
	if(!ctx) return;
	new Chart(ctx,{type:'line',data:{labels:['Jan','Feb','Mar','Apr','May','Jun','Jul'],datasets:[{label:'Active Users',data:[120,150,130,180,210,190,230],fill:true,borderColor:'#6ee7b7',backgroundColor:'rgba(110,231,183,.15)',tension:.35}]},options:{plugins:{legend:{display:false}},scales:{x:{grid:{color:'#22262b'}},y:{grid:{color:'#22262b'}}}}});
})();

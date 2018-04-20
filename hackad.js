$(document).ready(function(){
	$("#allpageinside_allthepage_inside_pagein_buyself_purchase").click(function(){
		var site = $("#allpageinside_allthepage_inside_pagein_buyself_link_self").val();
		var nbr = $("#allpageinside_allthepage_inside_pagein_buyself_number_self").val();
		var balance = $("#allpageinside_allthepage_inside_pagein_buyself_paymentbal").val();
		$.ajax({
			type:'POST',
			url:'inc/bads_21abba021.php',
			data:{
			site:site,
			nbr:nbr,
			balance:balance
			},
			dataType:'JSON',
			success:function(rep){
				if(rep[0] == "donebal"){
			document.getElementById('allpageinside_allthepage_inside_pagein_buyself_onceall_load').innerHTML="<div class='right_box'>Your purchase is <b>Done</b></div>";
			document.getElementById('allpageinside_allthepage_inside_pagein_buyself_link_self').value="http://";
			document.getElementById('allpageinside_allthepage_inside_pagein_buyself_number_self').value="1";
			document.getElementById('allpageinside_allthepage_header_balances_balance').innerHTML="$"+rep[1];
			document.getElementById('allpageinside_allthepage_header_balances_baps').innerHTML=rep[2];
			document.getElementById('allpageinside_allthepage_header_balances_groupe').innerHTML=rep[3]+"/14";
			}if(rep[0] == "doneearn"){
			document.getElementById('allpageinside_allthepage_inside_pagein_buyself_onceall_load').innerHTML="<div class='right_box'>Your purchase is <b>Done</b></div>";
			document.getElementById('allpageinside_allthepage_inside_pagein_buyself_link_self').value="http://";
			document.getElementById('allpageinside_allthepage_inside_pagein_buyself_number_self').value="1";
			document.getElementById('allpageinside_allthepage_header_balances_earnings').innerHTML="$"+rep[1];
			document.getElementById('allpageinside_allthepage_header_balances_baps').innerHTML=rep[2];
			document.getElementById('allpageinside_allthepage_header_balances_groupe').innerHTML=rep[3]+"/14";
			}if(rep[0] == "link"){
			document.getElementById('allpageinside_allthepage_inside_pagein_buyself_onceall_load').innerHTML="<div class='wrong_box'>You need to enter the website URL.</div>";
			}if(rep[0] == "bal"){
			document.getElementById('allpageinside_allthepage_inside_pagein_buyself_onceall_load').innerHTML="<div class='wrong_box'>You don't have enough funds in balance.</div>";
			}if(rep[0] == "earn"){
			document.getElementById('allpageinside_allthepage_inside_pagein_buyself_onceall_load').innerHTML="<div class='wrong_box'>You don't have enough funds in earnings.</div>";
			}if(rep[0] == "integerbuy"){
			document.getElementById('allpageinside_allthepage_inside_pagein_buyself_onceall_load').innerHTML="<div class='wrong_box'>Quantity Does't must be a Decimal Numbers.</div>";
			}if(rep[0] == "one"){
			document.getElementById('allpageinside_allthepage_inside_pagein_buyself_onceall_load').innerHTML="<div class='wrong_box'>You can't buy less than 1 ad.</div>";
			}
			}
		});
	});
});
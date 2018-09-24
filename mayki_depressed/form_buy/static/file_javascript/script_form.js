$(document).ready(function(){
	
	var put = document.getElementById("npw-map-state-details");
	var elem = document.createElement("div");
	//	massive_element_div = document.querySelectorAll("#npw-map-state-details div");
	//console.log(massive_element_div);


	$("#np-map").click(function(){
		
		elem.id = "save-address";
		elem.innerHTML = '<span id="save-text">Сохранить</span>';
		
		put.parentNode.appendChild(elem);



		$("#save-address").click(function(){
			id_element_div = document.getElementById("npw-map-state-details");
			massive_element_div = id_element_div.getElementsByTagName("div");
			adress = $(massive_element_div[1]).text();
			output_adress = "";
			for(var i = 0; i < adress.length; i++)
			{
				if (adress[i] == " ")
				{
					for(var g = i; g < adress.length; g++)
					{
						output_adress += adress[g];
					}
					break;
				}
			}
			/* запись города и адреса новой почты */
			city_text=$(".npw-list-city:first").text();
			$("#form_hidden_city").val(city_text);
			$("#form_hidden_adress_NP").val(output_adress);
			$("#info_city_NP").text(city_text);
			$("#info_adress_NP").text(output_adress);
			$("#paragraf_text_info_NP").css("display","block");
			$("#npw-map-close-button").trigger("click");

		});
	});

	

	$("#npw-map-close-button").click(function(){
		put.parentNode.removeChild(elem);
	});
	function check_line(text_jquery_val)
	{
		var text_not_spase = "";
		for(var i = 0 ;i < text_jquery_val.length; i++)
	{
			if (!text_jquery_val[i]==" ")
			{
				text_not_spase += text_jquery_val[i];
			}
	}
		if (text_not_spase == "")
		{
			return false;
		}
		else 
		{
			return true;
		}
	}
	$("#submit_button").click(function(){
		var name_line = [$("#line_id_name").val(),$("#line_id_surname").val(),$("#line_id_patronymic").val(),$("#line_id_number_phone").val(),$("#line_id_size_body").val(),$("#line_id_number_shirts").val(),$("#form_hidden_city").val(),$("#form_hidden_adress_NP").val()];
		var id_name_line = ["#line_id_name","#line_id_surname","#line_id_patronymic","#line_id_number_phone","#line_id_size_body","#line_id_number_shirts",,"#form_hidden_city","#form_hidden_adress_NP"];		
		// if($("#check_id").prop("checked"))
		// {
			if (check_line($("#line_id_name").val()) && check_line($("#line_id_surname").val()) && check_line($("#line_id_patronymic").val()) && check_line($("#line_id_number_phone").val()) && check_line($("#line_id_size_body").val()) && check_line($("#line_id_number_shirts").val()) && check_line($("#form_hidden_city").val()) && check_line($("#form_hidden_adress_NP").val()) )
			{
				$("#submit_display_none").trigger("click");	
			}		
			else
			{		
				$("#error_line_NP").css("display","none");
				$("#text_error_warning").css("display","block");

				for (var i = 0; i < 6; i++)
				{
					if (name_line[i] == "")
					{
						$(id_name_line[i]).css("background-color","rgba(237,0,8,0.25)");
					}
					else
						{$(id_name_line[i]).css("background-color","#fff");}
				}
				if (name_line[6] == "")
				{
					$("#error_line_NP").css("display","block");
				}

			}
		// }
	});
	
	$(document).keypress(function(event){
		if (event.which == '13') 
		{
			event.preventDefault();
		};
	});
	$("#line_id_number_shirts").keyup(function(){
		if ($(this).val() != "")
		{
			if ($(this).val() < 1)
			{
				$(this).val(1);
			}			
		}

	});
	// function style_checkbox_button()
	// {
	// 	if ($("#check_id").prop("checked"))
	// 	{
	// 		$("#submit_button").css({"background-position":"78px 0","cursor":"default"});
	// 		$("#submit_button").hover(function ()
	// 		{
	// 			$("#submit_button").css("background-position","78px 0");
	// 		},
	// 		function ()
	// 		{
	// 			$("#submit_button").css("background-position","78px 0");
	// 		});
	// 	}
	// 	else if (!$("#check_id").prop("checked")) 
	// 	{
	// 		$("#submit_button").css({"background-position":"0 0","cursor":"pointer"});
	// 		$("#submit_button").hover(function ()
	// 		{
	// 			$("#submit_button").css("background-position","156px 0");
	// 		},
	// 		function ()
	// 		{
	// 			$("#submit_button").css("background-position","0 0");
	// 		});			
	// 	}
	// }
	// if($("#check_id").prop("checked"))
	// {
	// 	$("#check_id").trigger("click");	
	// }
	// if (!$("#check_id").prop("checked"))

	// $("#check_button").click(function(){
	// 	if (!$("#check_id").prop("checked"))
	// 	{
	// 		$(this).css("background-position","20px 0");
	// 		style_checkbox_button();
	// 		$("#check_id").trigger("click");
	// 	}
	// 	else
	// 	{
	// 		$(this).css("background-position","0 0");
	// 		style_checkbox_button();
	// 		$("#check_id").trigger("click");
	// 	}
	// });


});
$(document).ready(function(){

	var activeTab=0;
	$(window).resize(function(){
		var width = document.body.clientWidth;
		console.log(width);
		if (width<1400){
			$('#left').hide();
				$('#right').hide();
			
			//$('#topleftblack').hide();
			//$('#toprightblack').hide();
			//$('#bottomleftblack').hide();
			//$('#bottomrightblack').hide();
			$('#mainForm').removeClass("col-lg-6");
			$('#mainForm').addClass("col-lg-10");
			}
			else{
				$('#mainForm').removeClass("col-lg-10");
				$('#mainForm').addClass("col-lg-6");
				
				$('#topleftblack').show();
				$('#toprightblack').show();
				$('#bottomleftblack').show();
				$('#bottomrightblack').show();
				$('#left').show();
				$('#right').show();	
				$('#blankright').show();
				$('#blankleft').show();
				
				

			}
		if (width<1650){
			$('#blankleft').hide();
			$('#blankright').hide();
			
			$('#mainForm').removeClass("col-lg-4");
			$('#mainForm').addClass("col-lg-8");


		}
		else{
			$('#mainForm').removeClass("col-lg-8");
			$('#mainForm').addClass("col-lg-4");
			$('#topleftblack').show();
				$('#toprightblack').show();
				$('#bottomleftblack').show();
				$('#bottomrightblack').show();
			$('#blankright').show();
			$('#blankleft').show();
			
			


		}
		
			
	})

	
	console.log("Bump....");
	$(".derby_name").hide();
	$("input[type='text']").value="";
	let submitbutton = document.getElementById("tab0submit");
	console.log(submitbutton);

	var elements = document.getElementsByTagName("input");
	
for (var ii=0; ii < elements.length; ii++) {
  if (elements[ii].type == "text") {
    elements[ii].value = "";
  }
}



	$("#r3c2").hide();
	var DerbyNameYes = document.getElementById('derbynameyes');
	var DerbyNameNo = document.getElementById('derbynameno');
	DerbyNameNo.checked=true;
	$(document.getElementsByName("derbyName")).click(function(){
		var derbyName= (document.querySelector('input[name="derbyName"]:checked').value);
		if (derbyName=="yes"){$(".derby_name").show();
	$("#derbynameinput").addClass("errorInput");}
		else {$(".derby_name").hide();
		$("#derbynameinput").removeClass("errorInput");}
	})

	var HelmYes = document.getElementById('Helmyes');
	var HelmNo = document.getElementById('Helmno');
	HelmNo.checked=true;
	$(document.getElementsByName("Helm")).click(function(){
		var helm= (document.querySelector('input[name="Helm"]:checked').value);
		if (helm=="no"){
			$("#p3r1c4").show();
		$("#p3r1c5").show();
		$("#HelmDropDown").addClass("errorInput");}
		else {
			$("#p3r1c4").hide();
		$("#p3r1c5").hide();
		$("#HelmDropDown").removeClass("errorInput");}
	})

	var WristYes = document.getElementById('Wristyes');
	var WristNo = document.getElementById('Wristno');
	WristNo.checked=true;
	$(document.getElementsByName("Wrist")).click(function(){
		var wrist= (document.querySelector('input[name="Wrist"]:checked').value);
		if (wrist=="no"){
			$("#p3r2c4").show();
		$("#p3r2c5").show();
		$("#WristDropDown").addClass("errorInput");}
		else {
			$("#p3r2c4").hide();
		$("#p3r2c5").hide();
		$("#WristDropDown").removeClass("errorInput");}
	})

	var ElbowYes = document.getElementById('Elbowyes');
	var ElbowNo = document.getElementById('Elbowno');
	ElbowNo.checked=true;
	$(document.getElementsByName("Elbow")).click(function(){
		var Elbow= (document.querySelector('input[name="Elbow"]:checked').value);
		if (Elbow=="no"){
			$("#p3r3c4").show();
		$("#p3r3c5").show();
		$("#ElbowDropDown").addClass("errorInput");}
		else {
			$("#p3r3c4").hide();
		$("#p3r3c5").hide();
		$("#ElbowDropDown").removeClass("errorInput");
	}
	})

	var KneeYes = document.getElementById('Kneeyes');
	var KneeNo = document.getElementById('Kneeno');
	KneeNo.checked=true;
	$(document.getElementsByName("Knee")).click(function(){
		var Knee= (document.querySelector('input[name="Knee"]:checked').value);
		if (Knee=="no"){
			$("#p3r4c4").show();
		$("#p3r4c5").show();
		$("#KneeDropDown").addClass("errorInput");
	
	}
		else {$("#p3r4c4").hide();
		$("#p3r4c5").hide();
		$("#KneeDropDown").removeClass("errorInput");}
	})

	var SkatesYes = document.getElementById('Skatesyes');
	var SkatesNo = document.getElementById('Skatesno');
	SkatesNo.checked=true;
	$(document.getElementsByName("Skates")).click(function(){
		var Skates= (document.querySelector('input[name="Skates"]:checked').value);
		if (Skates=="no"){
			$("#p3r5c4").show();
			$("#p3r5c5").show();
			$("#SkateDropDown").addClass("errorInput");
		
		}
		else {
			$("#p3r5c4").hide();
			$("#p3r5c5").hide();
			$("#SkateDropDown").removeClass("errorInput");
		
		}
	})

	var InsuranceYes = document.getElementById('InsuranceYes');
	var InsuranceNo = document.getElementById('InsuranceNo');
	InsuranceNo.checked=true;
	$("#WFTDANumber").removeClass("errorInput3");
	$(document.getElementsByName("Insurance")).click(function(){
		var Insurance= (document.querySelector('input[name="Insurance"]:checked').value);
		if (Insurance=="yes"){$("#WFTDArow").show();
		$("#WFTDANumber").addClass("errorInput");}
		else {$("#WFTDANumber").hide();
		$("#WFTDANumber").removeClass("errorInput");}
	})



	
	
	

	$("input[type='text']").blur(function(){
		
				
		let text=$(this).val();
		
		if(text.length <3){
			$(this).removeClass('goodInput');
			$(this).addClass('errorInput');
			$('.errorInput>p').addClass('errorText');
			

		}
		else{$(this).removeClass('errorInput');
		$(this).addClass('goodInput');
		

		$('.goodInput > p').addClass('GoodText');}
		
		
		
	}
)


$("input[type='checkbox']").click(function(){
		
	var decision = document.getElementById("18+").checked;
	
	console.log(decision);
	
	if(!decision){
		console.log(decision);
		$(this).removeClass('goodInput');
		$(this).addClass('errorInput');
		$('.errorInput>p').addClass('errorText');
		$("#r3c2").show();
		

	}
	else{$(this).removeClass('errorInput');
	console.log(decision);
	$(this).addClass('goodInput');
	$("#r3c2").hide();
	

	$('.goodInput > p').addClass('GoodText');}
	
	
	
}
)




		$("#email").blur(function() {
			let email = $(this).val();
					

			if (email.length>8 && email.includes("@") && (email.includes("."))){
				$(this).addClass('goodInput');
				$(this).removeClass('errorInput');
	
			}
			else {$(this).addClass('errorInput');
					$(this).removeClass('goodInput');}
	
			
		})
		
		




	
	$("#confirm").dialog({
		title: "Become A Skater?",
		autoOpen: false,
		buttons: [
			{
			  text: "I agree",
			  icon: "ui-icon-check",
			  click: function() {
				$( this ).dialog( "close" );
				window.open("https://play.unity.com/mg/other/build1-sg"); 
			  }
			},
			{
			  text: "Cancel",
			  icon: "ui-icon-cancel",
			  click: function() {
				$(this).dialog( "close" );
			  }
			}
		]
	});
	
	
	$("#testForm0").validate({
        rules: {
            Firstname: "required",
            LastName: "required",
            email: "required",
            phone: "required",
            

        }, //end rules
        messages: {
            Firstname: {
                required: "This cannot be left blank"
            },
            LastName: {
                required: "This cannot be left blank"
            }
        }, 
    });
	
	$("#testForm2").validate();
	$("#testForm3").validate();
	$("#testForm4").validate();
	
	$("#tabs").tabs({
		
		disabled: [ 1, 2, 3, 4 ],
		active: 0,
		//heightStyle: "fill"
		
	});
	
	$("#tab0submit").button();
	$( "#tab0submit" ).button( "option", "icon", "ui-icon-check" );
	$( "#tab0submit" ).button( "option", "showIcon", "true" );
	$( "#tab0submit" ).button( "option", "label", "&nbsp&nbsp&nbsp&nbsp All Fields Required" );
	 	

$( "#tab0submit" ).button({
	margin:"0px",
	padding:"0px",
	iconPosition: "start",
	textPosition: "end"
	
  });
	//$( "#tab0submit" ).button( "option", "showLabel", true );



	console.log($( "#tab0submit" ).button( "option", "icon" ));
	$("#tab0submit").click(function(){
		
		var ErrorClasses = document.getElementsByClassName("errorInput");
		errors=ErrorClasses.length;
		
		if( errors<1 ){
			activeTab=1;
			$("#tabs").tabs({
				disabled: [ 0, 2, 3, 4 ],
				active: 1
			});
			var radios = document.getElementsByName("Experiance");

		
		
		
		$("#AddTeam").button();
		$( "#AddTeam" ).button( "option", "icon", "ui-icon-check" );
	$( "#AddTeam" ).button( "option", "showIcon", "true" );
	$( "#AddTeam" ).button( "option", "label", "&nbsp&nbsp&nbsp&nbsp Add Team" );
		$("#RemoveTeam").button();
		$( "#RemoveTeam" ).button( "option", "icon", "ui-icon-check" );
	$( "#RemoveTeam" ).button( "option", "showIcon", "true" );
	$( "#RemoveTeam" ).button( "option", "label", "&nbsp&nbsp&nbsp&nbsp Remove Team" );
		$('#StartDate').datepicker({
			onSelect:function(){$(this).addClass("goodInput");
			$(this).removeClass("errorInput")
		},
			changeMonth: true,
			changeYear: true,
			yearRange : "-120:+0",
			maxDate:0,
			dateFormat : 'm-dd-yy'
			
			
			
		});
		$('#EndDate').datepicker({
			onSelect:function(){$(this).addClass("goodInput");
			$(this).removeClass("errorInput")},
			changeMonth: true,
			changeYear: true,
			yearRange : "-120:+0",
			maxDate:0,
			dateFormat : 'm-dd-yy'
			
			
			
		});
		
		
		var InsuranceNo = document.getElementById('InsuranceNo');
		InsuranceNo.checked=true;

		$("#WFTDArow").hide();
		$("#fieldset").hide();
		$("#AddTeam").hide();
		$("#RemoveTeam").hide();
		var team_cnt=0;
		var ExperianceYes = document.getElementById('ExperianceYes');
		var ExperianceNo = document.getElementById('ExperianceNo');
		ExperianceNo.checked=true;
		$(document.getElementsByName("Experiance")).click(function(){
			
			var Experiance= (document.querySelector('input[name="Experiance"]:checked').value);
			if (Experiance=="yes"){
				$("#fieldset").show();
				$("#PreviousLeague1").addClass("errorInput");
				$("#PreviousTeam1").addClass("errorInput");
				$("#city").addClass("errorInput");
				$("#state").addClass("errorInput");
				$("#Position").addClass("errorInput");
				$("#JerseyNumber").addClass("errorInput");
				$("#StartDate").addClass("errorInput");
				$("#EndDate").addClass("errorInput");
			team_cnt=1;
			var stateSelect = document.getElementById("state");
			$("#state").addClass("errorInput");
			$("#PreviousLeague1").addClass("errorInput");




			for (let i = 0; i < states.length; i++) {
				const element = states[i];
				
				var option = document.createElement("option");
				option.text = element.name;
				option.value = element.code;
	
				stateSelect.appendChild(option);
	
			}

			var positionSelect = document.getElementById("Position");
			$("#Position").addClass("errorInput");
			for (let i = 0; i < position.length; i++) {
				const element1 = position[i];
				
				
				var option1 = document.createElement("option");
				option1.text = element1.name;
				option1.value = element1.code;
	
				positionSelect.appendChild(option1);
	
			}
			$("#Position").click(function(){
				var selectedPosition = $(this).val();
				console.log(selectedPosition);
				if (selectedPosition!="NA"){
				$(this).addClass("goodInput");
				$(this).removeClass("errorInput");
				}
				else {
					$(this).removeClass("goodInput");
				$(this).addClass("errorInput");
	
				}
	
			})

			PreviousLeague1

			var leagueSelect = document.getElementById("PreviousLeague1");
			for (let i = 0; i < leagues.length; i++) {
				const element1 = leagues[i];
				
				
				var option1 = document.createElement("option");
				option1.text = element1.name;
				option1.value = element1.code;
	
				leagueSelect.appendChild(option1);
	
			}
			



			var numberSelect = document.getElementById("JerseyNumber");

			var naOption=  document.createElement("Option");
			naOption.text="NA";
			naOption.value="NA";
			numberSelect.appendChild(naOption);
			var noOption=  document.createElement("Option");
			noOption.text="00";
			noOption.value="00";
			numberSelect.appendChild(noOption);

			for (let i=0;i<100;i++){
				var option2 = document.createElement("option");
				option2.text=i;
				option2.value=i;
				numberSelect.appendChild(option2);

			}
			$("#JerseyNumber").addClass("errorInput");
			
			
			
			$("#fieldset input").each(function(){$(this).addClass('errorInput');})
			let fieldset_parent = $(".teamFieldSet:eq(0)").clone(true);
			$("#AddTeam").show();
			var newTexts2=Array.from(document.getElementsByClassName("errorInput1"));
			console.log(newTexts2);
			for (i=0;i<newTexts2.length;i++){
		newTexts2[i].classList.add("errorInput");
		newTexts2[i].classList.remove("errorInput1");
		}
		}else {$("#fieldset").hide();
		
		$("#PreviousLeague1").removeClass("errorInput");
		$("#PreviousTeam1").removeClass("errorInput");
		$("#city").removeClass("errorInput");
		$("#state").removeClass("errorInput");
		$("#Position").removeClass("errorInput");
		$("#JerseyNumber").removeClass("errorInput");
		$("#StartDate").removeClass("errorInput");
		$("#EndDate").removeClass("errorInput");
			$("#AddTeam").hide();
			$("#fieldset input").each(function(){$(this).removeClass('errorInput');})
			$("#state").removeClass("errorInput");
			$("#PreviousLeague1").removeClass("errorInput");
		
		}
		})
		$("#state").click(function(){
			var selectedState = $(this).val();
			console.log(selectedState);
			if (selectedState!="NA"){
			$(this).addClass("goodInput");
			$(this).removeClass("errorInput");
			}
			else {
				$(this).removeClass("goodInput");
			$(this).addClass("errorInput");

			}

		})

		$("#JerseyNumber").click(function(){
			var selectednumber = $(this).val();
			console.log(selectednumber);
			if (selectednumber!="NA"){
			$(this).addClass("goodInput");
			$(this).removeClass("errorInput");
			}
			else {
				$(this).removeClass("goodInput");
			$(this).addClass("errorInput");

			}
		})

		$("#PreviousLeague1").click(function(){
			var selectedLeague = $(this).val();
			console.log(selectedLeague);
			if (selectedLeague!="NA"){
			$(this).addClass("goodInput");
			$(this).removeClass("errorInput");
			}
			else {
				$(this).removeClass("goodInput");
			$(this).addClass("errorInput");

			}

		})
	
		var i_date = 0;
		$("#AddTeam").click(function () {
			for (var i=0, iLen=radios.length; i<iLen; i++) {
				radios[i].disabled = true;
		  	} 
			team_cnt++;
			$("ExperianceNo").enabled=false;
			
			$('input.date').datepicker("destroy");
			var fieldset_parent = $(".teamFieldSet:eq(0)").clone(true);
			
			$(".teamFieldSet:last").after($(fieldset_parent).clone(true));
			var newTexts1=Array.from(document.getElementsByClassName("errorInput1"));
			console.log(newTexts1);
			for (i=0;i<newTexts1.length;i++){
		newTexts1[i].classList.add("errorInput");
		newTexts1[i].classList.remove("errorInput1");
		}
			$("#RemoveTeam").show();
			
			$('.date').each(function () {
				$(this).attr("id", 'date' + i_date).datepicker({changeMonth: true,
					changeYear: true,
					yearRange : "-120:+0",
					maxDate:0,
					dateFormat : 'm-dd-yy'});
				i_date=i_date+2;
			});
			
		});
		$("#RemoveTeam").click(function () {
			console.log(team_cnt);
			team_cnt--;
			
		$(".teamFieldSet:last").remove();
		
			
			if (team_cnt==1){
				$("#RemoveTeam").hide();
				for (var i=0, iLen=radios.length; i<iLen; i++) {
					radios[i].disabled = false;
			  } 
			}
			
		});
				
	}
	});


	
	$("#tab1submit").button();
	$( "#tab1submit" ).button( "option", "icon", "ui-icon-check" );
	$( "#tab1submit" ).button( "option", "showIcon", "true" );
	$( "#tab1submit" ).button( "option", "label", "&nbsp&nbsp&nbsp&nbsp All Fields Required" );

	$("#tab1submit").click(function(){
		
		var ErrorClasses = document.getElementsByClassName("errorInput");
		errors=ErrorClasses.length;
		
		if( errors<1 ){
			activeTab=2;
			$("#tabs").tabs({
				disabled: [ 0, 1, 3, 4 ],
				active: 2
			});

			var helmSelect = document.getElementById("HelmDropDown");
			$("#HelmDropDown").addClass("errorInput");
			for (let i = 0; i < GearSize.length; i++) {
				const element1 = GearSize[i];
				
				
				var option1 = document.createElement("option");
				option1.text = element1.name;
				option1.value = element1.code;
	
				helmSelect.appendChild(option1);
	
			}
			$("#HelmDropDown").click(function(){
				var selectedSize = $(this).val();
				console.log(selectedSize);
				if (selectedSize!="NA"){
				$(this).addClass("goodInput");
				$(this).removeClass("errorInput");
				}
				else {
					$(this).removeClass("goodInput");
				$(this).addClass("errorInput");
	
				}
	
			})

			var wristSelect = document.getElementById("WristDropDown");
			$("#WristDropDown").addClass("errorInput");
			for (let i = 0; i < GearSize.length; i++) {
				const element1 = GearSize[i];
				
				
				var option1 = document.createElement("option");
				option1.text = element1.name;
				option1.value = element1.code;
	
				wristSelect.appendChild(option1);
	
			}
			$("#WristDropDown").click(function(){
				var selectedSize = $(this).val();
				console.log(selectedSize);
				if (selectedSize!="NA"){
				$(this).addClass("goodInput");
				$(this).removeClass("errorInput");
				}
				else {
					$(this).removeClass("goodInput");
				$(this).addClass("errorInput");
	
				}
	
			})

			var elbowSelect = document.getElementById("ElbowDropDown");
			$("#ElbowDropDown").addClass("errorInput");
			for (let i = 0; i < GearSize.length; i++) {
				const element1 = GearSize[i];
				
				
				var option1 = document.createElement("option");
				option1.text = element1.name;
				option1.value = element1.code;
	
				elbowSelect.appendChild(option1);
	
			}
			$("#ElbowDropDown").click(function(){
				var selectedSize = $(this).val();
				console.log(selectedSize);
				if (selectedSize!="NA"){
				$(this).addClass("goodInput");
				$(this).removeClass("errorInput");
				}
				else {
					$(this).removeClass("goodInput");
				$(this).addClass("errorInput");
	
				}
	
			})

			
			var KneeSelect = document.getElementById("KneeDropDown");
			$("#KneeDropDown").addClass("errorInput");
			for (let i = 0; i < GearSize.length; i++) {
				const element1 = GearSize[i];
				
				
				var option1 = document.createElement("option");
				option1.text = element1.name;
				option1.value = element1.code;
	
				KneeSelect.appendChild(option1);
	
			}
			$("#KneeDropDown").click(function(){
				var selectedSize = $(this).val();
				console.log(selectedSize);
				if (selectedSize!="NA"){
				$(this).addClass("goodInput");
				$(this).removeClass("errorInput");
				}
				else {
					$(this).removeClass("goodInput");
				$(this).addClass("errorInput");
	
				}
	
			})
			var SkateSelect = document.getElementById("SkateDropDown");
			
			var naoption = document.createElement("option");
			naoption.text="<Select A size>";
			naoption.value="NA";
			SkateSelect.appendChild(naoption);
		    for (let i=6;i<16;i++){
			var option2 = document.createElement("option");
				option2.text="Size "+i+" (Women's)";
				option2.value=i+"W";
				SkateSelect.appendChild(option2);
				var option3 = document.createElement("option");
				option3.text="Size "+i+ " (Men's)";
				option3.value=i+"M";
				SkateSelect.appendChild(option3);


			}
			$("#SkateDropDown").addClass("errorInput");

			$("#SkateDropDown").click(function(){
				var selectedSize = $(this).val();
				console.log(selectedSize);
				if (selectedSize!="NA"){
				$(this).addClass("goodInput");
				$(this).removeClass("errorInput");
				}
				else {
					$(this).removeClass("goodInput");
				$(this).addClass("errorInput");
	
				}
	
			})

			
			
			
		
		
		
		}
		
	});	
	function enableSUNandWED(date) {
		var day = date.getDay();
		return [(day == 0||day==3), ''];
	}
	
	$("#tab2submit").button();
	$( "#tab2submit" ).button( "option", "icon", "ui-icon-check" );
	$( "#tab2submit" ).button( "option", "showIcon", "true" );
	$( "#tab2submit" ).button( "option", "label", "&nbsp&nbsp&nbsp&nbsp All Fields Required" );
	$("#tab2submit").click(function(){
		
		var ErrorClasses = document.getElementsByClassName("errorInput");
		errors=ErrorClasses.length;
		
		if( errors<1 ){
			activeTab=3;
			$("#tabs").tabs({
				disabled: [ 0, 1, 2, 4 ],
				active: 3
			});
			$('#PracticeDate').datepicker({
				minDate: 0,
				changeMonth: true,
				changeYear: true,
				yearRange : "0:+1",
				numberOfMonths : 3,
				dateFormat : 'm-dd-yy',
				
				beforeShowDay: enableSUNandWED,
				defaultDate: '11-26-23' ,
				onSelect:  function(){
					var aDate = $(this).datepicker('getDate');
					if (aDate!==null){
					var dayNumber = aDate.getDay();
					
					
					console.log(dayNumber);
					if (dayNumber==0){
						$("#Vinton").show();
				$("#GameOn").hide();	
				setTimeout(reload, 500, 'VintonMap');
				$( "#tab3submit" ).button( "option", "label", "&nbsp&nbsp&nbsp&nbsp Join us in Vinton!" );
	
					}
					if (dayNumber==3){
						$("#Vinton").hide();
				$("#GameOn").show();	
				setTimeout(reload, 500, 'GameOnMap');
				$( "#tab3submit" ).button( "option", "label", "&nbsp&nbsp&nbsp&nbsp Join us in Cedar Rapids!" );
	
					}
					}
	
	
				}
				
				
				
			});
			$("#Vinton").hide();
			$("#GameOn").hide();	
		}
		
	});	
	
	$("#tab3submit").button();
	$( "#tab3submit" ).button( "option", "icon", "ui-icon-check" );
	$( "#tab3submit" ).button( "option", "showIcon", "true" );
	$( "#tab3submit" ).button( "option", "label", "&nbsp&nbsp&nbsp&nbsp All Fields Required" );
	$("#tab3submit").click(function(){
		
		var ErrorClasses = document.getElementsByClassName("errorInput");
		errors=ErrorClasses.length;
		
		if( errors<1 ){
			activeTab=4;
			$("#tabs").tabs({
				disabled: [ 0, 1, 2, 3 ],
				active: 4
			});
		}
		else{ErrorClasses.forEach.classList.add("errorBorder");}
		
	});	
	$("#tab4submit").button();
	$( "#tab4submit" ).button( "option", "icon", "ui-icon-check" );
	$( "#tab4submit" ).button( "option", "showIcon", "true" );
	$( "#tab4submit" ).button( "option", "label", "&nbsp&nbsp&nbsp&nbsp All Fields Required" );
	$("#tab4submit").click(function(){
		
		var ErrorClasses = document.getElementsByClassName("errorInput");
		errors=ErrorClasses.length;
		
		if( errors<1 ){
			
			
			// bring up a jqueryui confirm dialog
			$("#confirm").dialog( "open");
		}
		
	});
	function reload(id) 
{
    var buggyid = document.getElementById(id);
    buggyid.src = buggyid.src;
}
	function TestForZeroErrors(){var currentErrors = document.getElementsByClassName("errorInput");
LiveErrors=currentErrors.length;
if( LiveErrors<1 ){
switch (activeTab){
	case 0: $( "#tab0submit" ).button( "option", "label", "&nbsp&nbsp&nbsp&nbsp Submit" ); break;
	case 1: $( "#tab1submit" ).button( "option", "label", "&nbsp&nbsp&nbsp&nbsp Submit" ); break;
	case 2: $( "#tab2submit" ).button( "option", "label", "&nbsp&nbsp&nbsp&nbsp Submit" ); break;
	case 3: break;
	case 4: $( "#tab4submit" ).button( "option", "label", "&nbsp&nbsp&nbsp&nbsp Submit" ); break;
	default:break;
}
}
else {
switch (activeTab){
	case 0: $( "#tab0submit" ).button( "option", "label", "&nbsp&nbsp&nbsp&nbsp All Fields Required" ); break;
	case 1: $( "#tab1submit" ).button( "option", "label", "&nbsp&nbsp&nbsp&nbsp All Fields Required" ); break;
	case 2: $( "#tab2submit" ).button( "option", "label", "&nbsp&nbsp&nbsp&nbsp All Fields Required" ); break;
	case 3: $( "#tab2submit" ).button( "option", "label", "&nbsp&nbsp&nbsp&nbsp All Fields Required" ); break;
	case 4: $( "#tab4submit" ).button( "option", "label", "&nbsp&nbsp&nbsp&nbsp All Fields Required" ); break;
	default:break;
	}

}	

	
}
document.body.addEventListener('click', TestForZeroErrors, true); 
document.body.addEventListener('keyup', TestForZeroErrors, true); 
});
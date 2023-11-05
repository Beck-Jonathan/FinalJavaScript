$(document).ready(function(){
	
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



	
	var DerbyNameYes = document.getElementById('derbynameyes');
	var DerbyNameNo = document.getElementById('derbynameno');
	DerbyNameNo.checked=true;
	$(document.getElementsByName("derbyName")).click(function(){
		var derbyName= (document.querySelector('input[name="derbyName"]:checked').value);
		if (derbyName=="yes"){$(".derby_name").show();}
		else {$(".derby_name").hide();}
	})

	var HelmYes = document.getElementById('Helmyes');
	var HelmNo = document.getElementById('Helmno');
	HelmNo.checked=true;
	$(document.getElementsByName("Helm")).click(function(){
		var helm= (document.querySelector('input[name="Helm"]:checked').value);
		if (helm=="no"){$("#p3r1c4").show();}
		else {$("#p3r1c4").hide();}
	})

	var WristYes = document.getElementById('Wristyes');
	var WristNo = document.getElementById('Wristno');
	WristNo.checked=true;
	$(document.getElementsByName("Wrist")).click(function(){
		var wrist= (document.querySelector('input[name="Wrist"]:checked').value);
		if (wrist=="no"){$("#p3r2c4").show();}
		else {$("#p3r2c4").hide();}
	})

	var ElbowYes = document.getElementById('Elbowyes');
	var ElbowNo = document.getElementById('Elbowno');
	ElbowNo.checked=true;
	$(document.getElementsByName("Elbow")).click(function(){
		var Elbow= (document.querySelector('input[name="Elbow"]:checked').value);
		if (Elbow=="no"){$("#p3r3c4").show();}
		else {$("#p3r3c4").hide();}
	})

	var KneeYes = document.getElementById('Kneeyes');
	var KneeNo = document.getElementById('Kneeno');
	KneeNo.checked=true;
	$(document.getElementsByName("Knee")).click(function(){
		var Knee= (document.querySelector('input[name="Knee"]:checked').value);
		if (Knee=="no"){$("#p3r4c4").show();}
		else {$("#p3r4c4").hide();}
	})

	var SkatesYes = document.getElementById('Skatesyes');
	var SkatesNo = document.getElementById('Skatesno');
	SkatesNo.checked=true;
	$(document.getElementsByName("Skates")).click(function(){
		var Skates= (document.querySelector('input[name="Skates"]:checked').value);
		if (Skates=="no"){$("#p3r4c4").show();}
		else {$("#p3r5c4").hide();}
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
		

		$('.goodInput > p').addClass('GoodText');}})
		
		




	
	$("#confirm").dialog({
		title: "Become A Skater?",
		autoOpen: false,
		buttons: [
			{
			  text: "I agree",
			  icon: "ui-icon-check",
			  click: function() {
				$( this ).dialog( "close" );
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
		heightStyle: "fill"
		
	});
	
	$("#tab0submit").button();
	$("#tab0submit").click(function(){
		var ErrorClasses = document.getElementsByClassName("errorInput");
		errors=ErrorClasses.length;
		
		if( errors<1 ){
			$("#tabs").tabs({
				disabled: [ 0, 2, 3, 4 ],
				active: 1
			});
		}
		
	});
	
	$("#tab1submit").button();
	$("#tab1submit").click(function(){
		
		var ErrorClasses = document.getElementsByClassName("errorInput");
		errors=ErrorClasses.length;
		
		if( errors<1 ){
			$("#tabs").tabs({
				disabled: [ 0, 1, 3, 4 ],
				active: 2
			});
		}
		
	});	
	
	$("#tab2submit").button();
	$("#tab2submit").click(function(){
		
		var ErrorClasses = document.getElementsByClassName("errorInput");
		errors=ErrorClasses.length;
		
		if( errors<1 ){
			$("#tabs").tabs({
				disabled: [ 0, 1, 2, 4 ],
				active: 3
			});
		}
		
	});	
	
	$("#tab3submit").button();
	$("#tab3submit").click(function(){
		
		var ErrorClasses = document.getElementsByClassName("errorInput");
		errors=ErrorClasses.length;
		
		if( errors<1 ){
			$("#tabs").tabs({
				disabled: [ 0, 1, 2, 3 ],
				active: 4
			});
		}
		else{ErrorClasses.forEach.classList.add("errorBorder");}
		
	});	
	$("#tab4submit").button();
	$("#tab4submit").click(function(){
		
		var ErrorClasses = document.getElementsByClassName("errorInput");
		errors=ErrorClasses.length;
		
		if( errors<1 ){
			
			// bring up a jqueryui confirm dialog
			$("#confirm").dialog( "open");
		}
		
	});	
});
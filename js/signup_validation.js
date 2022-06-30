
var input_fields = document.querySelectorAll(".input");
var error_msgs  = document.querySelectorAll(".error_msg");


function validate(event){
	var uservalue = document.getElementById("uname").value.trim();
    var emailvalue = document.getElementById("email").value.trim();
    var passwordvalue = document.getElementById("password").value.trim();
    var user = document.getElementById("uname");
	var email = document.getElementById("email");
	var password = document.getElementById("password");

		if( uservalue == "" ){
			user.style.border = "1px solid #ff8471";
	    	error_message("un_err_msg", "THIS FIELD CAN NOT BE EMPTY!");
	  	}
		else if( uservalue.length < 6 ){
			user.style.border = "1px solid #ff8471";
		   	error_message("un_err_msg", "PLEASE ENTER VALID USERNAME!");
		}
		else{
			user.style.border = "1px solid green";
		    error_message("un_err_msg", "");
		}

    
    
    
		if( emailvalue == ""){
			email.style.border = "1px solid #ff8471";
	    	error_message("em_err_msg", "THIS FIELD CAN NOT BE EMPTY!");
	  	}
		else{
			email.style.border = "1px solid green";
		    error_message("em_err_msg", "");
		}

		if( passwordvalue == "" ){
			password.style.border = "1px solid #ff8471";
	    	error_message("pw_err_msg", "THIS FIELD CAN NOT BE EMPTY!");
	  	}
		else if( passwordvalue.length < 6 ){
			password.style.border = "1px solid #ff8471";
		   	error_message("pw_err_msg", "PLEASE ENTER VALID PASSWORD!");
		}
		else{
			password.style.border = "1px solid green";
		    error_message("pw_err_msg", "");
		}

		if ( uservalue == "" || emailvalue == "" || passwordvalue == "" || emailvalue.length < 6 || passwordvalue.length < 6 || uservalue.length < 6 ) {
			return false;
		}
		else{
			console.log("final_else");
            alert('YOUR ACCOUNT IS CREATED SUCCESSFULLY , TRY TO LOG IN NOW!');
			return true;
		}
}



function error_message(id, message){
  document.getElementById(id).innerHTML = message;
}



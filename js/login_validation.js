
/* Login Form Validation */
var input_fields = document.querySelectorAll(".input");
var error_msgs  = document.querySelectorAll(".error_msg");


function validate(event){
	var uservalue = document.getElementById("uname").value.trim();
	var passwordvalue = document.getElementById("password").value.trim();
	var user = document.getElementById("uname");
	var password = document.getElementById("password");

		if( uservalue == ""){
			user.style.border = "1px solid #ff8471";
	    	error_message("un_err_msg", "THIS FIELD CAN NOT BE EMPTY!");
	  	}else if( uservalue.length < 6 ){
			user.style.border = "1px solid #ff8471";
		   	error_message("un_err_msg", "PLEASE ENTER VALID USERNAME!");
		}else{
			user.style.border = "1px solid green";
		    error_message("un_err_msg", "");
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

		if ( uservalue == "" || passwordvalue == "" || uservalue.length < 6 ||
			passwordvalue.length < 6) {
			return false;
		}
		else{
			console.log("final_else");
            alert('WELCOME '+uservalue+'!');
			return true;
		}
}



function error_message(id, message){
  document.getElementById(id).innerHTML = message;
}

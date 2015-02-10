


function showSignUp(){ 
	document.getElementById('sign-up-button').innerHTML='<form action=" "><input type="text" value="Enter email here" id="email" class="btn-default"><input type="submit" class="btn-default" onClick="validateEmail()"/></form>';

}

function alertTitle()
{
alert(document.title);	
}

function validateEmail() {
	var email=document.getElementById("email").value;
	var regex=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var valid=regex.test(email);

    if (valid === false) {
    	alert('Invalid email format');
    }
    else {
    	alert('Email validated successfully');
    }
}
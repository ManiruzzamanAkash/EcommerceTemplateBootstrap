jQuery(document).ready(function(){


	/*** Registration page Complete validation ***/
    // validate signup form on keyup and submit
    $("#signUpForm").validate({
    	rules: {
    		firstname: "required",
    		lastname: "required",
    		username: {
    			required: true,
    			minlength: 2
    		},
    		password: {
    			required: true,
    			minlength: 5
    		},
    		confirm_password: {
    			required: true,
    			minlength: 5,
    			equalTo: "#password"
    		},
    		email: {
    			required: true,
    			email: true
    		},
    		birthdate: {
    			required: true,
    			date: true
    		},
    		topic: {
    			required: "#newsletter:checked",
    			minlength: 2
    		},
    		agree: "required"
    	},
    	messages: {
    		firstname: "Please enter your firstname",
    		lastname: "Please enter your lastname",
    		username: {
    			required: "Please enter a username",
    			minlength: "Your username must consist of at least 2 characters"
    		},
    		password: {
    			required: "Please provide a password",
    			minlength: "Your password must be at least 5 characters long"
    		},
    		confirm_password: {
    			required: "Please provide a password",
    			minlength: "Your password must be at least 5 characters long",
    			equalTo: "Please enter the same password as above"
    		},
    		birthdate: {
    			required: "Please give your birthdate"
    		},
    		email: "Please enter a valid email address",
    		agree: "Please accept our policy"
    	}
    });
    /*** Registration page Complete validation ***/



    /** Login Page validation **/
    $('#loginForm').validate({
    	rules: {
    		username: {
    			required: true
    		},
    		password: {
    			required: true
    		}
    	},
    	messages: {
    		username: {
    			required: "Please enter your username"
    		},
    		password: {
    			required: "Please enter your password"
    		}
    	}
    });
    /** Login Page validation **/

});
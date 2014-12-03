(function($,W,D)
{
	var JQUERY4U = {};

	JQUERY4U.UTIL =
	{
		setupFormValidation: function()
        	{
			$("#register-form").validate({
	                	rules: {
			        	firstname: "required",
					lastname: "required",
					email: {
		                        	required: true,
		                        	email: true,
						},
					password: {
	                        		required: true,
				                minlength: 5
				                    },
						    agree: "required"
					},
				messages: {
					firstname: "Please enter your firstname",
					lastname: "Please enter your lastname",
	                   		password: {
			    	            required: "Please provide a password",
		                            minlength: "Your password must be at least 5 character",
					    	  },
	                    		email: "Please enter a valid email address",
			                agree: "Please accept our policy"
						                },
				submitHandler: function(form) {
		                    form.submit();
					                      }
							});
		}
	}

 	$(D).ready(function($) {
        	JQUERY4U.UTIL.setupFormValidation();
	   	});
})(jQuery, window, document);

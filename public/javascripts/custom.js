$(function () {
	$("#fname_error_message").hide();

	alert('awais');
	var error_fname = false;

	$("#form_fname").focusout(function () {
		// console.log("fname");
		check_fname();
	});


	function check_fname() {
		var pattern = /^[a-z A-Z]*$/;
		var fname = $("#name").val();
		if (pattern.test(fname) && fname !== "") {
			$("#fname_error_message").hide();
			$("#form_fname").css("border-bottom", "2px solid #34F458");
		} else {
			$("#fname_error_message").html("Should contain only Characters");
			$("#fname_error_message").show();
			$("#form_fname").css("border-bottom", "2px solid #F90A0A");
			error_fname = true;
		}
	}

		$("#registration_form").submit(function () {
		error_fname = false;


		check_fname();


		if (
			error_fname === false
		) {
			alert("Miral your Registration Successfull");
			$("#form_email").val("");
			return true;
		} else {
			alert("Please Fill the form Correctly");

			return false;
		}
	});
});

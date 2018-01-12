

$("#signup").on("click", function() {
	var str = $("#email").val();
	var valid = false;
	
	for (var i = 0; i < str.length; ++i) {
		if (str[i] === "@") {
			valid = true;
		}
	}

	if (!valid) {
		$("#errorMessage").text("Please enter a valid email address");
	} else {
		console.log("Email Address: " + $("#email").val());
		console.log("Interested in: " + $("#type").val());
		$("#errorMessage").text("");
	}
}) 

$(".dropdown-item").on("click", function() {
	$("#content").text($(this).text());
})
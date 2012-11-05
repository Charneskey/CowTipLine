Parse.initialize("oe3dboiG0RzJNULxKvdHYGWEb3Cq7mzHRC3Dwh6E", "cR8whmMjybMoXUqfAzhxUJSiBXw3QPt7ZB4bRGw8");
TipObject = Parse.Object.extend("TipObject");

$("#addtipForm").on("submit", function(e) {
	e.preventDefault();

	//get values
	var numcows = $("#numcows").val();
	var howdangerous = $("#howdangerous option:selected").val();
	var comments = $("#comments").val();

	//TBD: Validation
	var tip = new TipObject();
	tip.save(
			{
				numcows:numcows,
				howdangerous:howdangerous,
				comments:comments
			},{
				success:function(object) {
					console.log("Saved object");
					doAlert("Tip Saved!", function() { document.location.href='index.html'; });
				},
				error:function(model, error) {
					console.log("Error saving");
				}
			});

});
$(document).on("click", ".monitor-expand", function () {
	const element = $(this);

	const target = element.attr("data-target");

	if (element.find(".expand").length > 0) {
		$("[data-expand=" + target + "]").slideUp();

		element.html('<i class="fa fa-chevron-right"></i>');
	} else {
		$("[data-expand=" + target + "]").slideDown();

		element.html('<i class="fa fa-chevron-up expand"></i>');
	}
});

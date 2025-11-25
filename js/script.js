console.log("connected!")

$(".title h1").html("Abundant Memory, <em>Relational Intelligence</em>");
$(".title h1").after("<p>October 17th, 2025 - January 23rd, 2026<p>");

// preppend & apend and before & after are kinda interchangable?

$(".funding h3").after("<p>This exhibition draws upon research supported by the Government of Canada's New Frontiers in Research Fund (NRF) and the Social Services and Humanities Research Council, and the Canada Foundation for Innovation.<p>");

//this is a different way to get to the same result
// $(".logos").html('<img src="assets/ulag_logo_black.webp" alt="Abundant Intelligences Logo">');

$("#logo").attr("src", "assets/ulag_logo_black.webp");
$("#logo").attr("alt", "ULethbridge Art Gallery Logo");

// $("body").css("background-color", "#dbdae2"); //<- is good for changing one instance
$("body").addClass("bkg-color");
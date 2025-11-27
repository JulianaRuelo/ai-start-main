console.log("connected!")

$(".title h1").on("click", updateTitle)

$(document).on("keydown", function(eventname){
    console.log(eventname.key)
    if(eventname.key == "?")    {
        updateTitle()

    }

})

function updateTitle()   {
    $(".title h1").html("Abundant Memory, <em>Relational Intelligence</em>")
    $(".title h1").after("<p>October 17th, 2025 - January 23rd, 2026<p>")
    $(".title h1").unbind("click") //only applicable if you want smth to happen once
    $(document).unbind("keydown")
}



// preppend & apend and before & after are kinda interchangable?

$(".funding h3").on("click", updateFunders)
function updateFunders()    {
    $(".funding h3").after("<p>This exhibition draws upon research supported by the Government of Canada's New Frontiers in Research Fund (NRF) and the Social Services and Humanities Research Council, and the Canada Foundation for Innovation.<p>");
    $(".funding h3").unbind("click")

}

//unamed function
$("logo").on("click", function(){
    $("this").attr("src", "assets/ulag_logo_black.webp");
    $("this").attr("alt", "ULethbridge Art Gallery Logo");

    //if it werent inside an unamed function, it'd look like this
    // $("#logo").attr("src", "assets/ulag_logo_black.webp");
    // $("#logo").attr("alt", "ULethbridge Art Gallery Logo");

    //this is a different way to get to the same result as the 2 lines above
    // $(".logos").html('<img src="assets/ulag_logo_black.webp" alt="Abundant Intelligences Logo">');

})




// $("body").css("background-color", "#dbdae2"); //<- is good for changing one instance
$("body").addClass("bkg-color");
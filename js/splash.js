/*
Index.js includes all functions used by the splash page

Some of the functions include:

1) horizontallyCenter: centers things horizontally (e.g. the title text)
2) parallax: changes things in HTML/CSS according to scrolling (e.g. the parallax effect)

*/


/*
This function centers things.
*/
function horizontallyCenter(thingYouWantToCenter)
{
	console.log("centered");
	var pos = (($(window).width() - parseFloat($(thingYouWantToCenter).css("width")))/2);
	console.log(pos);
	$(thingYouWantToCenter).css("left", pos + "px");
}

/*
This function is called whenever the browser detects scrolling.
This function includes the parallax effect on the title, and the text-shadow changing position effect.
*/
function parallax()
{
	//Get how much the user has scrolled on the browser. This is a function dependent on jQuery
	var scroll = $(document).scrollTop();
	//Converts em (what we use in our css) to px
    var emSize = parseFloat($("body").css("font-size"));
	//Scale down the scroll factor by 0.4
	$("#title").css("top", (10*emSize-scroll*0.4)+"px");
	//Calculates the position of the text shadow with 7px as the original position
	var txt_shadow = 7 - (scroll * 0.05);
	$("#title").css("textShadow", Math.abs(txt_shadow)  + "px " + txt_shadow + "px 3px rgba(0, 100, 100, 1)");
}

/*
Function adds the tiles to the page

1) Grabs position and height of top in px
2) Grabs width
2) Places bricks next to each other
*/

/*

*/

/*
Main execution of our javascript (document.ready)
*/
$(document).ready(function()
{
	horizontallyCenter("#title");//okay line
	parallax();
});

$(document).scroll(parallax);

$(window).resize(function()
{
	horizontallyCenter("#title");
});

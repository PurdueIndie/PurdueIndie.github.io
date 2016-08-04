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

function horizontallyCenter(thingYouWantToCenter)
{
	console.log("centered");
	var pos = (($(window).width() - parseFloat($(thingYouWantToCenter).css("width")))/2);
	console.log(pos);
	$(thingYouWantToCenter).css("left", pos + "px");
}
function parallax()
{
	var scroll = $(document).scrollTop();//gets how much we have scrolled
    var emSize = parseFloat($("body").css("font-size"));//convert em (what we used in css) to px
	$("#title").css("top", (10*emSize-scroll*0.4)+"px");//scale down the scroll factor by 0.4
	console.log("7px 7px 3px rgba(255, 204, 38, " + (scroll*0.01) + ");");
	$("#title").css("textShadow", "7px 7px 3px rgba(255, 204, 38, " + (scroll*0.01) + ");");
	//10 was our original emSize in css. So it's 10em - how much we scrolled*slow factor = slower scrolling!
}
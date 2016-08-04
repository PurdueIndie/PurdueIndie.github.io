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
	var txt_shadow = 7 - (scroll * 0.05);
	//$("#title").css("textShadow", text_shadow_css);
	$("#title").css("textShadow", txt_shadow  + "px " + txt_shadow + "px 3px rgba(255, 204, 38, 1)");
	//10 was our original emSize in css. So it's 10em - how much we scrolled*slow factor = slower scrolling!
}
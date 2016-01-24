$(document).scroll(function()
{
		var scroll = $(document).scrollTop();
	    var emSize = parseFloat($("body").css("font-size"));
		$("#title").css("top", (10*emSize-scroll*0.4)+"px");
});

/*
Generates the html page for game gallery. Update the array game_list to add a new game.

Format of each box:
<a href="linkplz" class="gameDescription" id="game_ID">
	<img></img>
	<span><!--for float: normal with text but float: left with img-->
		<h1></h1><h2>by</h2>
		<p></p>
	</span>
</a>

CSS of each box:
.gameDescription{
	
}

.gameDescription:hover{
	
}
*/

/*
Formatting string, for easier writing in function displayGames()
Courtesy of http://stackoverflow.com/questions/610406/javascript-equivalent-to-printf-string-format
*/
if(!String.prototype.format)//checks if format has already been defined (where String.prototype is "a string", and format is the function name)
{
	String.prototype.format = function()
	{
		//.replace(original, new) replaces original with new
		//for our first argument we put in a regex, which means it'll look for {d+}
		//for our second argument we put in a function that returns the argument
		//.replace(regex, function) where the regex looks for {\d+}/g
		var args = arguments;//this is necessary, to convert arguments object into an actual array
		return this.replace(/{(\d+)}/g, function(match, number)
		{
			//return typeof arguments[number] != 'undefined' ? arguments[number]:match;
			if(typeof args[number] != "undefined")//if not undefined
				return args[number];//return argument
			else//else return the number (don't make a replacement)
				return match;
		});
	};
}

/*defining image tags for OS platforms*/
var desktop = "<img src=\"images/os_icons/desktop.png\">";
var mobile = "<img src=\"images/os_icons/mobile.png\">";
var windows = "<img src=\"images/os_icons/windows.png\">";//same icons for phone and desktop
var linux = "<img src=\"images/os_icons/linux.png\">";
var apple = "<img src=\"images/os_icons/apple.png\">";//same icons for mac and ios
var android = "<img src=\"images/os_icons/android.png\">";

/*
Array holding the list of in progress games. 
The key is a string (usually the game's title), the value is an object with descriptions of the game.
*/
var inProgressGames = [
	{
		link: "/lol",
		title: "Still In Progress",
		creator: "Charlie Su",
		blurb: "Super Short Blurb",
		image: "image.jpg",
		description: "This is an example description. Descriptions should describe game, but shouldn't be too long...",
		gif: "gif.gif",
		color: "#FFF"
	}
];

/*
Array holding the list of complete games.
The key is a string (usually the game's title), the value is an object with descriptions of the game.
*/
var completeGames = [
	{
		link: "/lol",
		title: "A Bunny",
		creator: "Bunny Man",
		image: "gallery/bunny.jpg",
		description: "This is a bunny game! I like bunnies a lot. Ahahaha",
		gif: "gallery/bunny.gif",
		color: "#3DCFFF",
		date: "FALL 2016",
		platforms: windows.concat(linux).concat(apple).concat(android)
	},
	{
		link: "/lol",
		title: "Legacy Dungeon",
		creator: "Charlie Su and Anish Kannan",
		image: "gallery/CoverImage.png",
		description: "High School Project",
		gif: "gallery/CoverImage.gif",
		color: "#DFB755",
		date: "SPRING 2015",
		platforms: android
	},
	{
		link: "https://play.google.com/store/apps/details?id=com.MaxwellOldt.HoppO&hl=en",
		title: "HoppO",
		creator: "Maxwell Odt and Brendan Raftery",
		image: "images/games/hoppo.png",
		description: "Play as a little blue ball who hops from circle to circle in an effort to avoid the advancing red wall of death. The game is infinite, meaning the ball will always die in the end, but you can compete with your friends to see who outlives who.",
		gif: "images/games/hoppo.gif",
		color: "#4DFFA6",
		date: "SPRING 2015",
		platforms: android		
	}
];

/*
Function for displaying the list of games.
This function should be attached to a button
*/
function displayGames(list)
{
	//clears previously displayed list
	$("#container").innerHTML = "";
	//start appending new items
	var component;
	for(var i = 0; i < list.length; i++)
	{
		var game = list[i];
		component = "<a href=\"{0}\" class=\"gameDescription\" id=\"{1}\">\n".format(game.link, i);
		component = component.concat("\t<div class=\"gameImage\"> <img src=\"{0}\" alt=\"A screenshot of {1}\"></img></div>\n".format(game.image, game.title));
		component = component.concat("\t<span><h1>{0}</h1>&nbsp;<hr><h2>by {1}</h2>\n".format(game.title, game.creator));
		component = component.concat("\t<p>{0}</p>\n".format(game.description));
		component = component.concat("\t<div class=\"gameDate\">{0}</div>\n".format(game.date));
		component = component.concat("\t<div class=\"gamePlatforms\">{0}</div>\n".format(game.platforms));
		component = component.concat("</span></a>\n");
		$("#container").append(component);
		$("#" + i).find("h1").css("background-color", game.color);
	}
}

/*
Function for attaching .hover() to an element.
*/
function attachHover(id)
{
	$("#"+id).hover(function(){
	$("#"+id+" .gameImage").find("img").attr("src", completeGames[id].gif);
	$(this).css("background", completeGames[id].color);
}, function()
{
	$("#"+id+" .gameImage").find("img").attr("src", completeGames[id].image);
	$(this).css("background", "linear-gradient(90deg, #fff,#ddd)");
});			
}

//execute
$(document).ready(function()
	{
		displayGames(completeGames);
		//appending hover functions to all complete games
		for(var i = 0; i < completeGames.length; i++)
			attachHover(i);
	}
);
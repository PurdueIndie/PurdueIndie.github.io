/*
Generates the html page for game gallery. Update the array game_list to add a new game.

Format of each box:
<a href="linkplz" class="gameCard" id="game_ID">
	<img></img>
	<span><!--for float: normal with text but float: left with img-->
		<h1></h1><h2>by</h2>
		<p></p>
	</span>
</a>

CSS of each box:
.gameCard{
	
}

.gameCard:hover{
	
}
*/

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
var inDevelopmentGames = [
/*
	{
		link: "/lol",
		title: "Still In Progress",
		creator: "Charlie Su",
		image: "image.jpg",
		description: "This is an example description. Descriptions should describe game, but shouldn't be too long...",
		gif: "gif.gif",
		color: "#FFF",
		date: "FALL 2016",
		platforms: linux.concat(apple).concat(windows)
	}*/
	{
		link: "",
		title: "Project: Adventure to Indigo Road",
		creator: "Wesley Shin",
		image: "",
		description: "Adventure to Indigo Road is a 2D platformer made in Game Maker.",
		gif: "",
		color: "#FFF",
		date: "STARTED SPRING 2016",
		platforms: windows
	},
	{
		link: "",
		title: "Project: Overlord",
		creator: "Henry Poggie",
		image: "",
		description: "Overlord is a two player card game with predefined decks. The main mechanic of the game involves mana - if you hit a certain mana point, you lose; however, the more mana you have the more you can do, meaning the more powerful you are the closer you are to death.",
		gif: "",
		color: "#FFF",
		date: "STARTED SPRING 2016",
		platforms: linux		
	},
	{
		link: "",
		title: "Project: Rogue Adventure",
		creator: "Brendan Raftery and Maxwell Oldt",
		image: "images/games/rogue_adventure.png",
		description: "Every adventure is different. This is a text focused game currently being developed by Brendan Raftery and Maxwell Oldt in Unity.",
		gif: "images/games/rogue_adventure.png",
		color: "#FFF",
		date: "STARTED SPRING 2016",
		platforms: windows		
	},
	{
		link: "",
		title: "Project: Legacy Dungeon",
		creator: "Charlie Su",
		image: "",
		description: "A 2D top down dungeon crawler that is more narrative based. The game is built from scratch, working directly with OpenGL 3.2. Current work done include keyboard input, maintaining aspect ratios, sprite loading, and basic animations.",
		gif: "",
		color: "#FFF",
		date: "STARTED SPRING 2016",
		platforms: linux.concat(windows)
	}
];

/*
Array holding the list of completed games.
The key is a string (usually the game's title), the value is an object with descriptions of the game.
*/
var completedGames = [
	/*{
		link: "https://github.com/DontSuCharlie/Legacy_Dungeon",
		title: "Legacy Dungeon",
		creator: "Charlie Su and Anish Kannan",
		image: "images/games/legacy_dungeon.png",
		description: "A game developed during high school. You can move, collect coins, kill monsters, and go down floors. Sometimes the skills you use can kill you. You need Java installed on your computer in order to compile and run this.",
		gif: "images/games/legacy_dungeon.gif",
		color: "#EB9F26",
		date: "SUMMER 2014",
		platforms: windows
	},*/
	{
		link: "http://gamejolt.com/games/the-runner/80654",
		title: "The Runner",
		creator: "Brendan Raftery",
		image: "images/games/the_runner.png",
		description: "Run through the neon catacombs and collect as many points as you can. Collect power ups to make your run even more successful and stay on your toes as the speed picks up dramatically as you get farther down the track.",
		gif: "images/games/the_runner.gif",
		color: "#4d11ff",
		text: "#fff",
		date: "SUMMER 2015",
		platforms: windows
	},
	{
		link: "https://hobofreddy55.itch.io/firates-alpha-gamejam-build",
		title: "Firates!",
		creator: "Jacob Dunbar",
		image: "images/games/firates.png",
		description: "Firates! is a 2D platformer made for the Game Jam Insanity Jam 4 with the Unity Game Engine. Play as a pirate killing other pirates, or once you get near the end, do some fun, goofy pirate gymnastics.",
		gif: "images/games/firates.gif",
		color: "#FF7654",
		date: "SUMMER 2015",
		platforms: linux.concat(apple).concat(windows)
	},	
	{
		link: "https://play.google.com/store/apps/details?id=com.MaxwellOldt.HoppO&hl=en",
		title: "HoppO",
		creator: "Maxwell Oldt and Brendan Raftery",
		image: "images/games/hoppo.png",
		description: "Play as a little blue ball who hops from circle to circle in an effort to avoid the advancing red wall of death. The game is infinite, meaning the ball will always die in the end, but you can compete with your friends to see who outlives who.",
		gif: "images/games/hoppo.gif",
		color: "#4DFFA6",
		date: "SPRING 2015",
		platforms: android		
	}
];

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

/*
Function for displaying the list of games.
This function should be attached to a button
*/
function displayGames(list)
{
	//clears previously displayed list
	$("#list-of-games").empty();
	//start appending new items
	var component;
	for(var i = 0; i < list.length; i++)
	{
		var game = list[i];
		component = "<a target=\"_blank\" href=\"{0}\" class=\"gameCard\" id=\"{1}\">\n".format(game.link, "g" + i);
		component = component.concat("\t<span><h1>{0}</h1>&nbsp;<hr><h2>by {1}</h2>\n".format(game.title, game.creator));
		component = component.concat("\t<p>{0}</p>\n".format(game.description));
		component = component.concat("\t<div class=\"gameDate\">{0}</div>\n".format(game.date));
		component = component.concat("\t<div class=\"gameCardPlatforms\">{0}</div>\n".format(game.platforms));
		component = component.concat("</span>\t<div class=\"gameCardImage\"> <img src=\"{0}\" alt=\"A screenshot of {1}\"></img></div>\n".format(game.image, game.title));
		component = component.concat("</a>\n");
		$("#list-of-games").append(component);
		$("#" + i).find("h1").css("background-color", game.color);
	}
}

/*
Function that attaches the click events for showing the list
*/
var devClicked = false;
var completedClicked = false;
function attachClick()
{
	$("#in-development-button").click(function()
	{
		if(!devClicked)
		{
			devClicked = true;
			completedClicked = false;
			displayGames(inDevelopmentGames);
			//appending hover functions to all completed games
			for(var i = 0; i < inDevelopmentGames.length; i++)
				attachHover(inDevelopmentGames, i);
			$("#in-development-button").css("top", "5px");
			$("#in-development-button").css("border-bottom-width", "0px");
			$("#in-development-button").css("background-color", "#FFCC26");
			$("#completed-button").css("top", "0px");
			$("#completed-button").css("border-bottom-width", "5px");
			$("#completed-button").css("background-color", "#EBEBEB");			
		}
		else
		{
			devClicked = false;
			$("#list-of-games").empty();
			$("#in-development-button").css("top", "0px");
			$("#in-development-button").css("border-bottom-width", "5px");
			$("#in-development-button").css("background-color", "#EBEBEB");
		}
	});
	$("#completed-button").click(function()
	{
		if(!completedClicked)
		{
			completedClicked = true;
			devClicked = false;			
			displayGames(completedGames);
			//appending hover functions to all completed games
			for(var i = 0; i < completedGames.length; i++)
				attachHover(completedGames, i);
			$("#completed-button").css("top", "5px");
			$("#completed-button").css("border-bottom-width", "0px");
			$("#completed-button").css("background-color", "#FFCC26");
			$("#in-development-button").css("top", "0px");
			$("#in-development-button").css("border-bottom-width", "5px");
			$("#in-development-button").css("background-color", "#EBEBEB");			
		}
		else
		{
			completedClicked = false;
			$("#list-of-games").empty();
			$("#completed-button").css("top", "0px");
			$("#completed-button").css("border-bottom-width", "5px");
			$("#completed-button").css("background-color", "#EBEBEB");
		}
	});
}

/*
Function for attaching .hover() to an element.
*/
function attachHover(list, id)
{
	$("#g"+id).hover(function(){
	$("#g"+id+" .gameCardImage").find("img").attr("src", list[id].gif);
	$(this).css("background", list[id].color);
	if(list[id].text != null)
		$(this).css("color", list[id].text);
}, function()
{
	$("#g"+id+" .gameCardImage").find("img").attr("src", list[id].image);
	$(this).css("background", "linear-gradient(90deg, #fff,#ddd)");
	if(list[id].text != null)
		$(this).css("color", "black");
});			
}

//execute
$(document).ready(function()
	{
		attachClick();
		completedClicked = true;
		displayGames(completedGames);
		//appending hover functions to all completed games
		for(var i = 0; i < completedGames.length; i++)
			attachHover(completedGames, i);
		$("#completed-button").css("top", "5px");
		$("#completed-button").css("border-bottom-width", "0px");
		$("#completed-button").css("background-color", "#FFCC26");		
	}
);
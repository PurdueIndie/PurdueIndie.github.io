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

// First, checks if it isn't implemented yet.
/*
if (!String.prototype.format) {
  String.prototype.format = function() {
    var args = arguments;
    return this.replace(/{(\d+)}/g, function(match, number) { 
      return typeof args[number] != 'undefined'
        ? args[number]
        : match
      ;
    });
  };
}*/

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
			//console.log(args[number]);
			//console.log(arguments[number]);
			//return typeof arguments[number] != 'undefined' ? arguments[number]:match;
			if(typeof args[number] != "undefined")//if not undefined
				return args[number];//return argument
			else//else return the number (don't make a replacement)
				return match;
		});
	};
}

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
		blurb: "Super Short Blurb",
		image: "gallery/bunny.jpg",
		description: "This is a bunny game! I like bunnies a lot. Ahahaha",
		gif: "gallery/bunny.gif",
		color: "#00458A"
	},
	{
		link: "/lol",
		title: "Legacy Dungeon",
		creator: "Charlie Su and Anish Kannan",
		blurb: "Super Short Blurb",
		image: "gallery/CoverImage.png",
		description: "High School Project",
		gif: "gallery/CoverImage.gif",
		color: "#8C6200"
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
		component = component.concat("\t<img src=\"{0}\" alt=\"A screenshot of {1}\"></img>\n".format(game.image, game.title));
		component = component.concat("\t<span><h1>{0}</h1>&nbsp;<h2>by {1}</h2>\n".format(game.title, game.creator));
		component = component.concat("\t<p>{0}</p>\n</a></span>\n".format(game.description));
		$("#container").append(component);
	}
}

function attachHover(id)
{
	$("#"+id).hover(function(){
	$(this).find("img").attr("src", completeGames[id].gif);
	$(this).css("background-color", completeGames[id].color);
}, function()
{
	$(this).find("img").attr("src", completeGames[id].image);
	$(this).css("background-color", "black");
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
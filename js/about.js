/*
Generates the FAQ section of the website. If you want to add a new question/answer, just add it to the faq array right below.
This script will generate the cards in the FIFO order

Format of the cards:

Question Cards:
<div class="question-card" id="q1">
	{text from faq["q1"].answer}
</div>

Answer Cards:
<div class="answer-card" id="q1">
	{text from faq["q1"].answer}
</div>
*/
var faq = [
	{
		question: "Can I join?",
		answer: "If you're a student of Purdue or affiliated with Purdue (staff, faculty, etc.), join us!"
	},
	{
		question: "When and where does the club meet?",
		answer: "(Spring 2016)<br><br>Thurs: 6pm - 8pm in LWSN B131<br><br>Sat: 4pm - 6pm in LWSN B155"
	},
	{
		question: "Are there club dues?",
		answer: "Yes. $5 per semester."
	},
	{
		question:"What makes you different from other game development clubs on campus? <br> (for example, ACM's SIGGD?)",
		answer: "The <a>other club</a> works on one project every semester as one unified team.<br><br>Our club is a place to work on your own projects at your own pace with friends."
	},
	{
		question: "Do you guys have hardware we can use?",
		answer: "We have access to <a>Purdue CS Department hardware</a> and can lend them out."
	},
	{
		question: "I'm from another club and would like to collaborate for an event!",
		answer: "Awesome! Either find an officer or just send us an e-mail. <br><br> We'll probably get back to you by the end of the day."
	},
	{
		question: "What if I have a question that wasn't on the FAQ?",
		answer: "No worries! E-mail us the question! <br><br>Who knows, it may end up on the FAQ!"
	}
]

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
This function generates the question cards
*/
function cardConstructor(faq_list)
{
	//start appending new items
	var card;
	for(var i = 0; i < faq_list.length; i++)
	{
		var question = faq_list[i].question;
		card = "<div class=\"question-card\" id=\"q{0}\">{1}</div>".format(i, question);
		console.log(card);
		$("#faq").append(card);
	}
}

/*


function attachClick()
{
	$("q" + id).click(function(){
		//3D transform
		//and alternate between question-card and answer-card classes in one animation sequence

	});
}*/

//Execute
$(document).ready(function()
	{
		cardConstructor(faq);
	});
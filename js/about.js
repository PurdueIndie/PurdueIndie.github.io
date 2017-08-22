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
		answer: "If you're a student of Purdue or affiliated with Purdue (staff, faculty, etc.), join us!",
		side: 1//side is used for managing which side the q/a card flips to, with +1 being to q, -1 to a
	},
	{
		question: "When and where is the call out?",
		answer: "Our call out is on 8/29 (Tues) and 9/1 (Fri) 5pm-6pm in Matthews Hall Rm 210. Hope to see you there!",
		side: 1
	},
	{
		question: "Are there club dues?",
		answer: "Yes. $5 per semester.",
		side: 1
	},
	{
		question:"What makes you different from other game development clubs on campus? <br> (for example, ACM's SIGGD?)",
		answer: "The <a>other club</a> works on one project every semester as one unified team.<br><br>Our club is a place to work on your own projects at your own pace with friends.",
		side: 1
	},
	{
		question: "Do you guys have hardware we can use?",
		answer: "We have access to <a>Purdue CS Department hardware</a> and can lend them out.",
		side: 1
	},
	{
		question: "I'm from another club and would like to collaborate for an event!",
		answer: "Awesome! Either find an officer or just send us an e-mail at <a href=\"mailto:purdueindie@gmail.com\">purdueindie@gmail.com</a>. <br><br> We'll get back to you by the end of the day.",
		side: 1
	},
	{
		question: "What if I have a question that wasn't on the FAQ?",
		answer: "No worries! E-mail us the question at <a href=\"mailto:purdueindie@gmail.com\">purdueindie@gmail.com</a>! <br><br>Who knows, it may end up on the FAQ!",
		side: 1
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

function attachClickToFAQ(id)
{
	$("#q" + id).css("animation-delay", id%3 + id%2 + "." + id + "s");
	$("#q" + id).click(function(){
		//3D transform
		//console.log($("#q"+id).css("display", "none"));
		$("#q" + id).css("animation-delay", "0s");
		$("#q" + id).css("animation-name", "flip");
		$("#q" + id).css("animation-duration", "0.5s");
		$("#q" + id).css("animation-iteration-count", "1");
		//and alternate between question-card and answer-card classes in one animation sequence
		if(faq[id].side == 1)
		{
			setTimeout(function()
				{
					$("#q" + id).html(faq[id].answer)
					$("#q" + id).css("background-color", "white");
					$("#q" + id).css("color", "#57C4E6");			
			}, 250);
		}
		else
		{
			setTimeout(function()
				{
					$("#q" + id).html(faq[id].question)
					$("#q" + id).css("background-color", "#57C4E6");
					$("#q" + id).css("color", "white");					
			}, 250);
			setTimeout(function()
			{
				$("#q" + id).css("animation-name", "wiggle");
				$("#q" + id).css("animation-duration", "2s");
				$("#q" + id).css("animation-iteration-count", "infinite");				
			}, 750);
		}
		faq[id].side*=-1;	
		setTimeout(function(){
		$("#q" + id).css("animation-name", "none");
		}, 500);//if you have the same animation, it won't re-animate it		
	});
}

//Execute
$(document).ready(function()
	{
		cardConstructor(faq);
		for(var i = 0; i < faq.length; i++)
			attachClickToFAQ(i);
	});
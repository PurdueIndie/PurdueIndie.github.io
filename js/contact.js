/*
This js file is for the #Contact section of the page.
*/

/*global $, jQuery, alert*/

$(document).ready(function () {
    "use strict";
    $("p.question").click(function () {
        $(this).nextUntil("p.question").fadeToggle("slow", "linear");
    });
});

var currentOfficers = [
	{
		name: "Charlie Su",
		title: "President",
		major: "Junior in Computer Science and Applied Physics",
		image: "images/2016_officers/president.png",
		link: "charliesu.com"
	},
	{
		name: "Brendan Raftery",
		title: "Vice President",
		major: "Sophomore in Computer Science",
		image: "images/2016_officers/vicePresidentA.png",
		link: "lol"
	},
	{
		name: "Henry Poggie",
		title: "Vice President",
		major: "Sophomore in Computer Science",
		image: "images/2016_officers/vicePresidentB.png",
		link: "lol"

	},
	{
		name: "Nick Zetzl",
		title: "Treasurer",
		major: "Junior in Computer Science",
		image: "images/2016_officers/treasurer.png",
		link: "http://www.nickzetzl.com/"
	},
	{
		name: "Jaimie Lantern",
		title: "Public Relations",
		major: "Sophomore in Computer Science and Brain/Behavioral Sciences",
		image: "images/2016_officers/pr.png"
		link: "lol"
	},
	{
		name: "David Whittinghill",
		title: "Purdue Faculty Advisor",
		major: "Associate Professor of Computer Graphics Technology and Computer and Information Technology"
		image: "images/2016_officers/advisor.png"
		link: "https://polytechnic.purdue.edu/profile/davewhit"
	}
];

/*Want to get in touch with a past officer? (images should be in black and white)*/
var pastOfficers = [
	{
		year: "2015",
		officers: {
			name: "Charlie Su",
			title: "President",
			major: "Sophomore in Computer Science",
			image: "images/2015_officers/president.png",
			link: "charliesu.com"
		},
		{
			name: "Zijian Wang",
			title: "Vice President",
			major: "Senior in Agricultural Engineering",
			image: "images/2015_officers/vicePresident.png",
			link: "lol"
		},
		{
			name: "Nick Zetzl",
			title: "Industrial Relations",
			major: "Sophomore in Computer Science",
			image: "images/2016_officers/ir.png",
			link: "lol"

		},
		{
			name: "William Huang",
			title: "Treasurer",
			major: "Junior in Computer Science",
			image: "images/2016_officers/treasurer.png",
			link: "lol"
		},
		{
			name: "Jacob Dunbar",
			title: "Public Relations",
			major: "Sophomore in Computer Science",
			image: "images/2016_officers/pr.png",
			link: "lol"
		},
		{
			name: "Brendan Raftery",
			title: "Webmaster",
			major: "Freshman in Computer Science",
			image: "images/2015_officers/web.png",
			link: "lol"
		},
		{
			name: "David Whittinghill",
			title: "Purdue Faculty Advisor",
			major: "Associate Professor of Computer Graphics Technology and Computer and Information Technology"
			image: "images/2016_officers/advisor.png"
			link: "https://polytechnic.purdue.edu/profile/davewhit"
		}
	}
];
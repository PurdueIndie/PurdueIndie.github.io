# purduegamedev.club
This is the Purdue Indie Game Developer's Club's main website. Go to the development branch (currently called v2018) to see readable code. Everything in master has been minified. You should not be making any commits to master except for merging with development branch or minifying changes.

## v2018 To Do List
We're revamping the website to make it look prettier, scale better, and easier to update for non-web-dev people.

### High Priority
1. Use Jekyll (or a Markdown->HTML parser) to generate HTML files so it's easy to update by just writing in Markdown (and to make our list of games visible to search engines).
2. Add Bootstrap to make it scale well between mobile and large desktops.
3. Make it so that the website automatically loads videos/animated GIF's asynchronously. That way when you hover over the games section, it'll show up immediately.
4. Split the Games section into "In Progress" and "Completed Projects". In the "Completed Projects" section, segregate the games based on year.
5. Update the look and feel of the Games section so it's more appealing (and obvious that they're links).
6. Update the Q&A cards with better designs.
7. Create a "Join" page that tells people to come to our meetings and to add our calendar to their Google Calendar

### Low Priority
1. Add a script that cycles designs of the website (CSS, images) based on the month and year.

For example:
```
summer version (April 1st)
fall version (August 1st)
winter version (December 1st)
(have 4 different versions of each version, so people won't see the designs again since people graduate in 4 years)
```

#### Extra Features
1. Create a large, noticeable "ADD TO YOUR CALENDAR" button for the calendar
2. Parse the Google Calendar so that it displays it like a iternary
(for example)
```
Week 1 (1/21 - 1/27)
Monday: Game Design Workshop
Tuesday: ...
Saturday - Sunday: Global Game Jam
```

3. Create a members page where you include profile info of each game developer
4. Make the website itself a game (e.g. splash page; clicking on all Q&A cards)

## Style Guide

### CSS
When you want to add a new style to our codebase, make sure it's sorted in the following way:

1. Elements (e.g. <a>, <div>) go first, classes go second, and ID's go last. This is sorted this way due to the cascading nature of CSS.
2. Within the elements/classes/ID's sections, keep it sorted in *alphabetical order*.

### JS
All you need to do is name your variables and function names so that someone skimming the code can quickly understand what you're using them for. But these guidelines are still useful:

1. Code that you want to execute should be at the bottom (look for $(document).ready(), which is a jQuery function that executes your code after the document is done loading)
2. Please add comments.

## Primary Contributors
(v2018)
* Charlie Su (@DontSuCharlie)

(v2016)
* Charlie Su (@DontSuCharlie)
* Nick Zetzl (@nzetzl)
* Brendan Raftery (@doctorb77)
* Michael Pike (@pike4)
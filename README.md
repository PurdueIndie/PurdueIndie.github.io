#purduegamedev.club
This is the Purdue Independent Game Developer's Club's main website. Go to the development branch to see readable code. Everything in master has been minified. You should not be making any commits to master except for merging with development branch or minifying changes.

##Primary Contributors
* Charlie Su (@DontSuCharlie)
* Nick Zetzl (@nzetzl)
* Brendan Raftery (@doctorb77)

##Style Guide

###CSS
When you want to add a new style to our codebase, make sure it's sorted in the following way:

1. Elements (e.g. <a>, <div>) go first, classes go second, and ID's go last. This is sorted this way due to the cascading nature of CSS.
2. Within the elements/classes/ID's sections, keep it sorted in *alphabetical order*.

###JS
All you need to do is name your variables and function names so that someone skimming the code can quickly understand what you're using them for. But these guidelines are still useful:

1. Code that you want to execute should be at the bottom (look for $(document).ready(), which is a jQuery function that executes your code after the document is done loading)
2. Comment please.
#Current Issues
1. The website is 100% not mobile friendly
	a. For the Contact section, we can make it so that it's a grid of 2 x 3 instead of 3 x 2 on the phone
	b. Calendar is good
	c. Podcasts is good
	d. Splash is completely broken
	e. Menu should change on mobile
	f. Games should keep its aspect ratio..
2. Update the parallax function with the text-shadow so that it grabs the current CSS first (that way we just need to update the CSS for the entire thing to change)

#Fixed Issues
1. The right invisible menu is clickable
	Instead of moving the ul by 50% and the inner li back by 50%, I decided to just move the ul by 100% and the inner li back by 100%.
2. Even though the content div and the splash div have a margin of 0, there's still a margin
	Children's margins can go over the parent div? (a h1 under the content div had a margin that caused that margin)
3. It's difficult to add a new section because it disappears under the images? (even with a higher z-index?!)
	Z-indexes are calculated like this (https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context) (basically z-indexes are relative only within a parent; if the child's z-index is huge (e.g. 9000), but the parent's z-index is smaller than the parent's sibling, the child will be rendered behind the parent). Also, in order for a stack context to form, you must define a position (just adding "position: relative" is enough). Defining a z-index alone does not help for some goddam reason.

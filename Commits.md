#8/21/2016 (many fixes)
1. Fixed splash page so the images are positioned perfectly regardless of screen dimensions
2. Removed centered() function from javascript (instead centering the title with CSS)
3. Added sans-serif to all font-family: Montserrat calls for in case the user can't install fonts
4. Fixed the background-repeat: no-repeat; error
5. Removing parallax (painting is now 300 - 600 ms as opposed to 2000 ms+) for now
6. Changed default color of text-shadow of title to match that of the JS color
7. Fixed the game catalog so the text doesn't disappear if the person has a low width screen
8. Added minor transparency to menu (97% opacity). Not sure if I like that..
9. Added code for question card generation
10. Made name changes to make it more understandable (gameDescription -> gameCard; container -> list-of-games)
11. Stylized question cards.
12. Fixed the shitty questions/answers so they no longer shitty

#8/26/2016 (Fixes before lots of people view the site)
Part 1
1. Updated Jaimie's major to Biology
2. Fix Maxwell Oldt's typoed name

Part 2
1. Added Brendan's art to splash page (currently has issues with scaling..)
2. Increased speed of scroll (from 1500ms to 500ms)
3. Made it so that clicking on all buttons on the menu doesn't make you scroll to every part before it stops scrolling (with the jQuery .stop() function, which can empty the animation queue)
4. Added Henry's website to his profile
5. Updated Brendan's profile picture to the one he wants
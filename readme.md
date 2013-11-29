###Resources:

* [Here](http://cgcookie.com/unity/2012/02/20/unity-script-npc-talk-system/) is a good tutorial on how to use Unity for a dialog system. 

### Instructions

0. Download the "unity.package" and import into your unity project. Open the scene "dialog.unity"

1. Go to Edit --> Project settings --> Input and create a new input control with name "talk" and positive button = "left ctrl"

2. Launch. Press left ctrl to see dialogs. 

###Main

Implemented a `line` class and `Speak` function that will: 

1. display corresponding character name and dialog content; 
2. change the character texture to allow for different poses

###To do: 

* typing + sound effect
* change brightness of out-of-focus character
* line should always center in the dialog box

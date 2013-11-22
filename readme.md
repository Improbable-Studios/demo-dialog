[Here](http://cgcookie.com/unity/2012/02/20/unity-script-npc-talk-system/) is a good tutorial on how to use Unity for a dialog system. 

Below are the barebone steps: 

* Create a new 2D project. 
* For each talking character, create a GameObject. Bind a script to this object. The script is doing the talking. 
* The logic of dialog is very simple: 
	* create a `GUIText` object for displaying the dialog and bind to the character object. 
	* store all possible lines in an array (or can read from a file). You'll be able to modify the string array in Unity's GUI after binding the script to the character object. 
	* in the `update` function in the script, proceed to the next line when a specific key is pressed down (through `Input.GetButtonDown()` function). To add a new key control, go to Edit --> Project Settings --> Input --> InputManager
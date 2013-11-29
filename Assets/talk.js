/*
mock dialog system for game Sherlock
Xiayun Sun

TODO:
1. add sound + typing effect.  
2. change brightness of the texture? 
3. line should always center
*/

#pragma strict

var lineGUI:GUIText; 
var charNameGUI: GUIText; 

//GUITexture, displaying different texture while talking
var leftChar:GUITexture; 
var rightChar:GUITexture; 

// create a line object
class line {
	var name : String; // character name
	var text : String; // talk text
	var charTextureGUI : GUITexture; // character display
	var charTexture:Texture; // resource path of the GUITexture

	function line(name : String, text : String, charTextureGUI:GUITexture, charTexture:Texture){
		this.name = name;
		this.text = text;
		this.charTextureGUI = charTextureGUI;
		this.charTexture = charTexture;
	}
}

// load all textures, must be called in main thread...;
private var currLine:int;
var tex_JohnNeutral : Texture;
var tex_JohnAnnoyed : Texture;
var tex_SherlockNeutral : Texture;
var tex_SherlockThinking : Texture;

function Start () {
	currLine = 0;
}

// these are actual contents input
var lines:line[];
lines = new line[4];
lines[0] = new line("John", "Sherlock, have you got a minute? ", leftChar, tex_JohnNeutral);
lines[1] = new line("Sherlock", "I have several. They stretch before me in a never ending stream of tedium",rightChar, tex_SherlockNeutral);
lines[2] = new line("John", "Dimmock just texted me about a case..",leftChar, tex_JohnAnnoyed);
lines[3] = new line("Sherlock", "No",rightChar, tex_SherlockThinking);


function Update () { 
	if(Input.GetButtonDown("talk") && currLine < lines.Length){
		Speak(lines[currLine]); 
		currLine++;
	}
}

function Speak(ln:line){
	// main function for speak
	charNameGUI.text = ln.name;
	lineGUI.text = ln.text;
	ln.charTextureGUI.texture = ln.charTexture;
	
}
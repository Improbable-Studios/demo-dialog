#pragma strict

var talkGUI:GUIText;
var lines:String[];

private var currLine:int;

function Start () {
	currLine = 0;
}

function Update () {
	if(Input.GetButtonDown("talk") && currLine < lines.Length){
			talkGUI.text = lines[currLine]; 
			currLine++;
	}
}
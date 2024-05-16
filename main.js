var SpeechRecogniger = window.webkitSpeechRecogniger;
var recogniger = new SpeechRecogniger;
var Textbox = document.getElementById("textbox");
function start()
{
    Textbox.innerHTML = "";
    recogniger.start();
}
recogniger.onresult = function(event){
    console.log(event);
    var Content = Event.result[0][0].trascript;
    Document.getElementById("textbox").innerHTML = Content;
    console.log(Content);
}
function speak()
{
var synth = window.speechSynthesis;

speakData = document.getElementById("textbox").value;

var  utterThis = new SpeechSynthesisUtterance(speakData);

synth.speak(utterThis);

Webcam.attach(camera);
}

camera = document.getElementById("camera");
Webcam.set({
    width:360,
    height:250,
    image_format:"jpeg",
    jpeg_quality:90
});
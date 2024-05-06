Webcam.set({
    width:350,
    height:300,
    image_format:'jpej',
    png_quality:90
});

camera=document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';

    });
}
console.log('ml5 version',ml5.version);
classifier = ml5.imageClasssifier('https://teachablemachine.withgoogle.com/models/rT8A5ZBcu/model.json',modelLoaded);
function modelLoaded(){
    console.log("model_loaded")
}
function check(){
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResults) ;
}
function gotResults(){
    if(error){
        console.error(error);
    }else{
    document.getElementById("result_emotion_name").innerHTML = results[0].label;
    answer=results[0].label;
    if(results[0].label == "BEST"){
        document.getElementById("answer_emoji").innerHTML="&#128077;";
    }
    if(results[0].label == "AMAZING"){
        document.getElementById("answer_emoji").innerHTML="&#128076;";
    }
    if(results[0].label == "VICTORY"){
        document.getElementById("answer_emoji").innerHTML="&#9996;";
    }
    if(results[0].label == "BAD"){
        document.getElementById("answer_emoji").innerHTML="&#128078;";
    }
    if(results[0].label == "POWER TO"){
        document.getElementById("answer_emoji").innerHTML="&#9994;";
    }
    if(results[0].label == "COOL"){
        document.getElementById("answer_emoji").innerHTML="&#129304;";
    }
    if(results[0].label == "HIGH FIVE"){
        document.getElementById("answer_emoji").innerHTML="&#128400;";
    }
    }
     
}
function speak(){
    var synth= window.speechSynthesis;
     speak_data="YOUR EMOJI IS"+answer;
    var utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}
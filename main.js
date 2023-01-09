function setup(){
 canvas = createCanvas(280, 280);
 canvas.position(490, 250);
 background("white");
 canvas.mouseReleased(classified);
 synth = window.SpeechSynthesis;
}
function preload(){
classifier = ml5.imageClassifier("DoodleNet")

}
function CC(){
    background("white");
}

function draw(){
    strokeWeight(10);
    stroke("black");
    if(mouseIsPressed){
    line(pmouseX, pmouseY, mouseX, mouseY);
    }

}

function classified(){
    classifier.classify(canvas, gotResults);
}

function gotResults(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("label").innerHTML ="label:"+results[0].label;
        document.getElementById("confidence").innerHTML = "confidence:" + Math.round(results[0].confidence * 100) + "%";
        utterthis = new SpeechSynthesisUtterance(results[0].label);
        synth.speak(utterthis);
    }
}
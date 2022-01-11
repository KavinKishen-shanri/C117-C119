function setup() {
    var canvas =  createCanvas(410,310);
    canvas.center();
    canvas.position(600,350);
    video=createCapture(VIDEO);
    video.position(610,305);
    video.size(390,400);
    classifier= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Yvyb1WSHY/model.json",modelloaded);
}



function draw() {
    image(video, 0, 0, 300, 300); classifier.classify(video, gotresult);
}

function gotresult(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("object").innerHTML=results[0].label;
        document.getElementById("accuracy").innerHTML=results[0].confidence.toFixed(2);
    }
}

function modelloaded() {
    console.log("Model Loaded!");
}
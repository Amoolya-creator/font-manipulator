noseX = 0;
noseY = 0;
LwristX = 0;
RwiristX = 0;
difference = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(500,500);
    video.position(150,144);
    canvas = createCanvas(450,450);
    canvas.position(750,165);
    poses = ml5.poseNet(video,modelLoaded);
    poses.on('pose',gotPoses)
}

function modelLoaded(){
    console.log("Model loaded ! :)");
}

function gotPoses(results) {
 if (results.length > 0){
     console.log(results);
    noseX = results[0].pose.nose.x
    noseY = results[0].pose.nose.y
    console.log("Nose X" + noseX + "nose Y" + noseY);
    LwristX = results[0].pose.leftWrist.x
    RwiristX = results[0].pose.rightWrist.x
    console.log("here are the wrist vaules and the first one is right and the second is left beacse i am too lazy to concantnate - Amoolya");
    difference = Math.floor(LwristX - RwiristX);
 }
}
function draw(){
    background('#000000');

    fill('#FF0000');
    stroke('#0000FF');
    textSize(difference);
    text('PETER',50,300 );
}
batomX=0;
batomY=0;

function preload() {
    batom = loadImage('https://i.postimg.cc/hPz958JF/batom.png');
}

function setup() {
    canvas = createCanvas(500, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(500, 500);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet foi inicializado');
  }

  function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    batomX = results[0].pose.nose.x-40;
    batomY = results[0].pose.nose.y;
    console.log("batom x = " + batomX);
    console.log("batom y = " + batomY);
  }
}

function draw() {
    image(video, 0, 0, 500, 500);
    image(batom, batomX, batomY, 100, 100);

}

function takeSnapshot() {
    save('myFilterImage.png');
}

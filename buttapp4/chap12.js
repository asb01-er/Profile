var trainSpeed = 180;
var trainPosition = 0;
var animation;

var train = document.getElementById("train");
train.addEventListener("click", speedUp);

var stopButton = document.getElementById("stopButton");
stopButton.addEventListener("click", stopTrain);

function speedUp() {
    if (trainSpeed > 10) {
        trainSpeed -= 10;
    }
    console.log("train speed: " + trainSpeed);

    clearInterval(animation);
    animation = setInterval(frame, trainSpeed);


    function frame() {
        trainPosition += 2;
        train.style.left = trainPosition + 'px';
        console.log(trainPosition);
        checkPosition(trainPosition);
    }
    // if (trainPosition > 500) {
    //     trainPosition = 0;
    //     train.style.left = trainPosition + 'px';
    // }
}

function checkPosition(currentPosition) {
    if (currentPosition === 400) {
        alert("OOOOO!");
        console.log("Crash!");
        clearInterval(animation);
        train.style.left = 0;
        trainPosition = 0;
    }
}

function stopTrain() {
    if (trainPosition < 260) {
        clearInterval(animation);
    }
}


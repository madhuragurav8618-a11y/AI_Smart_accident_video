const scenes = document.querySelectorAll(".scene");

let currentScene = 0;
let countdownValue = 10;
let countdownTimer = null;
let sceneTimer = null;

// Show a particular scene
function showScene(number) {
    scenes.forEach(scene => {
        scene.classList.remove("active");
    });

    if (scenes[number]) {
        scenes[number].classList.add("active");
    }
}

// Move to next scene
function nextScene() {
    currentScene++;

    if (currentScene >= scenes.length) {
        currentScene = 0;
    }

    showScene(currentScene);
}

// Start the complete accident demonstration
function startDemo() {

    currentScene = 0;
    showScene(currentScene);

    // Intro
    setTimeout(() => {
        currentScene = 1;
        showScene(currentScene);
    }, 5000);

    // Normal driving → accident
    setTimeout(() => {
        currentScene = 2;
        showScene(currentScene);
    }, 10000);

    // Accident → MPU6050
    setTimeout(() => {
        currentScene = 3;
        showScene(currentScene);
    }, 15000);

    // MPU6050 → warning
    setTimeout(() => {
        currentScene = 4;
        showScene(currentScene);
        startCountdown();
    }, 20000);

    // Warning → GPS
    setTimeout(() => {
        currentScene = 5;
        showScene(currentScene);
    }, 32000);

    // GPS → ESP32/Wi-Fi
    setTimeout(() => {
        currentScene = 6;
        showScene(currentScene);
    }, 37000);

    // ESP32 → Emergency Alert
    setTimeout(() => {
        currentScene = 7;
        showScene(currentScene);
    }, 42000);

    // Emergency Alert → Dashboard
    setTimeout(() => {
        currentScene = 8;
        showScene(currentScene);
    }, 47000);

    // Dashboard → Complete Flow
    setTimeout(() => {
        currentScene = 9;
        showScene(currentScene);
    }, 52000);

    // Complete Flow → Thank You
    setTimeout(() => {
        currentScene = 10;
        showScene(currentScene);
    }, 57000);
}


// Warning countdown
function startCountdown() {

    countdownValue = 10;

    const countdown = document.getElementById("countdown");

    if (!countdown) return;

    countdown.innerText = countdownValue;

    clearInterval(countdownTimer);

    countdownTimer = setInterval(() => {

        countdownValue--;

        countdown.innerText = countdownValue;

        // Countdown finished
        if (countdownValue <= 0) {

            clearInterval(countdownTimer);

            countdown.innerText = "ALERT SENT";

        }

    }, 1000);
}


// Cancel button
function cancelDemo() {

    clearInterval(countdownTimer);

    const countdown = document.getElementById("countdown");

    if (countdown) {
        countdown.innerText = "CANCELLED";
    }

    alert("Emergency alert cancelled by user.");

}


// Keyboard controls
document.addEventListener("keydown", function(event) {

    // A = Accident
    if (event.key.toLowerCase() === "a") {
        currentScene = 2;
        showScene(currentScene);
    }

    // N = Normal
    if (event.key.toLowerCase() === "n") {
        currentScene = 1;
        showScene(currentScene);
    }

    // Right arrow = next scene
    if (event.key === "ArrowRight") {
        nextScene();
    }

    // Left arrow = previous scene
    if (event.key === "ArrowLeft") {

        currentScene--;

        if (currentScene < 0) {
            currentScene = scenes.length - 1;
        }

        showScene(currentScene);
    }

});


// Start automatically
window.addEventListener("load", function() {

    setTimeout(() => {
        startDemo();
    }, 1000);

});
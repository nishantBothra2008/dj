var song_one = "";
var song_two = "";

function preload() {
    song_one = loadSound("Aya Nakamura - Copines (Slowed + Reverb).mp3");
    song_two = loadSound("BTS - Butter (Lyrics).mp3");
}

function setup() {
    canvas = createCanvas(400, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 400, 300);
}

function play_music() {
    song.play();
    song.setVolume(1);
    song.setRate(1);
}

































    
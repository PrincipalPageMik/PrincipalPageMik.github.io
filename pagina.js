document.addEventListener("DOMContentLoaded", function() {
    const songImages = document.querySelectorAll(".song-image");
    const audioPlayer = document.getElementById("audio-player");

    songImages.forEach(function(songImage) {
        songImage.addEventListener("click", function() {
            const songFile = this.getAttribute("data-song");
            audioPlayer.src = songFile;
            audioPlayer.play();
        });
    });
});

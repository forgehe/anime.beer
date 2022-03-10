function playVid(){
var vid = document.getElementById("bgvid");
	vid.play();
    if(vid.muted) {
        vid.muted = false;
    }
};

window.onload = function() {
    var backgroundAudio=document.getElementById("bgvid");
    backgroundAudio.volume=0.7;
}

/*


 */
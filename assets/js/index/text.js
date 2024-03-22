$(function (){
    let title = document.title
    let animSeq = ["|"]
    let animIndex = 0
    let titleIndex = 0;

    function doInverseSpinZeroPitch() {
        let loadTitle = title.substring(0, titleIndex);
        if (titleIndex > title.length) {
            animIndex = 0;
            titleIndex = 0;
        }
        if (animIndex > 1) {
            titleIndex++;
            animIndex = 0;
        }
        document.title = loadTitle + animSeq[0];
        animIndex++;
    }
    window.setInterval(doInverseSpinZeroPitch, 150);
});

$(document).ready(function () {
    $('.typed').typed({
        strings: ["17 years old", "Fullstack Developer", "Anti-Hacker"],
        typeSpeed: 100,
        loop: true,
        cursorChat: "|",
    });
});

"use strict";

const profilePhoto = document.getElementById("profilePhoto");
const switchButton = document.getElementById("switchButton");

let isCasual = true;

switchButton.addEventListener("click", function () {
    profilePhoto.style.opacity = 0;

    setTimeout(function () {
        if (isCasual) {
            profilePhoto.src = "assets/professional.jpg";
            profilePhoto.alt = "Professional profile photo";
            switchButton.textContent = "Show Casual Photo";
        } else {
            profilePhoto.src = "assets/casual.jpg";
            profilePhoto.alt = "Casual profile photo";
            switchButton.textContent = "Show Professional Photo";
        }

        profilePhoto.style.opacity = 1;
        isCasual = !isCasual;
    }, 400);
});


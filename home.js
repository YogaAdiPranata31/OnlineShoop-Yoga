// Slider
let slideIndex = 0;
let slideTimeout;

function showSlides() {
    let slides = document.querySelectorAll(".slide");
    let dots = document.querySelectorAll(".dot");

    slides.forEach(slide => {
        slide.style.display = "none";
        let video = slide.querySelector("video");
        if (video) {
            video.pause();  // Hentikan video saat slide tidak aktif
        }
    });

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    let activeSlide = slides[slideIndex - 1];
    activeSlide.style.display = "block";

    let activeVideo = activeSlide.querySelector("video");
    if (activeVideo) {
        activeVideo.play();  // Putar video saat slide aktif
    }

    dots.forEach(dot => {
        dot.className = dot.className.replace(" active", "");
    });

    dots[slideIndex - 1].className += " active";

    let duration = activeSlide.getAttribute("data-duration");
    clearTimeout(slideTimeout);
    slideTimeout = setTimeout(showSlides, duration); // Menggunakan durasi dari atribut data-duration
}

showSlides();




function currentSlide(n) {
    slideIndex = n;
    showSlides();
}

// Redirect ke halaman produk
function redirectToProductPage(url) {
    window.location.href = url;
}

// Fungsi Berlangganan
document.querySelector(".subscribe form").addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Terima kasih telah berlangganan!");
});

// Fungsi Kirim Komentar
document.querySelector(".comments button").addEventListener("click", function () {
    let commentText = document.querySelector("textarea").value;
    if (commentText) {
        let commentList = document.querySelector(".comment-list");
        let newComment = document.createElement("div");
        newComment.classList.add("comment");
        newComment.innerHTML = `<p>"${commentText}"</p><span></span>`;
        commentList.appendChild(newComment);
        document.querySelector("textarea").value = ""; // Reset textarea
    } else {
        alert("Komentar tidak boleh kosong!");
    }
});

function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
function openVideoModal() {
                const modal = document.getElementById("videoModal");
                const frame = document.getElementById("videoFrame");
                frame.src = "https://www.youtube.com/embed/hR5KFCDNvMo?autoplay=1";
                modal.style.display = "block";
            }

            function closeVideoModal() {
                const modal = document.getElementById("videoModal");
                const frame = document.getElementById("videoFrame");
                frame.src = ""; // stop video
                modal.style.display = "none";
            }

            window.onclick = function(event) {
                const modal = document.getElementById("videoModal");
                if (event.target === modal) {
                closeVideoModal();
                }
            };
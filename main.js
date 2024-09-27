if (window.innerWidth >= 1300) {
    const sbrk = document.getElementById("start_breaker");
    sbrk.style.width = "1200px";
}
window.addEventListener("resize", function() {
    if (window.innerWidth >= 1300) {
        const sbrk = document.getElementById("start_breaker");
        sbrk.style.width = "1200px";
    }
});
document.getElementById("coverer_id").style.backgroundColor = "rgba(0,0,0,0)";
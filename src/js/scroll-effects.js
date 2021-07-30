window.addEventListener("scroll", function() {
    var elementTarget = document.getElementById("banner");
    if (window.scrollY > (elementTarget.offsetTop + elementTarget.offsetHeight)) {
        var element = document.getElementById("tel-no");
        element.classList.add("js-show");
    } else {
        var element = document.getElementById("tel-no");
        element.classList.remove("js-show");
    }
});
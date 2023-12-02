document.getElementById("fivio").addEventListener("click", function() {

    grid = document.getElementById("image-grid")
    if (!display) {
        grid.style.display = "grid"
        display = true;
    }
    else {
        grid.style.display = "none"
        display = false;
    }


});
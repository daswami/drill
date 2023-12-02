var place = 1

var display = false


document.getElementById("slide-button").addEventListener("click", function() {
    let img = document.getElementById("slide-img")
    let p = document.getElementById("slide-p")
    let h = document.getElementById("slide-h2")
    if (place === 1) {
        h.innerHTML = "Evolution of Drill"
        p.innerHTML = `The mid-2010s saw the evolution and growth of drill music. Notably, drill music became extremely 
        popular in the UK, with its own slight twist on the style. 
        The genre remains the most popular in the UK today and is the primary style for most UK rappers.`
        img.src = "images/uk-drill.jpg"
        place = 2
    }
    else if (place === 3) {
        h.innerHTML = "Early Drill Sounds"
        p.innerHTML = `Drill music originated in the early 2010s in Chicago, characterized by its gritty lyrics and unique beats. 
        Drill music is a representation of certain facets of black culture in the United States.`
        img.src = "images/early-drill.jpg"
        place = 1
    }
    else if (place === 2) {
        h.innerHTML = "Contemporary Drill Scene"
        p.innerHTML = `In the contemporary drill scene, artists continue to push boundaries, blending drill with other genres. 
        Drill has become a mainstream genre and been included in pop songs with big artists like Lil Nas X and non-drill rappers such as Nicki Minaj. 
        Drill music is a core part of music today and it will continue to be shaped in the next decade.`
        img.src = "images/new-drill.jpg"
        place = 3
    }

}
);

document.getElementById("button-photo").addEventListener("click", function() {

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
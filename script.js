const imgWidth = 50;
const imgHeight = 50;

function newDVD() {
    try {

    const newDVD = document.createElement("img")
    newDVD.src = "assets/dvd.svg"
    newDVD.classList.add("DVD")
    
    newDVD.xPos = 150;
    newDVD.yPos = 150 ;
    newDVD.velocity = {
        x: 1,
        y: 1,
    }

    document.getElementById("body").appendChild(newDVD)

    } catch (err) {
        alert(err)
    }
}

function physicsProcess() {
    const els = document.getElementsByClassName("DVD");
    for (let el = 0; el < els.length; el++) {
        els[el].xPos += els[el].velocity.x
        
        els[el].yPos += els[el].velocity.y
        els[el].style.left = els[el].xPos + "px"
        els[el].style.top = els[el].yPos + "px"



        if (els[el].xPos <= 0) {
            els[el].velocity.x = 1;
        } else if (els[el].yPos <= 0) {
            els[el].velocity.y = 1;
        } else if ((els[el].xPos + imgWidth) >= window.innerWidth) {
            els[el].velocity.x = -1;
        } else if ((els[el].yPos + imgHeight) >= window.innerHeight) {
            els[el].velocity.y = -1;
        }
    }

    
    
}

try {
    physicsProcess()
} catch (err) {
    alert(err)
}
setInterval(physicsProcess, 0.1);

document.addEventListener("click", newDVD)
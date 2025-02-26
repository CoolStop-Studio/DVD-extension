let DVDs = []

function newDVD() {
    try {
    const newDVD = document.createElement("img")
    newDVD.src = "assets/dvd.svg"
    document.getElementById("body").appendChild(newDVD)


    } catch (err) {
        alert(err)
    }
}
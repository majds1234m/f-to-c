//input
document.getElementById("btn").addEventListener("click", cnv);

function cnv() {
    //process
    var ftTemp = +document.getElementById("FT").value;
    // this is the formula
    let tempC = (ftTemp - 32) * (5 / 9);
    let round = tempC.toFixed();
    //output
    document.getElementById("output").innerHTML = round;
    document.getElementById("img").src = "img/thermometer.png";
    // document.getElementById("img").classList.add("");
    document.getElementById("btn").style.backgroundColor = "#26d978";
    document.getElementById("link").href = "https://www.google.com/"
    //make the numbers disapear
    document.getElementById("FT").value = ""
}
let modeNoir = false

document.querySelector("#powerbtn").addEventListener("click", function(){
    if (modeNoir == false){
        document.querySelector("body").classList.toggle("darkMode");
    } else {
        document.querySelector("body")
    }
})

document.querySelector("#modeDark").addEventListener("click", function(){
    if (modeNoir == false){
        document.querySelector("#powerbtn").classList.toggle("buttonOff");
    } else {
        document.querySelector("#powerbtn")
    }
})


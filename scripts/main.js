let btnCrip = document.getElementById("btn-criptografar")
let btnDcrip = document.getElementById("btn-descriptografar")
let textInput = document.getElementById("text-input")
let contentBox = document.getElementById("content-box")
let outResponse = document.getElementById("out-response")
let outBobx = document.getElementById("out-box")
let responseBox = document.getElementById("response-box")
let btnCopy = document.getElementById("btn-copy")

btnCrip.addEventListener("click",function(){
    if(!verifyNullInput(textInput.value)){
        contentBox.setAttribute("hidden",true)
        responseBox.classList.add("response-box-out")
        outBobx.hidden = false;
        outResponse.value = printCript(textInput.value)
    }else{
        outBobx.hidden = true;
        contentBox.removeAttribute("hidden")
        outResponse.setAttribute("hidden")
    }
})
btnDcrip.addEventListener("click",function(){
    if(!verifyNullInput(textInput.value)){
        contentBox.setAttribute("hidden",true)
        outBobx.hidden = false;
        let output = printDcript(textInput.value)

        if(output == textInput.value){
            outResponse.value = "Menssagem inserida não possui criptografia!";
        }else{
            outResponse.value = output;
        }
    }else{
        outBobx.hidden = true;
        contentBox.removeAttribute("hidden")
        outResponse.setAttribute("hidden")
    }
})
btnCopy.addEventListener("click", function() {
    navigator.clipboard.writeText(outResponse.value);
})

function verifyNullInput(input){
    if(input === "")
        return true;

    if(input.trim().length === 0) {
        return true;
    }
    return false;
}

function printCript(input){
    let response = input.split("")

    for(let i = 0; i < response.length; i++){
        if(response[i] == "e"){
            response[i] = "enter"
        }else if(response[i] == "i"){
            response[i] = "imes"
        }else if(response[i] == "a"){
            response[i] = "ai"
        }else if(response[i] == "o"){
            response[i] = "ober"
        }else if(response[i] == "u"){
            response[i] = "ufat"
        }
    }
    return response.join("");
}

function printDcript(input){
    let response = input.split(" ");

    for(let i = 0; i < response.length; i++){
        if(response[i].trim().includes("enter")){
            response[i] = response[i].replaceAll("enter","e")
        }
        if(response[i].trim().includes("imes")){
            response[i] = response[i].replaceAll("imes","i")
        }
        if(response[i].trim().includes("ai")){
            response[i] = response[i].replaceAll("ai","a")
        }
        if(response[i].trim().includes("ober")){
            response[i] = response[i].replaceAll("ober","o")
        }
        if(response[i].trim().includes("ufat")){
            response[i] = response[i].replaceAll("ufat","u")
        }
    }

    return response.join(" ")
}
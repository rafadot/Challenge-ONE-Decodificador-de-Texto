const sun = document.getElementById("sun");
const moon = document.getElementById("moon");
const checkbox = document.getElementById("checkbox-dark");
const body = document.querySelector("body");
const iconAlura = document.getElementById("icon-alura");
const textInput = document.getElementById("text-input");
const alertImage = document.getElementById("alert-image") 
const spanAlert = document.getElementById("span-alert")
const btnCrip = document.getElementById("btn-criptografar")
const btnDcript = document.getElementById("btn-descriptografar")
const responseBox = document.getElementById("response-box")
const imageResponseBox = document.getElementById("image-response-box")
const p1 = document.getElementById("p1")
const p2 = document.getElementById("p2")
const footer = document.getElementById("footer")
const whatsapp = document.getElementById("whatsapp")
const github = document.getElementById("github")
const iconAluraMobile = document.getElementById("icon-alura-mobile")

checkbox.checked = true;
switchDarkMode();
alterClickColorBtn();

checkbox.addEventListener("click",function(){
    switchDarkMode();
})

function alterClickColorBtn(){

  if(!checkbox.checked){
    //alter color on click
    btnCrip.onmousedown = function() {
      btnCrip.style.backgroundColor = "#041c21"
    };
    btnCrip.onmouseup = function() {
      btnCrip.style.backgroundColor = "#052051";
    };
    btnCrip.onmouseenter = function(){
      btnCrip.style.backgroundColor = "#052051";
    }
    btnCrip.onmouseleave = function(){
      btnCrip.style.backgroundColor = "#0A3871";
    }


    btnDcript.onmousedown = function(){
      btnDcript.style.backgroundColor = "#c5cde7"
    }
    btnDcript.onmouseup = function(){
      btnDcript.style.backgroundColor = "";
    }
    btnDcript.onmouseenter = function(){
      btnDcript.style.backgroundColor = "#E9ECF8";
    }
    btnDcript.onmouseleave = function(){
      btnDcript.style.backgroundColor = "#F3F5FC";
    }
  }else{
    //alter color on click
    btnCrip.onmousedown = function() {
      btnCrip.style.backgroundColor = "#495057"
    };
    btnCrip.onmouseup = function() {
      btnCrip.style.backgroundColor = "#868E96";
    };
    btnCrip.onmouseenter = function(){
      btnCrip.style.backgroundColor = "#868E96";
    }
    btnCrip.onmouseleave = function(){
      btnCrip.style.backgroundColor = "#F3F5FC";
    }

    btnDcript.onmousedown = function(){
      btnDcript.style.backgroundColor = "#868E96"
    }
    btnDcript.onmouseup = function(){
      btnDcript.style.backgroundColor = "#495057";
    }
    btnDcript.onmouseenter = function(){
      btnDcript.style.backgroundColor = "#495057";
    }
    btnDcript.onmouseleave = function(){
      btnDcript.style.backgroundColor = "#343a40";
    }
  }
  
}

function switchDarkMode(){
  if(checkbox.checked){
    body.classList.add("body-dark")
    moon.classList.remove("moon-dark")
    sun.classList.add("sun-dark")
    iconAlura.classList.add("icon-alura-dark")
    textInput.classList.add("text-input-dark")
    alertImage.classList.add("alert-image-dark")
    spanAlert.classList.add("span-alert-dark")
    btnCrip.classList.add("btn-criptografar-dark")
    btnDcript.classList.add("btn-descriptografar-dark")
    btnCrip.style.backgroundColor = "#F3F5FC";
    btnDcript.style.backgroundColor = "#343a40";
    alterClickColorBtn()
    responseBox.classList.add("response-box-dark")
    imageResponseBox.setAttribute("src","images/image-response-box-dark.svg")
    p1.classList.add("msg-box-dark")
    p2.classList.add("msg-box-dark")
    footer.classList.add("footer-dark")
    whatsapp.setAttribute("src","images/whatsapp-dark.svg")
    github.setAttribute("src","images/github-dark.svg")
    iconAluraMobile.classList.add("icon-alura-mobile")
  }else{
    body.classList.remove("body-dark")
    moon.classList.add("moon-dark")
    sun.classList.remove("sun-dark")
    iconAlura.classList.remove("icon-alura-dark")
    textInput.classList.remove("text-input-dark")
    alertImage.classList.remove("alert-image-dark")
    spanAlert.classList.remove("span-alert-dark")
    btnCrip.classList.remove("btn-criptografar-dark")
    btnDcript.classList.remove("btn-descriptografar-dark")
    btnCrip.style.backgroundColor = "#0A3871";
    btnDcript.style.backgroundColor = "#F3F5FC";
    alterClickColorBtn();
    responseBox.classList.remove("response-box-dark")
    imageResponseBox.setAttribute("src","images/image-response-box.svg")
    p1.classList.remove("msg-box-dark")
    p2.classList.remove("msg-box-dark")
    footer.classList.remove("footer-dark")
    whatsapp.setAttribute("src","images/whatsapp@512px.svg")
    github.setAttribute("src","images/github@512px.svg")
    iconAluraMobile.classList.remove("icon-alura-mobile")
  }
}
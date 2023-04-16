let sun = document.getElementById("sun");
let moon = document.getElementById("moon");
let checkbox = document.getElementById("checkbox-dark");
let body = document.querySelector("body");
let iconAlura = document.getElementById("icon-alura");
let textInput = document.getElementById("text-input");
let alertImage = document.getElementById("alert-image") 
let spanAlert = document.getElementById("span-alert")
let btnCrip = document.getElementById("btn-criptografar")
let btnDcript = document.getElementById("btn-descriptografar")
let responseBox = document.getElementById("response-box")
let imageResponseBox = document.getElementById("image-response-box")
let p1 = document.getElementById("p1")
let p2 = document.getElementById("p2")
let footer = document.getElementById("footer")
let whatsapp = document.getElementById("whatsapp")
let github = document.getElementById("github")
let iconAluraMobile = document.getElementById("alura-icon-mobile")
let footerIcon = document.getElementById("footer-icon-alura")
let btnCopy = document.getElementById("btn-copy")
let outResponse = document.getElementById("out-response")

checkbox.checked = true;
switchDarkMode();
alterClickColorBtn();

checkbox.addEventListener("click",function(){
    switchDarkMode();
})

function alterClickColorBtn(){

  if(!checkbox.checked){
    btnCopy.onmouseenter = function(){
      btnCopy.style.backgroundColor = "#F3F5FC";
    }
    btnCopy.onmouseleave = function(){
      btnCopy.style.backgroundColor = "#ffff";
    }
    btnCopy.onmousedown = function(){
      btnCopy.style.backgroundColor = "#E9ECF8";
    }
    btnCopy.onmouseup = function(){
      btnCopy.style.backgroundColor = "#F3F5FC";
    }

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
    btnCopy.onmouseenter = function(){
      btnCopy.style.backgroundColor = "#343A40"
    }
    btnCopy.onmouseleave = function(){
      btnCopy.style.backgroundColor = "#1e2124"
    }
    btnCopy.onmousedown = function(){
      btnCopy.style.backgroundColor = "#495057"
    }
    btnCopy.onmouseup = function(){
      btnCopy.style.backgroundColor = "#343A40"
    }

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
    footerIcon.setAttribute("fill","#ffffff")
    btnCopy.style.backgroundColor = "#1e2124"
    btnCopy.style.color = "#f3f5e4"
    btnCopy.style.borderColor = "#f3f5e4"
    outResponse.style.backgroundColor = "#1e2124"
    outResponse.style.color = "#edeff1"
    outResponse.style.transition = ".4s"
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
    btnCopy.classList.remove("btn-copy-dark")
    btnCopy.style.backgroundColor = "#ffff"
    btnCopy.style.color = "#0A3871"
    btnCopy.style.borderColor = "#0A3871"
    outResponse.style.backgroundColor = "#ffffff"
    outResponse.style.color = "#495057"
    outResponse.style.transition = ".0s"
  }
}
const body = document.querySelector("body")


function setCookie(cname,cvalue,exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*2460601000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  
  function checkCookie() {
  
    let tema = getCookie("korisnickaTema");
    console.log(tema);
    if (tema != "") {
        if (tema === "tamna") {
            let body = document.body;
            body.classList.toggle("tamnaTema");
        }
    }
  
    else {
        tema = prompt("svetla/tamna tema, pa onda refresh");
        setCookie("korisnickaTema", tema, 30);
    }
  }



  body.addEventListener("load", (e) =>{
    e.preventDefault();
    checkCookie();
    location.reload();
  })

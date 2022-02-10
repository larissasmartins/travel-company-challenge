// Dark mode fuction

var icon = document.getElementById("icon");

icon.onclick = function(){
  document.body.classList.toggle("dark-mode");
  if(document.body.classList.contains("dark-mode")){
    icon.src = "images/sun.png";
  }else{
    icon.src = "images/moon.png";
  }
}

//Random number using JSON

var poweredByList = ["footer-github", "footer-linkedin", "footer-trivago"];
var footerCompany = chooseOne(poweredByList); 

function chooseOne(poweredByList){
  return poweredByList[parseInt(Math.random()*poweredByList.length)];
}


/*
if (footerCompanies == "array") {
  return generateRandomJson();
}

function generateRandomJson () {
  return chooseOne(footerCompanies);
} */
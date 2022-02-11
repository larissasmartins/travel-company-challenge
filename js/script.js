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

var footerTitles = [ 
  {"title": "Github"},
  {"title": "Linkedin"}, 
  {"title": "Trivago"},
  {"title": "Airbnb"},
  {"title": "Decolar"}
];

function randomNumberFromInterval(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var components = document.getElementById("footer").getElementsByTagName("li");

for (var i = 0; i < components.length; i++){
  const component = components[i];
  const index = randomNumberFromInterval(0, components.length -1);
  const footerCompany = footerTitles[index].title;
  component.textContent = footerCompany;
}
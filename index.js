



window.onload= function(){ //tells script to only perform functions once the windows loads, otherwise may get error
const about_me = document.querySelector("#about_me");

about_me.addEventListener("mouseover", showAboutMeSection, {once:true});

function showAboutMeSection(){
    const div = document.querySelector("#content");
    const paragraph = document.createElement("p");
    const content = document.createTextNode (" I am a software developer, passionate about developing digital solutions.");
    paragraph.appendChild(content);
    div.appendChild(paragraph);

    document.body.appendChild(div);

    const x = document.createElement("IMG");
    x.setAttribute("src", "python-js.jpg");
    x.setAttribute("width", "300");
    x.setAttribute("height", "200");
    x.setAttribute("alt", "Picture of code");
    x.style.position = "absolute";
    x.style.left = 695+'px';
    x.style.top = 400 +'px';
    document.body.appendChild(x);
}}
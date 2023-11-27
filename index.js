



window.onload= function(){ //tells script to only perform functions once the windows loads, otherwise may get error
const about_me = document.querySelector("#about_me");

about_me.addEventListener("mouseover", showAboutMeSection, {once:true});

function showAboutMeSection(){
    const div = document.querySelector("#content");
    const paragraph = document.createElement("p");
    const content = document.createTextNode (" I am a full stack software developer passionate about developing digital solutions.");
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
}


const skills = document.querySelector("#skills");
skills.addEventListener("mouseover", showSkillsSection, {once:true});

function showSkillsSection(){
    const div2 = document.querySelector("#content2");
    const paragraph2 = document.createElement("p");
    const content2 = document.createTextNode ('- HTML\n' + '- CSS\n' + '- Javascript\n' + ' - Git\n' + '- Github\n' + '- Python\n' + '- Command line');

    paragraph2.appendChild(content2);
    div2.appendChild(paragraph2);
    document.body.appendChild(div2);
    
}


const projects = document.querySelector("#list_projects");
projects.addEventListener("mouseover", showProjectsSection, {once:true});

function showProjectsSection(){
    const div3 = document.querySelector("#content3");
    const paragraph3 = document.createElement("p");
    const content3 = document.createTextNode ("- QR code generator  " + "  -Password generator  " + "  - PDF merger");

    paragraph3.appendChild(content3);
    div3.appendChild(paragraph3);
    document.body.appendChild(div3);
}


}




window.onload= function(){ //tells script to only perform functions once the windows loads, otherwise may get error
const about_me = document.querySelector("#about_me");

about_me.addEventListener("click", showAboutMeSection, {once:true});

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
    x.style.top = 320 +'px';
    document.body.appendChild(x);
        event.preventDefault();
}


const skills = document.querySelector("#skills");
skills.addEventListener("click", showSkillsSection, {once:true});

function showSkillsSection(){
    const div2 = document.querySelector("#content2");
    const paragraph2 = document.createElement("p");
    const content2 = document.createTextNode ("• HTML " + "\u00A0\u00A0\u00A0" + '• CSS '+ "\u00A0\u00A0\u00A0" + '• Javascript ' + "\u00A0\u00A0\u00A0" + ' • Git ' + "\u00A0\u00A0\u00A0" + '• Github '+ "\u00A0\u00A0\u00A0" + '• Python ' + "\u00A0\u00A0\u00A0"+ '• Command line'+ "\u00A0\u00A0\u00A0"+ "• SQL " + "\u00A0\u00A0\u00A0"+ "• AWS "+ "\u00A0\u00A0\u00A0"+ "• Azure ");

    paragraph2.appendChild(content2);
    div2.appendChild(paragraph2);
    document.body.appendChild(div2);
    event.preventDefault();
}


const courses = document.querySelector("#courses");
courses.addEventListener("click", showCoursesSection, {once:true});


function showCoursesSection(){
    const div3 = document.querySelector("#content3");
    const paragraph3 = document.createElement("p");
    const content3 = document.createTextNode ("• AiCore Software & Cloud Engineering" + "\u00A0\u00A0\u00A0\u00A0" + "• Introduction to Web Development: Code First Girl's " +"• Introduction to Web Development: Code First Girl's " + "\u00A0\u00A0\u00A0\u00A0" + "• Introduction to Data and SQL: Code First Girl's " + "\u00A0\u00A0\u00A0\u00A0" + "• Python: Code First Girls"+ "• Learn Python 3: Codecademy" + "\u00A0\u00A0\u00A0\u00A0" + "• Introduction to web development: CBF" + "\u00A0\u00A0\u00A0\u00A0" + "• Introduction to Programming with Python: CS50 Harvard");

    paragraph3.appendChild(content3);
    div3.appendChild(paragraph3);
    document.body.appendChild(div3);
    event.preventDefault();
}


const projects = document.querySelector("#list_projects");
projects.addEventListener("click", showProjectsSection, {once:true});

function showProjectsSection(){
    const div4 = document.querySelector("#content4");
    const paragraph4 = document.createElement("p");
    const content4 = document.createTextNode ("• Multinational Retail Data Centralisation " + "\u00A0\u00A0\u00A0\u00A0" + "• Azure Database Migration Project " + "\u00A0\u00A0\u00A0\u00A0" + "• QR code generator  " + "\u00A0\u00A0\u00A0\u00A0" + "• Password generator  " + "\u00A0\u00A0\u00A0\u00A0" + "• PDF merger");

    paragraph4.appendChild(content4);
    div4.appendChild(paragraph4);
    document.body.appendChild(div4);
    event.preventDefault();
}


}
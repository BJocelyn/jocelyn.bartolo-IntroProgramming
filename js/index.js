const body = document.querySelector("body");
const footer = document.createElement("footer");
const thisYear = new Date().getFullYear();
footer.innerHTML = `
  <p>Copyright &copy; ${thisYear} Jocelyn Bartolo. All rights reserved.</p>
`;
body.appendChild(footer);

const skills = ["JavaScript", "HTML", "CSS", "Git & GitHub", "SolidWorks", "AutoCAD", "Autodesk Inventor"];
const skillsSection = document.getElementById("skills");
const skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement("li");
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}
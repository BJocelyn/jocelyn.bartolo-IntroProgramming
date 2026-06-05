//FOOTER
const body = document.querySelector("body");
const footer = document.createElement("footer");
const today = new Date();
const thisYear = today.getFullYear();
/* const thisYear = new Date().getFullYear(); */

const copyright = document.createElement("p");
copyright.innerHTML = `Copyright &copy; ${thisYear} Jocelyn Bartolo. All rights reserved.`;

/* footer.innerHTML = `
  <p>Copyright &copy; ${thisYear} Jocelyn Bartolo. All rights reserved.</p>
`;
body.appendChild(footer); */

footer.appendChild(copyright);
body.appendChild(footer);

//SKILLS
const skills = ["JavaScript", "HTML", "CSS", "Git & GitHub", "SolidWorks", "AutoCAD", "Autodesk Inventor"];
const skillsSection = document.getElementById("skills");
const skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement("li");
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}
/* ANOTHER OPTION TO TRY:
skills.forEach(skill => {
  const li = document.createElement("li");
  li.textContent = skill; or li.innerText = skill;
  skillsList.appendChild(li);
}); */

// MESSAGE FROM USER
const messageForm = document.querySelector('form[name="leave_message"]');

messageForm.addEventListener("submit", function(event) {
  event.preventDefault();
  
  const name = event.target.usersName.value;
  const email = event.target.usersEmail.value;
  const message = event.target.usersMessage.value;

  console.log(name, email, message);

  // console.log("Name:", name);
  // console.log("Email:", email);
  // console.log("Message:", message);

  const messageSection = document.getElementById("messages");
  const messageList = messageSection.querySelector("ul");
  
  const newMessage = document.createElement("li");
  newMessage.innerHTML = `<a href="mailto:${email}">${name}</a><span> wrote: ${message}</span>`;
  
  const removeButton = document.createElement("button");
  removeButton.innerText = "remove";
  removeButton.type = "button";
  
  removeButton.addEventListener("click", function() {
    const entry = removeButton.parentNode;
    entry.remove();
  });

  newMessage.appendChild(removeButton);
  messageList.appendChild(newMessage);

  messageForm.reset();
});
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


const GITHUB_USERNAME = "BJocelyn";
const gitHubName = `https://api.github.com/users/${GITHUB_USERNAME}/repos`;

//Option 1
// fetch(gitHubApi)
//   .then(response => {
//     if (!response.ok) {
//       throw new Error ("Error retrieving repositories" + response.status);
//     }
//     return response.json();
//   })
//   .then(repositories => {
//     console.log("Repositories retrieve from GitHub:", repositories);

//     const projectSection = document.getElementById("projects");
//     const projectList = projectSection.querySelector("ul");

//     projectList.innerHTML = "";

//     for (let i = 0; i < repositories.length; i++) {
//       const repo = repositories[i];
//       const project = document.createElement("li");
//       project.innerText = repo.name;

//       projectList.appendChild(project);
//     }
//   })

//   .catch(error => {
//     console.error("Error fetching repositories:", error);

//     const projectSection = document.getElementById("projects");
//     const projectList = projectSection.querySelector("ul");
    
//     const errorMessage = document.createElement("li"); 
//     errorMessage.innerText = "Unable to load projects at this time. Please try again later.";
//     errorMessage.style.color  = "red";

//     projectList.appendChild(errorMessage);
//   });

//Best Option to use, ASYNC FUNCTION
async function fetchRepos(){
  try {
    const response = await fetch(gitHubName);

    if (!response.ok){
      throw new Error("Error retrieving repositories" + response.status);
    }

    const repositories = await response.json();
    console.log("Repositories retrieve from GitHub:", repositories);

    const projectSection =  document.getElementById("projects");
    const projectList = projectSection.querySelector("ul");

    projectList.innerHTML = "";

    for (let i = 0; i < repositories.length; i++) {
      const repo = repositories[i];

      const project = document.createElement("li");
      project.innerHTML = `
      <a href ="${repo.html_url}" target="_blank" rel="noopener noreferrer">
      <strong>${repo.name}</strong><br>
      </a>
      <br>
      <em>${repo.description || "No description available"}</em>
      `;

      projectList.appendChild(project);
    }
  } catch (error) {
    console.error("Error fetching repositories:", error);

    const projectSection = document.getElementById("projects");
    const projectList = projectSection.querySelector("ul");

    const errorMessage = document.createElement("li");
    errorMessage.innerText = "Unable to load projects at this time. Please try again later.";
    errorMessage.style.color  = "red";

    projectList.appendChild(errorMessage);
  }
}

fetchRepos();
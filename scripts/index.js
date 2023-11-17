import { projects } from '../data/projects.js';

let projectsHTML = '';

projects.forEach((project) => {
  projectsHTML += `
  <div target="_blank" class="box">
          <a target="_blank" href="${project.link}">
            <img src="${project.image}" alt="project-img" class="project-img">
            <p>
              <span class="code">&lt;</span>
              ${project.name}
              <span class="code">/&gt;</span>
            </p>
          </a>
        </div>
  `;
});

document.querySelector('.js-projects').innerHTML = projectsHTML;
console.log(projectsHTML);

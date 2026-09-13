const emeylContain = document.querySelector(".emeyl-text");
const email = document.querySelector(".email");

const defaultEmail = document.createElement("span");
defaultEmail.className = "default-email";
defaultEmail.textContent = "Email";
const fullEmail = document.createElement("span");
fullEmail.className = "full-email";
fullEmail.textContent = "adsasdasd@gmail.com";

emeylContain.appendChild(defaultEmail);

email.addEventListener("mouseenter", () => {
  defaultEmail.remove();
  emeylContain.appendChild(fullEmail);
});

email.addEventListener("mouseleave", () => {
  fullEmail.remove();
  emeylContain.appendChild(defaultEmail);
});

const githubLogo = document.querySelector(".github-logo");
const githubInfo = document.createElement("span");
githubInfo.className = "github-info";
githubInfo.textContent = "View my GitHub Profile";

githubLogo.addEventListener("mouseenter", () => {
  githubLogo.appendChild(githubInfo);
});

githubLogo.addEventListener("mouseleave", () => {
  githubInfo.remove();
});

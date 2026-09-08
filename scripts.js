const emeylContain = document.querySelector(".emeyl-text");
const email = document.querySelector(".email");
const fullEmail = document.createElement("span");
fullEmail.className = "full-email";
fullEmail.textContent = "adsasdasd@gmail.com";

function defaultEmail() {
  const defaultEmail = document.createElement("span");
  defaultEmail.className = "default-email";
  defaultEmail.textContent = "Email";

  emeylContain.prepend(defaultEmail);
}
defaultEmail();
email.addEventListener("mouseenter", () => {
  const emailTemp = document.querySelector(".default-email");
  emeylContain.appendChild(fullEmail);
  emailTemp.remove();
});

email.addEventListener("mouseleave", () => {
  const emailTemp = document.querySelector(".full-email");
  emailTemp.remove();
  defaultEmail();
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

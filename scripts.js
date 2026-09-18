const emeylContain = document.querySelector(".emeyl-text");
const email = document.querySelector(".email");

const defaultEmail = document.createElement("span");
defaultEmail.className = "default-email";
defaultEmail.textContent = "Email";
const fullEmail = document.createElement("span");
fullEmail.className = "full-email";
fullEmail.textContent = "adsasdasd@gmail.com";

let timeOutTimer;

emeylContain.appendChild(defaultEmail);

email.addEventListener("mouseenter", () => {
  clearTimeout(timeOutTimer);

  defaultEmail.remove();
  emeylContain.appendChild(fullEmail);
});

email.addEventListener("mouseleave", () => {
  clearTimeout(timeOutTimer);

  testOne = false;

  timeOutTimer = setTimeout(() => {
    fullEmail.remove();
    emeylContain.appendChild(defaultEmail);
  }, 320);
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

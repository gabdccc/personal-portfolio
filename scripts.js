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

const stacks = document.querySelectorAll(".stack-span");

stacks.forEach((stack) => {
  stack.addEventListener("mouseenter", () => {
    const desc = stack.nextElementSibling;
    desc.classList.add("reveal");
  });
  stack.addEventListener("mouseleave", () => {
    const desc = stack.nextElementSibling;
    desc.classList.remove("reveal");
  });
});

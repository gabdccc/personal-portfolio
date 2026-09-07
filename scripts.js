const emailText = document.querySelector(".emeyl-text");
const emailDefault = emailText.textContent;

emailText.addEventListener("mouseenter", () => {
  emailText.textContent = "adsasdasd@gmail.com";
});
emailText.addEventListener("mouseleave", () => {
  emailText.textContent = emailDefault;
});

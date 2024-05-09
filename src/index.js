function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: ["Line 1 of poem"],
    autoStart: true,
    delay: 10,
    cursor: "",
  });
}
let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);

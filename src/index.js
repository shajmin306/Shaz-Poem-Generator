function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 10,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("user-instructions");
  let apiKey = "c9b30483aedf4foe2dd664a0ftc74778";
  let context =
    "You are a polite and romantic poem expert and love to write short poems. Please generate a four line poem, in basic HTML and separate each line using <br/>. Please follow user instructions";
  let prompt = `User instructions: Please generate a poem about ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayPoem);
}
let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);

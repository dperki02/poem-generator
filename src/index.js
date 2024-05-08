function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings:
      "<strong>You may write me down in history.</strong> With your bitter, twisted lies, You may trod me in the very dirt. But still, like dust, I'll rise. </br> Does my sassiness upset you? Why are you beset with gloom? ’Cause I walk like I've got oil wells, Pumping in my living room.",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}
let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);

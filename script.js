// list of all ratings available
const ratingOptions = Array.from(
  document.querySelectorAll(".rating-card > ol > li")
);

// adding onclick event handler to all rating
ratingOptions.forEach((ratingOption) => {
  ratingOption.onclick = () => handleRatingOption(ratingOption);
});

// adding onclick on submit button
document.querySelector(".rating-card > button").onclick = handleSubmit;

/**When user selects rating */
function handleRatingOption(element) {
  /*Remove all other rating selections */
  document.querySelectorAll(".selected").forEach((element) => {
    element.classList.remove("selected");
    element.style.pointerEvents = "auto";
  });

  /*Add selected styles and remove hover effects */
  element.classList.add("selected");
  element.style.pointerEvents = "none";
}

function handleSubmit() {
  // grab feedback rating
  const rating = document.querySelector(".selected");

  // when no rating is selected
  if (!rating) {
    alert("select a rating");
    return;
  }

  // hide rating card
  document.querySelector(".rating-card").classList.add("hidden");

  // show thank you card
  document.querySelector(".thank-you-card").classList.remove("hidden");

  // set feedback rating
  document.querySelector(".rating").innerText = rating.innerText;
}

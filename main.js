const raitingContainer = document.querySelector(".raiting-container");
const submitBtn = document.querySelector(".submit-btn");
const thankModal = document.querySelector(".thank-modal");
const radioInputs = document.querySelectorAll(
  'input[type="radio"][name="rating"]'
);

const raiting = document.getElementById("selectedRating");

const localStorageKey = "localStoregeKey";

radioInputs.forEach((input) => {
  input.addEventListener("click", () => {
    const labelValue = input.nextElementSibling.textContent.trim();
    localStorage.setItem("localStoregeKey", labelValue);
    const savedValue = localStorage.getItem("localStoregeKey");
    console.log(savedValue);
  });
});

submitBtn.addEventListener("click", onSubmit);

radioInputs.forEach((input) => {
  input.addEventListener("change", onRatingChange);
});

function onSubmit() {
  const isAnyRadioInputChecked = [...radioInputs].some(
    (input) => input.checked
  );
  const ratingValue = localStorage.getItem(localStorageKey);
  if (isAnyRadioInputChecked) {
    thankModal.classList.remove("is-hidden");
    raitingContainer.classList.add("is-hidden");
    raiting.textContent = `You selected ${ratingValue} out of 5`;
    reloadPageAfter3Seconds();
  } else {
    alert("rate us please⭐️⭐️⭐️⭐️⭐️");
  }
}

function onRatingChange(event) {
  const selectedRating = event.target.value;

  localStorage.setItem("selectedRating", selectedRating);
}

function reloadPageAfter3Seconds() {
  setTimeout(() => {
    window.location.reload();
  }, 3000);
}

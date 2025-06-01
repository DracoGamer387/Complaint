const form = document.getElementById("grievanceForm");
const response = document.getElementById("response");
const moodSlider = document.getElementById("moodSlider");
const moodBubble = document.getElementById("moodBubble");
const submittedTime = document.getElementById("submittedTime");

const moods = ["😢", "😠", "😴", "😃"];

moodSlider.addEventListener("input", () => {
  const moodIndex = parseInt(moodSlider.value);
  moodBubble.textContent = moods[moodIndex];
});

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const timestamp = new Date();
  const formatted = timestamp.toLocaleString(undefined, {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  const data = {
    title: form.title.value,
    description: form.description.value,
    mood: moodSlider.value,
    timestamp: timestamp.toISOString()
  };

  fetch("complaint-production.up.railway.app", { // replace with real backend URL
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  })
    .then((res) => res.json())
    .then(() => {
      form.style.display = "none";
      response.style.display = "block";
      submittedTime.textContent = `Submitted on: ${formatted}`;
    })
    .catch(err => alert("Failed to submit. Try again later."));
});

function submitAnother() {
  form.reset();
  form.style.display = "block";
  response.style.display = "none";
  submittedTime.textContent = "";
  moodBubble.textContent = moods[0]; // reset mood
}

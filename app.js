var container = document.getElementById("imageContainer");

function loadImage() {
  // Get the URL and text from the input fields

  var url = document.getElementById("imgUrl").value;
  var top = document.getElementById("topText").value.toUpperCase();
  var bottom = document.getElementById("bottomText").value.toUpperCase();

  // Validate the input fields

  if (!url || !top || !bottom) {
    alert("Please fill out all fields before submitting.");
    return;
  }

  // Create a new div element for the meme

  var memeDiv = document.createElement("div");
  memeDiv.className = "meme";

  // Create a new img element

  var img = document.createElement("img");

  // Set the src attribute of the img element to the URL

  img.src = url;

  // Add the img element to the meme div

  memeDiv.appendChild(img);

  // Add the meme div to the container

  container.appendChild(memeDiv);

  // Create a happy little trash can for the delete icon!

  var deleteIcon = document.createElement("div");
  deleteIcon.className = "deleteIcon";
  deleteIcon.textContent = "🗑️"; // using a trash can emoji as the icon

  // Add an event listener to the deleteIcon

  deleteIcon.addEventListener("click", function (event) {
    event.stopPropagation(); // prevent the memeDiv click event from firing
    memeDiv.remove();
  });

  // Add the deleteIcon to the meme div

  memeDiv.appendChild(deleteIcon);

  // Call loadText after the image is loaded

  img.onload = function () {
    loadText(memeDiv, top, bottom);
  };

  // Clear the input fields

  document.getElementById("topText").value = "";
  document.getElementById("bottomText").value = "";
  document.getElementById("imgUrl").value = "";
}

// Load top and bottom text and add to memeDiv

function loadText(memeDiv, top, bottom) {
  var topText = document.createElement("div");
  topText.className = "topText";
  topText.textContent = top;

  var bottomText = document.createElement("div");
  bottomText.className = "bottomText";
  bottomText.textContent = bottom;

  memeDiv.appendChild(topText);
  memeDiv.appendChild(bottomText);
}

var addLink = document.getElementById("link-add");
var addView = document.getElementById("add-view");

addLink.addEventListener("click", function(event) {
  event.preventDefault();
  // homeView.classList.add("hidden");
  listView.classList.add("hidden");

  // addView.classList.add("visible");
  addView.classList.remove("hidden");

});

var addLink = document.getElementById("link-add");
var addView = Document.getElementById("add-view");

addLink.addEventListener("click", function(event) {
  homeView.classList.add("hidden");
  listView.classList.add("hidden");

  addView.classList.add("visible");
  addView.classList.remove("hidden");

});

var allProducts = document.querySelectorAll(".card .card-body button");
var footer = document.querySelector(".footer");
var showPriceBtn = document.querySelector(".showPrice");
var emptyDiv = document.querySelector(".empty");
var emptyPriceDiv = document.querySelector(".emptyPrice");
var totalPrice = 0;

allProducts.forEach(function (item) {
  item.onclick = function () {
    emptyDiv.innerHTML += item.getAttribute("info") + " <br> ";
    totalPrice += +item.getAttribute("price");

    if (emptyDiv.innerHTML != "") {
      footer.style.display = "block";
    }
  };
});

showPriceBtn.onclick = function () {
  emptyPriceDiv.innerHTML = "Total Price:" + " " + totalPrice + " " + "LE";
};

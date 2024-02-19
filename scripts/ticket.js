let selectedSeatCount = 0;
let availableSeatCount = 8;
let totalPrice;
let grandTotal;
totalPrice = parseFloat(totalPrice);
grandTotal = parseFloat(grandTotal);
function now(id, className) {
  console.log(id);
  const bgColor = document.getElementById(id);
  bgColor.style.backgroundColor = "#1DD100";
  selectedSeatCount++;
  availableSeatCount--;
  const disableBtn = document.getElementsByClassName(className);
  const btnId = document.getElementById(id);

  if (btnId) {
    btnId.disabled = true;
  }

  if (selectedSeatCount === 4) {
    for (let btn of disableBtn) {
      btn.disabled = true;
    }
  }

  const setSeatCount = document.getElementById("availableSeat");
  console.log(availableSeatCount);
  setSeatCount.innerText = availableSeatCount;

  document.getElementById("seatCount").innerText = selectedSeatCount;
  totalPrice = selectedSeatCount * 550;
  const getTotal = document.getElementById("totalAmount");
  getTotal.innerText = totalPrice;
}



function addSeatList(idSeat) {
  var newListContainer = document.createElement("div");
  newListContainer.className = "flex justify-between mb-4 font-light";

  newListContainer.innerHTML = `
      <p>${idSeat}</p>
      <p>Economy</p>
      <p>550</p>
  `;

  document.querySelector(".seatDetail").appendChild(newListContainer);
}
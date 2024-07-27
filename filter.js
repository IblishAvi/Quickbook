function search() {
  let searchInput = document.getElementById('searchInput').value.trim().toUpperCase();
  let products = document.querySelectorAll('.product');

  products.forEach(product => {
    let productName = product.querySelector('h2');
    let nameText = productName.innerText.toUpperCase();

    if (nameText.includes(searchInput)) {
      product.style.display = "";
    } else {
      product.style.display = "none";
    }
  });
  return false;
}

function applyFilters() {
  let selectedDate = document.getElementById('dateFilter').value;
  let selectedLocation = document.getElementById('locationFilter').value.trim().toUpperCase();
  let selectedPrice = parseInt(document.getElementById('num').textContent); // Changed to integer

  let products = document.querySelectorAll('.product');
  products.forEach(product => {
    let productDate = product.dataset.date;
    let productLocation = product.querySelector('h2').textContent.trim().toUpperCase();
    let productPrice = parseInt(product.querySelector('h3').textContent); // Changed to integer

    let isDisplayed = true;
    if (selectedDate && productDate !== selectedDate) {
      isDisplayed = false;
    }
    if (selectedLocation && productLocation !== selectedLocation) {
      isDisplayed = false;
    }
    if (selectedPrice) {
      // Assuming you want to filter within a range; adjust as needed
      if (productPrice > selectedPrice) {
        isDisplayed = false;
      }
    }

    product.style.display = isDisplayed ? "" : "none";
  });
  return false;
}

const content = document.querySelector('#num');

const Increment = () => {
  let value = parseInt(content.innerHTML);
  value = value + 5000;
  content.innerHTML = value;
}

const Decrement = () => {
  let value = parseInt(content.innerHTML);
  value = value - 5000;
  content.innerHTML = value;
}

function change(clickedButton) {
  let buttons = document.querySelectorAll('.booking');
  buttons.forEach(button => {
    button.classList.remove('active');
  });
  clickedButton.classList.add('active');
}

// Attach event listeners to search and apply filter button
document.getElementById('submit-btn').addEventListener('click', applyFilters);
document.getElementById('submit').addEventListener('click', search);

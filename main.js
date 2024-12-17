let cart = []; 
function addToCart(name, price) { 
cart.push({ name, price }); 
showCart();
} 
function showCart() { 
const cartBody = document.getElementById('cartBody'); 
cartBody.innerHTML = ''; 
cart.forEach((item, index) => { 
const row = document.createElement('tr'); 
row.innerHTML = ` 
<td>${item.name}</td> 
<td>Rp ${item.price.toLocaleString()}</td> 
<td><button onclick="removeFromCart(${index})" class="del-button">x</button></td> 
`; 
cartBody.appendChild(row); 
}); 
document.getElementById('cartModal').style.display = 'block'; 
} 
function removeFromCart(index) { 
cart.splice(index, 1); 
showCart(); 
} 
function closeCart() { 
document.getElementById('cartModal').style.display = 'none'; 
} 
function printReceipt() { 
let receiptContent = 'Struk Belanja\n\n'; 
cart.forEach(item => { 
receiptContent += `${item.name} - Rp${item.price.toLocaleString()}\n`; 
}); 
receiptContent += `\nTotal: Rp ${cart.reduce((total, item) => total + item.price, 
0).toLocaleString()}`; 
alert(receiptContent); 
}

// DATA CATEGORY
function filterProducts(category) {
  const products = document.querySelectorAll('.product-item');
  
  products.forEach((product) => {
      // Get the product's category from the data attribute
      const productCategory = product.getAttribute('data-category');
      
      // Show or hide the product based on the selected category
      if (category === 'all' || productCategory === category) {
          product.classList.remove('hidden');
      } else {
          product.classList.add('hidden');
      }
  });
}
// DATA CATEGORY END

// MENU-BAR ACTIVE
document.addEventListener("DOMContentLoaded", function() {
  // Get the last selected category from localStorage
  const selectedCategory = localStorage.getItem("selectedCategory") || "all";
  setActiveLinkByCategory(selectedCategory);
  filterProducts(selectedCategory);
});

// Function to set active link by element
function setActiveLink(element) {
  const links = document.querySelectorAll(".menu-bar a");
  links.forEach(link => link.classList.remove("active"));
  element.classList.add("active");
  localStorage.setItem("selectedCategory", element.getAttribute("data-category"));
}

// Function to set active link by category (for reloads)
function setActiveLinkByCategory(category) {
  const links = document.querySelectorAll(".menu-bar a");
  links.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("data-category") === category) {
          link.classList.add("active");
      }
  });
}
// MENU-BAR ACTIVE END


// DATA-BG 
// Select all product cards with the correct class name
const productCards = document.querySelectorAll('.product');

// Add event listeners for each card to change the body's background image
productCards.forEach(card => {
  // Get the background image from the data attribute
  const bgImage = card.getAttribute('data-bg');
  
  // On hover, set the body's background image to the card's image
  card.addEventListener('mouseenter', () => {
    document.body.style.backgroundSize = 'cover'; // Adjusts to show cover image
    document.body.style.backgroundImage = `url(${bgImage})`;
  });

  // On mouse leave, reset the background image
  card.addEventListener('mouseleave', () => {
    document.body.style.backgroundImage = 'url(https://images.pexels.com/photos/29139964/pexels-photo-29139964/free-photo-of-vibrant-neon-abstract-light-streaks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)';
  });
});
productCards.forEach(card => {
    const bgImage = card.getAttribute('data-bg');
    
    card.addEventListener('mouseenter', () => {
      document.body.style.backgroundImage = `url(${bgImage})`;
      document.body.classList.add('background-fade'); // Add fade effect
    });
  
    card.addEventListener('mouseleave', () => {
      document.body.style.backgroundImage = 'url(https://images.pexels.com/photos/29139964/pexels-photo-29139964/free-photo-of-vibrant-neon-abstract-light-streaks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)';
      document.body.classList.remove('background-fade'); // Remove fade effect
    });
  });
$('.product:hover').each(function() {
"use strict";
if ($(this).attr("data-bg")) {
  $(this).css({
    'background': 'url(' + $(this).data('bg') + ')',
    'background-position': 'center',
    'background-repeat': 'no-repeat',
    'background-size': 'contain',
    'background-attachment': 'scroll',
    'filter' : 'brightness(80%)',
    'transition' : '400ms inherit ease-in-out'
  });
}
});
// DATA-BG END

 function openNewPage() {
  window.location.href = "drinkcategory.html"
 }
 function filterProducts(category) {
  const products = document.querySelectorAll('.product');
  products.forEach(product => {
      if (category === 'all' || product.dataset.category === category) {
          product.style.display = 'block';
      } else {
          product.style.display = 'none';
      }
  });
}
// Mengatur zoom ke 90% saat halaman dimuat
document.addEventListener("DOMContentLoaded", function() {
  document.body.style.zoom = "0.3";
});

// Modal contact
// Get modal elements
const openModalBtn = document.getElementById("openModalContact"); // Make sure the ID matches
const contactModal = document.getElementById("contactModal");
const closeModalBtn = document.getElementById("closeModalBtn");

// Open modal
openModalBtn.addEventListener("click", () => {
    contactModal.style.display = "flex";
});

// Close modal
closeModalBtn.addEventListener("click", () => {
    contactModal.style.display = "none";
});

// Close modal when clicking outside the content
window.addEventListener("click", (event) => {
    if (event.target === contactModal) {
        contactModal.style.display = "none";
    }
});
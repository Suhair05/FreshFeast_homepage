/* =============================================
   Fresh Feast — Homepage Scripts
   script.js
   ============================================= */

/* ----- Cart Counter ----- 
   Think of this like a scoreboard: every time 
   someone clicks "Add to Cart", the score goes up.
   The badge on the cart icon always shows the current score.
----- */

let cartCount = 0; // starting count shown on the badge

const cartBadge = document.getElementById('cart-badge');

function updateCartBadge() {
  cartBadge.textContent = cartCount;
}

// Attach click listeners to every "Add to Cart" button
document.querySelectorAll('.btn-add').forEach(function(button) {
  button.addEventListener('click', function() {
    cartCount++;
    updateCartBadge();

    // Visual feedback: briefly change button text
    button.textContent = 'Added ✓';
    button.style.background = 'var(--green)';
    button.style.color = 'white';
    button.style.borderColor = 'var(--green)';

    setTimeout(function() {
      button.textContent = 'Add to Cart';
      button.style.background = '';
      button.style.color = '';
      button.style.borderColor = '';
    }, 1200);
  });
});


/* ----- "How It Works" smooth scroll ----- 
   When the user clicks "How It Works" in the hero,
   the page smoothly scrolls down to that section —
   like an elevator instead of a jump.
----- */

const howItWorksBtn = document.getElementById('how-it-works-btn');
const howItWorksSection = document.getElementById('how-it-works');

if (howItWorksBtn && howItWorksSection) {
  howItWorksBtn.addEventListener('click', function() {
    howItWorksSection.scrollIntoView({ behavior: 'smooth' });
  });
}


/* ----- "View Full Menu" button ----- 
   Navigates to the menu page when clicked.
----- */

const viewMenuBtn = document.getElementById('view-menu-btn');

if (viewMenuBtn) {
  viewMenuBtn.addEventListener('click', function() {
    window.location.href = 'menu.html';
  });
}


/* ----- "Explore Menu" hero button ----- */

const exploreMenuBtn = document.getElementById('explore-menu-btn');

if (exploreMenuBtn) {
  exploreMenuBtn.addEventListener('click', function() {
    window.location.href = 'menu.html';
  });
}


/* ----- Active nav link highlight ----- 
   Automatically marks the current page's nav link 
   as active, so you don't have to hardcode it per page.
----- */

const currentPage = window.location.pathname.split('/').pop() || 'index.html';

document.querySelectorAll('.nav-links a').forEach(function(link) {
  link.classList.remove('active');
  const linkPage = link.getAttribute('href');
  if (linkPage === currentPage) {
    link.classList.add('active');
  }
});
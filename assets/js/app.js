// داده‌های نمونه کتاب‌ها
const BOOKS = [
  {
    id: 1,
    title: 'شازده کوچولو',
    author: 'آنتوان دو سنت',
    price: 125000,
    cover: 'assets/imgs/1.jpg',
    description: 'داستانی فلسفی و احساسی درباره یک شازده کوچک که از سیاره‌ای کوچک به زمین سفر می‌کند.',
    rating: 4.5,
    isPopular: true
  },
  {
    id: 2,
    title: 'صد سال تنهایی',
    author: 'گابریل مارکز',
    price: 150000,
    cover: 'assets/imgs/2.jpg',
    description: 'اثر ماندگار مارکز که داستان خانواده بوئندیا را در طول صد سال روایت می‌کند.',
    rating: 5,
    isPopular: true
  },
  {
    id: 3,
    title: 'کافه نوستالژی',
    author: 'توشیکازو کاواگوچی',
    price: 98000,
    cover: 'assets/imgs/3.jpg',
    description: 'کافه‌ای در توکیو که به شما امکان می‌دهد به گذشته سفر کنید.',
    rating: 4,
    isPopular: true
  },
  {
    id: 4,
    title: 'هنر بی‌خیالی',
    author: 'مارک منسون',
    price: 89000,
    cover: 'assets/imgs/4.jpg',
    description: 'راهنمایی متفاوت برای زندگی بهتر با تمرکز بر آنچه واقعاً مهم است.',
    rating: 4.5,
    isPopular: true
  },
  {
    id: 5,
    title: 'اتاق معجزات',
    author: 'جولیان بارنز',
    price: 110000,
    cover: 'assets/imgs/5.jpg',
    description: 'رمانی درباره عشق، زمان و خاطرات.',
    rating: 4,
    isPopular: true
  },
  {
    id: 6,
    title: 'انسان در جستجوی معنا',
    author: 'ویکتور فرانکل',
    price: 95000,
    cover: 'assets/imgs/6.jpg',
    description: 'تجربیات یک روان‌پزشک در اردوگاه‌های کار اجباری نازی.',
    rating: 5,
    isPopular: true
  }
];

// State management
const state = {
  cart: [],
  bookmarks: [],
  user: { name: 'دوستین', avatar: 'د' }
};

// Toast notification
function showToast(message, type = 'success') {
  const toastHtml = `
    <div class="toast-container">
      <div class="toast show align-items-center text-white bg-${type} border-0" role="alert">
        <div class="d-flex">
          <div class="toast-body">${message}</div>
          <button type="button" class="btn-close btn-close-white me-2 m-auto" onclick="this.parentElement.parentElement.remove()"></button>
        </div>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML('beforeend', toastHtml);
  setTimeout(() => document.querySelector('.toast-container')?.remove(), 3000);
}

// Cart functions
function addToCart(bookId) {
  const book = BOOKS.find(b => b.id === bookId);
  const existingItem = state.cart.find(item => item.id === bookId);
  
  if (existingItem) {
    existingItem.quantity++;
  } else {
    state.cart.push({ ...book, quantity: 1 });
  }
  
  updateCartBadge();
  showToast('کتاب به سبد خرید اضافه شد', 'success');
}

function removeFromCart(bookId) {
  state.cart = state.cart.filter(item => item.id !== bookId);
  updateCartBadge();
  if (window.location.pathname.includes('cart.html')) renderCart();
  showToast('کتاب از سبد خرید حذف شد', 'warning');
}

function updateQuantity(bookId, delta) {
  const item = state.cart.find(item => item.id === bookId);
  if (item) {
    item.quantity += delta;
    if (item.quantity <= 0) {
      removeFromCart(bookId);
    } else {
      updateCartBadge();
      renderCart();
    }
  }
}

function updateCartBadge() {
  const badges = document.querySelectorAll('.cart-badge');
  const totalItems = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  badges.forEach(badge => {
    badge.textContent = totalItems;
    badge.style.display = totalItems > 0 ? 'flex' : 'none';
  });
}

// Bookmark functions
function toggleBookmark(bookId) {
  const index = state.bookmarks.indexOf(bookId);
  if (index > -1) {
    state.bookmarks.splice(index, 1);
  } else {
    state.bookmarks.push(bookId);
  }
  renderHome();
}

// Render rating stars
function renderStars(rating) {
  const fullStars = Math.floor(rating);
  let html = '';
  for (let i = 0; i < 5; i++) {
    if (i < fullStars) {
      html += '<svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>';
    } else {
      html += '<svg viewBox="0 0 24 24" fill="none" stroke="#ffc107" stroke-width="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>';
    }
  }
  return html;
}

// Render home page
function renderHome() {
  const popularContainer = document.getElementById('popular-books');
  const newestContainer = document.getElementById('newest-books');
  
  if (!popularContainer || !newestContainer) return;
  
  // Popular books - horizontal scroll
  const popularBooks = BOOKS.filter(b => b.isPopular);
  popularContainer.innerHTML = popularBooks.map(book => `
    <div class="popular-book-card" onclick="window.location.href='book.html?id=${book.id}'">
      <img src="${book.cover}" class="popular-book-cover" alt="${book.title}">
      <div class="popular-book-title">${book.title}</div>
      <div class="popular-book-author">${book.author}</div>
    </div>
  `).join('');
  
  // Newest books - list view
  const newestBooks = BOOKS.slice(3);
  newestContainer.innerHTML = newestBooks.map(book => `
    <div class="newest-book-card" onclick="window.location.href='book.html?id=${book.id}'">
      <img src="${book.cover}" class="newest-book-cover" alt="${book.title}">
      <div class="newest-book-info">
        <div>
          <div class="newest-book-title">${book.title}</div>
          <div class="newest-book-author">${book.author}</div>
          <div class="rating-stars">${renderStars(book.rating)}</div>
        </div>
      </div>
      <button class="bookmark-btn ${state.bookmarks.includes(book.id) ? 'active' : ''}" 
              onclick="event.stopPropagation(); toggleBookmark(${book.id})">
        <svg viewBox="0 0 24 24" fill="${state.bookmarks.includes(book.id) ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
          <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z"/>
        </svg>
      </button>
    </div>
  `).join('');
}

// Render books list
function renderBooksList() {
  const container = document.getElementById('books-list');
  if (!container) return;
  
  container.innerHTML = BOOKS.map(book => `
    <div class="col-md-4 col-sm-6 mb-4">
      <div class="newest-book-card" onclick="window.location.href='book.html?id=${book.id}'">
        <img src="${book.cover}" class="newest-book-cover" alt="${book.title}">
        <div class="newest-book-info">
          <div>
            <div class="newest-book-title">${book.title}</div>
            <div class="newest-book-author">${book.author}</div>
            <div class="rating-stars">${renderStars(book.rating)}</div>
            <div class="price-tag">${book.price.toLocaleString('fa-IR')} تومان</div>
          </div>
        </div>
      </div>
    </div>
  `).join('');
  
  // Search functionality
  const searchInput = document.querySelector('.search-box');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase();
      const filtered = BOOKS.filter(book => 
        book.title.toLowerCase().includes(query) || 
        book.author.toLowerCase().includes(query)
      );
      container.innerHTML = filtered.map(book => `
        <div class="col-md-4 col-sm-6 mb-4">
          <div class="newest-book-card" onclick="window.location.href='book.html?id=${book.id}'">
            <img src="${book.cover}" class="newest-book-cover" alt="${book.title}">
            <div class="newest-book-info">
              <div>
                <div class="newest-book-title">${book.title}</div>
                <div class="newest-book-author">${book.author}</div>
                <div class="rating-stars">${renderStars(book.rating)}</div>
                <div class="price-tag">${book.price.toLocaleString('fa-IR')} تومان</div>
              </div>
            </div>
          </div>
        </div>
      `).join('');
    });
  }
}

// Render book details
function renderBookDetails() {
  const container = document.getElementById('book-details');
  if (!container) return;
  
  const params = new URLSearchParams(window.location.search);
  const bookId = parseInt(params.get('id'));
  const book = BOOKS.find(b => b.id === bookId);
  
  if (!book) {
    container.innerHTML = '<p class="text-danger">کتاب یافت نشد</p>';
    return;
  }
  
  container.innerHTML = `
    <div class="text-center mb-4">
      <img src="${book.cover}" class="book-detail-cover" alt="${book.title}">
    </div>
    
    <div class="detail-section">
      <h2 class="mb-2">${book.title}</h2>
      <p class="text-muted mb-3">${book.author}</p>
      <div class="rating-stars mb-3">${renderStars(book.rating)}</div>
      <div class="price-tag mb-3">${book.price.toLocaleString('fa-IR')} تومان</div>
      <p class="text-muted">${book.description}</p>
    </div>
    
    <div class="d-grid gap-2">
      <button class="btn btn-primary action-btn" onclick="addToCart(${book.id})">
        <svg class="ms-2" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" style="display: inline;">
          <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
        </svg>
        افزودن به سبد خرید
      </button>
      <a href="reader.html?id=${book.id}" class="btn btn-outline-primary action-btn">
        مطالعه نمونه
      </a>
    </div>
  `;
}

// Render cart
function renderCart() {
  const container = document.getElementById('cart-items');
  if (!container) return;
  
  if (state.cart.length === 0) {
    container.innerHTML = `
      <div class="text-center py-5">
        <svg width="80" height="80" fill="none" stroke="#ccc" stroke-width="2" viewBox="0 0 24 24">
          <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
        </svg>
        <p class="text-muted fs-5 mt-3">سبد خرید شما خالی است</p>
        <a href="books.html" class="btn btn-primary mt-3">مشاهده کتاب‌ها</a>
      </div>
    `;
    return;
  }
  
  const total = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  container.innerHTML = `
    ${state.cart.map(item => `
      <div class="cart-item">
        <div class="d-flex gap-3">
          <img src="${item.cover}" width="70" height="100" class="rounded" alt="${item.title}">
          <div class="flex-grow-1">
            <h6 class="mb-1">${item.title}</h6>
            <small class="text-muted">${item.author}</small>
            <div class="d-flex justify-content-between align-items-center mt-2">
              <div class="quantity-control">
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">
                  <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path d="M20 12H4"/>
                  </svg>
                </button>
                <span class="fw-bold">${item.quantity}</span>
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">
                  <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path d="M12 4v16m8-8H4"/>
                  </svg>
                </button>
              </div>
              <button class="btn btn-sm btn-danger" onclick="removeFromCart(${item.id})">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                </svg>
              </button>
            </div>
            <div class="price-tag mt-2">${(item.price * item.quantity).toLocaleString('fa-IR')} تومان</div>
          </div>
        </div>
      </div>
    `).join('')}
    
    <div class="detail-section">
      <div class="d-flex justify-content-between align-items-center">
        <h5 class="mb-0">جمع کل:</h5>
        <h3 class="price-tag mb-0">${total.toLocaleString('fa-IR')} تومان</h3>
      </div>
    </div>
  `;
}

// Render reader
function renderReader() {
  const container = document.getElementById('reader-content');
  if (!container) return;
  
  const params = new URLSearchParams(window.location.search);
  const bookId = parseInt(params.get('id'));
  const book = BOOKS.find(b => b.id === bookId);
  
  if (!book) {
    container.innerHTML = '<p class="text-danger">کتاب یافت نشد</p>';
    return;
  }
  
  container.innerHTML = `
    <h3 class="mb-3">${book.title}</h3>
    <p class="text-muted mb-4">${book.author}</p>
    <hr>
    <p class="reader-content mt-4">${book.description}</p>
    <div class="alert alert-warning mt-4">
      این نسخه نمایشی است. برای دسترسی به متن کامل کتاب را خریداری کنید.
    </div>
  `;
}

// Bottom nav
function renderBottomNav() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  
  const nav = `
    <nav class="bottom-nav">
      <div class="container">
        <div class="d-flex justify-content-around">
          <a href="index.html" class="nav-link ${currentPage === 'index.html' ? 'active' : ''}">
            <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
            </svg>
            <small>خانه</small>
          </a>
          <a href="books.html" class="nav-link ${currentPage === 'books.html' ? 'active' : ''}">
            <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
            </svg>
            <small>کتاب‌ها</small>
          </a>
          <a href="cart.html" class="nav-link ${currentPage === 'cart.html' ? 'active' : ''}" style="position: relative;">
            <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
            </svg>
            <small>سبد</small>
            <span class="cart-badge" style="display: none;">0</span>
          </a>
          <a href="profile.html" class="nav-link ${currentPage === 'profile.html' ? 'active' : ''}">
            <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
            </svg>
            <small>پروفایل</small>
          </a>
        </div>
      </div>
    </nav>
  `;
  
  document.body.insertAdjacentHTML('beforeend', nav);
}

// Payment
function processPayment() {
  if (state.cart.length === 0) {
    showToast('سبد خرید خالی است', 'warning');
    return;
  }
  showToast('در حال انتقال به درگاه...', 'info');
  setTimeout(() => {
    showToast('پرداخت موفق بود!', 'success');
    state.cart = [];
    updateCartBadge();
    renderCart();
  }, 2000);
}

// Logout
function logout() {
  showToast('خارج شدید', 'success');
  setTimeout(() => window.location.href = 'register.html', 1500);
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  renderBottomNav();
  updateCartBadge();
  
  const page = window.location.pathname.split('/').pop() || 'index.html';
  
  switch(page) {
    case 'index.html':
      renderHome();
      break;
    case 'books.html':
      renderBooksList();
      break;
    case 'book.html':
      renderBookDetails();
      break;
    case 'cart.html':
      renderCart();
      break;
    case 'reader.html':
      renderReader();
      break;
  }
  
  // Forms
  const registerForm = document.getElementById('register-form');
  if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('کد ارسال شد', 'success');
      setTimeout(() => window.location.href = 'verify.html', 1500);
    });
  }
  
  const verifyForm = document.getElementById('verify-form');
  if (verifyForm) {
    verifyForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('ورود موفق!', 'success');
      setTimeout(() => window.location.href = 'index.html', 1500);
    });
  }
});
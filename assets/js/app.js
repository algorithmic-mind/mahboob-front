// داده‌های نمونه کتاب‌ها
const BOOKS = [
  {
    id: 1,
    title: 'شازده کوچولو',
    author: 'آنتوان دو سنت اگزوپری',
    price: 125000,
    cover: 'assets/imgs/1.jpg',
    description: 'داستانی فلسفی و احساسی درباره یک شازده کوچک که از سیاره‌ای کوچک به زمین سفر می‌کند و در این سفر با شخصیت‌های مختلفی آشنا می‌شود که هر کدام نمادی از جنبه‌های مختلف زندگی بشر هستند.',
    rating: 4.5,
    isPopular: true,
    type: 'both', // physical, digital, both
    category: 'ادبیات کلاسیک',
    audioSample: 'assets/audio/sample1.mp3',
    content: 'زمانی که شش ساله بودم، کتاب شگفت‌انگیزی دیدم درباره جنگل‌های دست‌نخورده که نامش «داستان‌های واقعی» بود. در آن کتاب تصویری از یک مار بوآ دیدم که یک حیوان وحشی را بلعیده بود. این کتاب می‌گفت: «مارهای بوآ طعمه خود را بدون جویدن می‌بلعند. بعد از آن دیگر نمی‌توانند حرکت کنند و شش ماه می‌خوابند تا غذا هضم شود.»',
    aiSummary: 'شازده کوچولو داستان سفر یک پسربچه از سیاره‌ای کوچک به زمین است. این کتاب با زبانی ساده اما عمیق، درباره دوستی، عشق، مسئولیت و معنای زندگی صحبت می‌کند. پیام اصلی کتاب این است که «با دل خوب می‌بینیم، چیزهای اساسی برای چشم نامرئی هستند».',
    reviews: [
      { author: 'سارا محمدی', rating: 5, text: 'یکی از بهترین کتاب‌هایی که تا به حال خواندم. هر بار که می‌خوانمش معنای جدیدی پیدا می‌کنم.', date: '1402/09/15', avatar: 'س' },
      { author: 'علی رضایی', rating: 4, text: 'کتاب فوق‌العاده‌ای است. به همه توصیه می‌کنم.', date: '1402/09/10', avatar: 'ع' },
      { author: 'نازنین کریمی', rating: 5, text: 'شاهکاری که هر کسی باید یک بار در زندگی‌اش بخواند.', date: '1402/09/05', avatar: 'ن' }
    ]
  },
  {
    id: 2,
    title: 'صد سال تنهایی',
    author: 'گابریل گارسیا مارکز',
    price: 150000,
    cover: 'assets/imgs/2.jpg',
    description: 'اثر ماندگار مارکز که داستان خانواده بوئندیا را در طول صد سال در شهر خیالی ماکوندو روایت می‌کند. این کتاب شاهکاری از رئالیسم جادویی است.',
    rating: 5,
    isPopular: true,
    type: 'digital',
    category: 'رمان',
    audioSample: 'assets/audio/sample2.mp3',
    content: 'سال‌ها بعد، در مقابل جوخه اعدام، سرهنگ آئورلیانو بوئندیا آن بعدازظهر دور را به یاد آورد که پدرش او را با خود برد تا یخ را ببیند.',
    aiSummary: 'صد سال تنهایی داستان هفت نسل از خانواده بوئندیا در شهر خیالی ماکوندو است. این رمان با ترکیبی از واقعیت و خیال، تاریخ آمریکای لاتین را روایت می‌کند و درباره تنهایی، عشق، جنگ و قدرت صحبت می‌کند.',
    reviews: [
      { author: 'رضا احمدی', rating: 5, text: 'شاهکار بی‌نظیر مارکز. هر صفحه‌اش پر از جادوست.', date: '1402/09/12', avatar: 'ر' },
      { author: 'مریم نوری', rating: 5, text: 'کتابی که نمی‌شود گذاشتش. باید چندین بار خواند.', date: '1402/09/08', avatar: 'م' }
    ]
  },
  {
    id: 3,
    title: 'کافه نوستالژی',
    author: 'توشیکازو کاواگوچی',
    price: 98000,
    cover: 'assets/imgs/3.jpg',
    description: 'کافه‌ای در توکیو که به شما امکان می‌دهد به گذشته سفر کنید، اما با قوانین خاصی که باید رعایت شوند.',
    rating: 4,
    isPopular: true,
    type: 'physical',
    category: 'داستان کوتاه',
    audioSample: 'assets/audio/sample3.mp3',
    content: 'در یک کافه قدیمی در توکیو، افسانه‌ای وجود دارد که می‌گوید اگر روی صندلی خاصی بنشینید، می‌توانید به گذشته سفر کنید.',
    aiSummary: 'داستان افرادی که به کافه‌ای خاص می‌آیند تا به گذشته سفر کنند و لحظات از دست رفته را دوباره زندگی کنند. این کتاب درباره پشیمانی، بخشش و ارزش لحظه حال است.',
    reviews: [
      { author: 'فاطمه حسینی', rating: 4, text: 'داستان زیبا و احساسی. به شدت توصیه می‌کنم.', date: '1402/09/14', avatar: 'ف' }
    ]
  },
  {
    id: 4,
    title: 'هنر بی‌خیالی',
    author: 'مارک منسون',
    price: 89000,
    cover: 'assets/imgs/4.jpg',
    description: 'راهنمایی متفاوت برای زندگی بهتر با تمرکز بر آنچه واقعاً مهم است و نادیده گرفتن باقی.',
    rating: 4.5,
    isPopular: true,
    type: 'both',
    category: 'توسعه فردی',
    audioSample: 'assets/audio/sample4.mp3',
    content: 'بیایید صادق باشیم، ما همیشه با مشکلات روبرو هستیم. قسمت مهم این است که چگونه با آنها کنار بیاییم.',
    aiSummary: 'این کتاب با رویکردی متفاوت و صادقانه، به شما یاد می‌دهد که چگونه به چیزهای واقعاً مهم در زندگی اهمیت دهید و از بقیه بی‌خیال شوید. پیام اصلی: نمی‌توانیم همه چیز را داشته باشیم، پس باید انتخاب کنیم.',
    reviews: [
      { author: 'محمد کاظمی', rating: 5, text: 'کتاب فوق‌العاده‌ای که واقعاً زندگی‌ام را عوض کرد.', date: '1402/09/11', avatar: 'م' },
      { author: 'زهرا امینی', rating: 4, text: 'نگاه متفاوتی به زندگی. خیلی عالی بود.', date: '1402/09/07', avatar: 'ز' }
    ]
  },
  {
    id: 5,
    title: 'اتاق معجزات',
    author: 'جولیان بارنز',
    price: 110000,
    cover: 'assets/imgs/5.jpg',
    description: 'رمانی درباره عشق، زمان و خاطرات که با نگاهی فلسفی به زندگی می‌پردازد.',
    rating: 4,
    isPopular: false,
    type: 'digital',
    category: 'رمان',
    audioSample: 'assets/audio/sample5.mp3',
    content: 'خاطرات ما چیزی نیست که بتوانیم به آن اعتماد کنیم. آنها دائماً در حال تغییر هستند.',
    aiSummary: 'داستان مردی که سعی دارد خاطرات جوانی‌اش را بازسازی کند و متوجه می‌شود که حقیقت با آنچه به یاد می‌آورد متفاوت است.',
    reviews: [
      { author: 'امیر رستمی', rating: 4, text: 'کتاب عمیق و فکری. برای کسانی که به ادبیات جدی علاقه دارند.', date: '1402/09/09', avatar: 'ا' }
    ]
  },
  {
    id: 6,
    title: 'انسان در جستجوی معنا',
    author: 'ویکتور فرانکل',
    price: 95000,
    cover: 'assets/imgs/6.jpg',
    description: 'تجربیات یک روان‌پزشک در اردوگاه‌های کار اجباری نازی و چگونگی یافتن معنا در سخت‌ترین شرایط.',
    rating: 5,
    isPopular: true,
    type: 'both',
    category: 'روانشناسی',
    audioSample: 'assets/audio/sample6.mp3',
    content: 'کسی که «چرایی» برای زندگی دارد، تقریباً هر «چگونه‌ای» را تحمل می‌کند.',
    aiSummary: 'این کتاب بر اساس تجربیات فرانکل در اردوگاه‌های نازی نوشته شده و درباره اهمیت یافتن معنا در زندگی صحبت می‌کند. پیام اصلی: حتی در سخت‌ترین شرایط، انسان می‌تواند معنا پیدا کند.',
    reviews: [
      { author: 'لیلا صادقی', rating: 5, text: 'کتابی که هر کسی باید بخواند. تغییر دهنده زندگی است.', date: '1402/09/13', avatar: 'ل' },
      { author: 'حسین مرادی', rating: 5, text: 'شاهکار. درس‌های بزرگی از این کتاب گرفتم.', date: '1402/09/06', avatar: 'ح' }
    ]
  },
  {
    id: 7,
    title: 'هری پاتر و سنگ جادو',
    author: 'جی. کی. رولینگ',
    price: 135000,
    cover: 'assets/imgs/7.jpg',
    description: 'داستان پسری که در یازده سالگی متوجه می‌شود جادوگر است و به مدرسه جادوگری هاگوارتز می‌رود.',
    rating: 5,
    isPopular: false,
    type: 'both',
    category: 'فانتزی',
    audioSample: 'assets/audio/sample7.mp3',
    content: 'آقای و خانم دورسلی در خانه شماره چهار خیابان پریوت درایو زندگی می‌کردند و با افتخار می‌گفتند که کاملاً عادی هستند.',
    aiSummary: 'داستان هری پاتر، پسری یتیم که کشف می‌کند جادوگر است و وارد دنیای جادویی می‌شود. این کتاب درباره دوستی، شجاعت و مبارزه با شر است.',
    reviews: [
      { author: 'نیلوفر احمدی', rating: 5, text: 'شروع یک سری عالی. برای همه سنین مناسب است.', date: '1402/09/04', avatar: 'ن' }
    ]
  },
  {
    id: 8,
    title: 'عادات اتمی',
    author: 'جیمز کلیر',
    price: 105000,
    cover: 'assets/imgs/8.jpg',
    description: 'راهنمای عملی برای ساخت عادات خوب و شکستن عادات بد با تغییرات کوچک اما موثر.',
    rating: 4.5,
    isPopular: false,
    type: 'physical',
    category: 'توسعه فردی',
    audioSample: 'assets/audio/sample8.mp3',
    content: 'عادات قدرت ترکیب را دارند. تغییرات کوچک منجر به نتایج شگفت‌انگیز می‌شوند.',
    aiSummary: 'این کتاب با رویکردی علمی و عملی، به شما یاد می‌دهد چگونه با تغییرات ۱٪ روزانه، عادات موثر بسازید که زندگی شما را متحول کنند.',
    reviews: [
      { author: 'سعید باقری', rating: 5, text: 'بهترین کتاب در زمینه عادت‌سازی. خیلی کاربردی است.', date: '1402/09/03', avatar: 'س' }
    ]
  }
];

// دسته‌بندی‌ها
const CATEGORIES = [
  { id: 'all', name: 'همه', icon: '📚' },
  { id: 'novel', name: 'رمان', icon: '📖' },
  { id: 'selfhelp', name: 'توسعه فردی', icon: '💡' },
  { id: 'psychology', name: 'روانشناسی', icon: '🧠' },
  { id: 'fantasy', name: 'فانتزی', icon: '🔮' },
  { id: 'classic', name: 'کلاسیک', icon: '🎭' }
];

// State management
const state = {
  cart: JSON.parse(localStorage.getItem('cart') || '[]'),
  bookmarks: JSON.parse(localStorage.getItem('bookmarks') || '[]'),
  user: { name: 'دوستین', avatar: 'د', phone: '09123456789' },
  activeCategory: 'all',
  searchQuery: ''
};

// Save state to localStorage
function saveState() {
  localStorage.setItem('cart', JSON.stringify(state.cart));
  localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks));
}

// Initialize Swiper
let popularSwiper = null;

function initSwiper() {
  if (document.querySelector('.swiper-container')) {
    popularSwiper = new Swiper('.swiper-container', {
      slidesPerView: 2.5,
      spaceBetween: 12,
      freeMode: true,
      breakpoints: {
        768: {
          slidesPerView: 4,
          spaceBetween: 16,
        }
      }
    });
  }
}

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
  
  saveState();
  updateCartBadge();
  showToast('کتاب به سبد خرید اضافه شد', 'success');
}

function removeFromCart(bookId) {
  state.cart = state.cart.filter(item => item.id !== bookId);
  saveState();
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
      saveState();
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
    showToast('از نشان‌شده‌ها حذف شد', 'warning');
  } else {
    state.bookmarks.push(bookId);
    showToast('به نشان‌شده‌ها اضافه شد', 'success');
  }
  saveState();
  renderHome();
  renderBooksList();
}

// Get book type badge
function getBookTypeBadge(type) {
  const types = {
    physical: '📦 فیزیکی',
    digital: '📱 الکترونیکی',
    both: '📦 📱 هر دو'
  };
  return `<span class="book-type-badge ${type}">${types[type]}</span>`;
}

// Render rating stars
function renderStars(rating) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  let html = '';
  
  for (let i = 0; i < 5; i++) {
    if (i < fullStars) {
      html += '<svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>';
    } else if (i === fullStars && hasHalfStar) {
      html += '<svg viewBox="0 0 24 24"><defs><linearGradient id="half"><stop offset="50%" stop-color="#ffc107"/><stop offset="50%" stop-color="#e0e0e0"/></linearGradient></defs><path fill="url(#half)" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>';
    } else {
      html += '<svg viewBox="0 0 24 24" fill="none" stroke="#ffc107" stroke-width="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>';
    }
  }
  return html;
}

// Render categories with Swiper
function renderCategories() {
  const container = document.getElementById('categories');
  if (!container) return;
  
  container.innerHTML = `
    <div class="swiper category-swiper">
      <div class="swiper-wrapper">
        ${CATEGORIES.map(cat => `
          <div class="swiper-slide" style="width: auto;">
            <button class="category-pill ${state.activeCategory === cat.id ? 'active' : ''}" 
                    onclick="filterByCategory('${cat.id}')">
              ${cat.icon} ${cat.name}
            </button>
          </div>
        `).join('')}
      </div>
    </div>
  `;
  
  // Initialize category swiper
  setTimeout(() => {
    new Swiper('.category-swiper', {
      slidesPerView: 'auto',
      spaceBetween: 10,
      freeMode: true,
    });
  }, 100);
}

// Filter by category
function filterByCategory(categoryId) {
  state.activeCategory = categoryId;
  renderCategories();
  renderHome();
}

// Render home page
function renderHome() {
  const popularContainer = document.querySelector('.swiper-wrapper');
  const newestContainer = document.getElementById('newest-books');
  
  if (!popularContainer || !newestContainer) return;
  
  // Popular books - Swiper slider
  const popularBooks = BOOKS.filter(b => b.isPopular);
  popularContainer.innerHTML = popularBooks.map(book => `
    <div class="swiper-slide">
      <div class="popular-book-card" onclick="window.location.href='book.html?id=${book.id}'">
        <img src="${book.cover}" class="popular-book-cover" alt="${book.title}" onerror="this.src='https://via.placeholder.com/160x220?text=No+Image'">
        <div class="popular-book-title">${book.title}</div>
        <div class="popular-book-author">${book.author}</div>
        <div class="price-tag">${book.price.toLocaleString('fa-IR')} تومان</div>
      </div>
    </div>
  `).join('');
  
  // Initialize Swiper after content is added
  setTimeout(() => initSwiper(), 100);
  
  // Newest books - grid view with filters
  let filteredBooks = BOOKS;
  if (state.activeCategory !== 'all') {
    filteredBooks = BOOKS.filter(book => {
      const categoryMap = {
        novel: 'رمان',
        selfhelp: 'توسعه فردی',
        psychology: 'روانشناسی',
        fantasy: 'فانتزی',
        classic: 'ادبیات کلاسیک'
      };
      return book.category === categoryMap[state.activeCategory];
    });
  }
  
  newestContainer.innerHTML = `
    <div class="books-grid">
      ${filteredBooks.map(book => {
        const isBookmarked = state.bookmarks.includes(book.id);
        return `
          <div class="newest-book-card">
            <div style="position: relative;">
              <img src="${book.cover}" class="newest-book-cover" alt="${book.title}" 
                   onclick="window.location.href='book.html?id=${book.id}'" 
                   onerror="this.src='https://via.placeholder.com/200x250?text=No+Image'">
              <button class="bookmark-btn ${isBookmarked ? 'active' : ''}" 
                      onclick="event.stopPropagation(); toggleBookmark(${book.id})"
                      style="position: absolute; top: 0.5rem; left: 0.5rem; background: white;">
                <svg viewBox="0 0 24 24" ${isBookmarked ? 'fill="currentColor"' : 'fill="none" stroke="currentColor" stroke-width="2"'}>
                  <path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/>
                </svg>
              </button>
            </div>
            <div class="newest-book-info" onclick="window.location.href='book.html?id=${book.id}'">
              <div class="newest-book-title">${book.title}</div>
              <div class="newest-book-author">${book.author}</div>
              <div class="rating-stars">${renderStars(book.rating)}</div>
              <div class="price-tag">${book.price.toLocaleString('fa-IR')} تومان</div>
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

// Render books list
function renderBooksList() {
  const container = document.getElementById('books-list');
  if (!container) return;
  
  let filteredBooks = BOOKS;
  
  // Apply search filter
  if (state.searchQuery) {
    const query = state.searchQuery.toLowerCase();
    filteredBooks = filteredBooks.filter(book => 
      book.title.toLowerCase().includes(query) || 
      book.author.toLowerCase().includes(query) ||
      book.category.toLowerCase().includes(query)
    );
  }
  
  container.innerHTML = `
    <div class="books-grid">
      ${filteredBooks.map(book => {
        const isBookmarked = state.bookmarks.includes(book.id);
        return `
          <div class="newest-book-card">
            <div style="position: relative;">
              <img src="${book.cover}" class="newest-book-cover" alt="${book.title}" 
                   onclick="window.location.href='book.html?id=${book.id}'"
                   onerror="this.src='https://via.placeholder.com/200x250?text=No+Image'">
              <button class="bookmark-btn ${isBookmarked ? 'active' : ''}" 
                      onclick="event.stopPropagation(); toggleBookmark(${book.id})"
                      style="position: absolute; top: 0.5rem; left: 0.5rem; background: white;">
                <svg viewBox="0 0 24 24" ${isBookmarked ? 'fill="currentColor"' : 'fill="none" stroke="currentColor" stroke-width="2"'}>
                  <path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/>
                </svg>
              </button>
            </div>
            <div class="newest-book-info" onclick="window.location.href='book.html?id=${book.id}'">
              <div class="newest-book-title">${book.title}</div>
              <div class="newest-book-author">${book.author}</div>
              <div class="rating-stars">${renderStars(book.rating)}</div>
              <div class="price-tag">${book.price.toLocaleString('fa-IR')} تومان</div>
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;
  
  // Search functionality
  const searchInput = document.querySelector('.search-box');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      renderBooksList();
    });
  }
}

// Render book details with tabs
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
  
  const isBookmarked = state.bookmarks.includes(book.id);
  
  container.innerHTML = `
    <div class="text-center mb-4">
      <img src="${book.cover}" class="book-detail-cover" alt="${book.title}" onerror="this.src='https://via.placeholder.com/300x400?text=No+Image'">
    </div>
    
    <div class="detail-section">
      <div class="d-flex justify-content-between align-items-start mb-3">
        <div>
          <h2 class="mb-2">${book.title}</h2>
          <p class="text-muted mb-2">${book.author}</p>
          <span class="badge bg-secondary">${book.category}</span>
        </div>
        <button class="bookmark-btn ${isBookmarked ? 'active' : ''}" onclick="toggleBookmark(${book.id})">
          <svg viewBox="0 0 24 24" width="24" height="24" ${isBookmarked ? 'fill="currentColor"' : 'fill="none" stroke="currentColor" stroke-width="2"'}>
            <path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/>
          </svg>
        </button>
      </div>
      
      <div class="rating-stars mb-3">${renderStars(book.rating)} <span class="me-2 text-muted">(${book.rating})</span></div>
      ${getBookTypeBadge(book.type)}
      <div class="price-tag my-3">${book.price.toLocaleString('fa-IR')} تومان</div>
      
      <div class="detail-tabs">
        <button class="tab-btn active" onclick="switchTab('description')">توضیحات</button>
        <button class="tab-btn" onclick="switchTab('audio')">نمونه صوتی</button>
        <button class="tab-btn" onclick="switchTab('content')">بخشی از کتاب</button>
        <button class="tab-btn" onclick="switchTab('summary')">خلاصه AI</button>
        <button class="tab-btn" onclick="switchTab('reviews')">نظرات</button>
      </div>
      
      <div id="tab-description" class="tab-content active">
        <p class="text-muted mt-3">${book.description}</p>
      </div>
      
      <div id="tab-audio" class="tab-content">
        <div class="audio-player">
          <h6 class="mb-3">گوش دادن به نمونه صوتی</h6>
          <div class="audio-controls">
            <button class="play-btn" onclick="toggleAudio()">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </button>
            <div class="audio-progress">
              <div class="audio-progress-bar"></div>
            </div>
            <span class="audio-time">0:00 / 3:45</span>
          </div>
          <audio id="book-audio" src="${book.audioSample}"></audio>
          <p class="text-muted mt-3 small">💡 این نمونه صوتی است. برای دسترسی به کتاب صوتی کامل، کتاب را خریداری کنید.</p>
        </div>
      </div>
      
      <div id="tab-content" class="tab-content">
        <div class="reader-content mt-3">
          ${book.content}
          <div class="alert alert-warning mt-4">
            📖 این بخشی از محتوای کتاب است. برای مطالعه کامل، کتاب را خریداری کنید.
          </div>
        </div>
      </div>
      
      <div id="tab-summary" class="tab-content">
        <div class="alert alert-info mt-3">
          <h6>🤖 خلاصه تولید شده با هوش مصنوعی</h6>
          <p class="mb-0">${book.aiSummary}</p>
        </div>
      </div>
      
      <div id="tab-reviews" class="tab-content">
        <div class="mt-3">
          <h6 class="mb-3">نظرات کاربران (${book.reviews.length})</h6>
          ${book.reviews.map(review => `
            <div class="comment-item">
              <div class="comment-header">
                <div class="comment-avatar">${review.avatar}</div>
                <div class="flex-grow-1">
                  <div class="comment-author">${review.author}</div>
                  <div class="comment-date">${review.date}</div>
                </div>
              </div>
              <div class="comment-rating">${renderStars(review.rating)}</div>
              <p class="comment-text">${review.text}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
    
    <div class="d-grid gap-2 mt-3">
      <button class="btn btn-primary action-btn" onclick="addToCart(${book.id})">
        <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
        </svg>
        افزودن به سبد خرید
      </button>
      <a href="reader.html?id=${book.id}" class="btn btn-outline-primary action-btn">
        <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
        </svg>
        مطالعه نمونه
      </a>
    </div>
  `;
}

// Switch tabs
function switchTab(tabName) {
  // Hide all tabs
  document.querySelectorAll('.tab-content').forEach(tab => {
    tab.classList.remove('active');
  });
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  
  // Show selected tab
  document.getElementById(`tab-${tabName}`).classList.add('active');
  event.target.classList.add('active');
}

// Audio player functionality
let isPlaying = false;
function toggleAudio() {
  const audio = document.getElementById('book-audio');
  const playBtn = document.querySelector('.play-btn');
  
  if (isPlaying) {
    audio.pause();
    playBtn.innerHTML = '<svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>';
  } else {
    audio.play();
    playBtn.innerHTML = '<svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/></svg>';
  }
  isPlaying = !isPlaying;
  
  audio.ontimeupdate = () => {
    const progress = (audio.currentTime / audio.duration) * 100;
    document.querySelector('.audio-progress-bar').style.width = progress + '%';
    
    const currentTime = formatTime(audio.currentTime);
    const duration = formatTime(audio.duration);
    document.querySelector('.audio-time').textContent = `${currentTime} / ${duration}`;
  };
}

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
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
          <img src="${item.cover}" width="70" height="100" class="rounded" alt="${item.title}" onerror="this.src='https://via.placeholder.com/70x100?text=No+Image'">
          <div class="flex-grow-1">
            <h6 class="mb-1">${item.title}</h6>
            <small class="text-muted">${item.author}</small>
            <div class="mt-1">${getBookTypeBadge(item.type)}</div>
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
    <div class="reader-content mt-4">
      ${book.content}
      
      <div class="alert alert-warning mt-5">
        📖 این نسخه نمایشی است. برای دسترسی به متن کامل کتاب را خریداری کنید.
      </div>
      
      <div class="d-grid gap-2 mt-4">
        <button class="btn btn-primary" onclick="addToCart(${book.id})">خرید کتاب</button>
        <a href="book.html?id=${book.id}" class="btn btn-outline-secondary">بازگشت به جزئیات</a>
      </div>
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
    saveState();
    updateCartBadge();
    renderCart();
  }, 2000);
}

// Logout
function logout() {
  if (confirm('آیا مطمئن هستید که می‌خواهید خارج شوید؟')) {
    localStorage.clear();
    showToast('خارج شدید', 'success');
    setTimeout(() => window.location.href = 'register.html', 1500);
  }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  renderBottomNav();
  updateCartBadge();
  
  const page = window.location.pathname.split('/').pop() || 'index.html';
  
  switch(page) {
    case 'index.html':
      renderCategories();
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
// ============================================
// Data & Configuration
// ============================================

// Products Data with Images, Reviews, and Trust Elements
const productsData = [
    { 
        id: 1, 
        name: 'Wireless Headphones', 
        category: 'electronics', 
        price: 99.99, 
        icon: 'fa-headphones', 
        rating: 4.5, 
        reviews: 1247,
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop',
        badges: ['Best Seller', 'Verified'],
        verifiedPurchases: 892,
        reviewsList: [
            { name: 'Sarah M.', rating: 5, text: 'Amazing sound quality! Best purchase ever.', verified: true },
            { name: 'John D.', rating: 4, text: 'Great headphones, comfortable for long use.', verified: true },
            { name: 'Emma L.', rating: 5, text: 'Perfect for workouts. Highly recommend!', verified: true }
        ]
    },
    { 
        id: 2, 
        name: 'Smart Watch Pro', 
        category: 'electronics', 
        price: 299.99, 
        icon: 'fa-clock', 
        rating: 4.8, 
        reviews: 2156,
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop',
        badges: ['Best Seller', 'New'],
        verifiedPurchases: 1892
    },
    { 
        id: 3, 
        name: 'Gaming Laptop', 
        category: 'electronics', 
        price: 1299.99, 
        icon: 'fa-laptop', 
        rating: 4.7, 
        reviews: 856,
        image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&h=500&fit=crop',
        badges: ['Verified'],
        verifiedPurchases: 712
    },
    { 
        id: 4, 
        name: 'Smartphone X', 
        category: 'electronics', 
        price: 799.99, 
        icon: 'fa-mobile-alt', 
        rating: 4.6, 
        reviews: 3421,
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&h=500&fit=crop',
        badges: ['Best Seller', 'Verified'],
        verifiedPurchases: 2890
    },
    { 
        id: 5, 
        name: 'Gaming Mouse', 
        category: 'electronics', 
        price: 49.99, 
        icon: 'fa-mouse', 
        rating: 4.4, 
        reviews: 1892,
        image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=500&h=500&fit=crop',
        badges: ['Best Seller'],
        verifiedPurchases: 1456
    },
    { 
        id: 6, 
        name: 'Bluetooth Speaker', 
        category: 'electronics', 
        price: 79.99, 
        icon: 'fa-volume-up', 
        rating: 4.3, 
        reviews: 1124,
        image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=500&fit=crop',
        badges: ['Verified'],
        verifiedPurchases: 892
    },
    { id: 7, name: 'Cotton T-Shirt', category: 'fashion', price: 29.99, icon: 'fa-tshirt', rating: 4.2, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop' },
    { id: 8, name: 'Denim Jeans', category: 'fashion', price: 79.99, icon: 'fa-tshirt', rating: 4.5, image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&h=500&fit=crop' },
    { id: 9, name: 'Running Shoes', category: 'fashion', price: 89.99, icon: 'fa-shoe-prints', rating: 4.6, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop' },
    { id: 10, name: 'Leather Jacket', category: 'fashion', price: 199.99, icon: 'fa-tshirt', rating: 4.7, image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=500&fit=crop' },
    { id: 11, name: 'Designer Handbag', category: 'fashion', price: 149.99, icon: 'fa-shopping-bag', rating: 4.4, image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=500&h=500&fit=crop' },
    { id: 12, name: 'Sunglasses', category: 'fashion', price: 59.99, icon: 'fa-glasses', rating: 4.3, image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=500&fit=crop' },
    { id: 13, name: 'Coffee Maker', category: 'home', price: 129.99, icon: 'fa-coffee', rating: 4.5, image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=500&h=500&fit=crop' },
    { id: 14, name: 'Smart TV', category: 'home', price: 599.99, icon: 'fa-tv', rating: 4.8, image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500&h=500&fit=crop' },
    { id: 15, name: 'Air Purifier', category: 'home', price: 199.99, icon: 'fa-wind', rating: 4.4, image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500&h=500&fit=crop' },
    { id: 16, name: 'Yoga Mat', category: 'sports', price: 24.99, icon: 'fa-dumbbell', rating: 4.3, image: 'https://images.unsplash.com/photo-1601925260368-ae2f83d121b0?w=500&h=500&fit=crop' },
    { id: 17, name: 'Dumbbells Set', category: 'sports', price: 89.99, icon: 'fa-dumbbell', rating: 4.6, image: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?w=500&h=500&fit=crop' },
    { id: 18, name: 'Basketball', category: 'sports', price: 34.99, icon: 'fa-basketball-ball', rating: 4.4, image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=500&h=500&fit=crop' },
    { id: 19, name: 'Face Serum', category: 'beauty', price: 49.99, icon: 'fa-spa', rating: 4.7, image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500&h=500&fit=crop' },
    { id: 20, name: 'Lipstick Set', category: 'beauty', price: 29.99, icon: 'fa-spa', rating: 4.5, image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=500&h=500&fit=crop' },
    { id: 21, name: 'Perfume', category: 'beauty', price: 79.99, icon: 'fa-spa', rating: 4.8, image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=500&h=500&fit=crop' },
    { id: 22, name: 'Makeup Palette', category: 'beauty', price: 39.99, icon: 'fa-spa', rating: 4.6, image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=500&h=500&fit=crop' },
    { id: 23, name: 'Hair Dryer', category: 'beauty', price: 59.99, icon: 'fa-spa', rating: 4.4, image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=500&h=500&fit=crop' },
    { id: 24, name: 'Skincare Kit', category: 'beauty', price: 89.99, icon: 'fa-spa', rating: 4.7, image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=500&h=500&fit=crop' },
    { id: 25, name: 'The Great Gatsby', category: 'books', price: 12.99, icon: 'fa-book', rating: 4.8, image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&h=500&fit=crop' },
    { id: 26, name: '1984 by George Orwell', category: 'books', price: 14.99, icon: 'fa-book', rating: 4.9, image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=500&h=500&fit=crop' },
    { id: 27, name: 'Programming Guide', category: 'books', price: 49.99, icon: 'fa-book', rating: 4.6, image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop' },
    { id: 28, name: 'Cookbook Collection', category: 'books', price: 24.99, icon: 'fa-book', rating: 4.5, image: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=500&h=500&fit=crop' },
    { id: 29, name: 'Mystery Novel', category: 'books', price: 16.99, icon: 'fa-book', rating: 4.7, image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500&h=500&fit=crop' },
    { id: 30, name: 'Science Fiction', category: 'books', price: 18.99, icon: 'fa-book', rating: 4.6, image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&h=500&fit=crop' },
];

// Categories Data
const categoriesData = [
    { id: 1, name: 'Electronics', icon: 'fa-laptop', count: 6, color: '#2563eb' },
    { id: 2, name: 'Fashion', icon: 'fa-tshirt', count: 6, color: '#7c3aed' },
    { id: 3, name: 'Home & Living', icon: 'fa-home', count: 3, color: '#f59e0b' },
    { id: 4, name: 'Sports', icon: 'fa-dumbbell', count: 3, color: '#10b981' },
    { id: 5, name: 'Beauty', icon: 'fa-spa', count: 6, color: '#ec4899' },
    { id: 6, name: 'Books', icon: 'fa-book', count: 6, color: '#6366f1' },
];

// Offers Data
const offersData = [
    {
        id: 1,
        title: 'Flash Sale',
        description: 'Up to 70% OFF on Electronics',
        discount: 70,
        endTime: new Date().getTime() + (24 * 60 * 60 * 1000), // 24 hours from now
    },
    {
        id: 2,
        title: 'Weekend Special',
        description: 'Buy 2 Get 1 Free on Fashion',
        discount: 33,
        endTime: new Date().getTime() + (48 * 60 * 60 * 1000), // 48 hours from now
    },
    {
        id: 3,
        title: 'New User Deal',
        description: 'Extra 20% OFF on First Order',
        discount: 20,
        endTime: new Date().getTime() + (72 * 60 * 60 * 1000), // 72 hours from now
    },
];

// Testimonials Data
const testimonialsData = [
    {
        id: 1,
        name: 'Sarah Johnson',
        role: 'Verified Buyer',
        rating: 5,
        text: 'Amazing shopping experience! Fast delivery and great quality products. Highly recommended!',
        avatar: 'SJ',
    },
    {
        id: 2,
        name: 'Michael Chen',
        role: 'Premium Member',
        rating: 5,
        text: 'Best prices and excellent customer service. I shop here regularly and always satisfied.',
        avatar: 'MC',
    },
    {
        id: 3,
        name: 'Emily Davis',
        role: 'Verified Buyer',
        rating: 5,
        text: 'Love the variety of products and easy return policy. This is my go-to shopping platform!',
        avatar: 'ED',
    },
    {
        id: 4,
        name: 'David Wilson',
        role: 'Premium Member',
        rating: 5,
        text: 'Great deals and quality products. The website is user-friendly and checkout is smooth.',
        avatar: 'DW',
    },
];

// ============================================
// State Management
// ============================================

let currentUser = null;
let cart = [];
let wishlist = [];
let orders = [];
let generatedOTP = null;
let otpTimer = null;
let otpTimerSeconds = 30;
let currentTestimonialIndex = 0;
let currentCarouselSlide = 0;
let carouselInterval = null;

// ============================================
// Initialization
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    checkLoginStatus();
    initializeEventListeners();
    loadCartFromStorage();
    loadWishlistFromStorage();
    loadOrdersFromStorage();
    updateCartBadge();
    setupAccountTabs();
});

// ============================================
// Login System
// ============================================

function checkLoginStatus() {
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        showMainContent();
    } else {
        showLoginOverlay();
    }
}

function showLoginOverlay() {
    document.getElementById('loginOverlay').classList.remove('hidden');
    document.getElementById('mainContent').style.display = 'none';
    document.getElementById('loginStep1').classList.add('active');
    document.getElementById('loginStep2').classList.remove('active');
    document.getElementById('loginStep3').classList.remove('active');
}

function showMainContent() {
    document.getElementById('loginOverlay').classList.add('hidden');
    document.getElementById('mainContent').style.display = 'block';
    initializeMainContent();
}

// Step 1: Phone/Email Form
document.getElementById('phoneEmailForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const phoneEmail = document.getElementById('phoneEmail').value.trim();
    
    if (!phoneEmail) {
        showNotification('Please enter phone number or email', 'error');
        return;
    }

    // Generate random 6-digit OTP
    generatedOTP = Math.floor(100000 + Math.random() * 900000).toString();
    
    // Store user input
    currentUser = { phoneEmail, loginTime: new Date().toISOString() };
    
    // Move to step 2
    document.getElementById('loginStep1').classList.remove('active');
    document.getElementById('loginStep2').classList.add('active');
    document.getElementById('otpSentTo').textContent = phoneEmail;
    
    // Display OTP prominently
    document.getElementById('displayOTP').textContent = generatedOTP;
    document.getElementById('otpDisplayBox').style.display = 'block';
    
    // Show SMS-style notification with OTP (after a short delay to simulate sending)
    setTimeout(() => {
        showSMSNotification(phoneEmail, generatedOTP);
    }, 500);
    
    // Focus first OTP input
    const otpInputs = document.querySelectorAll('.otp-input');
    if (otpInputs.length > 0) {
        otpInputs[0].focus();
    }
    
    // Start OTP timer
    startOTPTimer();
    
    // Setup OTP input navigation
    setupOTPInputs();
});

// Step 2: OTP Verification
document.getElementById('otpForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const otpInputs = document.querySelectorAll('.otp-input');
    const enteredOTP = Array.from(otpInputs).map(input => input.value).join('');
    
    if (enteredOTP.length !== 6) {
        showNotification('Please enter complete OTP', 'error');
        return;
    }
    
    if (enteredOTP === generatedOTP) {
        // OTP verified successfully
        document.getElementById('loginStep2').classList.remove('active');
        document.getElementById('loginStep3').classList.add('active');
        
        // Save user to localStorage
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        
        // Redirect after 1.5 seconds
        setTimeout(() => {
            showMainContent();
        }, 1500);
    } else {
        showNotification('Invalid OTP. Please try again.', 'error');
        // Clear OTP inputs
        otpInputs.forEach(input => input.value = '');
        otpInputs[0].focus();
    }
});

// Resend OTP
document.getElementById('resendOTP').addEventListener('click', () => {
    if (otpTimerSeconds > 0) return;
    
    // Generate new OTP
    generatedOTP = Math.floor(100000 + Math.random() * 900000).toString();
    
    // Update displayed OTP
    document.getElementById('displayOTP').textContent = generatedOTP;
    
    // Show SMS-style notification with new OTP
    setTimeout(() => {
        showSMSNotification(currentUser.phoneEmail, generatedOTP);
    }, 500);
    
    // Clear OTP inputs
    document.querySelectorAll('.otp-input').forEach(input => input.value = '');
    document.querySelectorAll('.otp-input')[0].focus();
    
    // Restart timer
    startOTPTimer();
});

// Back to Step 1
document.getElementById('backToStep1').addEventListener('click', () => {
    document.getElementById('loginStep2').classList.remove('active');
    document.getElementById('loginStep1').classList.add('active');
    document.getElementById('phoneEmail').value = '';
    document.getElementById('otpDisplayBox').style.display = 'none';
    document.getElementById('displayOTP').textContent = '------';
    clearOTPTimer();
});

function setupOTPInputs() {
    const otpInputs = document.querySelectorAll('.otp-input');
    
    otpInputs.forEach((input, index) => {
        input.addEventListener('input', (e) => {
            const value = e.target.value;
            if (value && /[0-9]/.test(value)) {
                if (index < otpInputs.length - 1) {
                    otpInputs[index + 1].focus();
                }
            } else {
                e.target.value = '';
            }
        });
        
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Backspace' && !e.target.value && index > 0) {
                otpInputs[index - 1].focus();
            }
        });
        
        input.addEventListener('paste', (e) => {
            e.preventDefault();
            const pastedData = e.clipboardData.getData('text').slice(0, 6);
            for (let i = 0; i < pastedData.length && i < otpInputs.length; i++) {
                if (/[0-9]/.test(pastedData[i])) {
                    otpInputs[i].value = pastedData[i];
                }
            }
            if (pastedData.length >= 6) {
                otpInputs[5].focus();
            } else if (pastedData.length > 0) {
                otpInputs[pastedData.length].focus();
            }
        });
    });
}

function startOTPTimer() {
    otpTimerSeconds = 30;
    const timerElement = document.getElementById('otpTimer');
    const resendBtn = document.getElementById('resendOTP');
    
    clearOTPTimer();
    
    otpTimer = setInterval(() => {
        otpTimerSeconds--;
        if (otpTimerSeconds > 0) {
            timerElement.textContent = `Resend in ${otpTimerSeconds}s`;
            resendBtn.style.opacity = '0.5';
            resendBtn.style.pointerEvents = 'none';
        } else {
            timerElement.textContent = '';
            resendBtn.style.opacity = '1';
            resendBtn.style.pointerEvents = 'auto';
            clearOTPTimer();
        }
    }, 1000);
}

function clearOTPTimer() {
    if (otpTimer) {
        clearInterval(otpTimer);
        otpTimer = null;
    }
}

// Logout
document.getElementById('logoutBtn')?.addEventListener('click', (e) => {
    e.preventDefault();
    localStorage.removeItem('currentUser');
    localStorage.removeItem('cart');
    currentUser = null;
    cart = [];
    showLoginOverlay();
    showNotification('Logged out successfully', 'success');
});

// ============================================
// Main Content Initialization
// ============================================

function initializeMainContent() {
    renderCategories();
    renderProducts();
    renderOffers();
    renderTestimonials();
    updateUserProfile();
    initializeCarousel();
    setupScrollAnimations();
    setupBackToTop();
    setupHeaderScroll();
    setupAccountNavigation();
}

// Setup account navigation
function setupAccountNavigation() {
    const accountLink = document.querySelector('a[href="#account"]');
    if (accountLink) {
        accountLink.addEventListener('click', (e) => {
            e.preventDefault();
            // Show profile tab by default
            const profileTab = document.querySelector('.account-menu li[data-tab="profile"]');
            if (profileTab) {
                profileTab.click();
            }
        });
    }
}

// ============================================
// Categories
// ============================================

function renderCategories() {
    const grid = document.getElementById('categoriesGrid');
    grid.innerHTML = categoriesData.map((category, index) => `
        <div class="category-card fade-in" style="animation-delay: ${index * 0.1}s" onclick="filterByCategory('${category.name.toLowerCase()}')">
            <div class="category-icon">
                <i class="fas ${category.icon}"></i>
            </div>
            <h3 class="category-name">${category.name}</h3>
            <p class="category-count">${category.count} Products</p>
        </div>
    `).join('');
    
    observeElements();
}

function filterByCategory(categoryName) {
    const filterMap = {
        'electronics': 'electronics',
        'fashion': 'fashion',
        'home & living': 'home',
        'sports': 'sports',
        'beauty': 'beauty',
        'books': 'books',
    };
    
    const filter = filterMap[categoryName.toLowerCase()] || 'all';
    document.querySelector(`[data-filter="${filter}"]`)?.click();
    
    // Scroll to products
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

// ============================================
// Helper Functions
// ============================================

function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    
    let starsHTML = '';
    for (let i = 0; i < fullStars; i++) {
        starsHTML += '<i class="fas fa-star"></i>';
    }
    if (hasHalfStar) {
        starsHTML += '<i class="fas fa-star-half-alt"></i>';
    }
    for (let i = 0; i < emptyStars; i++) {
        starsHTML += '<i class="far fa-star"></i>';
    }
    return starsHTML;
}

// Show Product Reviews Modal
function showProductReviews(productId) {
    const product = productsData.find(p => p.id === productId);
    if (!product) return;
    
    const modal = document.getElementById('reviewsModal');
    const productName = document.getElementById('reviewsProductName');
    const modalBody = document.getElementById('reviewsModalBody');
    
    productName.textContent = `${product.name} - Reviews`;
    
    // Generate sample reviews if not provided
    const reviewsList = product.reviewsList || generateSampleReviews(product.name, product.rating);
    const totalReviews = product.reviews || Math.floor(Math.random() * 2000) + 100;
    
    // Calculate rating distribution
    const ratingDistribution = calculateRatingDistribution(reviewsList, totalReviews);
    
    modalBody.innerHTML = `
        <div class="reviews-summary">
            <div class="reviews-overview">
                <div class="overview-rating">
                    <div class="overview-rating-value">${product.rating.toFixed(1)}</div>
                    <div class="overview-stars">${generateStars(product.rating)}</div>
                    <div class="overview-count">Based on ${totalReviews.toLocaleString()} reviews</div>
                </div>
                <div class="rating-breakdown">
                    ${[5, 4, 3, 2, 1].map(star => `
                        <div class="rating-bar-item">
                            <span class="rating-label">${star} star</span>
                            <div class="rating-bar">
                                <div class="rating-bar-fill" style="width: ${ratingDistribution[star] || 0}%"></div>
                            </div>
                            <span class="rating-percentage">${(ratingDistribution[star] || 0).toFixed(0)}%</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
        <div class="reviews-list">
            <h3>Customer Reviews</h3>
            ${reviewsList.map(review => `
                <div class="review-item">
                    <div class="review-header">
                        <div class="reviewer-info">
                            <div class="reviewer-avatar">${review.name.charAt(0)}</div>
                            <div>
                                <div class="reviewer-name">${review.name} ${review.verified ? '<span class="verified-purchase"><i class="fas fa-check-circle"></i> Verified Purchase</span>' : ''}</div>
                                <div class="review-date">${getRandomDate()}</div>
                            </div>
                        </div>
                        <div class="review-rating">${generateStars(review.rating)}</div>
                    </div>
                    <div class="review-text">${review.text}</div>
                    <div class="review-helpful">
                        <button class="helpful-btn"><i class="fas fa-thumbs-up"></i> Helpful (${Math.floor(Math.random() * 50)})</button>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
    
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeReviewsModal() {
    const modal = document.getElementById('reviewsModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function generateSampleReviews(productName, rating) {
    const reviewTemplates = [
        { text: `Excellent product! Exceeded my expectations.`, rating: 5 },
        { text: `Great quality and fast shipping. Very satisfied!`, rating: 5 },
        { text: `Good product overall, but could be better.`, rating: 4 },
        { text: `Amazing value for money. Highly recommend!`, rating: 5 },
        { text: `Works as described. Happy with my purchase.`, rating: 4 },
        { text: `Perfect for my needs. Will buy again!`, rating: 5 },
        { text: `Good product, meets expectations.`, rating: 4 },
        { text: `Outstanding quality and service!`, rating: 5 }
    ];
    
    const names = ['Alex T.', 'Maria G.', 'David K.', 'Lisa W.', 'James R.', 'Sophie B.', 'Michael H.', 'Emma S.'];
    
    return reviewTemplates.slice(0, 5).map((template, index) => ({
        name: names[index],
        rating: template.rating,
        text: template.text,
        verified: Math.random() > 0.3
    }));
}

function calculateRatingDistribution(reviewsList, totalReviews) {
    const distribution = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
    
    // Calculate from actual reviews
    reviewsList.forEach(review => {
        distribution[review.rating] = (distribution[review.rating] || 0) + 1;
    });
    
    // Scale to total reviews
    const scale = totalReviews / reviewsList.length;
    Object.keys(distribution).forEach(key => {
        distribution[key] = (distribution[key] / reviewsList.length) * 100;
    });
    
    return distribution;
}

function getRandomDate() {
    const daysAgo = Math.floor(Math.random() * 90);
    const date = new Date();
    date.setDate(date.getDate() - daysAgo);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

// Close modal on outside click
document.addEventListener('click', (e) => {
    const modal = document.getElementById('reviewsModal');
    if (e.target === modal) {
        closeReviewsModal();
    }
});

// ============================================
// Products
// ============================================

function renderProducts(filter = 'all') {
    const grid = document.getElementById('productsGrid');
    const filteredProducts = filter === 'all' 
        ? productsData 
        : productsData.filter(p => p.category === filter);
    
    grid.innerHTML = filteredProducts.map((product, index) => {
        const stars = generateStars(product.rating || 4.5);
        const reviews = product.reviews || Math.floor(Math.random() * 2000) + 100;
        const badges = product.badges || [];
        const verifiedPurchases = product.verifiedPurchases || Math.floor(reviews * 0.7);
        
        return `
        <div class="product-card fade-in" style="animation-delay: ${index * 0.05}s">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.onerror=null; this.style.display='none'; this.nextElementSibling.style.display='flex';">
                <i class="fas ${product.icon}" style="display: none;"></i>
                ${badges.length > 0 ? `
                    <div class="product-badges">
                        ${badges.map(badge => `<span class="product-badge badge-${badge.toLowerCase().replace(' ', '-')}">${badge}</span>`).join('')}
                    </div>
                ` : ''}
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-category">${product.category}</p>
                
                <!-- Ratings and Reviews -->
                <div class="product-rating-section">
                    <div class="product-rating">
                        <div class="stars">${stars}</div>
                        <span class="rating-value">${(product.rating || 4.5).toFixed(1)}</span>
                    </div>
                    <div class="product-reviews">
                        <span class="review-count" onclick="showProductReviews(${product.id})" title="View Reviews">(${reviews.toLocaleString()})</span>
                        ${verifiedPurchases > 0 ? `<span class="verified-badge"><i class="fas fa-check-circle"></i> ${verifiedPurchases} verified</span>` : ''}
                    </div>
                </div>
                
                <!-- Social Proof -->
                <div class="social-proof">
                    <span class="sold-count"><i class="fas fa-shopping-bag"></i> ${Math.floor(Math.random() * 5000 + 1000).toLocaleString()}+ sold</span>
                    <span class="in-stock"><i class="fas fa-check"></i> In Stock</span>
                </div>
                
                <div class="product-footer">
                    <div class="price-section">
                        <span class="product-price">$${product.price.toFixed(2)}</span>
                        ${product.originalPrice ? `<span class="original-price">$${product.originalPrice.toFixed(2)}</span>` : ''}
                    </div>
                    <div class="product-actions">
                        <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                            <i class="fas fa-cart-plus"></i> Add
                        </button>
                        <button class="wishlist-btn ${wishlist.find(w => w.id === product.id) ? 'active' : ''}" onclick="toggleWishlist(${product.id})" title="${wishlist.find(w => w.id === product.id) ? 'Remove from Wishlist' : 'Add to Wishlist'}">
                            <i class="fas fa-heart"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        `;
    }).join('');
    
    observeElements();
}

// Filter Products
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.getAttribute('data-filter');
        renderProducts(filter);
    });
});

// ============================================
// Cart Management
// ============================================

function addToCart(productId) {
    const product = productsData.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    saveCartToStorage();
    updateCartBadge();
    showNotification(`${product.name} added to cart!`, 'success');
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCartToStorage();
    updateCartDisplay();
    updateCartBadge();
    showNotification('Item removed from cart', 'info');
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;
    
    item.quantity += change;
    
    if (item.quantity <= 0) {
        removeFromCart(productId);
        return;
    }
    
    saveCartToStorage();
    updateCartDisplay();
    updateCartBadge();
}

function updateCartDisplay() {
    const cartContent = document.getElementById('cartContent');
    
    if (cart.length === 0) {
        cartContent.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <h3>Your cart is empty</h3>
                <p>Add some products to get started!</p>
                <a href="#products" class="btn btn-primary">Go Shopping</a>
            </div>
        `;
    } else {
        const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const shipping = subtotal > 50 ? 0 : 10;
        const total = subtotal + shipping;
        
        cartContent.innerHTML = `
            ${cart.map((item, index) => `
                <div class="cart-item fade-in" style="animation-delay: ${index * 0.1}s">
                    <div class="cart-item-image">
                        <img src="${item.image || '#'}" alt="${item.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'; this.nextElementSibling.innerHTML='<i class=\\'fas ${item.icon}\\'></i>';">
                        <div style="display: none; align-items: center; justify-content: center; width: 100%; height: 100%; font-size: 2rem;">
                            <i class="fas ${item.icon}"></i>
                        </div>
                    </div>
                    <div class="cart-item-info">
                        <h3 class="cart-item-name">${item.name}</h3>
                        <p class="cart-item-price">$${item.price.toFixed(2)}</p>
                    </div>
                    <div class="cart-item-controls">
                        <div class="quantity-control">
                            <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                            <span class="quantity">${item.quantity}</span>
                            <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                        </div>
                        <button class="remove-btn" onclick="removeFromCart(${item.id})">
                            <i class="fas fa-trash"></i> Remove
                        </button>
                    </div>
                </div>
            `).join('')}
            <div class="cart-summary">
                <div class="summary-item">
                    <span>Subtotal:</span>
                    <span>$${subtotal.toFixed(2)}</span>
                </div>
                <div class="summary-item">
                    <span>Shipping:</span>
                    <span>${shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                </div>
                <div class="summary-item total">
                    <span>Total:</span>
                    <span>$${total.toFixed(2)}</span>
                </div>
                <button class="btn btn-primary checkout-btn" onclick="checkout()">
                    <i class="fas fa-credit-card"></i> Proceed to Checkout
                </button>
            </div>
        `;
        
        observeElements();
    }
}

// Checkout function moved to Order Functions section above

function updateCartBadge() {
    const badge = document.getElementById('cartBadge');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    badge.textContent = totalItems;
    badge.style.display = totalItems > 0 ? 'flex' : 'none';
}

function saveCartToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function loadCartFromStorage() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
}

// ============================================
// Offers
// ============================================

function renderOffers() {
    const grid = document.getElementById('offersGrid');
    grid.innerHTML = offersData.map((offer, index) => `
        <div class="offer-card fade-in" style="animation-delay: ${index * 0.2}s">
            <div class="offer-header">
                <div>
                    <span class="offer-badge">${offer.discount}% OFF</span>
                    <h3 class="offer-title">${offer.title}</h3>
                </div>
            </div>
            <p class="offer-description">${offer.description}</p>
            <div class="countdown" id="countdown-${offer.id}">
                <!-- Countdown will be updated by updateCountdowns -->
            </div>
            <button class="offer-btn" onclick="showNotification('Offer applied!', 'success')">
                Grab Now <i class="fas fa-arrow-right"></i>
            </button>
        </div>
    `).join('');
    
    updateCountdowns();
    setInterval(updateCountdowns, 1000);
    observeElements();
}

function updateCountdowns() {
    offersData.forEach(offer => {
        const countdownEl = document.getElementById(`countdown-${offer.id}`);
        if (!countdownEl) return;
        
        const now = new Date().getTime();
        const distance = offer.endTime - now;
        
        if (distance > 0) {
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            countdownEl.innerHTML = `
                ${days > 0 ? `
                    <div class="countdown-item">
                        <span class="countdown-value">${days}</span>
                        <span class="countdown-label">Days</span>
                    </div>
                ` : ''}
                <div class="countdown-item">
                    <span class="countdown-value">${hours.toString().padStart(2, '0')}</span>
                    <span class="countdown-label">Hours</span>
                </div>
                <div class="countdown-item">
                    <span class="countdown-value">${minutes.toString().padStart(2, '0')}</span>
                    <span class="countdown-label">Mins</span>
                </div>
                <div class="countdown-item">
                    <span class="countdown-value">${seconds.toString().padStart(2, '0')}</span>
                    <span class="countdown-label">Secs</span>
                </div>
            `;
        } else {
            countdownEl.innerHTML = '<div class="countdown-item"><span class="countdown-value">Expired</span></div>';
        }
    });
}

// ============================================
// Testimonials
// ============================================

function renderTestimonials() {
    const slider = document.getElementById('testimonialsSlider');
    slider.innerHTML = `
        <div class="testimonials-container" id="testimonialsContainer">
            ${testimonialsData.map(testimonial => `
                <div class="testimonial-card">
                    <div class="testimonial-rating">
                        ${'★'.repeat(testimonial.rating)}${'☆'.repeat(5 - testimonial.rating)}
                    </div>
                    <p class="testimonial-text">"${testimonial.text}"</p>
                    <div class="testimonial-author">
                        <div class="author-avatar">${testimonial.avatar}</div>
                        <div class="author-info">
                            <h4>${testimonial.name}</h4>
                            <p>${testimonial.role}</p>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
    
    updateTestimonialPosition();
}

function updateTestimonialPosition() {
    const container = document.getElementById('testimonialsContainer');
    if (container) {
        container.style.transform = `translateX(-${currentTestimonialIndex * 100}%)`;
    }
}

document.getElementById('prevTestimonial')?.addEventListener('click', () => {
    currentTestimonialIndex = (currentTestimonialIndex - 1 + testimonialsData.length) % testimonialsData.length;
    updateTestimonialPosition();
});

document.getElementById('nextTestimonial')?.addEventListener('click', () => {
    currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonialsData.length;
    updateTestimonialPosition();
});

// Auto-rotate testimonials
setInterval(() => {
    if (document.getElementById('testimonialsContainer')) {
        currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonialsData.length;
        updateTestimonialPosition();
    }
}, 5000);

// ============================================
// Carousel
// ============================================

function initializeCarousel() {
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.dot');
    
    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        slides[index].classList.add('active');
        dots[index].classList.add('active');
        currentCarouselSlide = index;
    }
    
    document.getElementById('prevSlide')?.addEventListener('click', () => {
        const newIndex = (currentCarouselSlide - 1 + slides.length) % slides.length;
        showSlide(newIndex);
    });
    
    document.getElementById('nextSlide')?.addEventListener('click', () => {
        const newIndex = (currentCarouselSlide + 1) % slides.length;
        showSlide(newIndex);
    });
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => showSlide(index));
    });
    
    // Auto-rotate carousel
    carouselInterval = setInterval(() => {
        const newIndex = (currentCarouselSlide + 1) % slides.length;
        showSlide(newIndex);
    }, 5000);
}

// ============================================
// User Profile
// ============================================

function updateUserProfile() {
    if (!currentUser) return;
    
    const email = currentUser.phoneEmail.includes('@') ? currentUser.phoneEmail : '-';
    const phone = !currentUser.phoneEmail.includes('@') ? currentUser.phoneEmail : '-';
    const memberSince = currentUser.loginTime ? new Date(currentUser.loginTime).toLocaleDateString() : '-';
    const address = currentUser.address || 'Not set';
    
    document.getElementById('userDisplayName').textContent = email.split('@')[0] || 'User';
    document.getElementById('userEmail').textContent = email;
    document.getElementById('profileEmail').textContent = email;
    document.getElementById('profilePhone').textContent = phone;
    document.getElementById('memberSince').textContent = memberSince;
    document.getElementById('profileAddress').textContent = address;
    
    // Update statistics
    updateAccountStatistics();
}

function updateAccountStatistics() {
    document.getElementById('totalOrders').textContent = orders.length;
    document.getElementById('wishlistCount').textContent = wishlist.length;
    document.getElementById('wishlistCountBadge').textContent = `${wishlist.length} items`;
    document.getElementById('statOrders').textContent = orders.length;
    document.getElementById('statWishlist').textContent = wishlist.length;
    
    const totalSpent = orders.reduce((sum, order) => sum + (order.total || 0), 0);
    document.getElementById('statSpent').textContent = `$${totalSpent.toFixed(2)}`;
    
    const reviewsWritten = orders.filter(o => o.reviewed).length;
    document.getElementById('statReviews').textContent = reviewsWritten;
}

// ============================================
// Account Tabs
// ============================================

function setupAccountTabs() {
    const menuItems = document.querySelectorAll('.account-menu li[data-tab]');
    const tabs = document.querySelectorAll('.account-tab');
    
    menuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const tabName = item.getAttribute('data-tab');
            
            // Update active menu item
            menuItems.forEach(li => li.classList.remove('active'));
            item.classList.add('active');
            
            // Show corresponding tab
            tabs.forEach(tab => tab.classList.remove('active'));
            document.getElementById(`${tabName}Tab`).classList.add('active');
            
            // Load tab content
            if (tabName === 'orders') {
                renderOrders();
                // Setup order filters
                setupOrderFilters();
            } else if (tabName === 'wishlist') {
                renderWishlist();
            }
        });
    });
}

function setupOrderFilters() {
    const filterChips = document.querySelectorAll('.filter-chip');
    filterChips.forEach(chip => {
        chip.addEventListener('click', () => {
            filterChips.forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            const filter = chip.getAttribute('data-filter');
            renderOrders(filter);
        });
    });
}

// ============================================
// Orders
// ============================================

function renderOrders(filter = 'all') {
    const ordersList = document.getElementById('ordersList');
    
    let filteredOrders = orders;
    if (filter !== 'all') {
        filteredOrders = orders.filter(order => order.status === filter);
    }
    
    if (filteredOrders.length === 0) {
        ordersList.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-box-open"></i>
                <h3>No orders found</h3>
                <p>You haven't placed any orders yet.</p>
                <a href="#products" class="btn btn-primary">Start Shopping</a>
            </div>
        `;
        return;
    }
    
    ordersList.innerHTML = filteredOrders.map((order, index) => `
        <div class="order-card fade-in" style="animation-delay: ${index * 0.1}s">
            <div class="order-header">
                <div class="order-info">
                    <div class="order-id">Order #${order.id}</div>
                    <div class="order-date">${new Date(order.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</div>
                </div>
                <div class="order-status status-${order.status}">
                    <i class="fas fa-${getStatusIcon(order.status)}"></i>
                    ${order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                </div>
            </div>
            <div class="order-items">
                ${order.items.map(item => `
                    <div class="order-item">
                        <img src="${item.image || '#'}" alt="${item.name}" onerror="this.style.display='none'">
                        <div class="order-item-info">
                            <h4>${item.name}</h4>
                            <p>Quantity: ${item.quantity} × $${item.price.toFixed(2)}</p>
                        </div>
                        <div class="order-item-price">$${(item.price * item.quantity).toFixed(2)}</div>
                    </div>
                `).join('')}
            </div>
            <div class="order-footer">
                <div class="order-total">
                    <span>Total: <strong>$${order.total.toFixed(2)}</strong></span>
                </div>
                <div class="order-actions">
                    ${order.status === 'delivered' ? `
                        <button class="btn btn-secondary" onclick="trackOrder('${order.id}')">
                            <i class="fas fa-map-marker-alt"></i> Track
                        </button>
                        <button class="btn btn-primary" onclick="reviewOrder('${order.id}')">
                            <i class="fas fa-star"></i> Review
                        </button>
                    ` : ''}
                    ${order.status === 'pending' ? `
                        <button class="btn btn-danger" onclick="cancelOrder('${order.id}')">
                            <i class="fas fa-times"></i> Cancel
                        </button>
                    ` : ''}
                    <button class="btn btn-secondary" onclick="viewOrderDetails('${order.id}')">
                        <i class="fas fa-eye"></i> View Details
                    </button>
                </div>
            </div>
        </div>
    `).join('');
    
    observeElements();
}

function getStatusIcon(status) {
    const icons = {
        'pending': 'clock',
        'processing': 'cog',
        'shipped': 'truck',
        'delivered': 'check-circle',
        'cancelled': 'times-circle'
    };
    return icons[status] || 'box';
}

function loadOrdersFromStorage() {
    const savedOrders = localStorage.getItem('orders');
    if (savedOrders) {
        orders = JSON.parse(savedOrders);
    } else {
        // Add some sample orders for demo
        orders = [
            {
                id: 'ORD' + (Date.now() - 86400000),
                date: new Date(Date.now() - 86400000).toISOString(),
                items: [
                    { id: 1, name: 'Wireless Headphones', price: 99.99, quantity: 1, image: productsData[0].image }
                ],
                total: 109.99,
                status: 'delivered',
                reviewed: false
            }
        ];
        saveOrdersToStorage();
    }
}

function saveOrdersToStorage() {
    localStorage.setItem('orders', JSON.stringify(orders));
}

// ============================================
// Wishlist
// ============================================

function renderWishlist() {
    const wishlistGrid = document.getElementById('wishlistGrid');
    
    if (wishlist.length === 0) {
        wishlistGrid.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-heart"></i>
                <h3>Your wishlist is empty</h3>
                <p>Add products you love to your wishlist!</p>
                <a href="#products" class="btn btn-primary">Browse Products</a>
            </div>
        `;
        return;
    }
    
    wishlistGrid.innerHTML = wishlist.map((item, index) => `
        <div class="wishlist-item fade-in" style="animation-delay: ${index * 0.1}s">
            <div class="wishlist-item-image">
                <img src="${item.image}" alt="${item.name}" onerror="this.style.display='none'">
                <button class="remove-wishlist-btn" onclick="removeFromWishlist(${item.id})" title="Remove from wishlist">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="wishlist-item-info">
                <h4>${item.name}</h4>
                <p class="wishlist-category">${item.category}</p>
                <div class="wishlist-rating">
                    ${generateStars(item.rating || 4.5)}
                    <span>${(item.rating || 4.5).toFixed(1)}</span>
                </div>
                <div class="wishlist-price">$${item.price.toFixed(2)}</div>
                <div class="wishlist-actions">
                    <button class="btn btn-primary" onclick="addToCartFromWishlist(${item.id})">
                        <i class="fas fa-cart-plus"></i> Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `).join('');
    
    observeElements();
}

function addToWishlist(productId) {
    const product = productsData.find(p => p.id === productId);
    if (!product) return;
    
    if (wishlist.find(item => item.id === productId)) {
        showNotification('Product already in wishlist', 'info');
        return;
    }
    
    wishlist.push(product);
    saveWishlistToStorage();
    updateAccountStatistics();
    showNotification(`${product.name} added to wishlist!`, 'success');
    
    // Update wishlist button
    updateWishlistButton(productId, true);
    
    // Update wishlist if tab is active
    if (document.getElementById('wishlistTab').classList.contains('active')) {
        renderWishlist();
    }
}

function toggleWishlist(productId) {
    const isInWishlist = wishlist.find(item => item.id === productId);
    if (isInWishlist) {
        removeFromWishlist(productId);
    } else {
        addToWishlist(productId);
    }
}

function updateWishlistButton(productId, isInWishlist) {
    const btn = document.querySelector(`.wishlist-btn[onclick*="${productId}"]`);
    if (btn) {
        if (isInWishlist) {
            btn.classList.add('active');
            btn.title = 'Remove from Wishlist';
        } else {
            btn.classList.remove('active');
            btn.title = 'Add to Wishlist';
        }
    }
}

function removeFromWishlist(productId) {
    wishlist = wishlist.filter(item => item.id !== productId);
    saveWishlistToStorage();
    updateAccountStatistics();
    updateWishlistButton(productId, false);
    renderWishlist();
    showNotification('Removed from wishlist', 'info');
}

function addToCartFromWishlist(productId) {
    addToCart(productId);
    removeFromWishlist(productId);
}

function loadWishlistFromStorage() {
    const savedWishlist = localStorage.getItem('wishlist');
    if (savedWishlist) {
        wishlist = JSON.parse(savedWishlist);
    }
}

function saveWishlistToStorage() {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
}

// ============================================
// Order Functions
// ============================================

function trackOrder(orderId) {
    showNotification('Tracking information will be available soon!', 'info');
}

function reviewOrder(orderId) {
    showNotification('Review feature coming soon!', 'info');
}

function cancelOrder(orderId) {
    if (confirm('Are you sure you want to cancel this order?')) {
        const order = orders.find(o => o.id === orderId);
        if (order) {
            order.status = 'cancelled';
            saveOrdersToStorage();
            renderOrders();
            showNotification('Order cancelled successfully', 'success');
        }
    }
}

function viewOrderDetails(orderId) {
    const order = orders.find(o => o.id === orderId);
    if (order) {
        showNotification(`Order #${order.id} - Total: $${order.total.toFixed(2)}`, 'info');
    }
}

// Update checkout to create order
function checkout() {
    if (cart.length === 0) {
        showNotification('Your cart is empty', 'error');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0) + (total > 50 ? 0 : 10);
    
    // Create order
    const order = {
        id: 'ORD' + Date.now(),
        date: new Date().toISOString(),
        items: cart.map(item => ({
            id: item.id,
            name: item.name,
            price: item.price,
            quantity: item.quantity,
            image: item.image
        })),
        total: total,
        status: 'pending',
        reviewed: false
    };
    
    orders.push(order);
    saveOrdersToStorage();
    
    showNotification(`Order placed successfully! Order #${order.id}`, 'success');
    cart = [];
    saveCartToStorage();
    updateCartDisplay();
    updateCartBadge();
    updateAccountStatistics();
}

// ============================================
// Settings Functions
// ============================================

function editProfile() {
    showNotification('Profile editing feature coming soon!', 'info');
}

function showChangePassword() {
    showNotification('Password change feature coming soon!', 'info');
}

function deleteAccount() {
    if (confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
        localStorage.removeItem('currentUser');
        localStorage.removeItem('cart');
        localStorage.removeItem('wishlist');
        localStorage.removeItem('orders');
        showNotification('Account deleted', 'info');
        setTimeout(() => {
            window.location.reload();
        }, 1000);
    }
}

// ============================================
// Scroll Animations
// ============================================

function setupScrollAnimations() {
    observeElements();
    
    window.addEventListener('scroll', () => {
        observeElements();
    });
}

function observeElements() {
    const elements = document.querySelectorAll('.fade-in:not(.visible)');
    
    elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isVisible) {
            element.classList.add('visible');
        }
    });
}

// ============================================
// Back to Top
// ============================================

function setupBackToTop() {
    const btn = document.getElementById('backToTop');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    });
    
    btn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ============================================
// Header Scroll Effect
// ============================================

function setupHeaderScroll() {
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// ============================================
// Event Listeners
// ============================================

function initializeEventListeners() {
    // Newsletter Form
    document.getElementById('newsletterForm')?.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = e.target.querySelector('input[type="email"]').value;
        showNotification(`Thank you for subscribing with ${email}!`, 'success');
        e.target.reset();
    });
    
    // Navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Cart link
    document.querySelector('a[href="#cart"]')?.addEventListener('click', () => {
        setTimeout(updateCartDisplay, 100);
    });
}

// ============================================
// Notification System
// ============================================

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#2563eb'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        z-index: 10001;
        animation: slideInRight 0.3s ease;
        max-width: 400px;
        display: flex;
        align-items: center;
        gap: 0.5rem;
    `;
    
    const icon = type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle';
    notification.innerHTML = `<i class="fas ${icon}"></i> <span>${message}</span>`;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Show SMS-style notification with OTP
function showSMSNotification(phoneEmail, otp) {
    // Remove any existing SMS notification
    const existing = document.getElementById('smsNotification');
    if (existing) {
        existing.remove();
    }
    
    const smsNotification = document.createElement('div');
    smsNotification.id = 'smsNotification';
    smsNotification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        width: 320px;
        background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
        border-radius: 15px;
        box-shadow: 0 20px 60px rgba(0,0,0,0.3);
        z-index: 10002;
        animation: slideInDown 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        overflow: hidden;
        border: 1px solid rgba(255,255,255,0.1);
    `;
    
    const isPhone = /^[\d\s\-\+\(\)]+$/.test(phoneEmail);
    const senderName = isPhone ? 'ShopVista' : 'ShopVista';
    const senderId = isPhone ? 'SMS' : 'Email';
    
    smsNotification.innerHTML = `
        <div style="padding: 1rem; border-bottom: 1px solid rgba(255,255,255,0.1);">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.5rem;">
                <div style="display: flex; align-items: center; gap: 0.5rem;">
                    <div style="width: 40px; height: 40px; background: linear-gradient(135deg, #2563eb, #7c3aed); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 1.2rem;">
                        <i class="fas fa-${isPhone ? 'sms' : 'envelope'}" style="font-size: 1rem;"></i>
                    </div>
                    <div>
                        <div style="color: white; font-weight: 600; font-size: 0.95rem;">${senderName}</div>
                        <div style="color: #94a3b8; font-size: 0.75rem;">${senderId}</div>
                    </div>
                </div>
                <div style="color: #94a3b8; font-size: 0.75rem;">Now</div>
            </div>
            <div style="color: #cbd5e1; font-size: 0.85rem; margin-bottom: 0.5rem;">To: ${phoneEmail}</div>
        </div>
        <div style="padding: 1rem; background: rgba(255,255,255,0.05);">
            <div style="color: #e2e8f0; font-size: 0.9rem; margin-bottom: 1rem; line-height: 1.5;">
                Your ShopVista verification code is:
            </div>
            <div style="background: linear-gradient(135deg, #2563eb, #7c3aed); padding: 1rem; border-radius: 10px; text-align: center; margin-bottom: 0.5rem;">
                <div style="font-size: 2rem; font-weight: bold; color: white; letter-spacing: 0.3rem; font-family: 'Courier New', monospace;">
                    ${otp}
                </div>
            </div>
            <div style="color: #94a3b8; font-size: 0.75rem; text-align: center; margin-top: 0.5rem;">
                Valid for 10 minutes. Do not share this code.
            </div>
        </div>
        <div style="padding: 0.75rem; background: rgba(0,0,0,0.2); display: flex; justify-content: space-between; align-items: center; border-top: 1px solid rgba(255,255,255,0.1);">
            <button onclick="copyOTPFromNotification('${otp}')" style="flex: 1; padding: 0.5rem; background: rgba(37, 99, 235, 0.3); border: 1px solid rgba(37, 99, 235, 0.5); border-radius: 8px; color: white; cursor: pointer; font-weight: 600; font-size: 0.85rem; margin-right: 0.5rem; transition: all 0.3s;">
                <i class="fas fa-copy"></i> Copy OTP
            </button>
            <button onclick="document.getElementById('smsNotification').remove()" style="padding: 0.5rem 1rem; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); border-radius: 8px; color: white; cursor: pointer; font-weight: 600; font-size: 0.85rem; transition: all 0.3s;">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    document.body.appendChild(smsNotification);
    
    // Add Font Awesome if not already loaded
    if (!document.querySelector('link[href*="font-awesome"]')) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
        document.head.appendChild(link);
    }
    
    // Auto-remove after 15 seconds (longer than regular notifications)
    setTimeout(() => {
        if (smsNotification.parentNode) {
            smsNotification.style.animation = 'slideOutUp 0.3s ease';
            setTimeout(() => {
                if (smsNotification.parentNode) {
                    smsNotification.parentNode.removeChild(smsNotification);
                }
            }, 300);
        }
    }, 15000);
}

// Copy OTP from notification
function copyOTPFromNotification(otp) {
    navigator.clipboard.writeText(otp).then(() => {
        showNotification('OTP copied to clipboard!', 'success');
        const notification = document.getElementById('smsNotification');
        if (notification) {
            const btn = notification.querySelector('button[onclick*="copyOTPFromNotification"]');
            if (btn) {
                const originalHTML = btn.innerHTML;
                btn.innerHTML = '<i class="fas fa-check"></i> Copied!';
                btn.style.background = 'rgba(16, 185, 129, 0.3)';
                btn.style.borderColor = 'rgba(16, 185, 129, 0.5)';
                setTimeout(() => {
                    btn.innerHTML = originalHTML;
                    btn.style.background = '';
                    btn.style.borderColor = '';
                }, 2000);
            }
        }
    }).catch(() => {
        showNotification('Failed to copy OTP', 'error');
    });
}

// Copy OTP function
function copyOTP() {
    const otp = document.getElementById('displayOTP').textContent;
    if (otp && otp !== '------') {
        navigator.clipboard.writeText(otp).then(() => {
            const btn = document.getElementById('copyOTPBtn');
            const originalHTML = btn.innerHTML;
            btn.innerHTML = '<i class="fas fa-check"></i> Copied!';
            btn.style.background = '#10b981';
            setTimeout(() => {
                btn.innerHTML = originalHTML;
                btn.style.background = '';
            }, 2000);
            showNotification('OTP copied to clipboard!', 'success');
        }).catch(() => {
            showNotification('Failed to copy OTP', 'error');
        });
    }
}

// Add fadeOut animation
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            opacity: 0;
            transform: translateX(100px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    @keyframes fadeOut {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(100px);
        }
    }
    @keyframes slideInDown {
        from {
            opacity: 0;
            transform: translateY(-100px) scale(0.8);
        }
        to {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
    }
    @keyframes slideOutUp {
        from {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
        to {
            opacity: 0;
            transform: translateY(-100px) scale(0.8);
        }
    }
`;
document.head.appendChild(style);


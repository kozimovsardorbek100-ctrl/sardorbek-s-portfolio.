// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Callback button functionality
document.querySelector('.btn-callback')?.addEventListener('click', function() {
    alert('Форма обратной связи будет реализована здесь');
});

// Add to cart buttons
document.querySelectorAll('.btn-add').forEach(button => {
    button.addEventListener('click', function() {
        alert('Товар добавлен в корзину');
    });
});

// Purchase button
document.querySelector('.btn-purchase')?.addEventListener('click', function() {
    alert('Переход к оформлению заказа');
});

// More products button
document.querySelector('.btn-more')?.addEventListener('click', function() {
    alert('Загрузка дополнительных товаров');
});

// Header scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// Portfolio image hover effect
document.querySelectorAll('.portfolio-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
        this.style.transition = 'transform 0.3s ease';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// Catalog card hover effect
document.querySelectorAll('.catalog-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});


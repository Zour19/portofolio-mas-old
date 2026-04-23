// Smooth scrolling and mobile navigation
function smoothScroll(event, targetId) {
    event.preventDefault();
    const menu = document.getElementById('menu');
    if (menu) {
        menu.classList.remove('mobile-active');
    }
    document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
}

const menuToggle = document.getElementById('menuToggle');
const menu = document.getElementById('menu');

if (menuToggle && menu) {
    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('mobile-active');
    });
}

if (menu) {
    const menuLinks = menu.querySelectorAll('a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('mobile-active');
        });
    });
}

// Lightbox logic
function openLightbox(src) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    if (!lightbox || !lightboxImg) return;
    lightboxImg.src = src;
    lightbox.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeLightbox(event) {
    const lightbox = document.getElementById('lightbox');
    if (!lightbox) return;
    if (event && event.target !== lightbox && event.target.className !== 'close-lightbox') {
        return;
    }
    lightbox.style.display = 'none';
    document.body.style.overflow = 'auto';
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeLightbox();
    }
});

// Gallery filter logic
const filterButtons = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const category = button.dataset.category;
        galleryItems.forEach(item => {
            const itemCategory = item.dataset.category;
            item.style.display = category === 'all' || itemCategory === category ? 'block' : 'none';
        });
    });
});

// Prevent broken images from showing
window.addEventListener('error', (event) => {
    if (event.target.tagName === 'IMG') {
        event.target.style.display = 'none';
    }
}, true);

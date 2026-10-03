// Mobile menu
(() => {
    const btn = document.getElementById('menu-btn');
    const nav = document.getElementById('mobile-nav');
    const icon = document.getElementById('menu-icon');
    if (!btn || !nav) return;

    const setOpen = (open) => {
        nav.classList.toggle('hidden', !open);
        btn.setAttribute('aria-expanded', String(open));
        btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
        icon.setAttribute('href', open ? '#i-close' : '#i-menu');
    };

    btn.addEventListener('click', () => setOpen(btn.getAttribute('aria-expanded') !== 'true'));
    nav.addEventListener('click', (e) => { if (e.target.closest('a')) setOpen(false); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setOpen(false); });
    window.matchMedia('(min-width: 1024px)').addEventListener('change', (e) => { if (e.matches) setOpen(false); });
})();

// Projects carousel
(() => {
    const root = document.querySelector('[data-carousel]');
    if (!root) return;

    const viewport = root.querySelector('[data-viewport]');
    const track = root.querySelector('[data-track]');
    const slides = Array.from(track.children);
    const dotsWrap = root.querySelector('[data-dots]');
    let index = 0;

    const dots = slides.map((_, i) => {
        const dot = document.createElement('button');
        dot.type = 'button';
        dot.setAttribute('aria-label', `Go to project ${i + 1}`);
        dot.className = 'h-3 w-3 rounded-full border-2 border-ink bg-white transition-colors';
        dot.addEventListener('click', () => go(i));
        dotsWrap.appendChild(dot);
        return dot;
    });

    function go(i) {
        index = (i + slides.length) % slides.length;
        track.style.transform = `translateX(-${index * 100}%)`;
        slides.forEach((slide, n) => {
            const active = n === index;
            slide.toggleAttribute('inert', !active);
            slide.setAttribute('aria-hidden', String(!active));
        });
        dots.forEach((dot, n) => {
            dot.classList.toggle('bg-ink', n === index);
            dot.classList.toggle('bg-white', n !== index);
            dot.setAttribute('aria-current', String(n === index));
        });
    }

    root.querySelector('[data-prev]').addEventListener('click', () => go(index - 1));
    root.querySelector('[data-next]').addEventListener('click', () => go(index + 1));

    // Swipe
    let startX = null;
    viewport.addEventListener('pointerdown', (e) => { startX = e.clientX; });
    viewport.addEventListener('pointerup', (e) => {
        if (startX === null) return;
        const dx = e.clientX - startX;
        startX = null;
        if (Math.abs(dx) > 50) go(index + (dx < 0 ? 1 : -1));
    });
    viewport.addEventListener('pointercancel', () => { startX = null; });

    // Arrow keys while focus is inside the carousel
    root.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') go(index + 1);
        if (e.key === 'ArrowLeft') go(index - 1);
    });

    go(0);
})();

// Footer year
(() => {
    const year = document.getElementById('year');
    if (year) year.textContent = new Date().getFullYear();
})();

// Lightbox for design works and photos
(() => {
    const dialog = document.getElementById('lightbox');
    if (!dialog || typeof dialog.showModal !== 'function') return;
    const img = document.getElementById('lightbox-img');
    const cap = document.getElementById('lightbox-cap');
    let opener = null;

    document.addEventListener('click', (e) => {
        const trigger = e.target.closest('[data-lightbox]');
        if (!trigger) return;
        opener = trigger;
        img.src = trigger.dataset.src;
        img.alt = trigger.dataset.alt || '';
        cap.textContent = trigger.dataset.alt || '';
        dialog.showModal();
    });

    document.getElementById('lightbox-close').addEventListener('click', () => dialog.close());
    // Click on the dimmed backdrop closes the dialog
    dialog.addEventListener('click', (e) => { if (e.target === dialog) dialog.close(); });
    dialog.addEventListener('close', () => { img.src = ''; if (opener) opener.focus(); });
})();

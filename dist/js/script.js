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

// Scroll progress bar + back-to-top button
(() => {
    const bar = document.getElementById('scroll-progress');
    const top = document.getElementById('to-top');
    let ticking = false;
    const update = () => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const y = window.scrollY;
        if (bar) bar.style.transform = `scaleX(${max > 0 ? Math.min(y / max, 1) : 0})`;
        if (top) top.classList.toggle('is-visible', y > 600);
        ticking = false;
    };
    window.addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
    update();
})();

// Hero portrait tilt (mouse only, skipped for reduced motion)
(() => {
    const el = document.querySelector('[data-tilt]');
    if (!el || !window.matchMedia('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)').matches) return;
    el.addEventListener('pointermove', (e) => {
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        el.style.setProperty('--ry', `${x * 10}deg`);
        el.style.setProperty('--rx', `${-y * 10}deg`);
    });
    el.addEventListener('pointerleave', () => { el.style.setProperty('--rx', '0deg'); el.style.setProperty('--ry', '0deg'); });
})();

// Split [data-hop] headings into words and letters so they can jump
(() => {
    document.querySelectorAll('main h2.font-display:not([data-hop])').forEach((h) => { if (!h.children.length) h.setAttribute('data-hop', ''); });
    document.querySelectorAll('[data-hop]').forEach((el) => {
        const text = el.textContent.trim();
        el.setAttribute('aria-label', text);
        let k = 0;
        el.textContent = '';
        text.split(/\s+/).forEach((word, w, all) => {
            const span = document.createElement('span');
            span.className = 'hop-word';
            span.setAttribute('aria-hidden', 'true');
            [...word].forEach((ch) => {
                const c = document.createElement('span');
                c.className = 'hop-char';
                c.style.setProperty('--k', k++);
                c.textContent = ch;
                span.appendChild(c);
            });
            el.appendChild(span);
            if (w < all.length - 1) el.appendChild(document.createTextNode(' '));
        });
    });
})();

// Falling 2D shapes (decorative background)
(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const NS = 'http://www.w3.org/2000/svg';
    const COLORS = ['#c4f04d', '#ff7d9f', '#6f4bff', '#ffffff'];
    const SHAPES = [
        '<polygon points="50,8 94,88 6,88"/>',                                  // triangle
        '<rect x="12" y="12" width="76" height="76"/>',                         // square
        '<circle cx="50" cy="50" r="40"/>',                                     // circle
        '<polygon points="50,6 90,28 90,72 50,94 10,72 10,28"/>',              // hexagon
        '<polygon points="50,6 94,38 77,92 23,92 6,38"/>',                      // pentagon
        '<polygon points="50,6 94,50 50,94 6,50"/>',                            // diamond
        '<polygon points="50,6 62,38 96,38 68,58 79,92 50,72 21,92 32,58 4,38 38,38"/>', // star
        '<polygon points="30,18 94,18 70,82 6,82"/>',                           // parallelogram
        '<polygon points="50,6 85,20 94,56 70,90 30,90 6,56 15,20"/>',          // heptagon
        '<path d="M6 94 A88 88 0 0 1 94 6 L94 94 Z"/>'                          // quarter circle
    ];

    const layer = document.createElement('div');
    layer.setAttribute('aria-hidden', 'true');
    layer.style.cssText = 'position:fixed;inset:0;overflow:hidden;pointer-events:none;z-index:5';
    document.body.appendChild(layer);

    const rand = (min, max) => min + Math.random() * (max - min);
    const pick = (list) => list[Math.floor(Math.random() * list.length)];

    const drop = () => {
        // Fall in the empty margins beside the main content; on narrow screens use the full width
        const gutter = (window.innerWidth - 1240) / 2;
        const sideOnly = gutter >= 70;
        const size = sideOnly ? Math.min(rand(36, 80), gutter - 24) : rand(24, 44);
        const svg = document.createElementNS(NS, 'svg');
        svg.setAttribute('viewBox', '0 0 100 100');
        svg.setAttribute('width', size);
        svg.setAttribute('height', size);
        svg.setAttribute('fill', pick(COLORS));
        svg.setAttribute('stroke', '#0b0b0b');
        svg.setAttribute('stroke-width', '6');
        svg.setAttribute('stroke-linejoin', 'miter');
        svg.style.cssText = 'position:absolute;top:0;left:0;opacity:.85;will-change:transform';
        svg.innerHTML = pick(SHAPES);
        layer.appendChild(svg);

        let x = rand(0, Math.max(0, window.innerWidth - size));
        if (sideOnly) {
            const pad = 12;
            x = Math.random() < 0.5
                ? rand(pad, gutter - size - pad)
                : window.innerWidth - gutter + rand(pad, gutter - size - pad);
        }
        const drift = sideOnly ? rand(-10, 10) : rand(-40, 40);
        const spin = rand(-540, 540);
        const fall = window.innerHeight + size * 2;

        const anim = svg.animate([
            { transform: `translate(${x}px, ${-size * 1.5}px) rotate(0deg)` },
            { transform: `translate(${x + drift}px, ${fall - size * 1.5}px) rotate(${spin}deg)` }
        ], { duration: rand(5000, 9000), easing: 'cubic-bezier(.4,0,.8,.6)', fill: 'forwards' });
        anim.onfinish = () => svg.remove();
    };

    const schedule = () => {
        setTimeout(() => {
            if (!document.hidden) drop();
            schedule();
        }, rand(500, 10000));
    };
    setTimeout(drop, 800);
    schedule();
})();

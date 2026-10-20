// Loading screen, hero intro and scroll animations.
// Runs before script.js. Everything degrades gracefully: without JS the
// loader never shows (see html.js in input.css) and content is visible.
(() => {
    const html = document.documentElement;
    const loader = document.getElementById('loader');
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    // Bots and automated renderers get the finished page straight away
    const isBot = navigator.webdriver || /bot|crawl|spider|slurp|lighthouse|headless/i.test(navigator.userAgent);

    const playIntro = () => html.classList.add('intro-play');

    // ---- Loading screen --------------------------------------------------
    const startLoader = () => {
        if (!loader || isBot) {
            loader && loader.remove();
            html.classList.remove('is-loading');
            playIntro();
            return;
        }

        // Full show on the first visit of a session, a short one after that
        let seen = false;
        try { seen = sessionStorage.getItem('loader-seen') === '1'; sessionStorage.setItem('loader-seen', '1'); } catch (e) { /* storage blocked */ }
        if (seen) loader.classList.add('loader--quick');

        const fill = document.getElementById('loader-fill');
        const pct = document.getElementById('loader-pct');
        const step = (name) => { const li = loader.querySelector(`[data-step="${name}"]`); if (li) li.classList.add('on'); };

        const start = performance.now();
        const minTime = reduce ? 300 : seen ? 650 : 1900;
        const maxTime = 4500; // never wait longer than this for slow images
        let target = 35;      // progress the bar is heading to
        let shown = 0;        // progress currently drawn
        let finished = false;

        const bump = (v) => { target = Math.max(target, v); };
        if (document.fonts && document.fonts.ready) {
            document.fonts.ready.then(() => { bump(70); step('fonts'); });
        } else {
            bump(70); step('fonts');
        }
        const onLoad = () => { bump(100); step('fonts'); step('images'); };
        if (document.readyState === 'complete') onLoad(); else window.addEventListener('load', onLoad, { once: true });

        const tick = (now) => {
            const elapsed = now - start;
            if (elapsed > maxTime) bump(100);
            // Ease toward the target, but slowly creep so the bar never looks stuck
            const creep = Math.min(target, shown + 0.15);
            shown = Math.max(creep, shown + (target - shown) * (seen ? 0.25 : 0.08));
            // Hold the bar just short of 100 until the minimum show time has passed
            const cap = elapsed < minTime ? 99 * (elapsed / minTime) : 100;
            const value = Math.min(shown, cap, 100);
            fill.style.transform = `scaleX(${value / 100})`;
            pct.textContent = `${String(Math.floor(value)).padStart(3, '0')}%`;

            if (value >= 100) finish();
            else requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);

        function finish() {
            if (finished) return;
            finished = true;
            step('done');

            if (reduce) {
                loader.remove();
                html.classList.remove('is-loading');
                playIntro();
                return;
            }
            loader.classList.add('loader--done');                     // card "presses" into the page
            setTimeout(() => loader.classList.add('loader--exit'), seen ? 120 : 380); // colored columns wipe up
            setTimeout(() => html.classList.remove('is-loading'), seen ? 300 : 600);
            setTimeout(playIntro, seen ? 450 : 850);
            setTimeout(() => loader.remove(), seen ? 1400 : 1900);
        }
    };

    // ---- Scroll reveals -------------------------------------------------------
    const setupReveals = () => {
        if (reduce || isBot || !('IntersectionObserver' in window)) return;
        const main = document.getElementById('main');
        if (!main) return;

        // Every top-level block of the page except the hero, plus the footer
        const blocks = Array.from(main.children).slice(1);
        const footer = document.querySelector('footer.grid');

        blocks.forEach((block) => {
            block.classList.add('reveal');
            // Stagger list items, cards and stat tiles inside the block
            const groups = new Map();
            block.querySelectorAll('ul > li, ol > li, [data-track] > article, [data-glance] > div').forEach((item) => {
                if (item.closest('.chip') || item.classList.contains('chip')) return;
                const parent = item.parentElement;
                const n = groups.get(parent) || 0;
                groups.set(parent, n + 1);
                item.classList.add('reveal-item');
                item.style.setProperty('--d', `${150 + Math.min(n, 10) * 70}ms`);
            });
        });

        const observe = (targets, rootMargin) => {
            const io = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;
                    entry.target.classList.add('is-in');
                    entry.target.querySelectorAll('[data-count]').forEach(countUp);
                    io.unobserve(entry.target);
                });
            }, { rootMargin });
            targets.forEach((t) => io.observe(t));
        };
        observe(blocks, '0px 0px -12% 0px');
        // The footer sits at the very end of the page, inside the bottom 12% that the margin above
        // cuts off, so on a tall screen it could never scroll into the "visible" area. Watch it plainly.
        if (footer) { footer.classList.add('reveal'); observe([footer], '0px'); }
    };

    // ---- Stat counters -------------------------------------------------------
    function countUp(el) {
        const end = parseFloat(el.dataset.count);
        if (Number.isNaN(end)) return;
        const decimals = (el.dataset.count.split('.')[1] || '').length;
        const duration = 1100;
        const t0 = performance.now();
        const frame = (now) => {
            const t = Math.min((now - t0) / duration, 1);
            const eased = 1 - Math.pow(1 - t, 3);
            el.textContent = (end * eased).toFixed(decimals);
            if (t < 1) requestAnimationFrame(frame);
            else el.textContent = el.dataset.count;
        };
        requestAnimationFrame(frame);
    }

    setupReveals();
    startLoader();
})();

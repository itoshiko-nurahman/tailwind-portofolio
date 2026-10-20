// English / Indonesian switch.
// English is the source text in index.html (so crawlers and no-JS visitors get it).
// Indonesian lives in the dictionary below, keyed by the exact English string, and is
// swapped in for text nodes and a few attributes. Strings not listed stay as they are
// (names, tech terms, handles), so only text that differs needs an entry.
(() => {
    const ID = {
        // Page
        'Itoshiko Nurahman | Web & AI Developer Portfolio': 'Itoshiko Nurahman | Portofolio Web & AI Developer',
        'Itoshiko Nurahman, Informatics student at Universitas Ahmad Dahlan, Yogyakarta. Web & AI developer building Laravel, React and Python NLP projects.':
            'Itoshiko Nurahman, mahasiswa Informatika Universitas Ahmad Dahlan, Yogyakarta. Web & AI developer yang membangun proyek Laravel, React, dan NLP berbasis Python.',
        "Loading Itoshiko Nurahman's portfolio": 'Memuat portofolio Itoshiko Nurahman',
        'Skip to content': 'Lewati ke konten',

        // Header
        'Language': 'Bahasa',
        'Primary': 'Utama',
        'Mobile': 'Seluler',
        'Projects': 'Proyek',
        'Skills': 'Keahlian',
        'About': 'Tentang',
        'Experience': 'Pengalaman',
        'Gallery': 'Galeri',
        'Open menu': 'Buka menu',
        'Close menu': 'Tutup menu',
        'Contact me': 'Hubungi saya',

        // Hero
        "Hey, I'm Itoshiko Nurahman": 'Halo, saya Itoshiko Nurahman',
        "Informatics student at Universitas Ahmad Dahlan. I build web apps and train NLP models, and I'm growing toward AI/ML and QA automation engineering.":
            'Mahasiswa Informatika Universitas Ahmad Dahlan. Saya membangun aplikasi web dan melatih model NLP, dan sedang berkembang menuju AI/ML dan QA automation engineering.',
        'Open to internships · AI/ML · QA · Web': 'Terbuka untuk magang · AI/ML · QA · Web',
        'View my work': 'Lihat karya saya',
        'Get in touch': 'Ayo ngobrol',
        'Connect with me': 'Terhubung dengan saya',
        'Portrait of Itoshiko Nurahman holding an event ID card': 'Potret Itoshiko Nurahman memegang kartu identitas acara',
        'Quick facts as code': 'Fakta singkat dalam bentuk kode',

        // Stats
        'At a glance': 'Sekilas',
        'GPA · Semester 6': 'IPK · Semester 6',
        'Projects built': 'Proyek dibuat',
        'Organizations & committees': 'Organisasi & kepanitiaan',
        'Seminars & trainings': 'Seminar & pelatihan',

        // Projects
        'Featured Projects': 'Proyek Unggulan',
        'Featured projects': 'Proyek unggulan',
        'View all projects': 'Lihat semua proyek',
        'Previous project': 'Proyek sebelumnya',
        'Next project': 'Proyek berikutnya',
        'Choose project': 'Pilih proyek',
        'A clinic management and appointment-booking website built for a partner dental clinic. I worked as system analyst and programmer in a five-person team.':
            'Situs web manajemen klinik dan pemesanan janji temu yang dibuat untuk klinik gigi mitra. Saya berperan sebagai system analyst dan programmer dalam tim beranggotakan lima orang.',
        'Web App': 'Aplikasi Web',
        'System Analysis': 'Analisis Sistem',
        'Team Project': 'Proyek Tim',
        'View on GitHub': 'Lihat di GitHub',
        'Aspect-Based Sentiment Analysis': 'Analisis Sentimen Berbasis Aspek',
        'My undergraduate thesis: sentiment analysis of Indonesian tweets about the iron-supplement (TTD) program, comparing IndoBERT, Bi-GRU and a hybrid of both across three aspects.':
            'Skripsi saya: analisis sentimen tweet berbahasa Indonesia tentang program tablet tambah darah (TTD), membandingkan IndoBERT, Bi-GRU, dan gabungan keduanya pada tiga aspek.',
        'In progress': 'Sedang dikerjakan',
        'English to German Translator': 'Penerjemah Inggris ke Jerman',
        'A group project for my Deep Learning course: a Seq2Seq Transformer encoder-decoder that translates English into German, trained on the Multi30k dataset.':
            'Proyek kelompok mata kuliah Deep Learning: encoder-decoder Transformer Seq2Seq yang menerjemahkan bahasa Inggris ke Jerman, dilatih dengan dataset Multi30k.',
        'Screenshot of the calculator app showing 1 + 1 = 2': 'Tangkapan layar aplikasi kalkulator yang menampilkan 1 + 1 = 2',
        'Calculator': 'Kalkulator',
        'A browser calculator with the four basic operations, a live expression display and clear/delete controls.':
            'Kalkulator di browser dengan empat operasi dasar, tampilan ekspresi langsung, serta tombol hapus semua dan hapus satu karakter.',
        'Screenshot of the Etch a Sketch app with a grid of random colored squares': 'Tangkapan layar aplikasi Etch a Sketch dengan kisi kotak berwarna acak',
        'A drawing grid where you choose the grid size, pick a color or randomize colors, and reset the canvas.':
            'Kisi gambar tempat kamu memilih ukuran kisi, memilih warna atau mengacak warna, dan mereset kanvas.',
        'Screenshot of the Simple Book Library app with an Add Book form': 'Tangkapan layar aplikasi Simple Book Library dengan formulir Tambah Buku',
        'A small reading tracker: add a book with its title, author, pages and read status.':
            'Pencatat bacaan sederhana: tambahkan buku beserta judul, penulis, jumlah halaman, dan status baca.',
        'Screenshot of a Tic Tac Toe board mid-game': 'Tangkapan layar papan Tic Tac Toe di tengah permainan',
        'A two-player Tic Tac Toe game in the browser with a reset button.': 'Permainan Tic Tac Toe dua pemain di browser dengan tombol reset.',
        "What I'm working on": 'Yang sedang saya kerjakan',
        'Now': 'Saat ini',
        'Writing my thesis on aspect-based sentiment analysis, and learning QA automation with Playwright and Pytest.':
            'Menulis skripsi tentang analisis sentimen berbasis aspek, dan belajar QA automation dengan Playwright dan Pytest.',

        // Training
        'Training': 'Pelatihan',
        'Sep – Dec 2023': 'Sep – Des 2023',
        'Also completed': 'Juga diselesaikan',
        'Creative Video Training': 'Pelatihan Video Kreatif',
        'Photography Training': 'Pelatihan Fotografi',
        'BHP UAD · May 2025': 'BHP UAD · Mei 2025',
        'See more on LinkedIn': 'Lihat selengkapnya di LinkedIn',

        // Skills
        'Also work with': 'Juga bekerja dengan',
        'Learning now': 'Sedang dipelajari',

        // About
        "I'm an Informatics student who loves new experiences and adapts quickly to new situations. Discipline and respect for time are principles I hold close, and I communicate well when working in a team.":
            'Saya mahasiswa Informatika yang menyukai pengalaman baru dan cepat beradaptasi dengan situasi baru. Disiplin dan menghargai waktu adalah prinsip yang saya pegang, dan saya berkomunikasi dengan baik saat bekerja dalam tim.',
        'In team projects I usually take the system analyst and programmer role. Outside the code, I write as a university journalist, design social-media graphics and edit photos.':
            'Dalam proyek tim, saya biasanya berperan sebagai system analyst dan programmer. Di luar kode, saya menulis sebagai jurnalis kampus, mendesain grafis media sosial, dan mengedit foto.',
        'Studying': 'Kuliah',
        'Informatics, Universitas Ahmad Dahlan (class of 2023)': 'Informatika, Universitas Ahmad Dahlan (angkatan 2023)',
        'Based in': 'Berdomisili di',
        'Focus': 'Fokus',
        'AI/ML, NLP and QA automation': 'AI/ML, NLP, dan QA automation',
        'Open to': 'Terbuka untuk',
        'Internships in AI/ML, QA automation and web development': 'Magang di bidang AI/ML, QA automation, dan pengembangan web',
        'Whoever strives sincerely will succeed. — my motto': 'Siapa pun yang bersungguh-sungguh akan berhasil. — motto saya',

        // Education
        'Education': 'Pendidikan',
        '2023 – Present': '2023 – Sekarang',
        'S1 Informatics': 'S1 Informatika',
        'Universitas Ahmad Dahlan, Faculty of Industrial Technology': 'Universitas Ahmad Dahlan, Fakultas Teknologi Industri',
        'Graduated 2022': 'Lulus 2022',
        'Graduated 2019': 'Lulus 2019',
        'Graduated 2016': 'Lulus 2016',
        'Vocational high school': 'Sekolah menengah kejuruan',
        'Junior high school': 'Sekolah menengah pertama',
        'Elementary school': 'Sekolah dasar',

        // What I do
        'What I do': 'Yang saya kerjakan',
        'Web development': 'Pengembangan web',
        'Responsive websites and web apps, from system analysis and planning to front-end and back-end code.':
            'Situs web responsif dan aplikasi web, mulai dari analisis dan perencanaan sistem hingga kode front-end dan back-end.',
        'Training and evaluating sequence models and Transformers on text: sentiment analysis, machine translation and grammar correction.':
            'Melatih dan mengevaluasi model sekuens dan Transformer pada teks: analisis sentimen, penerjemahan mesin, dan koreksi tata bahasa.',
        'Media & creative': 'Media & kreatif',
        'Journalism, social-media posters and photo editing for campus and community organizations.':
            'Jurnalistik, poster media sosial, dan penyuntingan foto untuk organisasi kampus dan komunitas.',
        'News writing': 'Penulisan berita',
        'Poster design': 'Desain poster',

        // Achievements and seminars
        'Achievements': 'Prestasi',
        'Selected Writer': 'Penulis Terpilih',
        'Poetry writing competition by Halo Penyair · National': 'Lomba menulis puisi oleh Halo Penyair · Nasional',
        'Participant': 'Peserta',
        'Poster competition by Duta Inspirasi Library · National': 'Lomba poster oleh Duta Inspirasi Library · Nasional',
        'Dahlan Muda Mengabdi community service program, Universitas Ahmad Dahlan · National':
            'Program pengabdian masyarakat Dahlan Muda Mengabdi, Universitas Ahmad Dahlan · Nasional',
        'Seminars & Webinars': 'Seminar & Webinar',
        '14 Aug 2024': '14 Agu 2024',
        '29 May 2024': '29 Mei 2024',
        '26 Oct 2023': '26 Okt 2023',
        'Seminar Competency Day: Becoming a Globally Standardized Professional': 'Seminar Competency Day: Menjadi Profesional Berstandar Global',
        'LPSI UAD x KKUI UAD · attended as journalist': 'LPSI UAD x KKUI UAD · hadir sebagai jurnalis',
        'Soft Skill Webinar #6: Personal Branding and Networking': 'Webinar Soft Skill #6: Personal Branding dan Networking',
        'Soft Skill Webinar #5: Project Management': 'Webinar Soft Skill #5: Manajemen Proyek',
        'Soft Skill Webinar #3: Critical Thinking': 'Webinar Soft Skill #3: Berpikir Kritis',
        'IDCamp Alumni Dialogue #4: The Power of Networking and Mentorship': 'IDCamp Alumni Dialogue #4: Kekuatan Networking dan Mentorship',
        'Competency Day: The Importance of Competency Recognition in the Workplace': 'Competency Day: Pentingnya Pengakuan Kompetensi di Dunia Kerja',
        'IDCamp Alumni Dialogue #1: Unlocking Your Potential, Personal Development in Tech':
            'IDCamp Alumni Dialogue #1: Membuka Potensimu, Pengembangan Diri di Bidang Teknologi',

        // Experience
        'Journalist': 'Jurnalis',
        '2025 – Present': '2025 – Sekarang',
        'Covers and writes about university events and seminars for the public relations and protocol office.':
            'Meliput dan menulis berita tentang acara dan seminar universitas untuk kantor humas dan protokol.',
        'Media & Communication Staff': 'Staf Media & Komunikasi',
        '2026 – Present': '2026 – Sekarang',
        'Handles media and communication for the student organization at faculty level.': 'Menangani media dan komunikasi organisasi mahasiswa tingkat fakultas.',
        'Secretary, Science & Technology': 'Sekretaris Bidang Sains & Teknologi',
        "Managed administration and records for the Informatics student association's science and technology department.":
            'Mengelola administrasi dan pencatatan bidang sains dan teknologi himpunan mahasiswa Informatika.',
        'Second Secretary': 'Sekretaris II',
        '2022 – Present': '2022 – Sekarang',
        'Supports administration and events for the village youth organization.': 'Mendukung administrasi dan kegiatan organisasi pemuda desa.',
        'Committees & past organizations': 'Kepanitiaan & organisasi terdahulu',
        'Public Relations & Gender Equality Section': 'Seksi Humas & Kesetaraan Gender',
        'Event Staff': 'Staf Acara',
        'Companion Staff': 'Staf Pendamping',
        'Member': 'Anggota',
        'Saka Bhakti Husada, Wates chapter': 'Saka Bhakti Husada, cabang Wates',
        'View full profile': 'Lihat profil lengkap',
        "Let's build something amazing together.": 'Ayo membangun sesuatu yang luar biasa bersama.',

        // Design works
        'Design Works': 'Karya Desain',
        "Poster for a Tahsin Al-Qur'an training session": "Poster pelatihan Tahsin Al-Qur'an",
        'Poster for a writing training session': 'Poster pelatihan menulis',
        "Poster greeting National Teachers' Day, 25 November 2025": 'Poster ucapan Hari Guru Nasional, 25 November 2025',
        'Poster for Pancasila Sanctity Day with the Garuda emblem': 'Poster Hari Kesaktian Pancasila dengan lambang Garuda',
        'Congratulations poster for Rakernas Lazismu 2026': 'Poster ucapan selamat Rakernas Lazismu 2026',
        'Posters': 'Poster',
        "Social-media graphics made for Lazismu's Beasiswa Sang Surya program. Tap one to enlarge.":
            'Grafis media sosial untuk program Beasiswa Sang Surya milik Lazismu. Ketuk untuk memperbesar.',

        // Photos
        'Photos': 'Foto',
        'White ixora flowers against dark green leaves': 'Bunga soka putih di antara dedaunan hijau tua',
        'Pink alpaca-shaped pen top in front of a window and a cloudy sky': 'Penutup pulpen berbentuk alpaka merah muda di depan jendela dan langit berawan',
        'Blue campus building under a bright sky, framed by tree leaves': 'Gedung kampus biru di bawah langit cerah, dibingkai dedaunan',
        "A Qur'an and green prayer beads resting on a laptop keyboard": "Al-Qur'an dan tasbih hijau di atas keyboard laptop",
        'Close-up portrait of Itoshiko': 'Potret close-up Itoshiko',
        'Edited in Lightroom': 'Diedit di Lightroom',
        'More on @itoshiko_n': 'Lebih banyak di @itoshiko_n',

        // Contact and footer
        "Let's talk.": 'Ayo ngobrol.',
        'Hiring an intern or junior teammate in AI/ML, QA automation or web development? Have a project, a question, or just want to say hi? My inbox is open.':
            'Mencari anak magang atau rekan junior di bidang AI/ML, QA automation, atau pengembangan web? Punya proyek, pertanyaan, atau sekadar ingin menyapa? Kotak masuk saya terbuka.',
        'Based in Yogyakarta, Indonesia (UTC+7)': 'Berdomisili di Yogyakarta, Indonesia (UTC+7)',
        'Send a message': 'Kirim pesan',
        'Itoshiko Nurahman. All rights reserved.': 'Itoshiko Nurahman. Hak cipta dilindungi.',
        'Image preview': 'Pratinjau gambar',
        'Close preview': 'Tutup pratinjau',
    };

    const PATTERNS = [
        [/^(\d+) of (\d+)$/, (m) => `${m[1]} dari ${m[2]}`],
        [/^Go to project (\d+)$/, (m) => `Buka proyek ${m[1]}`],
        [/^Enlarge: (.+)$/, (m, tr) => `Perbesar: ${tr(m[1])}`],
    ];

    const STORE_KEY = 'lang';
    const ATTRS = ['alt', 'aria-label', 'data-alt', 'title'];
    const norm = (s) => s.replace(/\s+/g, ' ').trim();

    const translate = (en) => {
        const key = norm(en);
        if (Object.prototype.hasOwnProperty.call(ID, key)) return ID[key];
        for (const [re, fn] of PATTERNS) {
            const m = key.match(re);
            if (m) return fn(m, translate);
        }
        return null;
    };

    // ---- Collect what can be translated (once) --------------------------
    const textNodes = []; // { node, orig }
    const attrNodes = []; // { el, attr, orig }
    const skip = (el) => el.closest('script, style, svg, [data-i18n-off]');

    const collect = () => {
        const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
        for (let n = walker.nextNode(); n; n = walker.nextNode()) {
            if (!n.parentElement || skip(n.parentElement) || !norm(n.nodeValue)) continue;
            if (translate(n.nodeValue) !== null) textNodes.push({ node: n, orig: n.nodeValue });
        }
        document.body.querySelectorAll('*').forEach((el) => {
            if (skip(el)) return;
            ATTRS.forEach((attr) => {
                const v = el.getAttribute(attr);
                if (v && translate(v) !== null) attrNodes.push({ el, attr, orig: v });
            });
        });
    };

    // ---- Apply ----------------------------------------------------------
    const doc = document.documentElement;
    const title = document.querySelector('title');
    const desc = document.querySelector('meta[name="description"]');
    const origTitle = title ? title.textContent : '';
    const origDesc = desc ? desc.getAttribute('content') : '';

    const apply = (lang) => {
        const id = lang === 'id';
        textNodes.forEach(({ node, orig }) => {
            const tr = id ? translate(orig) : null;
            node.nodeValue = tr === null ? orig : orig.match(/^\s*/)[0] + tr + orig.match(/\s*$/)[0];
        });
        attrNodes.forEach(({ el, attr, orig }) => {
            const tr = id ? translate(orig) : null;
            el.setAttribute(attr, tr === null ? orig : tr);
        });
        if (title) title.textContent = (id && translate(origTitle)) || origTitle;
        if (desc) desc.setAttribute('content', (id && translate(origDesc)) || origDesc);
        doc.lang = id ? 'id' : 'en';
        document.querySelectorAll('[data-lang]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
        document.dispatchEvent(new CustomEvent('langchange', { detail: { lang } }));
    };

    // ---- Which language to start in -------------------------------------
    const detect = () => {
        const q = new URLSearchParams(location.search).get('lang');
        if (q === 'id' || q === 'en') return q;
        try {
            const saved = localStorage.getItem(STORE_KEY);
            if (saved === 'id' || saved === 'en') return saved;
        } catch (e) { /* storage blocked */ }
        return /^id\b/i.test(navigator.language || '') ? 'id' : 'en';
    };

    let current = 'en';
    const set = (lang, persist) => {
        current = lang;
        if (persist) { try { localStorage.setItem(STORE_KEY, lang); } catch (e) { /* storage blocked */ } }
        apply(lang);
    };

    window.i18n = { t: (en) => (current === 'id' && translate(en)) || en, get lang() { return current; } };

    collect();
    document.querySelectorAll('[data-lang]').forEach((b) => b.addEventListener('click', () => set(b.dataset.lang, true)));
    set(detect(), false);
})();

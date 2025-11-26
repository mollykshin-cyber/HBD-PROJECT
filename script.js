document.addEventListener('DOMContentLoaded', () => {
    // --- Navigation Highlight ---
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === currentPath) {
            link.classList.add('active');
        }
    });

    // --- Mobile Navigation ---
    const nav = document.querySelector('nav');
    if (nav) {
        // Create hamburger button
        const mobileMenuToggle = document.createElement('button');
        mobileMenuToggle.className = 'mobile-menu-toggle';
        mobileMenuToggle.innerHTML = '<span></span><span></span><span></span>';
        mobileMenuToggle.setAttribute('aria-label', 'Toggle Menu');

        // Insert the toggle button after the logo
        const logo = nav.querySelector('.logo');
        if (logo) {
            logo.insertAdjacentElement('afterend', mobileMenuToggle);
        }

        // Get nav links
        const navLinksContainer = nav.querySelector('.nav-links');

        // Toggle menu on button click
        mobileMenuToggle.addEventListener('click', function () {
            this.classList.toggle('active');
            navLinksContainer.classList.toggle('active');
            document.body.style.overflow = navLinksContainer.classList.contains('active') ? 'hidden' : '';
        });

        // Close menu when clicking on a link
        const links = navLinksContainer.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', function () {
                mobileMenuToggle.classList.remove('active');
                navLinksContainer.classList.remove('active');
                document.body.style.overflow = '';
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function (event) {
            if (!nav.contains(event.target)) {
                mobileMenuToggle.classList.remove('active');
                navLinksContainer.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    // --- Animations ---
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => {
        el.style.animationPlayState = 'paused';
        observer.observe(el);
    });

    // --- Sparkle Effect ---
    // --- Sparkle Effect ---
    function createSparkles() {
        const hero = document.querySelector('.hero');
        if (!hero) {
            console.warn('Hero section not found for sparkles');
            return;
        }

        // Clear existing sparkles to prevent duplicates if re-run
        const existingSparkles = hero.querySelectorAll('.sparkle');
        existingSparkles.forEach(s => s.remove());

        const sparkleCount = 100;
        const colors = ['#ffd700', '#ffffff', '#f0f8ff', '#e0ffff']; // Brighter Gold, White, AliceBlue, LightCyan

        console.log(`Creating ${sparkleCount} sparkles...`);

        for (let i = 0; i < sparkleCount; i++) {
            const sparkle = document.createElement('div');
            sparkle.className = 'sparkle';

            // Random properties
            const size = Math.random() * 4 + 4 + 'px'; // Larger: 4px to 8px
            const top = Math.random() * 100 + '%';
            const left = Math.random() * 100 + '%';
            const animationDuration = Math.random() * 2 + 1 + 's';
            const animationDelay = Math.random() * 2 + 's';
            const color = colors[Math.floor(Math.random() * colors.length)];

            sparkle.style.width = size;
            sparkle.style.height = size;
            sparkle.style.top = top;
            sparkle.style.left = left;
            sparkle.style.backgroundColor = color;
            sparkle.style.animation = `twinkle ${animationDuration} infinite ease-in-out ${animationDelay}, float ${Math.random() * 5 + 3}s infinite ease-in-out ${animationDelay}`;

            // Ensure visibility
            sparkle.style.position = 'absolute';
            sparkle.style.borderRadius = '50%';
            sparkle.style.zIndex = '1';

            hero.appendChild(sparkle);
        }
        console.log('Sparkles created.');
    }

    // Run immediately and also on window load to be safe
    createSparkles();
    window.addEventListener('load', createSparkles);

    // --- Data Management ---
    const DEFAULT_DATA = {
        // Gallery samples are now hardcoded in HTML
        gallery: [],
        schedule: [
            { id: 1, date: '2025-11-21', title: '뮤지컬 맘마미아!', location: '인천문화예술회관 대공연장', time: '19:30', poster: 'assets/posters/mamma_mia_incheon.jpg' },
            { id: 2, date: '2025-11-22', title: '뮤지컬 맘마미아!', location: '인천문화예술회관 대공연장', time: '14:00', poster: 'assets/posters/mamma_mia_incheon.jpg' },
            { id: 3, date: '2025-11-28', title: '뮤지컬 맘마미아!', location: '대구오페라하우스', time: '19:30', poster: 'assets/posters/mamma_mia_daegu.jpg' },
            { id: 4, date: '2025-11-29', title: '뮤지컬 맘마미아!', location: '대구오페라하우스', time: '14:00', poster: 'assets/posters/mamma_mia_daegu.jpg' },
            { id: 5, date: '2025-11-29', title: '뮤지컬 맘마미아!', location: '대구오페라하우스', time: '18:30', poster: 'assets/posters/mamma_mia_daegu.jpg' },
            { id: 6, date: '2025-12-03', title: '뮤지컬 맘마미아!', location: '대구오페라하우스', time: '19:30', poster: 'assets/posters/mamma_mia_daegu.jpg' },
            { id: 7, date: '2025-12-04', title: '뮤지컬 맘마미아!', location: '대구오페라하우스', time: '19:30', poster: 'assets/posters/mamma_mia_daegu.jpg' },
            { id: 8, date: '2025-12-05', title: '뮤지컬 맘마미아!', location: '대구오페라하우스', time: '19:30', poster: 'assets/posters/mamma_mia_daegu.jpg' },
            { id: 9, date: '2025-12-10', title: '신영숙&듀에토의 송년 뮤지컬 갈라 콘서트', location: '당진문예의전당 대공연장', time: '19:30', poster: 'assets/posters/gala_concert.jpg' }
        ],
        articles: [
            { id: 1, title: '<엘리자벳> 신영숙, 당신과 함께 꾸는 꿈', url: 'https://www.themusical.co.kr/Magazine/Detail?num=3913', source: 'The Musical', date: '2018-10-31' },
            { id: 2, title: '신영숙, 콘서트 \'친절한 영숙씨\' 성료 "콘서트 역사 한 획 그었다"', url: 'https://enews.imbc.com/News/RetrieveNewsInfo/392411', source: 'iMBC', date: '2023-08-25' },
            { id: 3, title: '[영상인터뷰] 뮤지컬 배우 신영숙 "배우한테 나이 없어... 뭐든 할 수 있다"', url: 'https://www.news1.kr/entertain/interview/4056199', source: 'News1', date: '2020-09-14' },
            { id: 4, title: '[인터뷰] 30주년 뮤지컬 \'명성황후\'의 세 얼굴 ②신영숙', url: 'https://woman.chosun.com/news/articleView.html?idxno=119599', source: 'Woman Chosun', date: '2025-02-08' },
            { id: 5, title: '[인터뷰②] 신영숙 “‘레베카’ 10주년다운 댄버스 보여드릴 것”', url: 'https://isplus.com/article/view/isp202307290013', source: 'IS Plus', date: '2023-07-30' },
            { id: 6, title: '[인터뷰①] 신영숙 “진취적·도전적 남성 넘버, 내 정서와 잘 맞아”', url: 'https://isplus.com/article/view/isp202307290011', source: 'IS Plus', date: '2023-07-30' }
        ]
    };

    // Helper to get data with fallback
    const getData = (key, defaultKey) => {
        try {
            const stored = localStorage.getItem(key);
            return stored ? JSON.parse(stored) : DEFAULT_DATA[defaultKey];
        } catch (e) {
            console.error('Storage error:', e);
            return DEFAULT_DATA[defaultKey];
        }
    };

    // 1. GALLERY LOGIC
    const photoUpload = document.getElementById('photo-upload');
    const galleryGrid = document.getElementById('gallery-grid');
    const filterBtns = document.querySelectorAll('.filter-btn');

    if (photoUpload && galleryGrid) {
        // Data Migration: v4 (strings) -> v5 (objects {src, year})
        const migrateGalleryData = () => {
            const oldData = getData('sys_gallery_v4', 'gallery');
            if (oldData && oldData.length > 0 && typeof oldData[0] === 'string') {
                console.log('Migrating gallery data to v5...');
                const newData = oldData.map(src => ({ src, year: '2025' })); // Default to 2025
                localStorage.setItem('sys_gallery_v5', JSON.stringify(newData));
                localStorage.removeItem('sys_gallery_v4');
                return newData;
            }
            return getData('sys_gallery_v5', 'gallery') || [];
        };

        const savedImages = migrateGalleryData();
        savedImages.forEach(item => addImageToGrid(item.src, item.year));

        // Filter Logic
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Active state
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filter = btn.getAttribute('data-filter');
                filterGallery(filter);
            });
        });

        function filterGallery(year) {
            const items = galleryGrid.querySelectorAll('.gallery-item');
            items.forEach(item => {
                const itemYear = item.getAttribute('data-year');
                if (year === 'all' || itemYear === year) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        }

        // Upload Logic
        photoUpload.addEventListener('change', (e) => {
            const files = e.target.files;
            if (files) {
                const currentYear = new Date().getFullYear().toString();
                Array.from(files).forEach(file => {
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        const src = e.target.result;
                        addImageToGrid(src, currentYear);
                        saveImage(src, currentYear);
                    };
                    reader.readAsDataURL(file);
                });
            }
        });

        // Clear All Logic
        const clearBtn = document.getElementById('clear-gallery-btn');
        if (clearBtn) {
            clearBtn.addEventListener('click', () => {
                if (confirm('정말 모든 갤러리 사진을 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다.')) {
                    localStorage.removeItem('sys_gallery_v5');
                    galleryGrid.innerHTML = '';
                    alert('모든 사진이 삭제되었습니다.');
                }
            });
        }

        function addImageToGrid(src, year) {
            const div = document.createElement('div');
            div.className = 'gallery-item fade-in';
            div.setAttribute('data-year', year); // Add year attribute
            div.style.animationPlayState = 'running';
            div.innerHTML = `
                <img src="${src}" alt="User Photo" onerror="this.style.display='none'">
                <button class="delete-btn" title="Delete">×</button>
            `;

            // Add click event for lightbox
            div.addEventListener('click', (e) => {
                // Ignore clicks on delete button
                if (e.target.classList.contains('delete-btn') || e.target.closest('.delete-btn')) return;

                // Find index among currently visible items or all items?
                // Usually lightbox navigates through all items or filtered items.
                // Let's navigate through currently visible items for better UX with filters.
                const visibleItems = Array.from(galleryGrid.querySelectorAll('.gallery-item')).filter(item => item.style.display !== 'none');
                const index = visibleItems.indexOf(div);
                openLightbox(index, visibleItems);
            });

            // Check current filter
            const activeFilter = document.querySelector('.filter-btn.active').getAttribute('data-filter');
            if (activeFilter !== 'all' && activeFilter !== year) {
                div.style.display = 'none';
            }

            galleryGrid.prepend(div);

            // Re-attach click listeners to existing static items if they don't have them
            // Note: This function is called for new uploads and saved images.
            // Static images in HTML need their own listeners or we can delegate.
        }

        // Delete functionality
        galleryGrid.addEventListener('click', function (e) {
            if (e.target.classList.contains('delete-btn') || e.target.closest('.delete-btn')) {
                e.stopPropagation();
                const item = e.target.closest('.gallery-item');
                if (confirm('정말 이 사진을 삭제하시겠습니까?')) {
                    // Remove from LocalStorage
                    const img = item.querySelector('img');
                    if (img) {
                        const src = img.getAttribute('src');
                        let images = getData('sys_gallery_v5', 'gallery') || [];
                        // Filter out the image with matching source
                        images = images.filter(imgData => imgData.src !== src);
                        localStorage.setItem('sys_gallery_v5', JSON.stringify(images));
                    }

                    // Remove from DOM
                    item.remove();
                }
            }
        });

        // Attach listeners to static HTML images
        const staticItems = galleryGrid.querySelectorAll('.gallery-item');
        staticItems.forEach(item => {
            if (!item.hasAttribute('data-processed')) { // Prevent double binding
                item.setAttribute('data-processed', 'true');
                item.addEventListener('click', () => {
                    const visibleItems = Array.from(galleryGrid.querySelectorAll('.gallery-item')).filter(i => i.style.display !== 'none');
                    const index = visibleItems.indexOf(item);
                    openLightbox(index, visibleItems);
                });
            }
        });


        function saveImage(src, year) {
            const images = getData('sys_gallery_v5', 'gallery') || [];
            images.unshift({ src, year });
            if (images.length > 20) images.pop();
            localStorage.setItem('sys_gallery_v5', JSON.stringify(images));
        }

        // --- Lightbox Logic ---
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightbox-img');
        const closeBtn = document.querySelector('.close-btn');
        const prevBtn = document.querySelector('.prev-btn');
        const nextBtn = document.querySelector('.next-btn');
        let currentLightboxIndex = 0;
        let currentLightboxItems = [];

        function openLightbox(index, items) {
            if (index < 0 || index >= items.length) return;
            currentLightboxIndex = index;
            currentLightboxItems = items;

            const img = items[index].querySelector('img');
            if (img) {
                lightboxImg.src = img.src;
                lightbox.classList.remove('hidden');
                lightbox.classList.add('visible');
                document.body.style.overflow = 'hidden'; // Prevent scrolling
            }
        }

        function closeLightbox() {
            lightbox.classList.remove('visible');
            setTimeout(() => {
                lightbox.classList.add('hidden');
                lightboxImg.src = '';
            }, 300);
            document.body.style.overflow = '';
        }

        function showNextImage() {
            currentLightboxIndex = (currentLightboxIndex + 1) % currentLightboxItems.length;
            openLightbox(currentLightboxIndex, currentLightboxItems);
        }

        function showPrevImage() {
            currentLightboxIndex = (currentLightboxIndex - 1 + currentLightboxItems.length) % currentLightboxItems.length;
            openLightbox(currentLightboxIndex, currentLightboxItems);
        }

        // Event Listeners
        if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
        if (nextBtn) nextBtn.addEventListener('click', (e) => { e.stopPropagation(); showNextImage(); });
        if (prevBtn) prevBtn.addEventListener('click', (e) => { e.stopPropagation(); showPrevImage(); });

        // Close on outside click
        if (lightbox) {
            lightbox.addEventListener('click', (e) => {
                if (e.target === lightbox) {
                    closeLightbox();
                }
            });
        }

        // Keyboard Navigation
        document.addEventListener('keydown', (e) => {
            if (!lightbox.classList.contains('visible')) return;

            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowRight') showNextImage();
            if (e.key === 'ArrowLeft') showPrevImage();
        });
    }

    // 2. SCHEDULE LOGIC
    const scheduleForm = document.getElementById('schedule-form');
    const scheduleList = document.getElementById('schedule-list');
    const yearFilter = document.getElementById('year-filter');
    const monthFilter = document.getElementById('month-filter');

    // Calendar Elements
    const calendarGrid = document.getElementById('calendar-grid');
    const currentMonthYear = document.getElementById('current-month-year');
    const prevMonthBtn = document.getElementById('prev-month');
    const nextMonthBtn = document.getElementById('next-month');

    let currentCalendarDate = new Date();
    let selectedDate = null; // Filter by specific date

    if (scheduleForm && scheduleList) {
        // Initial Load
        updateYearFilter();
        loadSchedules();
        if (calendarGrid) renderCalendar();

        // Filter Events
        if (yearFilter) yearFilter.addEventListener('change', () => { selectedDate = null; loadSchedules(); });
        if (monthFilter) monthFilter.addEventListener('change', () => { selectedDate = null; loadSchedules(); });

        // Calendar Navigation
        if (prevMonthBtn) prevMonthBtn.addEventListener('click', () => {
            currentCalendarDate.setMonth(currentCalendarDate.getMonth() - 1);
            renderCalendar();
        });

        if (nextMonthBtn) nextMonthBtn.addEventListener('click', () => {
            currentCalendarDate.setMonth(currentCalendarDate.getMonth() + 1);
            renderCalendar();
        });

        scheduleForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const date = document.getElementById('sched-date').value;
            const title = document.getElementById('sched-title').value;
            const location = document.getElementById('sched-location').value;
            const time = document.getElementById('sched-time').value;
            const posterFile = document.getElementById('sched-poster').files[0];

            const processSchedule = (posterSrc) => {
                const schedule = { id: Date.now(), date, title, location, time, poster: posterSrc };
                saveSchedule(schedule);
                updateYearFilter(); // Update years if new year added
                loadSchedules(); // Reload to apply filters and sort
                if (calendarGrid) renderCalendar(); // Refresh calendar
                scheduleForm.reset();
            };

            if (posterFile) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    processSchedule(e.target.result);
                };
                reader.readAsDataURL(posterFile);
            } else {
                processSchedule(null);
            }
        });

        function updateYearFilter() {
            if (!yearFilter) return;
            const schedules = getData('sys_schedule_v6', 'schedule');
            const years = [...new Set(schedules.map(s => new Date(s.date).getFullYear()))].sort((a, b) => b - a);

            // Keep "All Years" and append others
            const currentVal = yearFilter.value;
            yearFilter.innerHTML = '<option value="all">All Years</option>';
            years.forEach(year => {
                const option = document.createElement('option');
                option.value = year;
                option.textContent = year;
                yearFilter.appendChild(option);
            });
            yearFilter.value = currentVal;
        }

        function loadSchedules() {
            scheduleList.innerHTML = ''; // Clear list
            const schedules = getData('sys_schedule_v6', 'schedule');

            // Filter
            const selectedYear = yearFilter ? yearFilter.value : 'all';
            const selectedMonth = monthFilter ? monthFilter.value : 'all';

            const filtered = schedules.filter(s => {
                const d = new Date(s.date);

                // If a specific date is selected via calendar, filter only that date
                if (selectedDate) {
                    return d.toDateString() === selectedDate.toDateString();
                }

                const y = d.getFullYear().toString();
                const m = (d.getMonth() + 1).toString();

                if (selectedYear !== 'all' && y !== selectedYear) return false;
                if (selectedMonth !== 'all' && m !== selectedMonth) return false;
                return true;
            });

            // Sort: Upcoming (Asc) then Past (Desc)
            const today = new Date();
            today.setHours(0, 0, 0, 0);

            const upcoming = filtered.filter(s => new Date(s.date) >= today);
            const past = filtered.filter(s => new Date(s.date) < today);

            upcoming.sort((a, b) => new Date(a.date) - new Date(b.date));
            past.sort((a, b) => new Date(b.date) - new Date(a.date));

            const sortedSchedules = [...upcoming, ...past];

            if (sortedSchedules.length === 0) {
                scheduleList.innerHTML = '<p style="text-align:center; color:var(--text-secondary);">No schedules found.</p>';
                return;
            }

            sortedSchedules.forEach(addScheduleToDOM);
        }

        function addScheduleToDOM(sched) {
            const dateObj = new Date(sched.date);
            const month = dateObj.toLocaleString('default', { month: 'short' });
            const day = dateObj.getDate();

            // Check if past
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            const isPast = dateObj < today;

            const div = document.createElement('div');
            div.className = `schedule-item fade-in ${isPast ? 'past' : ''}`;
            div.style.animationPlayState = 'running';
            div.innerHTML = `
                <div class="schedule-content">
                    <div class="date-box">
                        <span class="month">${month}</span>
                        <span class="day">${day}</span>
                    </div>
                    ${sched.poster ? `<div class="poster-box"><img src="${sched.poster}" alt="${sched.title}"></div>` : ''}
                    <div class="info-box">
                        <h3>${sched.title}</h3>
                        <p>${sched.location} | ${sched.time}</p>
                    </div>
                </div>
                <button class="delete-btn" onclick="deleteSchedule(${sched.id}, this)">&times;</button>
            `;
            scheduleList.appendChild(div);
        }

        function saveSchedule(sched) {
            const schedules = getData('sys_schedule_v6', 'schedule');
            schedules.push(sched);
            localStorage.setItem('sys_schedule_v6', JSON.stringify(schedules));
        }

        window.deleteSchedule = (id, btn) => {
            if (confirm('Delete this schedule?')) {
                let schedules = getData('sys_schedule_v6', 'schedule');
                schedules = schedules.filter(s => s.id !== id);
                localStorage.setItem('sys_schedule_v6', JSON.stringify(schedules));
                loadSchedules();
                updateYearFilter();
                if (calendarGrid) renderCalendar();
            }
        };

        function renderCalendar() {
            if (!calendarGrid) return;

            const year = currentCalendarDate.getFullYear();
            const month = currentCalendarDate.getMonth();

            currentMonthYear.textContent = new Date(year, month).toLocaleString('default', { month: 'long', year: 'numeric' });

            calendarGrid.innerHTML = '';

            // Days
            const daysInMonth = new Date(year, month + 1, 0).getDate();
            const schedules = getData('sys_schedule_v6', 'schedule');
            const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

            // Days
            const today = new Date();
            for (let i = 1; i <= daysInMonth; i++) {
                const date = new Date(year, month, i);
                const div = document.createElement('div');
                div.className = 'calendar-day';

                const dayName = dayNames[date.getDay()];
                const dayOfWeek = date.getDay();

                if (dayOfWeek === 0) {
                    div.classList.add('sun');
                } else if (dayOfWeek === 6) {
                    div.classList.add('sat');
                }

                div.innerHTML = `
                    <span class="day-name">${dayName}</span>
                    <span class="day-number">${i}</span>
                `;

                // Check for events
                const hasEvent = schedules.some(s => {
                    const sDate = new Date(s.date);
                    return sDate.getDate() === i && sDate.getMonth() === month && sDate.getFullYear() === year;
                });

                if (hasEvent) {
                    div.classList.add('has-event');
                    const dot = document.createElement('div');
                    dot.className = 'event-dot';
                    div.appendChild(dot);
                }

                // Check if today
                if (date.toDateString() === today.toDateString()) {
                    div.classList.add('today');
                }

                // Check if selected
                if (selectedDate && date.toDateString() === selectedDate.toDateString()) {
                    div.classList.add('active');
                }

                div.addEventListener('click', () => {
                    if (selectedDate && date.toDateString() === selectedDate.toDateString()) {
                        selectedDate = null; // Deselect
                        div.classList.remove('active');
                    } else {
                        selectedDate = date;
                        // Remove active from others
                        document.querySelectorAll('.calendar-day').forEach(d => d.classList.remove('active'));
                        div.classList.add('active');
                    }
                    loadSchedules();
                });

                calendarGrid.appendChild(div);
            }
        }
    }

    // 3. ARTICLES LOGIC
    const articleForm = document.getElementById('article-form');
    const articleList = document.getElementById('article-list');

    if (articleForm && articleList) {
        loadArticles();

        articleForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const title = document.getElementById('art-title').value;
            const url = document.getElementById('art-url').value;
            const source = document.getElementById('art-source').value;
            const dateInput = document.getElementById('art-date').value;

            const article = { id: Date.now(), title, url, source, date: dateInput };
            addArticleToDOM(article);
            saveArticle(article);

            // Re-sort and re-render to ensure correct order immediately
            articleList.innerHTML = '';
            loadArticles();

            articleForm.reset();
        });

        function loadArticles() {
            const articles = getData('sys_articles_v5', 'articles');
            // Sort by date descending (newest first)
            articles.sort((a, b) => new Date(b.date) - new Date(a.date));
            articles.forEach(addArticleToDOM);
        }

        function addArticleToDOM(art) {
            const div = document.createElement('div');
            div.className = 'article-card fade-in';
            div.style.animationPlayState = 'running';
            div.innerHTML = `
                <div class="article-content">
                    <h3>${art.title}</h3>
                    <p>${art.source} | ${formatDate(art.date)}</p>
                </div>
                <a href="${art.url}" target="_blank" class="article-link">Read More &rarr;</a>
            `;
            articleList.prepend(div);
        }

        function formatDate(dateStr) {
            try {
                const date = new Date(dateStr);
                if (isNaN(date.getTime())) return dateStr;
                const year = date.getFullYear();
                const month = String(date.getMonth() + 1).padStart(2, '0');
                const day = String(date.getDate()).padStart(2, '0');
                return `${year}. ${month}. ${day}.`;
            } catch (e) {
                return dateStr;
            }
        }

        function saveArticle(art) {
            const articles = getData('sys_articles_v5', 'articles');
            articles.unshift(art);
            localStorage.setItem('sys_articles_v5', JSON.stringify(articles));
        }
    }

});

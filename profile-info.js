// 데이터
const timelineData = [
    {
        year: "2025 - 2026",
        works: [
            { title: "맘마미아! (전국 투어)", role: "도나", period: "2025.07 ~ 2026.01", details: "LG아트센터 서울 및 전국 투어" },
            { title: "명성황후 (30주년 기념)", role: "명성황후", period: "2025.01.21 ~ 2025.03.30", details: "세종문화회관 대극장" }
        ]
    },
    {
        year: "2024",
        works: [
            { title: "애니 (Annie)", role: "해니건", period: "2024.10.01 ~ 2024.10.27", details: "유니버설아트센터" },
            { title: "디어 에반 핸슨", role: "하이디 핸슨", period: "2024.03.28 ~ 2024.06.23", details: "충무아트센터 대극장" },
            { title: "컴프롬어웨이", role: "비벌리/아네트 외", period: "2023.11.28 ~ 2024.02.18", details: "광림아트센터 BBCH홀" }
        ]
    },
    {
        year: "2023",
        works: [
            { title: "레베카 (10주년)", role: "댄버스 부인", period: "2023.08.19 ~ 2023.11.19", details: "블루스퀘어 신한카드홀" },
            { title: "단독 콘서트 <친절한 영숙씨>", role: "본인", period: "2023.08.18 ~ 2023.08.19", details: "LG아트센터 서울 LG SIGNATURE 홀" },
            { title: "맘마미아!", role: "도나", period: "2023.03.24 ~ 2023.06.25", details: "충무아트센터 대극장" }
        ]
    },
    {
        year: "2022",
        works: [
            { title: "브로드웨이 42번가", role: "도로시 브록", period: "2022.11.05 ~ 2023.01.15", details: "예술의전당 CJ 토월극장" },
            { title: "웃는 남자", role: "조시아나 여공작", period: "2022.06.10 ~ 2022.08.22", details: "세종문화회관 대극장" },
            { title: "엑스칼리버 (앙코르)", role: "모르가나", period: "2022.01.29 ~ 2022.03.13", details: "세종문화회관 대극장" }
        ]
    },
    {
        year: "2021",
        works: [
            { title: "레베카", role: "댄버스 부인", period: "2021.11.16 ~ 2022.02.27", details: "충무아트센터 대극장" },
            { title: "엑스칼리버", role: "모르가나", period: "2021.08.17 ~ 2021.11.07", details: "블루스퀘어 신한카드홀" },
            { title: "팬텀", role: "마담 카를로타", period: "2021.03.17 ~ 2021.06.27", details: "샤롯데씨어터" }
        ]
    },
    {
        year: "2020",
        works: [
            { title: "모차르트! (10주년)", role: "발트슈테텐 남작부인", period: "2020.06.16 ~ 2020.08.20", details: "세종문화회관 대극장" },
            { title: "웃는 남자", role: "조시아나 여공작", period: "2020.01.09 ~ 2020.03.01", details: "예술의전당 오페라극장" }
        ]
    },
    {
        year: "2019",
        works: [
            { title: "레베카", role: "댄버스 부인", period: "2019.11.16 ~ 2020.03.15", details: "충무아트센터 대극장" },
            { title: "맘마미아!", role: "도나", period: "2019.07.14 ~ 2019.09.14", details: "LG아트센터" },
            { title: "엑스칼리버 (초연)", role: "모르가나", period: "2019.06.15 ~ 2019.08.04", details: "세종문화회관 대극장" }
        ]
    },
    {
        year: "2018 - 2019",
        works: [
            { title: "엘리자벳", role: "황후 엘리자벳", period: "2018.11.17 ~ 2019.02.10", details: "블루스퀘어 인터파크홀" },
            { title: "웃는 남자 (초연)", role: "조시아나 여공작", period: "2018.07.10 ~ 2018.08.26", details: "예술의전당 오페라극장" }
        ]
    },
    {
        year: "2017",
        works: [
            { title: "더 라스트 키스", role: "라리쉬 백작부인", period: "2017.12.15 ~ 2018.03.11", details: "LG아트센터" },
            { title: "레베카", role: "댄버스 부인", period: "2017.08.10 ~ 2017.11.12", details: "블루스퀘어 삼성전자홀" },
            { title: "투란도트", role: "투란도트", period: "2017.06.23 ~ 2017.07.29", details: "대구오페라하우스 등" }
        ]
    },
    {
        year: "2016",
        works: [
            { title: "모차르트!", role: "발트슈테텐 남작부인", period: "2016.06.10 ~ 2016.08.07", details: "세종문화회관 대극장" },
            { title: "맘마미아!", role: "도나", period: "2016.02.24 ~ 2016.06.04", details: "샤롯데씨어터" },
            { title: "레베카", role: "댄버스 부인", period: "2016.01.05 ~ 2016.03.06", details: "예술의전당 오페라극장" }
        ]
    },
    {
        year: "2015",
        works: [
            { title: "명성황후", role: "명성황후", period: "2015", details: "예술의전당 오페라극장" },
            { title: "팬텀 (초연)", role: "마담 카를로타", period: "2015", details: "충무아트홀 대극장" }
        ]
    },
    {
        year: "2013 - 2014",
        works: [
            { title: "레베카", role: "댄버스 부인", period: "2014", details: "블루스퀘어 삼성전자홀" },
            { title: "모차르트!", role: "발트슈테텐 남작부인", period: "2014", details: "세종문화회관 대극장" },
            { title: "아가씨와 건달들", role: "아들레이드", period: "2013", details: "BBC씨어터" },
            { title: "두 도시 이야기", role: "마담 드파르지", period: "2013.06.18 ~ 2013.08.11", details: "샤롯데씨어터" },
            { title: "레베카 (초연)", role: "댄버스 부인", period: "2013", details: "LG아트센터" }
        ]
    },
    {
        year: "2010 - 2012",
        works: [
            { title: "황태자 루돌프", role: "라리쉬 백작부인", period: "2012.11.10 ~ 2013.01.27", details: "충무아트홀 대극장" },
            { title: "두 도시 이야기 (초연)", role: "마담 드파르지", period: "2012.08.24 ~ 2012.10.07", details: "충무아트홀 대극장" },
            { title: "모차르트!", role: "발트슈테텐 남작부인", period: "2012.07.10 ~ 2012.08.04", details: "세종문화회관 대극장" },
            { title: "셜록홈즈: 앤더슨가의 비밀", role: "제인 왓슨", period: "2012.03.03 ~ 2012.05.13", details: "숙명아트센터 씨어터S" },
            { title: "햄릿", role: "거트루드", period: "2011.10.20 ~ 2011.12.17", details: "유니버설아트센터" },
            { title: "모차르트!", role: "발트슈테텐 남작부인", period: "2011.05.24 ~ 2011.07.03", details: "성남아트센터 오페라하우스" },
            { title: "코로네이션 볼", role: "스텔라", period: "2010.12.24 ~ 2011.01.17", details: "예술의전당 토월극장" },
            { title: "스팸어랏", role: "호수의 여인", period: "2010.10.01 ~ 2011.01.02", details: "한전아트센터" },
            { title: "모차르트! (초연)", role: "발트슈테텐 남작부인", period: "2010.01.20 ~ 2010.02.21", details: "세종문화회관 대극장" }
        ]
    },
    {
        year: "2007 - 2009",
        works: [
            { title: "로미오 앤 줄리엣", role: "레이디 캐퓰릿", period: "2009", details: "예술의전당" },
            { title: "캣츠", role: "그리자벨라", period: "2008", details: "샤롯데씨어터" },
            { title: "나쁜 녀석들", role: "뮤리엘", period: "2008", details: "두산아트센터 연강홀" },
            { title: "헤어스프레이", role: "모터마우스", period: "2007", details: "충무아트센터 대극장" },
            { title: "시스터 소울", role: "조세핀", period: "2007", details: "서강대학교 메리홀" },
            { title: "바람의 나라", role: "세류", period: "2007", details: "예술의전당 CJ 토월극장" }
        ]
    },
    {
        year: "2005 - 2006",
        works: [
            { title: "크리스마스 캐롤", role: "크래칫 부인", period: "2006", details: "" },
            { title: "이(爾)", role: "장녹수", period: "2006", details: "아르코예술극장 대극장" },
            { title: "바람의 나라", role: "세류", period: "2006", details: "예술의전당 CJ 토월극장" },
            { title: "고대의 향기", role: "무천, 산화가", period: "2005", details: "" },
            { title: "바리", role: "바리", period: "2005", details: "" },
            { title: "로미오와 줄리엣", role: "유모", period: "2005", details: "예술의전당 CJ 토월극장" }
        ]
    },
    {
        year: "2000 - 2004",
        works: [
            { title: "크리스마스 캐롤", role: "크래칫 부인", period: "2004", details: "" },
            { title: "시집가는 날", role: "갑분이", period: "2004", details: "" },
            { title: "한 여름 밤의 꿈", role: "헬레나", period: "2004", details: "" },
            { title: "크리스마스 캐롤", role: "크래칫 부인", period: "2003", details: "" },
            { title: "사운드 오브 뮤직", role: "원장수녀", period: "2003", details: "" },
            { title: "로미오와 줄리엣", role: "유모", period: "2003", details: "" },
            { title: "태풍", role: "트린큘로", period: "2002", details: "" },
            { title: "로미오와 줄리엣", role: "유모", period: "2002", details: "" },
            { title: "고려의 아침", role: "관세음", period: "2002", details: "" },
            { title: "바람의 나라", role: "정령", period: "2001", details: "" },
            { title: "대박", role: "흥부처", period: "2001", details: "" },
            { title: "고려의 아침", role: "혜명공주", period: "2001", details: "" },
            { title: "대박", role: "흥부처", period: "2000", details: "" },
            { title: "태풍", role: "에어리얼", period: "2000", details: "" }
        ]
    },
    {
        year: "1999",
        works: [
            { title: "명성황후", role: "손탁, 앙상블", period: "1999", details: "데뷔작" }
        ]
    }
];

const signatureRoles = [
    {
        role: "댄버스 부인",
        work: "레베카",
        desc: "그녀의 인생 캐릭터. '레베카'를 부르는 압도적인 고음과 카리스마로 '신댄'이라는 별명을 얻음.",
        youtubeUrl: "https://www.youtube.com/watch?v=tU8dVCoF3aQ",
        songTitle: "레베카 ACT 2 (Live ver.) - 신영숙&박지연"
    },
    {
        role: "발트슈테텐 남작부인",
        work: "모차르트!",
        desc: "대표 넘버 '황금별'의 주인공. 관객들에게 희망과 위로를 주는 따뜻하고 우아한 멘토.",
        youtubeUrl: "https://www.youtube.com/watch?v=caySKT1Mfs4&list=RDcaySKT1Mfs4&start_radio=1",
        songTitle: "'황금별' MV"
    },
    {
        role: "도나",
        work: "맘마미아!",
        desc: "에너지 넘치는 슈퍼 트루퍼. 전국 투어를 이끌며 관객들과 호흡하는 주역.",
        youtubeUrl: "https://www.youtube.com/watch?v=JBynX1xx9HM&list=RDJBynX1xx9HM&start_radio=1",
        songTitle: "'The Winner Takes It All'"
    },
    {
        role: "황후 엘리자벳",
        work: "엘리자벳",
        desc: "자유를 갈망하는 비운의 황후. 섬세한 감정 연기와 폭발적인 가창력으로 호평받음.",
        youtubeUrl: "https://www.youtube.com/watch?v=3iLgb_Zeo24&list=RD3iLgb_Zeo24&start_radio=1",
        songTitle: "'나는 나만의 것' MV"
    },
    {
        role: "명성황후",
        work: "명성황후",
        desc: "1999년 데뷔작이자 30주년 기념 공연까지 함께하는, 배우 인생을 관통하는 상징적인 배역.",
        youtubeUrl: "https://www.youtube.com/watch?v=cWUfEkiBwUU&list=RDcWUfEkiBwUU&start_radio=1",
        songTitle: "백성이여 일어나라"
    }
];

const awards = [
    { year: "2024", title: "제18회 DIMF AWARDS", award: "올해의 스타상" },
    { year: "2023", title: "제17회 DIMF AWARDS", award: "올해의 스타상" },
    { year: "2023", title: "제17회 골든티켓어워즈", award: "뮤지컬 여자배우상" },
    { year: "2020", title: "제4회 한국뮤지컬어워즈", award: "카카오 베스트캐릭터상 (엑스칼리버 - 모르가나)" },
    { year: "2019", title: "제14회 골든티켓어워즈", award: "뮤지컬 여자배우상" },
    { year: "2018", title: "SACA 관객이 뽑은 2018 최고의 뮤지컬 배우", award: "여우조연상" },
    { year: "2018", title: "제10회 서울 석세스 대상", award: "문화부문 - 뮤지컬 대상" },
    { year: "2018", title: "제2회 한국뮤지컬어워즈", award: "여우조연상" },
    { year: "2017", title: "제11회 DIMF AWARDS", award: "올해의 스타상" },
    { year: "2017", title: "제1회 한국뮤지컬어워즈", award: "여우조연상" },
    { year: "2017", title: "제12회 골든티켓어워즈", award: "뮤지컬 여자배우상" },
    { year: "2016", title: "제10회 DIMF AWARDS", award: "올해의 스타상" },
    { year: "2016", title: "제11회 골든티켓어워즈", award: "씬스틸러상" },
    { year: "2015", title: "제9회 DIMF AWARDS", award: "올해의 스타상" },
    { year: "2014", title: "SACA 관객이 뽑은 2014 최고의 뮤지컬 배우", award: "여우조연상" },
    { year: "2013", title: "제7회 DIMF AWARDS", award: "올해의 스타상" },
    { year: "2010", title: "제4회 더 뮤지컬 어워즈", award: "여우조연상" }
];

// 통계 계산
function calculateStats() {
    const totalWorks = timelineData.reduce((sum, group) => sum + group.works.length, 0);
    const careerYears = new Date().getFullYear() - 1999;

    const workCounts = {};
    timelineData.forEach(group => {
        group.works.forEach(work => {
            const baseTitle = work.title.replace(/\s*\(.*?\)\s*/g, '').trim();
            workCounts[baseTitle] = (workCounts[baseTitle] || 0) + 1;
        });
    });

    const venueCounts = {};
    timelineData.forEach(group => {
        group.works.forEach(work => {
            if (work.details) {
                const venue = work.details.split(' ')[0];
                if (venue) venueCounts[venue] = (venueCounts[venue] || 0) + 1;
            }
        });
    });

    return {
        totalWorks,
        careerYears,
        totalAwards: awards.length,
        topWorks: Object.entries(workCounts).sort((a, b) => b[1] - a[1]).slice(0, 5).map(([title, count]) => ({ title, count })),
        topVenues: Object.entries(venueCounts).sort((a, b) => b[1] - a[1]).slice(0, 5).map(([venue, count]) => ({ venue, count })),
        yearlyActivity: timelineData.map(group => ({ year: group.year, count: group.works.length }))
    };
}

// 탭 전환
function initTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.dataset.tab;

            // 모든 탭 비활성화
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // 선택된 탭 활성화
            button.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });
}

// 타임라인 렌더링
function renderTimeline() {
    const timelineContainer = document.getElementById('timeline-list');

    timelineData.forEach((group, index) => {
        const yearDiv = document.createElement('div');
        yearDiv.className = 'timeline-year';

        const header = document.createElement('div');
        header.className = 'timeline-year-header';
        header.innerHTML = `
            <div class="timeline-year-info">
                <span class="timeline-year-label">${group.year}</span>
                <span class="timeline-year-count">${group.works.length}개의 작품</span>
            </div>
            <span class="timeline-toggle-icon">▼</span>
        `;

        const worksDiv = document.createElement('div');
        worksDiv.className = 'timeline-works';
        if (index < 3) worksDiv.classList.add('expanded');

        const worksContent = document.createElement('div');
        worksContent.className = 'timeline-works-content';
        worksContent.innerHTML = '<div class="timeline-divider"></div>';

        group.works.forEach(work => {
            const workDiv = document.createElement('div');
            workDiv.className = 'timeline-work';
            workDiv.innerHTML = `
                <div class="timeline-work-title">
                    <div class="timeline-work-dot"></div>
                    <span class="timeline-work-name">${work.title}</span>
                </div>
                <div class="timeline-work-role">👤 ${work.role}</div>
                <div class="timeline-work-details">
                    ${work.period ? `<span>🕐 ${work.period}</span>` : ''}
                    ${work.details ? `<span>📍 ${work.details}</span>` : ''}
                </div>
            `;
            worksContent.appendChild(workDiv);
        });

        worksDiv.appendChild(worksContent);

        header.addEventListener('click', () => {
            worksDiv.classList.toggle('expanded');
            header.querySelector('.timeline-toggle-icon').textContent = worksDiv.classList.contains('expanded') ? '▲' : '▼';
        });

        yearDiv.appendChild(header);
        yearDiv.appendChild(worksDiv);
        timelineContainer.appendChild(yearDiv);
    });
}

// 대표 배역 렌더링
function renderRoles() {
    const rolesContainer = document.getElementById('roles-grid');

    signatureRoles.forEach(role => {
        const card = document.createElement('div');
        card.className = 'role-card';
        card.innerHTML = `
            <div class="role-card-content">
                <div class="role-card-header">
                    <h3 class="role-card-work">${role.work}</h3>
                </div>
                <div class="role-card-role">${role.role}</div>
                <p class="role-card-desc">${role.desc}</p>
                <a href="${role.youtubeUrl}" target="_blank" rel="noopener noreferrer" 
                   class="youtube-link" 
                   title="유튜브에서 보기"
                   style="display: flex; align-items: center; gap: 0.5rem; margin-top: 0.75rem; text-decoration: none; color: #6b303b; font-size: 0.875rem; transition: all 0.2s;">
                    <span style="font-size: 1.25rem; transition: transform 0.2s;">🎵</span>
                    <span style="font-weight: 500;">${role.songTitle}</span>
                </a>
            </div>
        `;

        // 호버 효과 추가
        const youtubeLink = card.querySelector('.youtube-link');
        const musicNote = youtubeLink.querySelector('span:first-child');
        youtubeLink.addEventListener('mouseenter', () => {
            musicNote.style.transform = 'scale(1.2)';
            youtubeLink.style.color = '#d4af37';
        });
        youtubeLink.addEventListener('mouseleave', () => {
            musicNote.style.transform = 'scale(1)';
            youtubeLink.style.color = '#6b303b';
        });

        rolesContainer.appendChild(card);
    });
}

// 수상 내역 렌더링
function renderAwards() {
    const awardsContainer = document.getElementById('awards-list');

    awards.forEach(award => {
        const item = document.createElement('div');
        item.className = 'award-item';
        item.innerHTML = `
            <div class="award-year">${award.year}</div>
            <div class="award-info">
                <h4>${award.award}</h4>
                <p>${award.title}</p>
            </div>
        `;
        awardsContainer.appendChild(item);
    });
}

// 인포그래픽 렌더링
function renderInfographic() {
    const infographicContainer = document.getElementById('infographic-content');
    const stats = calculateStats();

    // 주요 통계
    const statsGrid = document.createElement('div');
    statsGrid.className = 'stats-grid';
    statsGrid.innerHTML = `
        <div class="stat-card gold">
            <div class="stat-value">${stats.careerYears}년</div>
            <div class="stat-label">활동 경력</div>
        </div>
        <div class="stat-card burgundy">
            <div class="stat-value">${stats.totalWorks}+</div>
            <div class="stat-label">총 작품 수</div>
        </div>
        <div class="stat-card gold">
            <div class="stat-value">${stats.totalAwards}</div>
            <div class="stat-label">수상 경력</div>
        </div>
        <div class="stat-card burgundy">
            <div class="stat-value">5+</div>
            <div class="stat-label">대표 배역</div>
        </div>
    `;
    infographicContainer.appendChild(statsGrid);

    // 커리어 하이라이트
    const highlightsCard = document.createElement('div');
    highlightsCard.className = 'info-card';
    highlightsCard.style.background = 'linear-gradient(to bottom right, #fffaf0, rgba(230, 230, 250, 0.3))';
    highlightsCard.style.border = '1px solid rgba(212, 175, 55, 0.2)';
    highlightsCard.innerHTML = `
        <div class="info-card-title">
            <span class="icon">✨</span>
            <h3>커리어 하이라이트</h3>
        </div>
        <div class="highlights-grid">
            <div class="highlight-item">
                <div class="highlight-label">데뷔작</div>
                <div class="highlight-value">명성황후 (1999)</div>
            </div>
            <div class="highlight-item">
                <div class="highlight-label">대표 넘버</div>
                <div class="highlight-value">황금별 (모차르트!)<br>레베카 (레베카)</div>
            </div>
            <div class="highlight-item">
                <div class="highlight-label">인생 캐릭터</div>
                <div class="highlight-value">댄버스 부인 (레베카)</div>
            </div>
            <div class="highlight-item">
                <div class="highlight-label">최근 활동</div>
                <div class="highlight-value">명성황후 30주년 (2025)</div>
            </div>
        </div>
    `;
    infographicContainer.appendChild(highlightsCard);

    // 최다 출연 작품
    const topWorksCard = document.createElement('div');
    topWorksCard.className = 'info-card';
    topWorksCard.innerHTML = `
        <div class="info-card-title">
            <span class="icon">📈</span>
            <h3>최다 출연 작품 TOP 5</h3>
        </div>
        <div class="ranking-list"></div>
    `;

    const worksList = topWorksCard.querySelector('.ranking-list');
    stats.topWorks.forEach((work, index) => {
        const item = document.createElement('div');
        item.className = 'ranking-item';
        const percentage = (work.count / stats.topWorks[0].count) * 100;
        item.innerHTML = `
            <div class="ranking-number gold">${index + 1}</div>
            <div class="ranking-content">
                <div class="ranking-header">
                    <span class="ranking-title">${work.title}</span>
                    <span class="ranking-count">${work.count}회</span>
                </div>
                <div class="ranking-bar">
                    <div class="ranking-bar-fill gold-burgundy" style="width: ${percentage}%"></div>
                </div>
            </div>
        `;
        worksList.appendChild(item);
    });
    infographicContainer.appendChild(topWorksCard);

    // 주요 공연장
    const topVenuesCard = document.createElement('div');
    topVenuesCard.className = 'info-card';
    topVenuesCard.innerHTML = `
        <div class="info-card-title">
            <span class="icon">🎭</span>
            <h3>주요 공연장 TOP 5</h3>
        </div>
        <div class="ranking-list"></div>
    `;

    const venuesList = topVenuesCard.querySelector('.ranking-list');
    stats.topVenues.forEach((venue, index) => {
        const item = document.createElement('div');
        item.className = 'ranking-item';
        const percentage = (venue.count / stats.topVenues[0].count) * 100;
        item.innerHTML = `
            <div class="ranking-number burgundy">${index + 1}</div>
            <div class="ranking-content">
                <div class="ranking-header">
                    <span class="ranking-title">${venue.venue}</span>
                    <span class="ranking-count">${venue.count}회</span>
                </div>
                <div class="ranking-bar">
                    <div class="ranking-bar-fill burgundy-gold" style="width: ${percentage}%"></div>
                </div>
            </div>
        `;
        venuesList.appendChild(item);
    });
    infographicContainer.appendChild(topVenuesCard);
}

// 스크롤 동작 초기화
function initScrollBehavior() {
    const tabsContainer = document.querySelector('.tabs-container');
    const footer = document.querySelector('footer');

    if (!tabsContainer || !footer) return;

    // 트랜지션 추가
    tabsContainer.style.transition = 'transform 0.3s ease-in-out';

    window.addEventListener('scroll', () => {
        const footerRect = footer.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // 푸터가 화면에 보이면 탭 메뉴 숨김
        if (footerRect.top < windowHeight) {
            tabsContainer.style.transform = 'translateY(-200%)'; // 위로 숨김
        } else {
            tabsContainer.style.transform = 'translateY(0)';
        }
    });
}

// 초기화
document.addEventListener('DOMContentLoaded', () => {
    initTabs();
    renderTimeline();
    renderRoles();
    renderAwards();
    renderInfographic();
    initScrollBehavior();
});

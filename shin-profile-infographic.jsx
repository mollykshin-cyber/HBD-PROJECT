import React, { useState } from 'react';
import { Star, Award, Calendar, Music, User, Mic2, MapPin, Sparkles, ChevronDown, ChevronUp, Clock, BarChart3, TrendingUp, Theater, Trophy } from 'lucide-react';

const ShinYoungSookInfo = () => {
    const [activeTab, setActiveTab] = useState('timeline');
    const [expandedYear, setExpandedYear] = useState(null);

    // 주요 프로필 데이터
    const profile = {
        name: "신영숙",
        debut: 1999,
        debutWork: "명성황후",
        keywords: ["황금별 여사", "신댄", "마마님", "성량 여신", "믿보배"],
        description: "폭발적인 가창력과 압도적인 무대 장악력을 가진 대한민국 대표 뮤지컬 배우. 1999년 데뷔 이래 다양한 캐릭터를 완벽하게 소화하며 독보적인 존재감을 보여주고 있다."
    };

    // 대표 배역 (Signature Roles)
    const signatureRoles = [
        {
            role: "댄버스 부인",
            work: "레베카",
            desc: "그녀의 인생 캐릭터. '레베카'를 부르는 압도적인 고음과 카리스마로 '신댄'이라는 별명을 얻음.",
            color: "bg-burgundy-900"
        },
        {
            role: "발트슈테텐 남작부인",
            work: "모차르트!",
            desc: "대표 넘버 '황금별'의 주인공. 관객들에게 희망과 위로를 주는 따뜻하고 우아한 멘토.",
            color: "bg-gold-700"
        },
        {
            role: "도나",
            work: "맘마미아!",
            desc: "에너지 넘치는 슈퍼 트루퍼. 전국 투어를 이끌며 관객들과 호흡하는 주역.",
            color: "bg-rose-600"
        },
        {
            role: "황후 엘리자벳",
            work: "엘리자벳",
            desc: "자유를 갈망하는 비운의 황후. 섬세한 감정 연기와 폭발적인 가창력으로 호평받음.",
            color: "bg-amber-700"
        },
        {
            role: "명성황후",
            work: "명성황후",
            desc: "1999년 데뷔작이자 30주년 기념 공연까지 함께하는, 배우 인생을 관통하는 상징적인 배역.",
            color: "bg-burgundy-800"
        }
    ];

    // 연도별 타임라인 데이터 (엑셀 데이터 기반 누락 정보 추가됨)
    const timelineData = [
        {
            year: "2025 - 2026",
            works: [
                {
                    title: "맘마미아! (전국 투어)",
                    role: "도나",
                    period: "2025.07 ~ 2026.01",
                    details: "LG아트센터 서울 및 전국 투어"
                },
                {
                    title: "명성황후 (30주년 기념)",
                    role: "명성황후",
                    period: "2025.01.21 ~ 2025.03.30",
                    details: "세종문화회관 대극장"
                }
            ]
        },
        {
            year: "2024",
            works: [
                {
                    title: "애니 (Annie)",
                    role: "해니건",
                    period: "2024.10.01 ~ 2024.10.27",
                    details: "유니버설아트센터"
                },
                {
                    title: "디어 에반 핸슨",
                    role: "하이디 핸슨",
                    period: "2024.03.28 ~ 2024.06.23",
                    details: "충무아트센터 대극장"
                },
                {
                    title: "컴프롬어웨이",
                    role: "비벌리/아네트 외",
                    period: "2023.11.28 ~ 2024.02.18",
                    details: "광림아트센터 BBCH홀"
                }
            ]
        },
        {
            year: "2023",
            works: [
                {
                    title: "레베카 (10주년)",
                    role: "댄버스 부인",
                    period: "2023.08.19 ~ 2023.11.19",
                    details: "블루스퀘어 신한카드홀"
                },
                {
                    title: "단독 콘서트 <친절한 영숙씨>",
                    role: "본인",
                    period: "2023.08.18 ~ 2023.08.19",
                    details: "LG아트센터 서울 LG SIGNATURE 홀"
                },
                {
                    title: "맘마미아!",
                    role: "도나",
                    period: "2023.03.24 ~ 2023.06.25",
                    details: "충무아트센터 대극장"
                }
            ]
        },
        {
            year: "2022",
            works: [
                {
                    title: "브로드웨이 42번가",
                    role: "도로시 브록",
                    period: "2022.11.05 ~ 2023.01.15",
                    details: "예술의전당 CJ 토월극장"
                },
                {
                    title: "웃는 남자",
                    role: "조시아나 여공작",
                    period: "2022.06.10 ~ 2022.08.22",
                    details: "세종문화회관 대극장"
                },
                {
                    title: "엑스칼리버 (앙코르)",
                    role: "모르가나",
                    period: "2022.01.29 ~ 2022.03.13",
                    details: "세종문화회관 대극장"
                }
            ]
        },
        {
            year: "2021",
            works: [
                {
                    title: "레베카",
                    role: "댄버스 부인",
                    period: "2021.11.16 ~ 2022.02.27",
                    details: "충무아트센터 대극장"
                },
                {
                    title: "엑스칼리버",
                    role: "모르가나",
                    period: "2021.08.17 ~ 2021.11.07",
                    details: "블루스퀘어 신한카드홀"
                },
                {
                    title: "팬텀",
                    role: "마담 카를로타",
                    period: "2021.03.17 ~ 2021.06.27",
                    details: "샤롯데씨어터"
                }
            ]
        },
        {
            year: "2020",
            works: [
                {
                    title: "모차르트! (10주년)",
                    role: "발트슈테텐 남작부인",
                    period: "2020.06.16 ~ 2020.08.20",
                    details: "세종문화회관 대극장"
                },
                {
                    title: "웃는 남자",
                    role: "조시아나 여공작",
                    period: "2020.01.09 ~ 2020.03.01",
                    details: "예술의전당 오페라극장"
                }
            ]
        },
        {
            year: "2019",
            works: [
                {
                    title: "레베카",
                    role: "댄버스 부인",
                    period: "2019.11.16 ~ 2020.03.15",
                    details: "충무아트센터 대극장"
                },
                {
                    title: "맘마미아!",
                    role: "도나",
                    period: "2019.07.14 ~ 2019.09.14",
                    details: "LG아트센터"
                },
                {
                    title: "엑스칼리버 (초연)",
                    role: "모르가나",
                    period: "2019.06.15 ~ 2019.08.04",
                    details: "세종문화회관 대극장"
                }
            ]
        },
        {
            year: "2018 - 2019",
            works: [
                {
                    title: "엘리자벳",
                    role: "황후 엘리자벳",
                    period: "2018.11.17 ~ 2019.02.10",
                    details: "블루스퀘어 인터파크홀"
                },
                {
                    title: "웃는 남자 (초연)",
                    role: "조시아나 여공작",
                    period: "2018.07.10 ~ 2018.08.26",
                    details: "예술의전당 오페라극장"
                }
            ]
        },
        {
            year: "2017",
            works: [
                {
                    title: "더 라스트 키스",
                    role: "라리쉬 백작부인",
                    period: "2017.12.15 ~ 2018.03.11",
                    details: "LG아트센터"
                },
                {
                    title: "레베카",
                    role: "댄버스 부인",
                    period: "2017.08.10 ~ 2017.11.12",
                    details: "블루스퀘어 삼성전자홀"
                },
                {
                    title: "투란도트",
                    role: "투란도트",
                    period: "2017.06.23 ~ 2017.07.29",
                    details: "대구오페라하우스 등"
                }
            ]
        },
        {
            year: "2016",
            works: [
                {
                    title: "모차르트!",
                    role: "발트슈테텐 남작부인",
                    period: "2016.06.10 ~ 2016.08.07",
                    details: "세종문화회관 대극장"
                },
                {
                    title: "맘마미아!",
                    role: "도나",
                    period: "2016.02.24 ~ 2016.06.04",
                    details: "샤롯데씨어터"
                }
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
                {
                    title: "로미오 앤 줄리엣",
                    role: "레이디 캐퓰릿",
                    period: "2009",
                    details: "예술의전당"
                },
                {
                    title: "캣츠",
                    role: "그리자벨라",
                    period: "2008",
                    details: "샤롯데씨어터"
                },
                {
                    title: "나쁜 녀석들",
                    role: "뮤리엘",
                    period: "2008",
                    details: "두산아트센터 연강홀"
                },
                {
                    title: "헤어스프레이",
                    role: "모터마우스",
                    period: "2007",
                    details: "충무아트센터 대극장"
                },
                {
                    title: "시스터 소울",
                    role: "조세핀",
                    period: "2007",
                    details: "서강대학교 메리홀"
                },
                {
                    title: "바람의 나라",
                    role: "세류",
                    period: "2007",
                    details: "예술의전당 CJ 토월극장"
                }
            ]
        },
        {
            year: "2005 - 2006",
            works: [
                {
                    title: "크리스마스 캐롤",
                    role: "크래칫 부인",
                    period: "2006",
                    details: ""
                },
                {
                    title: "이(爾)",
                    role: "장녹수",
                    period: "2006",
                    details: "아르코예술극장 대극장"
                },
                {
                    title: "바람의 나라",
                    role: "세류",
                    period: "2006",
                    details: "예술의전당 CJ 토월극장"
                },
                {
                    title: "고대의 향기",
                    role: "무천, 산화가",
                    period: "2005",
                    details: ""
                },
                {
                    title: "바리",
                    role: "바리",
                    period: "2005",
                    details: ""
                },
                {
                    title: "로미오와 줄리엣",
                    role: "유모",
                    period: "2005",
                    details: "예술의전당 CJ 토월극장"
                }
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

    // 수상 내역
    const awards = [
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

    // 인포그래픽 데이터 계산
    const calculateStats = () => {
        const totalWorks = timelineData.reduce((sum, group) => sum + group.works.length, 0);
        const careerYears = new Date().getFullYear() - profile.debut;

        // 작품별 출연 횟수 계산
        const workCounts = {};
        timelineData.forEach(group => {
            group.works.forEach(work => {
                const baseTitle = work.title.replace(/\s*\(.*?\)\s*/g, '').trim();
                workCounts[baseTitle] = (workCounts[baseTitle] || 0) + 1;
            });
        });

        // 극장별 출연 횟수
        const venueCounts = {};
        timelineData.forEach(group => {
            group.works.forEach(work => {
                if (work.details) {
                    const venue = work.details.split(' ')[0];
                    if (venue) {
                        venueCounts[venue] = (venueCounts[venue] || 0) + 1;
                    }
                }
            });
        });

        // 연도별 활동량
        const yearlyActivity = timelineData.map(group => ({
            year: group.year,
            count: group.works.length
        }));

        return {
            totalWorks,
            careerYears,
            totalAwards: awards.length,
            topWorks: Object.entries(workCounts)
                .sort((a, b) => b[1] - a[1])
                .slice(0, 5)
                .map(([title, count]) => ({ title, count })),
            topVenues: Object.entries(venueCounts)
                .sort((a, b) => b[1] - a[1])
                .slice(0, 5)
                .map(([venue, count]) => ({ venue, count })),
            yearlyActivity
        };
    };

    const stats = calculateStats();

    const toggleYear = (index) => {
        if (expandedYear === index) {
            setExpandedYear(null);
        } else {
            setExpandedYear(index);
        }
    };

    return (
        <div className="min-h-screen bg-cream text-charcoal font-serif selection:bg-gold selection:text-white">
            {/* Header Section */}
            <header className="relative py-16 px-4 overflow-hidden bg-gradient-to-b from-cream via-lavender/20 to-cream">
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <div className="inline-block p-2 rounded-full border border-gold/30 mb-4">
                        <span className="text-gold text-sm font-semibold tracking-wider px-2">MUSICAL ACTRESS</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-4 text-gold" style={{ fontFamily: 'Playfair Display, serif' }}>
                        {profile.name}
                    </h1>
                    <p className="text-xl text-gray-600 font-light mb-8 max-w-2xl mx-auto leading-relaxed">
                        "{profile.description}"
                    </p>

                    <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
                        <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full border border-gold/20 shadow-sm">
                            <Calendar className="w-4 h-4 text-gold" />
                            <span>데뷔: {profile.debut}년</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full border border-gold/20 shadow-sm">
                            <Mic2 className="w-4 h-4 text-gold" />
                            <span>별명: {profile.keywords.join(', ')}</span>
                        </div>
                    </div>
                </div>

                {/* Background decorative elements */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <div className="absolute top-10 left-10 w-32 h-32 bg-gold rounded-full blur-3xl"></div>
                    <div className="absolute bottom-10 right-10 w-48 h-48 bg-burgundy rounded-full blur-3xl"></div>
                </div>
            </header>

            {/* Navigation Tabs */}
            <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
                <div className="max-w-4xl mx-auto flex justify-center p-2">
                    {[
                        { id: 'timeline', label: '작품 히스토리', icon: Calendar },
                        { id: 'roles', label: '대표 캐릭터', icon: Star },
                        { id: 'awards', label: '수상 기록', icon: Award },
                        { id: 'infographic', label: '통계 & 인포그래픽', icon: BarChart3 }
                    ].map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-4 py-3 mx-1 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${activeTab === tab.id
                                    ? 'bg-gold text-white shadow-lg'
                                    : 'text-gray-600 hover:text-charcoal hover:bg-gray-100'
                                }`}
                        >
                            <tab.icon className="w-4 h-4" />
                            <span className="hidden md:inline">{tab.label}</span>
                        </button>
                    ))}
                </div>
            </div>

            <main className="max-w-4xl mx-auto p-4 md:p-8 pb-20">

                {/* Timeline Content */}
                {activeTab === 'timeline' && (
                    <div className="space-y-6 animate-fadeIn">
                        <div className="flex items-center gap-2 mb-6 text-gold">
                            <Sparkles className="w-5 h-5" />
                            <h2 className="text-2xl font-bold text-charcoal">연도별 작품 히스토리</h2>
                        </div>

                        <div className="space-y-4">
                            {timelineData.map((group, idx) => (
                                <div key={idx} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-gold/30 transition-colors shadow-sm">
                                    <div
                                        onClick={() => toggleYear(idx)}
                                        className="flex justify-between items-center p-5 cursor-pointer bg-cream/30 hover:bg-cream/50 transition-colors"
                                    >
                                        <div className="flex items-center gap-4">
                                            <span className="text-xl font-bold text-gold font-mono">{group.year}</span>
                                            <span className="text-gray-500 text-sm">{group.works.length}개의 작품</span>
                                        </div>
                                        {expandedYear === idx ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
                                    </div>

                                    {/* Always show content for first item or if expanded */}
                                    <div className={`transition-all duration-300 ease-in-out ${expandedYear === idx || idx < 3 ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                                        <div className="p-5 pt-0 grid gap-3 overflow-y-auto max-h-[500px]">
                                            <div className="h-px bg-gray-200 mb-2"></div>
                                            {group.works.map((work, workIdx) => (
                                                <div key={workIdx} className="flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-lg hover:bg-lavender/20 transition-colors">
                                                    <div className="flex items-center gap-3 w-full sm:w-1/3">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-gold shrink-0"></div>
                                                        <span className="text-lg font-bold text-charcoal">{work.title}</span>
                                                    </div>
                                                    <div className="flex flex-col sm:items-end mt-2 sm:mt-0 pl-4 sm:pl-0 w-full sm:w-2/3">
                                                        <span className="text-burgundy font-medium flex items-center gap-1">
                                                            <User className="w-3 h-3" /> {work.role}
                                                        </span>
                                                        {/* Date & Location */}
                                                        <div className="text-gray-500 text-xs mt-1 flex flex-col sm:items-end gap-0.5">
                                                            {work.period && (
                                                                <span className="flex items-center gap-1">
                                                                    <Clock className="w-3 h-3" /> {work.period}
                                                                </span>
                                                            )}
                                                            {work.details && (
                                                                <span className="flex items-center gap-1">
                                                                    <MapPin className="w-3 h-3" /> {work.details}
                                                                </span>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="text-center text-gray-500 text-sm mt-8">
                            * 위 리스트는 주요 작품을 중심으로 구성되었습니다.
                        </div>
                    </div>
                )}

                {/* Signature Roles Content */}
                {activeTab === 'roles' && (
                    <div className="animate-fadeIn grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="col-span-full flex items-center gap-2 mb-4 text-gold">
                            <Star className="w-5 h-5" />
                            <h2 className="text-2xl font-bold text-charcoal">신영숙의 인생 캐릭터</h2>
                        </div>

                        {signatureRoles.map((role, idx) => (
                            <div key={idx} className="relative overflow-hidden rounded-2xl group cursor-default bg-white border border-gray-200 hover:border-gold/40 transition-all shadow-sm hover:shadow-md">
                                <div className="relative p-6 h-full flex flex-col justify-between">
                                    <div>
                                        <div className="flex justify-between items-start mb-4">
                                            <h3 className="text-2xl font-bold text-charcoal">{role.work}</h3>
                                            <Music className="w-6 h-6 text-gray-300 group-hover:text-gold transition-colors" />
                                        </div>
                                        <div className="text-xl text-burgundy font-bold mb-3">{role.role}</div>
                                        <p className="text-gray-600 leading-relaxed">{role.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Awards Content */}
                {activeTab === 'awards' && (
                    <div className="animate-fadeIn">
                        <div className="flex items-center gap-2 mb-8 text-gold">
                            <Award className="w-5 h-5" />
                            <h2 className="text-2xl font-bold text-charcoal">수상의 영광</h2>
                        </div>

                        <div className="grid grid-cols-1 gap-4">
                            {awards.map((award, idx) => (
                                <div key={idx} className="flex items-center gap-4 bg-white p-4 rounded-lg border border-gray-200 hover:bg-cream/30 transition-colors shadow-sm">
                                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-gold to-burgundy rounded-full flex items-center justify-center text-white font-bold shadow-md">
                                        {award.year}
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-charcoal">{award.award}</h4>
                                        <p className="text-gray-500">{award.title}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 p-6 bg-cream/50 rounded-xl border border-gold/20 text-center">
                            <p className="text-gray-600">
                                "무대 위에서 가장 빛나는 별, 신영숙 배우의 역사는 계속됩니다."
                            </p>
                        </div>
                    </div>
                )}

                {/* Infographic Content */}
                {activeTab === 'infographic' && (
                    <div className="animate-fadeIn space-y-8">
                        <div className="flex items-center gap-2 mb-8 text-gold">
                            <BarChart3 className="w-5 h-5" />
                            <h2 className="text-2xl font-bold text-charcoal">작품 활동 통계</h2>
                        </div>

                        {/* Key Stats Cards */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="bg-gradient-to-br from-gold/10 to-gold/5 p-6 rounded-xl border border-gold/20 text-center shadow-sm">
                                <div className="text-3xl font-bold text-gold mb-2">{stats.careerYears}년</div>
                                <div className="text-sm text-gray-600">활동 경력</div>
                            </div>
                            <div className="bg-gradient-to-br from-burgundy/10 to-burgundy/5 p-6 rounded-xl border border-burgundy/20 text-center shadow-sm">
                                <div className="text-3xl font-bold text-burgundy mb-2">{stats.totalWorks}+</div>
                                <div className="text-sm text-gray-600">총 작품 수</div>
                            </div>
                            <div className="bg-gradient-to-br from-gold/10 to-gold/5 p-6 rounded-xl border border-gold/20 text-center shadow-sm">
                                <div className="text-3xl font-bold text-gold mb-2">{stats.totalAwards}</div>
                                <div className="text-sm text-gray-600">수상 경력</div>
                            </div>
                            <div className="bg-gradient-to-br from-burgundy/10 to-burgundy/5 p-6 rounded-xl border border-burgundy/20 text-center shadow-sm">
                                <div className="text-3xl font-bold text-burgundy mb-2">5+</div>
                                <div className="text-sm text-gray-600">대표 배역</div>
                            </div>
                        </div>

                        {/* Top Works */}
                        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                            <div className="flex items-center gap-2 mb-6">
                                <TrendingUp className="w-5 h-5 text-gold" />
                                <h3 className="text-xl font-bold text-charcoal">최다 출연 작품 TOP 5</h3>
                            </div>
                            <div className="space-y-3">
                                {stats.topWorks.map((work, idx) => (
                                    <div key={idx} className="flex items-center gap-4">
                                        <div className="flex-shrink-0 w-8 h-8 bg-gold text-white rounded-full flex items-center justify-center font-bold text-sm">
                                            {idx + 1}
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex justify-between items-center mb-1">
                                                <span className="font-semibold text-charcoal">{work.title}</span>
                                                <span className="text-burgundy font-bold">{work.count}회</span>
                                            </div>
                                            <div className="w-full bg-gray-200 rounded-full h-2">
                                                <div
                                                    className="bg-gradient-to-r from-gold to-burgundy h-2 rounded-full transition-all duration-500"
                                                    style={{ width: `${(work.count / stats.topWorks[0].count) * 100}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Top Venues */}
                        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                            <div className="flex items-center gap-2 mb-6">
                                <Theater className="w-5 h-5 text-gold" />
                                <h3 className="text-xl font-bold text-charcoal">주요 공연장 TOP 5</h3>
                            </div>
                            <div className="space-y-3">
                                {stats.topVenues.map((venue, idx) => (
                                    <div key={idx} className="flex items-center gap-4">
                                        <div className="flex-shrink-0 w-8 h-8 bg-burgundy text-white rounded-full flex items-center justify-center font-bold text-sm">
                                            {idx + 1}
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex justify-between items-center mb-1">
                                                <span className="font-semibold text-charcoal">{venue.venue}</span>
                                                <span className="text-burgundy font-bold">{venue.count}회</span>
                                            </div>
                                            <div className="w-full bg-gray-200 rounded-full h-2">
                                                <div
                                                    className="bg-gradient-to-r from-burgundy to-gold h-2 rounded-full transition-all duration-500"
                                                    style={{ width: `${(venue.count / stats.topVenues[0].count) * 100}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Yearly Activity Timeline */}
                        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                            <div className="flex items-center gap-2 mb-6">
                                <Trophy className="w-5 h-5 text-gold" />
                                <h3 className="text-xl font-bold text-charcoal">연도별 활동량</h3>
                            </div>
                            <div className="space-y-2">
                                {stats.yearlyActivity.slice(0, 10).map((year, idx) => (
                                    <div key={idx} className="flex items-center gap-3">
                                        <div className="w-24 text-sm font-mono text-gray-600">{year.year}</div>
                                        <div className="flex-1 flex items-center gap-2">
                                            <div className="flex-1 bg-gray-200 rounded-full h-6 relative overflow-hidden">
                                                <div
                                                    className="bg-gradient-to-r from-gold via-burgundy to-gold h-6 rounded-full flex items-center justify-end pr-2 text-white text-xs font-bold transition-all duration-500"
                                                    style={{ width: `${Math.min((year.count / 8) * 100, 100)}%` }}
                                                >
                                                    {year.count > 0 && year.count}
                                                </div>
                                            </div>
                                            <span className="text-sm text-gray-500 w-12">작품</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Career Highlights */}
                        <div className="bg-gradient-to-br from-cream to-lavender/30 p-6 rounded-xl border border-gold/20">
                            <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-2">
                                <Sparkles className="w-5 h-5 text-gold" />
                                커리어 하이라이트
                            </h3>
                            <div className="grid md:grid-cols-2 gap-4 text-sm">
                                <div className="bg-white/60 p-4 rounded-lg">
                                    <div className="text-burgundy font-bold mb-1">데뷔작</div>
                                    <div className="text-charcoal">명성황후 (1999)</div>
                                </div>
                                <div className="bg-white/60 p-4 rounded-lg">
                                    <div className="text-burgundy font-bold mb-1">대표 넘버</div>
                                    <div className="text-charcoal">황금별 (모차르트!)</div>
                                </div>
                                <div className="bg-white/60 p-4 rounded-lg">
                                    <div className="text-burgundy font-bold mb-1">인생 캐릭터</div>
                                    <div className="text-charcoal">댄버스 부인 (레베카)</div>
                                </div>
                                <div className="bg-white/60 p-4 rounded-lg">
                                    <div className="text-burgundy font-bold mb-1">최근 활동</div>
                                    <div className="text-charcoal">명성황후 30주년 (2025)</div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </main>

            <footer className="py-8 text-center text-gray-500 text-sm border-t border-gray-200 bg-white">
                <p>Data Source: PlayDB & Musical Archives</p>
                <p className="mt-2">Created for Shin Young Sook Fans</p>
            </footer>

            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Noto+Serif+KR:wght@300;400;600;700&display=swap');
        
        body {
          font-family: 'Noto Serif KR', serif;
        }
        
        h1, h2, h3 {
          font-family: 'Playfair Display', serif;
        }
        
        .bg-cream {
          background-color: #fffaf0;
        }
        
        .bg-lavender {
          background-color: #e6e6fa;
        }
        
        .bg-burgundy {
          background-color: #6b303b;
        }
        
        .text-charcoal {
          color: #333333;
        }
        
        .text-gold {
          color: #d4af37;
        }
        
        .text-burgundy {
          color: #6b303b;
        }
        
        .bg-gold {
          background-color: #d4af37;
        }
        
        .border-gold {
          border-color: #d4af37;
        }
        
        .border-burgundy {
          border-color: #6b303b;
        }
        
        .from-gold {
          --tw-gradient-from: #d4af37;
        }
        
        .to-burgundy {
          --tw-gradient-to: #6b303b;
        }
        
        .from-burgundy {
          --tw-gradient-from: #6b303b;
        }
        
        .to-gold {
          --tw-gradient-to: #d4af37;
        }
        
        .via-burgundy {
          --tw-gradient-stops: var(--tw-gradient-from), #6b303b, var(--tw-gradient-to);
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
        </div>
    );
};

export default ShinYoungSookInfo;

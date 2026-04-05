export type Locale = 'en' | 'ko';

const en = {
  nav: {
    home: 'Home',
    about: 'About',
    services: 'Services',
    insurance: 'Insurance',
    location: 'Location',
    korean: '한국어',
  },
  footer: {
    quickLinks: 'Quick Links',
    hoursTitle: 'Hours & visits',
    insuranceNote:
      'New patients welcome. Insurance plans vary—call to confirm. UHC Advantage, Medicare, Molina, and others may be accepted.',
    insuranceNoteKo: '신규 환자 환영. 보험은 개별 확인 부탁드립니다.',
    copyright: 'All rights reserved.',
    reviews: 'Patient Reviews',
    faq: 'Frequently Asked Questions',
    privacy: 'Privacy Policy',
    aboutUs: 'About Us',
    ourServices: 'Our Services',
    insurancePayments: 'Insurance & Payments',
    locationHours: 'Location & Hours',
  },
  home: {
    heroKicker: 'Family medicine · Plano, Texas',
    heroIntro:
      'A calm, reliable hub for family-oriented primary care—clear information about our practice, services, and how we support your health over time.',
    inPersonLabel: 'In-person availability',
    badgeBilingual: 'English & Korean',
    badgeNewPatients: 'New patients welcome',
    badgeInsurance: 'Medicare & major plans — verify by phone',
    ctaAbout: 'About our practice',
    ctaServices: 'Services & education',
    ctaKoreanHub: 'Korean information hub',
    officePhone: 'Office telephone:',
    trustBoard: 'Board-certified family MD',
    trustInPerson: 'In-person 2 days / week',
    trustBilingual: 'English & Korean',
    trustTraining: 'UTSW & Yale-trained',
    trustPlano: 'Plano 75093',
    servicesTitle: 'Our services',
    servicesLead:
      'Educational overview of what family medicine can offer—primary care, prevention, chronic conditions, and exams.',
    servicesTopics: 'Primary care · Preventive care · Chronic disease management · Physical exams',
    viewAllServices: 'View All Services',
    whyTitle: 'Why patients choose us',
    whyLead:
      'A steady, family-doctor style relationship—thoughtful explanations, prevention first, and respect for your time.',
    whyCards: [
      { title: 'Personalized Care', desc: 'Care plans tailored to you and your family.' },
      { title: 'Experienced Physician', desc: 'Trusted training and dedicated family medicine.' },
      { title: 'Preventive Approach', desc: 'Focus on wellness, screenings, and staying ahead of illness.' },
      { title: 'Comfortable Environment', desc: 'A professional, welcoming clinic experience.' },
    ],
    doctorMeet: 'Meet Steven Chae, MD',
    doctorRole: 'Board-Certified Family Physician',
    doctorBio:
      'Dr. Steven Chae is a Family Medicine physician trained at UT Southwestern and Yale-affiliated programs.',
    doctorCta: 'Physician profile & background',
    doctorTags: ['UT Southwestern', 'Yale-affiliated training'],
    insuranceLabel: 'Insurance',
    insuranceBody:
      'For reference: we work with United Healthcare Advantage, Traditional Medicare, Molina, and other plans. Coverage varies—please call to confirm your benefits.',
    insuranceViewList: "Don't see your plan?",
    insuranceViewListLink: 'View full list',
    contactTitle: 'Contact & Location',
    contactLead:
      'Address, phone, email, and website for your records. See Location & hours for the in-person schedule.',
    addressLabel: 'Address',
    phoneLabel: 'Phone',
    emailLabel: 'Email',
    websiteLabel: 'Website',
    getDirections: 'Get Directions',
    officeHoursBtn: 'Office Hours',
    floatingBoard: 'Board-certified',
    floatingFamily: 'Family physician',
    officeAlt: 'Clinic environment',
    ctaFinalTitle: 'Contact & scheduling',
    ctaFinalSubtitle:
      'If you would like to schedule or have questions about visits, insurance, or languages spoken, our staff can guide you during office hours.',
    ctaFinalFooter:
      'New patients are welcome. Medicare and many commercial plans; please verify coverage by phone.',
    serviceCards: [
      {
        title: 'Primary Care',
        desc: 'Comprehensive health management for all ages.',
        link: '/services/primary-care-plano',
      },
      {
        title: 'Preventive Care',
        desc: 'Wellness exams, screenings, and immunizations.',
        link: '/services/preventive-care-plano',
      },
      {
        title: 'Chronic Disease',
        desc: 'Expert care for diabetes, hypertension, and more.',
        link: '/services/chronic-disease-management-plano',
      },
      {
        title: 'Physical Exams',
        desc: 'Annual, sports, and Medicare wellness physicals.',
        link: '/services/physical-exams-plano',
      },
    ],
  },
  about: {
    title: 'About SC Family Clinic',
    intro:
      'Patient-centered primary care in Plano, TX. We focus on long-term relationships built on trust, clear information, and compassionate care.',
    missionTitle: 'Our mission',
    missionBody:
      'To provide high-quality, comprehensive medical care for individuals and families in Plano, with emphasis on prevention and chronic disease support so patients can stay as healthy as possible.',
    visionTitle: "Dr. Chae's vision",
    visionBody:
      'Dr. Steven Chae founded SC Family Clinic so patients are treated like family. With English and Korean fluency, he recognized the need for accessible, culturally aware care in North Texas. His approach combines strong medical training with a warm, personal style.',
    valuesTitle: 'Our core values',
    values: [
      {
        title: 'Experienced physician',
        desc: 'Training at respected institutions including UT Southwestern and Yale-affiliated programs, with a commitment to ongoing learning.',
      },
      {
        title: 'Whole-person care',
        desc: 'We look beyond symptoms—considering lifestyle, history, and long-term goals.',
      },
      {
        title: 'Comfortable environment',
        desc: 'A welcoming space where you feel heard and respected.',
      },
    ],
  },
  servicesPage: {
    title: 'Our medical services',
    intro:
      'Primary care services tailored to your health needs. Below is an overview; each topic links to more detail.',
    learnMore: 'Learn more',
    items: [
      {
        id: 'primary',
        title: 'Primary Care',
        desc: 'Health management for all ages—from check-ups to acute illness.',
        features: ['New patient exams', 'Medicare wellness', 'Acute illness care'],
        link: '/services/primary-care-plano',
      },
      {
        id: 'preventive',
        title: 'Preventive Care',
        desc: 'Screenings, immunizations, and wellness counseling.',
        features: ['Cancer screenings', 'Immunizations', 'Heart health'],
        link: '/services/preventive-care-plano',
      },
      {
        id: 'chronic',
        title: 'Chronic Disease Management',
        desc: 'Support for long-term conditions to improve daily life and reduce complications.',
        features: ['Diabetes', 'Hypertension', 'Cholesterol management'],
        link: '/services/chronic-disease-management-plano',
      },
      {
        id: 'physical',
        title: 'Physical Exams',
        desc: 'Evaluations for school, work, sports, or annual maintenance.',
        features: ['Annual physicals', 'Sports physicals', 'Employment exams'],
        link: '/services/physical-exams-plano',
      },
    ],
  },
  serviceSub: {
    back: 'Back to Services',
    keyBenefits: 'Key benefits & services',
    ctaTitle: 'Questions about this service?',
    ctaBody: 'Call our Plano office for scheduling and general information.',
    primary: {
      h1: 'Primary Care & Family Medicine in Plano, TX 75093',
      title: 'Primary Care',
      explanation:
        'Primary care is the foundation of your health. We provide comprehensive care for all ages, emphasizing long-term wellness and prevention.',
      benefits: [
        'Personalized care from a board-certified physician',
        'Acute illness and minor injury care',
        'Coordination with specialists when needed',
        'New patients and Medicare welcome',
        'Bilingual care (English and Korean)',
      ],
    },
    preventive: {
      h1: 'Preventive Care & Wellness in Plano, TX',
      title: 'Preventive Care',
      explanation:
        'Preventive care helps you stay well and find issues early, when they are often easier to address.',
      benefits: [
        'Annual wellness exams',
        'Cancer screenings (e.g. colon, breast, prostate)',
        'Immunizations and flu shots',
        'Heart health and blood pressure checks',
        'Lifestyle and nutrition counseling',
      ],
    },
    chronic: {
      h1: 'Chronic Disease Management in Plano, TX',
      title: 'Chronic Disease Management',
      explanation:
        'Chronic conditions need consistent, informed care. We work with you to manage long-term health effectively.',
      benefits: [
        'Diabetes monitoring and management',
        'Hypertension (high blood pressure) care',
        'Cholesterol and lipid management',
        'Asthma and COPD support',
        'Thyroid disorder management',
      ],
    },
    physical: {
      h1: 'Physical Exams in Plano, TX',
      title: 'Physical Exams',
      explanation:
        'Whether you need an annual visit or a school, work, or sports form, we provide thorough evaluations.',
      benefits: [
        'Annual physicals',
        'Medicare Annual Wellness Visits',
        'Sports physicals',
        'Pre-employment and work physicals',
        'School and camp physicals',
      ],
    },
  },
  doctor: {
    badge: 'Accepting new patients',
    role: 'Board-Certified Family Physician',
    bioTitle: 'Professional biography',
    bio1:
      'Dr. Steven Chae is a board-certified family physician serving the Plano community with thoughtful, evidence-based care.',
    bio2:
      'He studied at the University of Texas at Austin, earned his MD at UT Southwestern Medical Center in Dallas, and completed residency training at Yale-affiliated programs and the University of Louisville, including fellowship-level training.',
    bio3:
      'He has served in medical leadership roles and focuses on preventive medicine and chronic disease management. He is fluent in English and Korean.',
    credTitle: 'Credentials & experience',
    eduTitle: 'Education & training',
    eduItems: [
      'UT Southwestern Medical Center (MD)',
      'Yale-affiliated residency program',
      'University of Louisville residency',
      'University of Texas at Austin (undergraduate)',
    ],
    certTitle: 'Certifications & memberships',
    certItems: [
      'American Board of Family Medicine certified',
      'Texas medical license',
      'American Medical Association member',
      'American Academy of Family Physicians member',
    ],
    langTitle: 'Languages',
    langBody: 'Fluent in English and Korean (한국어)',
  },
  insurance: {
    title: 'Insurance & payments',
    intro: 'We work with many plans so patients can access care. Always confirm your specific benefits with our office.',
    acceptedTitle: 'Commonly accepted plans',
    footnote:
      '* Coverage can vary by plan. Please call to verify that we accept your insurance.',
    uninsuredTitle: 'Uninsured patients',
    uninsuredBody:
      'If you do not have insurance, contact us to discuss self-pay options and consultation fees.',
    uninsuredCall: 'Call office',
    bringTitle: 'What to bring',
    bringItems: [
      { title: 'Valid photo ID', desc: "Driver's license or state ID." },
      { title: 'Insurance card', desc: 'Current medical insurance card.' },
      { title: 'Medication list', desc: 'All medications with doses.' },
      { title: 'Medical records', desc: 'Relevant records if you are new to the practice.' },
    ],
    plans: [
      'United Healthcare (PPO/HMO)',
      'UHC Medicare Advantage',
      'Medicare (Traditional)',
      'Molina Healthcare',
      'Aetna (select plans)',
      'Blue Cross Blue Shield (select plans)',
    ],
  },
  faq: {
    title: 'Frequently asked questions',
    intro: 'Answers about our clinic, services, and policies.',
    items: [
      {
        q: 'Are you accepting new patients?',
        a: 'Yes. We welcome new patients of all ages in Plano. Call {phone} for information and scheduling.',
      },
      {
        q: 'Do you accept Medicare?',
        a: 'Yes. We accept traditional Medicare and many Medicare Advantage plans, including UHC Advantage.',
      },
      {
        q: 'Does the doctor speak Korean?',
        a: 'Yes. Dr. Chae is fluent in English and Korean (한국어).',
      },
      {
        q: 'What insurance plans do you accept?',
        a: 'We accept United Healthcare, UHC Advantage, Molina, Medicare, and other major plans. Please call to verify your coverage.',
      },
      {
        q: 'Where is the clinic?',
        a: '5168 Village Creek Dr, Suite 300, Plano, TX 75093—near West Plano Parkway and Village Creek Drive.',
      },
      {
        q: 'What if I do not have insurance?',
        a: 'We offer self-pay options. Contact the office to discuss fees and payment.',
      },
    ],
  },
  reviews: {
    title: 'Patient reviews',
    intro: 'Feedback from patients about care at SC Family Clinic.',
    googleCta: 'More reviews on Google →',
    items: [
      {
        name: 'John',
        text: 'Dr. Chae is thorough and listens carefully. Professional staff and a clean clinic.',
        rating: 5,
      },
      {
        name: 'Sarah',
        text: 'So glad I found SC Family Clinic for primary care in Plano. Highly recommend.',
        rating: 5,
      },
      {
        name: 'Min',
        text: '친절하시고 설명도 잘 해주셔서 너무 좋았습니다. 플레이노에서 한국어 하시는 의사 선생님 찾으시는 분들께 강력 추천합니다.',
        rating: 5,
      },
      {
        name: 'David',
        text: 'Excellent care and reasonable wait times. Knowledgeable and caring physician.',
        rating: 5,
      },
      {
        name: 'Linda',
        text: 'Great experience with my Medicare wellness visit—efficient and attentive.',
        rating: 5,
      },
    ],
  },
  privacy: {
    title: 'Privacy policy',
    updated: 'Last updated: April 2026',
    lead:
      'SC Family Clinic is committed to protecting your privacy. This page explains how we handle information on this website.',
    s1h: '1. No collection of PHI on this site',
    s1b:
      'This website is informational. We do not collect Protected Health Information (PHI) here. We do not use online appointment forms or patient portals on this domain for that reason.',
    s2h: '2. HIPAA',
    s2b:
      'Clinical operations follow HIPAA. Information shared during visits or phone calls is protected under federal and state law.',
    s3h: '3. Texas privacy law',
    s3b: 'We follow the Texas Medical Privacy Act and other applicable state rules.',
    s4h: '4. Analytics',
    s4b:
      'We may use tools such as Google Analytics to understand site usage, with settings aimed at protecting identity (e.g. IP anonymization where available).',
    s5h: '5. Contact',
    s5b:
      'For privacy questions, call our office. Please avoid sending sensitive health information by email.',
  },
  location: {
    title: 'Location & hours',
    subtitleKoLabel: '위치 및 진료 시간',
    introLine: '{name} ({nameKo}) — Plano, Texas.',
    mapBtn: 'Open in Google Maps',
    hoursTitle: 'Office hours',
    hoursKoLabel: '진료·업무 시간',
    contactTitle: 'Contact',
    phoneLbl: 'Phone:',
    emailLbl: 'Email:',
    areasTitle: 'Areas we serve',
    areasBody:
      'We serve patients from communities across North Texas, including:',
    cities: ['Plano', 'Frisco', 'Allen', 'McKinney', 'Richardson', 'The Colony', 'Dallas', 'Carrollton', 'Murphy'],
    ctaDisclaimer:
      'Details here are for general information and may change—please confirm by phone.',
  },
  koreanPage: {
    hubLabel: 'Korean language support',
    officialLabel: 'Official names',
    intro:
      'Our Plano practice welcomes Korean-speaking patients. We share clear information about family medicine, prevention, chronic conditions, and exams—with fluent Korean communication when you visit or call.',
    drTitle: 'Dr. Steven Chae (채승기), MD',
    drSubtitle: 'Board-certified family physician',
    drBio:
      'Dr. Chae trained at UT Southwestern and Yale-affiliated programs. He emphasizes clear explanations and prevention.',
    bullets: [
      'Fluent in English and Korean',
      'In-person visits two days per week (call for schedule)',
      'Medicare and many plans—verify by phone',
      'Immunizations, checkups, chronic disease support',
    ],
    topicsTitle: 'Common topics we address',
    topics: [
      'General family medicine visits',
      'Diabetes, blood pressure, and cholesterol care',
      'Immunizations and health screenings',
      'Medicare wellness visits',
      'School and work physicals',
      'Acute illness and pain concerns',
    ],
    contactTitle: 'Contact & scheduling',
    contactBody:
      'Call during office hours for appointments, insurance, or scheduling. Our team can help in Korean.',
    office: 'Office:',
    callBtn: 'Call office',
    ctaEndTitle: 'Browse in English',
    ctaEndBody: 'Use the EN toggle or other menu pages for full English detail on services, insurance, and hours.',
  },
  ctaDefaults: {
    title: 'Questions or scheduling',
    subtitle:
      'Our team can help with scheduling, insurance verification, and general questions during posted office hours.',
    footer:
      'We accept United Healthcare Advantage and Traditional (Molina), among other plans. Uninsured patients are welcome to call for details.',
    phoneLabel: 'Office telephone:',
  },
  mobile: {
    officeLine: 'Office line',
  },
} as const;

export type Messages = typeof en;

const ko = {
  nav: {
    home: '홈',
    about: '소개',
    services: '진료 안내',
    insurance: '보험·결제',
    location: '위치·시간',
    korean: '한국어',
  },
  footer: {
    quickLinks: '바로가기',
    hoursTitle: '시간 및 방문',
    insuranceNote:
      '신규 환자 환영. 보험은 플랜별로 다를 수 있으니 전화로 확인해 주세요. UHC 어드밴티지, 메디케어, 몰리나 등.',
    insuranceNoteKo: '보험 세부 사항은 전화 문의 부탁드립니다.',
    copyright: 'All rights reserved.',
    reviews: '환자 후기',
    faq: '자주 묻는 질문',
    privacy: '개인정보 처리방침',
    aboutUs: '클리닉 소개',
    ourServices: '진료 과목',
    insurancePayments: '보험 및 결제',
    locationHours: '위치 및 진료 시간',
  },
  home: {
    heroKicker: '가정의학 · 플레이노, 텍사스',
    heroIntro:
      '가족 중심 일차 진료를 안내하는 공간입니다. 진료 내용·서비스·건강 관리 정보를 차분하고 신뢰할 수 있게 제공합니다.',
    inPersonLabel: '대면 진료 안내',
    badgeBilingual: '영어·한국어',
    badgeNewPatients: '신규 환자 환영',
    badgeInsurance: '메디케어·주요 보험 — 전화로 확인',
    ctaAbout: '클리닉 소개',
    ctaServices: '진료·교육 안내',
    ctaKoreanHub: '한국어 종합 안내',
    officePhone: '사무실 전화:',
    trustBoard: '보드 인증 가정의 전문의',
    trustInPerson: '대면 진료 주 2회',
    trustBilingual: '영어·한국어',
    trustTraining: 'UTSW·Yale 수련',
    trustPlano: 'Plano 75093',
    servicesTitle: '진료 안내',
    servicesLead:
      '가정의학에서 다루는 영역을 안내합니다 — 일차 진료, 예방, 만성 질환, 신체 검진 등.',
    servicesTopics: '일차 진료 · 예방 · 만성 질환 · 신체 검진',
    viewAllServices: '전체 진료 보기',
    whyTitle: '선택하는 이유',
    whyLead:
      '가정의와의 지속적인 관계, 이해하기 쉬운 설명, 예방 중심, 진료 시간 존중.',
    whyCards: [
      { title: '맞춤 진료', desc: '환자와 가족에 맞는 계획.' },
      { title: '경험 있는 의사', desc: '체계적 수련과 가정의 진료에 전념.' },
      { title: '예방 중심', desc: '검진과 건강 유지에 초점.' },
      { title: '편안한 환경', desc: '전문적이면서 따뜻한 진료 공간.' },
    ],
    doctorMeet: '채승기 원장 소개',
    doctorRole: '보드 인증 가정의 전문의',
    doctorBio:
      'UT Southwestern 및 Yale 계열 프로그램에서 수련한 가정의 전문의입니다.',
    doctorCta: '원장 프로필·경력',
    doctorTags: ['UT Southwestern', 'Yale 계열 수련'],
    insuranceLabel: '보험',
    insuranceBody:
      '유나이티드헬스케어 어드밴티지, 전통 메디케어, 몰리나 등 여러 플랜과 협력할 수 있습니다. 혜택은 개별 확인이 필요합니다.',
    insuranceViewList: '플랜이 목록에 없나요?',
    insuranceViewListLink: '전체 목록 보기',
    contactTitle: '연락처·위치',
    contactLead:
      '주소·전화·이메일·웹사이트 안내입니다. 대면 일정은 위치·시간 페이지를 참고해 주세요.',
    addressLabel: '주소',
    phoneLabel: '전화',
    emailLabel: '이메일',
    websiteLabel: '웹사이트',
    getDirections: '길 찾기',
    officeHoursBtn: '진료 시간',
    floatingBoard: '보드 인증',
    floatingFamily: '가정의 전문의',
    officeAlt: '진료 공간',
    ctaFinalTitle: '문의·예약',
    ctaFinalSubtitle:
      '방문 예약, 보험, 사용 언어 등 문의는 업무 시간에 안내해 드립니다.',
    ctaFinalFooter:
      '신규 환자 환영. 메디케어 및 여러 상업 보험 — 전화로 확인 부탁드립니다.',
    serviceCards: [
      {
        title: '일차 진료',
        desc: '전 연령 건강 관리.',
        link: '/services/primary-care-plano',
      },
      {
        title: '예방 진료',
        desc: '검진, 스크리닝, 예방 접종.',
        link: '/services/preventive-care-plano',
      },
      {
        title: '만성 질환',
        desc: '당뇨, 고혈압 등 관리.',
        link: '/services/chronic-disease-management-plano',
      },
      {
        title: '신체 검진',
        desc: '연간·스포츠·메디케어 웰니스.',
        link: '/services/physical-exams-plano',
      },
    ],
  },
  about: {
    title: 'SC 패밀리 클리닉 소개',
    intro:
      '플레이노에서 환자 중심 일차 진료를 제공합니다. 신뢰, 명확한 안내, 따뜻한 진료를 바탕으로 장기 관계를 지향합니다.',
    missionTitle: '미션',
    missionBody:
      '플레이노 지역 개인과 가족에게 질 높은 진료를 제공하고, 예방과 만성 질환 지원을 통해 건강한 삶을 돕습니다.',
    visionTitle: '원장의 비전',
    visionBody:
      '채승기 원장은 환자를 가족처럼 대하는 진료를 지향하며 클리닉을 세웠습니다. 영어와 한국어에 능통하여 북텍사스에서 문화적으로 세심한 진료의 필요를 알고 있습니다. 뛰어난 의학 교육과 따뜻한 태도를 함께 추구합니다.',
    valuesTitle: '핵심 가치',
    values: [
      {
        title: '경험 있는 의사',
        desc: 'UT Southwestern, Yale 계열 등 체계적 수련과 지속적인 학습.',
      },
      {
        title: '전인적 진료',
        desc: '증상뿐 아니라 생활, 병력, 장기 목표를 함께 고려합니다.',
      },
      {
        title: '편안한 환경',
        desc: '방문부터 존중과 경청이 느껴지는 공간을 지향합니다.',
      },
    ],
  },
  servicesPage: {
    title: '의료 서비스',
    intro:
      '건강 필요에 맞춘 일차 진료 개요입니다. 각 항목에서 자세한 설명으로 연결됩니다.',
    learnMore: '자세히 보기',
    items: [
      {
        id: 'primary',
        title: '일차 진료',
        desc: '전 연령 건강 관리 — 정기 검진부터 급성 질환까지.',
        features: ['신규 환자 검진', '메디케어 웰니스', '급성 질환 진료'],
        link: '/services/primary-care-plano',
      },
      {
        id: 'preventive',
        title: '예방 진료',
        desc: '스크리닝, 예방 접종, 웰니스 상담.',
        features: ['암 스크리닝', '예방 접종', '심장 건강'],
        link: '/services/preventive-care-plano',
      },
      {
        id: 'chronic',
        title: '만성 질환 관리',
        desc: '장기 질환 지원으로 일상의 질과 합병증 예방에 도움.',
        features: ['당뇨', '고혈압', '콜레스테롤 관리'],
        link: '/services/chronic-disease-management-plano',
      },
      {
        id: 'physical',
        title: '신체 검진',
        desc: '학교, 직장, 스포츠, 연간 검진.',
        features: ['연간 검진', '스포츠 검진', '채용 검진'],
        link: '/services/physical-exams-plano',
      },
    ],
  },
  serviceSub: {
    back: '진료 목록으로',
    keyBenefits: '주요 내용',
    ctaTitle: '이 진료에 대해 문의가 있으신가요?',
    ctaBody: '예약 및 일반 안내는 플레이노 사무실로 전화 주세요.',
    primary: {
      h1: '플레이노 TX 75093 일차 진료·가정의학',
      title: '일차 진료',
      explanation:
        '일차 진료는 건강의 기초입니다. 전 연령에 걸쳐 장기 웰니스와 예방을 중심으로 포괄적 진료를 제공합니다.',
      benefits: [
        '보드 인증 의사의 맞춤 진료',
        '급성 질환·경미한 손상 관리',
        '필요 시 전문의와의 연계',
        '신규 환자 및 메디케어 환영',
        '영어·한국어 진료',
      ],
    },
    preventive: {
      h1: '플레이노 예방 진료·웰니스',
      title: '예방 진료',
      explanation:
        '예방 진료는 건강을 유지하고 문제를 이른 단계에서 발견하도록 돕습니다.',
      benefits: [
        '연간 웰니스 검진',
        '암 스크리닝(대장, 유방, 전립선 등)',
        '예방 접종·독감 주사',
        '심장 건강·혈압 확인',
        '생활·영양 상담',
      ],
    },
    chronic: {
      h1: '플레이노 만성 질환 관리',
      title: '만성 질환 관리',
      explanation:
        '만성 질환은 꾸준하고 전문적인 관리가 필요합니다. 장기 건강 관리를 함께합니다.',
      benefits: [
        '당뇨 모니터링·관리',
        '고혈압 관리',
        '콜레스테롤·지질 관리',
        '천식·COPD 지원',
        '갑상선 질환 관리',
      ],
    },
    physical: {
      h1: '플레이노 신체 검진',
      title: '신체 검진',
      explanation:
        '연간 검진이나 학교·직장·스포츠용 검진까지 꼼꼼히 평가합니다.',
      benefits: [
        '연간 신체 검진',
        '메디케어 연간 웰니스 방문',
        '스포츠 검진',
        '채용 전·직장 검진',
        '학교·캠프 검진',
      ],
    },
  },
  doctor: {
    badge: '신규 환자 접수',
    role: '보드 인증 가정의 전문의',
    bioTitle: '전문 약력',
    bio1:
      '채승기 원장은 플레이노 지역에서 근거에 기반한 세심한 진료를 제공하는 보드 인증 가정의 전문의입니다.',
    bio2:
      '텍사스 대학교 오스틴, 달라스 UT Southwestern 의대, Yale 계열 및 Louisville 레지던시·펠로우 수련을 이수했습니다.',
    bio3:
      '의료 행정 경험이 있으며 예방 의학과 만성 질환 관리에 중점을 둡니다. 영어와 한국어에 능통합니다.',
    credTitle: '자격·경력',
    eduTitle: '학력·수련',
    eduItems: [
      'UT Southwestern Medical Center (MD)',
      'Yale 계열 레지던시',
      'University of Louisville 레지던시',
      'University of Texas at Austin (학사)',
    ],
    certTitle: '인증·학회',
    certItems: [
      'American Board of Family Medicine 인증',
      '텍사스 의사 면허',
      'American Medical Association 회원',
      'American Academy of Family Physicians 회원',
    ],
    langTitle: '사용 언어',
    langBody: '영어·한국어(한국어) 능통',
  },
  insurance: {
    title: '보험 및 결제',
    intro: '다양한 보험과 협력합니다. 반드시 사무실에서 본인 플랜을 확인하세요.',
    acceptedTitle: '많이 사용되는 보험 예시',
    footnote: '* 플랜별로 다릅니다. 수납 가능 여부는 전화로 확인해 주세요.',
    uninsuredTitle: '무보험 환자',
    uninsuredBody:
      '보험이 없으시면 자비 진료 옵션과 진찰료 안내를 전화로 상담할 수 있습니다.',
    uninsuredCall: '전화 문의',
    bringTitle: '방문 시 지참물',
    bringItems: [
      { title: '사진 부착 신분증', desc: '운전면허증 또는 주 정부 발급 ID.' },
      { title: '보험 카드', desc: '현재 의료 보험 카드.' },
      { title: '복용 약 목록', desc: '약 이름과 용량.' },
      { title: '진료 기록', desc: '신규 환자는 이전 의사 기록이 있으면 지참.' },
    ],
    plans: [
      'United Healthcare (PPO/HMO)',
      'UHC 메디케어 어드밴티지',
      '메디케어(전통)',
      'Molina Healthcare',
      'Aetna(일부 플랜)',
      'Blue Cross Blue Shield(일부 플랜)',
    ],
  },
  faq: {
    title: '자주 묻는 질문',
    intro: '클리닉, 진료, 정책에 대한 답변입니다.',
    items: [
      {
        q: '신규 환자를 받나요?',
        a: '네. 플레이노에서 전 연령 신규 환자를 환영합니다. 안내 및 예약은 {phone}로 문의해 주세요.',
      },
      {
        q: '메디케어를 받나요?',
        a: '네. 전통 메디케어와 UHC 어드밴티지 등 많은 메디케어 어드밴티지 플랜을 받습니다.',
      },
      {
        q: '의사 선생님께서 한국어를 하시나요?',
        a: '네. 채 원장님은 영어와 한국어에 능통합니다.',
      },
      {
        q: '어떤 보험을 받나요?',
        a: 'United Healthcare, UHC 어드밴티지, Molina, 메디케어 등 주요 플랜을 받습니다. 본인 플랜은 전화로 확인해 주세요.',
      },
      {
        q: '클리닉 위치는 어디인가요?',
        a: '5168 Village Creek Dr, Suite 300, Plano, TX 75093 — West Plano Parkway와 Village Creek Dr 부근입니다.',
      },
      {
        q: '보험이 없으면 어떻게 하나요?',
        a: '자비 진료 옵션이 있습니다. 비용과 결제는 사무실로 문의해 주세요.',
      },
    ],
  },
  reviews: {
    title: '환자 후기',
    intro: 'SC 패밀리 클리닉에 대한 환자분들의 의견입니다.',
    googleCta: 'Google에서 더 보기 →',
    items: en.reviews.items,
  },
  privacy: {
    title: '개인정보 처리방침',
    updated: '최종 수정: 2026년 4월',
    lead:
      'SC 패밀리 클리닉은 개인정보 보호에 최선을 다합니다. 이 웹사이트에서의 정보 처리를 설명합니다.',
    s1h: '1. 이 사이트에서 PHI 수집 없음',
    s1b:
      '본 사이트는 안내용입니다. 이 도메인에서는 보호 건강 정보(PHI)를 온라인으로 수집하지 않으며, 보안을 위해 온라인 예약 폼이나 환자 포털을 사용하지 않습니다.',
    s2h: '2. HIPAA',
    s2b:
      '진료 운영은 HIPAA를 준수합니다. 방문 중이나 전화로 공유된 정보는 연방·주 법으로 보호됩니다.',
    s3h: '3. 텍사스 개인정보 법',
    s3b: '텍사스 의료 개인정보 법 등 적용 규정을 준수합니다.',
    s4h: '4. 분석 도구',
    s4b:
      'Google Analytics 등으로 사이트 이용을 파악할 수 있으며, 가능한 경우 IP 익명화 등 설정을 사용합니다.',
    s5h: '5. 문의',
    s5b:
      '개인정보 관련 질문은 사무실로 전화 주세요. 민감한 건강 정보는 이메일로 보내지 마시기 바랍니다.',
  },
  location: {
    title: '위치 및 진료 시간',
    subtitleKoLabel: '위치 및 진료 시간',
    introLine: '{name} ({nameKo}) — 플레이노, 텍사스.',
    mapBtn: 'Google 지도에서 열기',
    hoursTitle: '진료·업무 시간',
    hoursKoLabel: '진료·업무 시간',
    contactTitle: '연락처',
    phoneLbl: '전화:',
    emailLbl: '이메일:',
    areasTitle: '진료 지역',
    areasBody: '북텍사스 여러 지역 환자를 돕고 있습니다:',
    cities: en.location.cities,
    ctaDisclaimer: '위 내용은 안내용입니다. 변경 시 전화로 확인해 주세요.',
  },
  koreanPage: {
    hubLabel: '한국어 안내',
    officialLabel: '공식 명칭',
    intro:
      '플레이노에서 가족 중심 가정의 진료를 한국어로 안내합니다. 예방·만성 질환·일차 진료에 관한 설명을 차분하게 제공합니다.',
    drTitle: '채승기 원장 (Dr. Steven Chae, MD)',
    drSubtitle: 'Board-certified family physician · 보드 인증 가정의학과',
    drBio:
      'UT Southwestern 및 Yale 계열 프로그램에서 수련한 가정의 전문의입니다. 이해하기 쉬운 설명과 예방 중심의 접근을 지향합니다.',
    bullets: [
      '한국어·영어 소통 가능',
      '대면 진료: 주 2회 (일정은 전화 문의)',
      '메디케어 및 여러 보험 — 개별 확인 필요',
      '예방 접종·건강 검진·만성 질환 관리 안내',
    ],
    topicsTitle: '주요 진료 과목',
    topics: [
      '일반 가정의학과 진료',
      '당뇨, 고혈압, 고지혈증 관리',
      '각종 예방 접종 및 건강 검진',
      '메디케어 웰니스 체크업',
      '학교 및 직장 신체 검사',
      '급성 질환 및 통증 관리',
    ],
    contactTitle: '문의 및 예약',
    contactBody:
      '예약·보험·진료 일정은 전화로 안내받으실 수 있습니다. 업무 시간에 연락 주시면 한국어로 도와드리겠습니다.',
    office: 'Office / 사무실:',
    callBtn: '전화 걸기',
    ctaEndTitle: '영문 상세 안내',
    ctaEndBody: '상단 EN 전환이나 다른 메뉴에서 영어로 서비스·보험·시간을 확인할 수 있습니다.',
  },
  ctaDefaults: {
    title: '문의·예약',
    subtitle:
      '예약, 보험 확인, 일반 문의는 안내된 업무 시간에 도와드립니다.',
    footer:
      'UHC 어드밴티지, 전통 메디케어, 몰리나 등 여러 플랜을 받을 수 있습니다. 무보험 상담도 전화로 문의해 주세요.',
    phoneLabel: '사무실 전화:',
  },
  mobile: {
    officeLine: '사무실 전화',
  },
} as unknown as Messages;

export function getMessages(locale: Locale): Messages {
  return locale === 'ko' ? ko : en;
}

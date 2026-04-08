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
    copyright: 'All rights reserved.',
    reviews: 'Patient Reviews',
    faq: 'Frequently Asked Questions',
    privacy: 'Privacy Policy',
    aboutUs: 'About Us',
    ourServices: 'Our Services',
    insurancePayments: 'Insurance & Payments',
    locationHours: 'Location & Hours',
    backToTop: 'Back to top',
  },
  home: {
    heroKicker: 'Family medicine · Plano, Texas',
    heroHeadline: 'Comprehensive Family Care You Can Trust',
    heroIntro:
      'Personalized, patient-centered care for individuals and families in Plano, Texas.',
    ctaAbout: 'About us',
    ctaServices: 'Our services',
    ctaKoreanHub: '한국어 진료안내',
    servicesTitle: 'Our services',
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
      'Dr. Steven Chae is a Family Medicine physician trained at UT Southwestern.',
    doctorCta: 'Physician profile & background',
    insuranceLabel: 'Insurance',
    insuranceBody:
      'We work with United Healthcare Advantage, Traditional Medicare, Molina, and other plans. Coverage varies—please call to confirm your benefits.',
    insuranceViewList: "Don't see your plan?",
    insuranceViewListLink: 'View full list',
    contactTitle: 'Contact & Location',
    contactLead:
      'Address, phone, email, and website for your records. See Location & hours for the in-person schedule.',
    addressLabel: 'Address',
    phoneLabel: 'Phone',
    emailLabel: 'Email',
    getDirections: 'Get Directions',
    officeHoursBtn: 'Office Hours',
    heroAlt: 'Physician and patient talking at a consultation — personalized family care',
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
  },
  koreanPage: {
    hubLabel: 'Korean language support',
    officialLabel: 'Official names',
    intro:
      'Our Plano practice welcomes Korean-speaking patients. We share clear information about family medicine, prevention, chronic conditions, and exams.',
    intro2: 'When you visit or call, our team can help in fluent Korean.',
    drTitle: 'Dr. Steven Chae (최승기), MD',
    drSubtitle: 'Board-certified family physician',
    drBio: 'Dr. Chae has been a board-certified family medicine physician for over 25 years.',
    drBio2:
      'Fluent in English and Korean, he strives to offer a comfortable setting for Korean-speaking patients to discuss their health.',
    bullets: [
      'Fluent in English and Korean',
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
    hoursTitle: '진료 시간·방문 안내',
    copyright: '모든 권리 보유.',
    reviews: '환자 후기',
    faq: '자주 묻는 질문',
    privacy: '개인정보 처리방침',
    aboutUs: '클리닉 소개',
    ourServices: '진료 과목',
    insurancePayments: '보험 및 결제',
    locationHours: '위치 및 진료 시간',
    backToTop: '맨 위로',
  },
  home: {
    heroKicker: '가정의학 · 텍사스 플레이노',
    heroHeadline: '믿고 맡기실 수 있는 포괄적 가족 진료',
    heroIntro:
      '텍사스 플레이노에서 개인과 가족을 위한 맞춤형·환자 중심 진료를 제공합니다.',
    ctaAbout: '병원 소개',
    ctaServices: '진료 안내',
    ctaKoreanHub: '한국어 진료안내',
    servicesTitle: '진료 안내',
    servicesTopics: '일차 진료 · 예방 · 만성 질환 · 신체 검진',
    viewAllServices: '진료 과목 전체 보기',
    whyTitle: '환자분들이 찾아주시는 이유',
    whyLead:
      '오랫동안 믿고 맡길 수 있는 가정의 선생님, 이해하기 쉬운 설명, 예방을 먼저 생각하는 진료, 바쁜 일정을 존중하는 배려.',
    whyCards: [
      { title: '맞춤 진료', desc: '환자분과 가족 상황에 맞춘 치료 계획을 세웁니다.' },
      { title: '풍부한 경험', desc: '체계적인 전문의 수련과 가정의학 진료에 전념하고 있습니다.' },
      { title: '예방 중심', desc: '검진과 생활 습관까지 함께 챙겨 건강을 지키도록 돕습니다.' },
      { title: '편안한 분위기', desc: '전문적이면서도 부담 없이 내원하실 수 있는 공간을 지향합니다.' },
    ],
    doctorMeet: '스티븐 최 원장님을 소개합니다',
    doctorRole: '가정의학과 전문의 (미국 전문의 자격)',
    doctorBio:
      '텍사스 UT 사우스웨스턴에서 수련한 가정의학과 전문의입니다.',
    doctorCta: '원장님 약력·학력 보기',
    insuranceLabel: '보험',
    insuranceBody:
      '유나이티드헬스케어 어드밴티지, 기본 메디케어, 몰리나 등 여러 보험과 함께하고 있습니다. 적용 여부는 플랜마다 다를 수 있으니 혜택 확인은 전화로 부탁드립니다.',
    insuranceViewList: '제 보험이 목록에 없나요?',
    insuranceViewListLink: '수납 가능 보험 전체 보기',
    contactTitle: '오시는 길·연락처',
    contactLead:
      '주소, 전화, 이메일, 웹사이트입니다. 대면 진료 요일·시간은 위치·진료 시간 페이지에서 확인해 주세요.',
    addressLabel: '주소',
    phoneLabel: '전화',
    emailLabel: '이메일',
    getDirections: '지도에서 보기',
    officeHoursBtn: '진료 시간 보기',
    heroAlt: '진료 상담 중인 의사와 환자 — 맞춤형 가족 진료',
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
    title: '스티븐 최 가족병원 소개',
    intro:
      '플레이노에서 환자를 가장 먼저 생각하는 일차 진료를 제공합니다. 신뢰할 수 있는 정보와 따뜻한 진료로 오랫동안 함께하고 싶은 병원이 되고자 합니다.',
    missionTitle: '미션',
    missionBody:
      '플레이노와 인근 지역의 개인·가족에게 질 높은 진료를 제공하고, 예방과 만성 질환 관리로 일상 속 건강을 지키도록 돕습니다.',
    visionTitle: '원장님의 비전',
    visionBody:
      '스티븐 최 원장님은 환자분을 가족처럼 대하는 진료를 위해 스티븐 최 가족병원을 열었습니다. 영어와 한국어에 모두 능통해 북텍사스 한인 분들께도 부담 없이 설명드릴 수 있습니다. 견고한 의학적 훈련과 따뜻한 태도를 함께 추구합니다.',
    valuesTitle: '우리가 지키는 가치',
    values: [
      {
        title: '신뢰할 수 있는 전문성',
        desc: 'UT 사우스웨스턴, 예일 연계 수련 등 체계적인 교육과 끊임없는 학습으로 진료의 질을 높입니다.',
      },
      {
        title: '사람 전체를 보는 진료',
        desc: '증상만이 아니라 생활 습관, 병력, 앞으로의 건강 목표까지 함께 논의합니다.',
      },
      {
        title: '편안한 내원 경험',
        desc: '말씀을 잘 듣고 존중하는 분위기 속에서 진료받으실 수 있도록 노력합니다.',
      },
    ],
  },
  servicesPage: {
    title: '진료 과목',
    intro:
      '필요에 맞춘 가정의학 진료를 안내합니다. 각 항목을 누르시면 더 자세한 설명을 보실 수 있습니다.',
    learnMore: '자세히 알아보기',
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
    back: '진료 과목 목록으로',
    keyBenefits: '주요 진료 내용',
    primary: {
      h1: '플레이노 TX 75093 일차 진료·가정의학',
      title: '일차 진료',
      explanation:
        '일차 진료는 건강의 중심입니다. 어린이부터 어르신까지, 오랫동안 건강을 지키실 수 있도록 예방과 치료를 함께 다룹니다.',
      benefits: [
        '가정의학과 전문의의 맞춤 진료',
        '감기·몸살 등 급성 질환과 가벼운 외상',
        '필요할 때 다른 전문과 연계',
        '신규 환자·메디케어 환영',
        '영어·한국어로 진료 안내',
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
    badge: '신규 환자 접수 중',
    role: '가정의학과 전문의 (미국 전문의 자격)',
    bioTitle: '약력',
    bio1:
      '스티븐 최 원장님은 플레이노에서 근거 중심의 꼼꼼한 진료를 제공하는 가정의학과 전문의입니다.',
    bio2:
      '텍사스대 오스틴 캠퍼스 학사, 달라스 UT 사우스웨스턴 의대 졸업 후 예일 연계 및 루이빌 대학교 레지던시·연수 과정을 마쳤습니다.',
    bio3:
      '의료 기관 운영 경험도 있으며 예방 의학과 만성 질환 관리에 역점을 둡니다. 영어와 한국어로 편하게 말씀 나누실 수 있습니다.',
    credTitle: '자격 및 경력',
    eduTitle: '학력·수련 과정',
    eduItems: [
      'UT Southwestern Medical Center (MD)',
      'Yale 계열 레지던시',
      'University of Louisville 레지던시',
      'University of Texas at Austin (학사)',
    ],
    certTitle: '인증·학회 활동',
    certItems: [
      'American Board of Family Medicine 인증',
      '텍사스주 의사 면허',
      'American Medical Association 회원',
      'American Academy of Family Physicians 회원',
    ],
    langTitle: '진료 언어',
    langBody: '영어와 한국어 모두 가능합니다',
  },
  insurance: {
    title: '보험·진료비',
    intro: '여러 보험사와 함께하고 있습니다. 방문 전에 사무실로 본인 보험 적용 여부를 확인해 주세요.',
    acceptedTitle: '많이 오시는 보험 예시',
    footnote: '* 플랜마다 다를 수 있습니다. 수납 가능 여부는 전화로 꼭 확인해 주세요.',
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
    intro: '병원 이용, 진료, 안내에 대해 자주 받는 질문입니다.',
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
        q: '원장님께서 한국어로 진료 설명도 해 주시나요?',
        a: '네. 스티븐 최 원장님은 영어와 한국어 모두 능통하십니다.',
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
    intro: '스티븐 최 가족병원을 방문하신 분들의 이야기입니다.',
    googleCta: 'Google에서 더 보기 →',
    items: en.reviews.items,
  },
  privacy: {
    title: '개인정보 처리방침',
    updated: '최종 수정: 2026년 4월',
    lead:
      '스티븐 최 가족병원은 방문자의 개인정보를 소중히 다룹니다. 이 웹사이트에서의 정보 처리 방식을 안내합니다.',
    s1h: '1. 이 사이트에서 PHI 수집 없음',
    s1b:
      '이 사이트는 병원 안내용입니다. 여기서는 보호 건강 정보(PHI)를 직접 받지 않으며, 보안을 위해 이 도메인에서는 온라인 예약이나 환자 포털을 두지 않았습니다.',
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
  },
  koreanPage: {
    hubLabel: '한국어 안내',
    officialLabel: '영문·한글 표기',
    intro:
      '안녕하세요. 저희 SC Family Clinic은 텍사스 플레이노에 위치한 가족 주치의 클리닉입니다.',
    intro2:
      '스티븐 최 원장님이 직접 한국어로 진료해 드립니다. 오래 기다리지 않아도 되고, 말이 잘 통하는 곳에서 편안하게 진료받으실 수 있습니다.',
    drTitle: '스티븐 최 원장님',
    drSubtitle: '가정의학과 전문의 · 미국 전문의 자격',
    drBio: '25년 이상 가정의학과 전문의로 활동해 오셨습니다.',
    drBio2:
      '한국어와 영어 모두 능통하시며, 한인 환자분들이 편안하게 건강을 상담하실 수 있는 환경을 제공해 드립니다.',
    bullets: [
      '한국어로 예약·문의·진료 안내',
      '메디케어·여러 상용 보험 (적용 여부는 개별 확인)',
      '예방 접종, 건강 검진, 만성 질환 관리',
    ],
    topicsTitle: '이런 진료를 도와드립니다',
    topics: [
      '일반 가정의학과 진료',
      '당뇨, 고혈압, 고지혈증 관리',
      '각종 예방 접종 및 건강 검진',
      '메디케어 웰니스 체크업',
      '학교 및 직장 신체 검사',
      '급성 질환 및 통증 관리',
    ],
    contactTitle: '예약·문의',
    contactBody:
      '예약, 보험, 진료 시간은 업무 시간에 전화 주시면 한국어로 안내해 드립니다.',
    office: '사무실 전화:',
    callBtn: '지금 전화하기',
  },
} as unknown as Messages;

export function getMessages(locale: Locale): Messages {
  return locale === 'ko' ? ko : en;
}

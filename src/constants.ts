/** Public asset; respects Vite `base` (e.g. GitHub Pages). */
export const DR_CHAE_PHOTO_URL = `${import.meta.env.BASE_URL}images/dr-steven-chae.png`;

export const CLINIC_INFO = {
  name: "SC Family Clinic",
  /** Korean name — use with official English name on marketing materials */
  nameKo: "스티븐 채 가족병원",
  phone: "972-955-3655",
  phoneDisplay: "(972) 955-3655",
  address: "5168 Village Creek Dr, Suite 300, Plano, TX 75093",
  email: "info@scfamilyclinic.com",
  websiteUrl: "https://scfamilyclinic.com",
  websiteDisplay: "scfamilyclinic.com",
  /** Highlighted on home & location */
  inPersonScheduleEn:
    "In-person office visits are available two days each week. Please call the office for the current weekday schedule and other visit options.",
  inPersonScheduleKo:
    "대면 진료는 주 2회 진행합니다. 요일·시간과 기타 진료 안내는 사무실로 전화 주시면 알려 드립니다.",
  hours: [
    { day: "In-person visits", time: "Two days per week (call for days & times)" },
    { day: "Phone / administrative", time: "Monday – Friday, 8:30 AM – 5:00 PM" },
    { day: "Saturday – Sunday", time: "Closed" },
  ],
  hoursKo: [
    { day: "대면 진료", time: "주 2회 (요일·시간은 문의)" },
    { day: "전화 문의", time: "월–금 8:30 AM – 5:00 PM" },
    { day: "토·일", time: "휴진" },
  ],
  doctor: "Dr. Steven Chae, MD",
};

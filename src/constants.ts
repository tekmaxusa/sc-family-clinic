/** Public asset; respects Vite `base` (e.g. GitHub Pages). */
export const DR_CHAE_PHOTO_URL = `${import.meta.env.BASE_URL}images/dr-steven-chae.png`;

/** Home hero — doctor and patient consultation imagery. */
export const HOME_HERO_IMAGE_URL = `${import.meta.env.BASE_URL}images/hero-consultation.png`;

export const CLINIC_INFO = {
  name: "SC Family Clinic",
  /** Korean name — use with official English name on marketing materials */
  nameKo: "스티븐 최 가족병원",
  phone: "972-955-3655",
  phoneDisplay: "(972) 955-3655",
  address: "5168 Village Creek Dr, Suite 300, Plano, TX 75093",
  email: "info@scfamilyclinic.com",
  websiteUrl: "https://scfamilyclinic.com",
  websiteDisplay: "scfamilyclinic.com",
  hours: [
    { day: "Monday-Friday", time: "9:00 AM – 5:00 PM" },
    { day: "Saturday – Sunday", time: "Closed" },
  ],
  hoursKo: [
    { day: "월-금", time: "오전 9:00 – 오후 5:00" },
    { day: "토·일", time: "휴진" },
  ],
  doctor: "Dr. Steven Chae, MD",
};

/** Google Maps embed (address query; no API key). */
export function clinicGoogleMapsEmbedSrc(): string {
  const q = encodeURIComponent(CLINIC_INFO.address);
  return `https://maps.google.com/maps?q=${q}&hl=en&z=16&output=embed`;
}

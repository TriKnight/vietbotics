import { IconType } from "react-icons";
import { FaBrain, FaEye, FaShieldAlt } from "react-icons/fa";
import { IoFlash, IoLogoElectron, IoTime } from "react-icons/io5";
import type { Lang } from "./applications";

type Localized = Record<Lang, string>;

export const CONTACT_EMAIL = "contact@openmindrobotics.com";
export const CONTACT_PHONE = "(+84) 333-689-700";

// Paths are relative to the locale root, so links work from every page: "/applications" -> /en/applications, "#technology" -> /en#technology
// `form: true` opens the contact form instead of following the link
export const nav: { href: string; label: Localized; form?: boolean }[] = [
  { href: "/applications", label: { en: "Solutions", vn: "Giải pháp" } },
  { href: "#technology", label: { en: "Technology", vn: "Công nghệ" } },
  { href: "#why_us", label: { en: "Why Us", vn: "Ưu điểm" } },
  { href: "#partners", label: { en: "Partners", vn: "Đối tác" } },
  { href: "/news", label: { en: "News", vn: "Tin tức" } },
  { href: "#contact_us", label: { en: "Contact", vn: "Liên hệ" }, form: true },
];

export const localeHref = (lang: Lang, href: string) => `/${lang}${href}`;

export const heroCopy: Record<
  Lang,
  { eyebrow: string; tagline: string; subheading: string; primaryCta: string; secondaryCta: string; pillars: string[] }
> = {
  en: {
    eyebrow: "Embodied AI for industrial robotics",
    tagline: "One brain, any robot, any task",
    subheading:
      "Physical AI that makes robots see, think, and act autonomously.",
    primaryCta: "Request a demo",
    secondaryCta: "Explore applications",
    pillars: ["Vision-Embodied AI", "Digital Twin Validated", "Robot-brand Agnostic"],
  },
  vn: {
    eyebrow: "Embodied AI cho robot công nghiệp",
    tagline: "Một bộ não, mọi robot, mọi tác vụ",
    subheading:
      "Physical AI giúp robot nhận biết, tư duy và hành động tự chủ.",
    primaryCta: "Yêu cầu Demo",
    secondaryCta: "Khám phá ứng dụng",
    pillars: ["AI thị giác tích hợp", "Kiểm chứng bằng Digital Twin", "Tương thích mọi hãng robot"],
  },
};

export const technologyCopy: Record<Lang, { eyebrow: string; heading: string; subheading: string }> = {
  en: {
    eyebrow: "Technology",
    heading: "Our Core Technology",
    subheading:
      "Three tightly integrated layers (perception, simulation and control) let a single software brain drive many robot types across many tasks.",
  },
  vn: {
    eyebrow: "Công nghệ",
    heading: "Công nghệ lõi",
    subheading:
      "Ba lớp công nghệ tích hợp chặt chẽ gồm nhận thức, mô phỏng và điều khiển, cho phép một bộ não phần mềm vận hành nhiều loại robot cho nhiều tác vụ khác nhau.",
  },
};

export const technologies: {
  image: string;
  title: Localized;
  // Product category shown under the title, e.g. "AI Vision System"
  subtitle?: Localized;
  description: Localized;
  points: Record<Lang, string[]>;
}[] = [
  {
    image: "/AIparts2.png",
    title: { en: "OM-Eye™", vn: "OM-Eye™" },
    subtitle: { en: "AI Vision System", vn: "Hệ thống thị giác AI" },
    description: {
      en: "Our high-precision 3D AI vision system, engineered for cognitive awareness, real-time spatial processing and adaptive object recognition in dynamic factory environments.",
      vn: "Hệ thống thị giác AI 3D độ chính xác cao, được thiết kế cho khả năng nhận thức, xử lý không gian thời gian thực và nhận dạng vật thể thích ứng trong môi trường nhà máy biến động.",
    },
    points: {
      en: ["Zero-shot recognition, no CAD model required", "3D point-cloud localization", "Instance segmentation in clutter"],
      vn: ["Nhận dạng zero-shot, không cần mô hình CAD", "Định vị bằng đám mây điểm 3D", "Phân đoạn vật thể trong môi trường lộn xộn"],
    },
  },
  {
    image: "/digitaltwin_ur.png",
    title: { en: "OM-Twin™", vn: "OM-Twin™" },
    subtitle: { en: "Digital Twins Framework", vn: "Khung Bản sao kỹ thuật số" },
    description: {
      en: "A Digital Twins Framework real-time virtual replica of your cell, built on ISO 23247 and connected over OPC UA, so you can design, test and monitor before and after deployment.",
      vn: "Bản sao kỹ thuật số thời gian thực của trạm robot, xây dựng theo ISO 23247 và kết nối qua OPC UA, giúp thiết kế, kiểm thử và giám sát trước và sau khi triển khai.",
    },
    points: {
      en: ["Sim-to-real motion fidelity", "Predictive maintenance insights", "Cloud-based remote monitoring"],
      vn: ["Chuyển động mô phỏng sát thực tế", "Dự báo bảo trì", "Giám sát từ xa trên nền tảng đám mây"],
    },
  },
  {
    image: "/picking.png",
    title: { en: "OM-Brain™", vn: "OM-Brain™" },
    subtitle: { en: "Universal Control Framework", vn: "Nền tảng điều khiển đa năng" },
    description: {
      en: "Our adaptable open manipulation architecture, built to deliver seamless, cross-embodiment, intelligent robot control and task execution across industrial workflows.",
      vn: "Kiến trúc thao tác mở, linh hoạt, mang lại khả năng điều khiển robot thông minh, liền mạch trên nhiều nền tảng robot khác nhau (cross-embodiment) và thực thi tác vụ trên mọi quy trình công nghiệp.",
    },
    points: {
      en: ["Cross-embodiment: one brain for any robot brand", "Multi-strategy grasp planning", "Collision-free trajectory generation"],
      vn: ["Cross-embodiment: một bộ não cho mọi hãng robot", "Lập kế hoạch gắp đa chiến lược", "Tạo quỹ đạo không va chạm"],
    },
  },
];

export const whyUsCopy: Record<Lang, { eyebrow: string; heading: string; subheading: string }> = {
  en: {
    eyebrow: "Why OpenMind",
    heading: "Why Choose Us",
    subheading: "Automation that is faster to deploy, easier to change and safer to run.",
  },
  vn: {
    eyebrow: "Vì sao chọn OpenMind",
    heading: "Tại sao chọn chúng tôi",
    subheading: "Tự động hóa triển khai nhanh hơn, dễ thay đổi hơn và vận hành an toàn hơn.",
  },
};

export const reasons: { icon: IconType; title: Localized; description: Localized }[] = [
  {
    icon: FaBrain,
    title: { en: "AI-Driven Logistics", vn: "Logistics dựa trên AI" },
    description: {
      en: "Deep-tech AI that makes picking and placing reliable across real, unstructured workloads.",
      vn: "Công nghệ AI chuyên sâu giúp việc gắp và đặt vật ổn định trong điều kiện thực tế, không cấu trúc.",
    },
  },
  {
    icon: IoLogoElectron,
    title: { en: "Digital Twin First", vn: "Ưu tiên Digital Twin" },
    description: {
      en: "Every cell is designed and validated virtually, which reduces commissioning risk and on-site iteration.",
      vn: "Mọi trạm robot đều được thiết kế và kiểm chứng trên môi trường ảo, giảm rủi ro khi chạy thử và số lần chỉnh sửa tại chỗ.",
    },
  },
  {
    icon: FaEye,
    title: { en: "Vision-Embodied Perception", vn: "Nhận thức bằng thị giác" },
    description: {
      en: "Robots that perceive and understand their surroundings with high accuracy, not just follow taught paths.",
      vn: "Robot nhận biết và hiểu môi trường xung quanh với độ chính xác cao, không chỉ lặp lại quỹ đạo đã dạy.",
    },
  },
  {
    icon: IoTime,
    title: { en: "Rapid Return on Investment", vn: "Hoàn vốn nhanh" },
    description: {
      en: "Short setup time and fast ramp-up mean your system starts paying for itself sooner.",
      vn: "Thời gian lắp đặt ngắn và vận hành nhanh giúp hệ thống sớm mang lại lợi nhuận.",
    },
  },
  {
    icon: IoFlash,
    title: { en: "Higher Throughput", vn: "Năng suất cao hơn" },
    description: {
      en: "Faster cycles, fewer errors and consistent quality from the first batch to the last.",
      vn: "Chu kỳ nhanh hơn, ít lỗi hơn và chất lượng đồng đều từ lô đầu tiên đến lô cuối cùng.",
    },
  },
  {
    icon: FaShieldAlt,
    title: { en: "Improved Safety", vn: "An toàn hơn" },
    description: {
      en: "Robots take on heavy lifting and hazardous work, reducing injury risk for your people.",
      vn: "Robot đảm nhận việc nâng vật nặng và công việc nguy hiểm, giảm nguy cơ chấn thương cho người lao động.",
    },
  },
];

export const partnersCopy: Record<Lang, { eyebrow: string; heading: string; subheading: string }> = {
  en: {
    eyebrow: "Ecosystem",
    heading: "Partners & Ecosystem",
    subheading:
      "We work with leading robot makers, technology providers and research partners, and our software runs on the robots you already trust.",
  },
  vn: {
    eyebrow: "Hệ sinh thái",
    heading: "Đối tác & Hệ sinh thái",
    subheading:
      "Chúng tôi hợp tác với các hãng robot, nhà cung cấp công nghệ và đối tác nghiên cứu hàng đầu, và phần mềm của chúng tôi chạy trên chính những robot bạn đang tin dùng.",
  },
};

export const partnerLogos = [
  { src: "/logos/UniversalRobot.png", name: "Universal Robots" },
  { src: "/logos/ABB_Robotics.webp", name: "ABB Robotics" },
  { src: "/logos/KUKA.png", name: "KUKA" },
  { src: "/logos/gradion.png", name: "Gradion" },
  { src: "/logos/Yaskawa_Logo.png", name: "Yaskawa" },
  { src: "/logos/FANUC-logo-2.webp", name: "FANUC" },
  { src: "/logos/Farino.png", name: "FAIRINO" },
  { src: "/logos/OnRobot-Logo-2.webp", name: "OnRobot" },
  { src: "/logos/NVIDIA.webp", name: "NVIDIA" },
  { src: "/logos/Qualcomm.jpg", name: "Qualcomm" },
  { src: "/logos/VGU-Logo.png", name: "Vietnamese-German University" },
];

export const footerCopy: Record<
  Lang,
  {
    ctaTitle: string;
    ctaBody: string;
    ctaButton: string;
    about: string;
    company: string;
    applications: string;
    contact: string;
    address: string;
    rights: string;
  }
> = {
  en: {
    ctaTitle: "Have a complex requirement?",
    ctaBody: "Talk to our technical experts and get a tailor-made automation proposal for your facility.",
    ctaButton: "Talk to an engineer",
    about: "Embodied AI and digital twin technology for industrial robotics. One brain, any robot, any task.",
    company: "Company",
    applications: "Applications",
    contact: "Contact",
    address: "No. 23, Shophouse, Oasis City, Quarter 4, Thoi Hoa Ward, Ho Chi Minh City, Vietnam",
    rights: "All rights reserved.",
  },
  vn: {
    ctaTitle: "Bạn có yêu cầu phức tạp?",
    ctaBody: "Trao đổi với chuyên gia kỹ thuật của chúng tôi để nhận đề xuất tự động hóa được thiết kế riêng cho nhà máy của bạn.",
    ctaButton: "Trao đổi với kỹ sư",
    about: "Công nghệ Embodied AI và digital twin cho robot công nghiệp. Một bộ não, mọi robot, mọi tác vụ.",
    company: "Công ty",
    applications: "Ứng dụng",
    contact: "Liên hệ",
    address: "Đường D10S, Oasis Riverside, Khu phố 4, P. Thới Hòa, TP. Hồ Chí Minh, Việt Nam",
    rights: "Bảo lưu mọi quyền.",
  },
};

// Add real profile URLs here; entries with an empty href are not rendered.
export const socialLinks: { name: string; href: string }[] = [
  { name: "LinkedIn", href: "https://www.linkedin.com/company/openmind-robotics-ltd" },
  { name: "YouTube", href: "https://www.youtube.com/@OpenMindRobotics" },
  { name: "Facebook", href: "https://www.facebook.com/OpenMindRobotics/" },
];

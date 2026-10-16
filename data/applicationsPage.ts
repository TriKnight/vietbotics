import { IconType } from "react-icons";
import { FaChartLine, FaSearch, FaUsers } from "react-icons/fa";
import { IoWallet } from "react-icons/io5";
import { applications, type Lang } from "./applications";

type Localized = Record<Lang, string>;

export const DIGITAL_TWIN_VIDEO = {
  src: "/videos/web/DigitalTwins",
  poster: "/videos/web/posters/DigitalTwins.webp",
};

export const pageMeta: Record<Lang, { title: string; description: string }> = {
  en: {
    title: "Applications & Digital Twin | OpenMind Robotics",
    description:
      "Robot applications for material handling, logistics and quality inspection, each designed and validated in a digital twin before deployment.",
  },
  vn: {
    title: "Ứng dụng & Digital Twin | OpenMind Robotics",
    description:
      "Các ứng dụng robot cho xử lý vật liệu, logistics và kiểm tra chất lượng, được thiết kế và kiểm chứng trên digital twin trước khi triển khai.",
  },
};

export const pageHeroCopy: Record<
  Lang,
  { eyebrow: string; heading: string; subheading: string; primaryCta: string; secondaryCta: string }
> = {
  en: {
    eyebrow: "Applications",
    heading: "Robotic automation, proven before it is installed",
    subheading:
      "Explore the robot cells we deliver for material handling, logistics and quality inspection. Each one is designed, programmed and validated in a digital twin of your facility, so you know how it will perform before you invest.",
    primaryCta: "Request a free simulation",
    secondaryCta: "Browse applications",
  },
  vn: {
    eyebrow: "Ứng dụng",
    heading: "Tự động hóa bằng robot, kiểm chứng trước khi lắp đặt",
    subheading:
      "Khám phá các trạm robot chúng tôi triển khai cho xử lý vật liệu, logistics và kiểm tra chất lượng. Mỗi giải pháp đều được thiết kế, lập trình và kiểm chứng trên digital twin của chính nhà máy bạn, giúp bạn biết rõ hiệu quả trước khi đầu tư.",
    primaryCta: "Yêu cầu mô phỏng miễn phí",
    secondaryCta: "Xem các ứng dụng",
  },
};

export const pageStats: { value: string; label: Localized }[] = [
  { value: String(applications.length), label: { en: "Proven applications", vn: "Ứng dụng đã kiểm chứng" } },
  { value: "Unlimited", label: { en: "Solution areas", vn: "Lĩnh vực giải pháp" } },
  { value: "ISO 23247", label: { en: "Digital twin framework", vn: "Khung tiêu chuẩn digital twin" } },
  { value: "OPC UA", label: { en: "Real-time connectivity", vn: "Kết nối thời gian thực" } },
];

export const digitalTwinCopy: Record<
  Lang,
  {
    eyebrow: string;
    heading: string;
    lead: string;
    body: string;
    simLabel: string;
    realLabel: string;
    caption: string;
    benefitsEyebrow: string;
    benefitsHeading: string;
    benefitsSubheading: string;
  }
> = {
  en: {
    eyebrow: "Digital Twin Technology",
    heading: "A virtual replica that moves exactly like the real robot",
    lead:
      "A Digital Twin (DT) is a virtual copy of a physical asset, whether a robot, a production cell or an entire process, that stays synchronized with it in real time.",
    body:
      "As a core technology of Industry 4.0, Digital Twin gives you far deeper insight into how your equipment is managed and operated. The result is less unplanned downtime and higher production efficiency, from the first day of commissioning through years of operation.",
    simLabel: "Digital twin",
    realLabel: "Physical robot",
    caption: "Live synchronization between a simulated Universal Robots arm and the physical robot.",
    benefitsEyebrow: "For SMEs",
    benefitsHeading: "Why Digital Twin matters for SMEs",
    benefitsSubheading:
      "Small and medium-sized manufacturers cannot afford long commissioning, trial and error on the shop floor or unexpected stoppages. A digital replica of your product or process takes that risk off the table.",
  },
  vn: {
    eyebrow: "Công nghệ Digital Twin",
    heading: "Bản sao ảo chuyển động chính xác như robot thật",
    lead:
      "Digital Twin (DT), hay bản sao số, là bản sao ảo của một đối tượng vật lý, có thể là một robot, một trạm sản xuất hay cả một quy trình, luôn được đồng bộ với đối tượng thật theo thời gian thực.",
    body:
      "Là công nghệ cốt lõi của Công nghiệp 4.0, Digital Twin giúp doanh nghiệp quản lý và vận hành thiết bị, hệ thống một cách hiệu quả hơn. Nhờ đó giảm thời gian dừng máy ngoài kế hoạch và nâng cao hiệu suất sản xuất, từ ngày đầu chạy thử cho đến nhiều năm vận hành.",
    simLabel: "Digital twin",
    realLabel: "Robot thực tế",
    caption: "Đồng bộ thời gian thực giữa cánh tay robot Universal Robots mô phỏng và robot thật.",
    benefitsEyebrow: "Dành cho SME",
    benefitsHeading: "Lợi ích của Digital Twin cho doanh nghiệp vừa và nhỏ",
    benefitsSubheading:
      "Doanh nghiệp vừa và nhỏ (SME) không thể chấp nhận thời gian chạy thử kéo dài, thử sai trực tiếp tại xưởng hay những lần dừng máy bất ngờ. Bản sao số của sản phẩm hoặc quy trình giúp loại bỏ những rủi ro đó.",
  },
};

export const digitalTwinBenefits: { icon: IconType; title: Localized; description: Localized }[] = [
  {
    icon: FaSearch,
    title: { en: "Catch problems before they happen", vn: "Phát hiện sự cố trước khi xảy ra" },
    description: {
      en: "Find collisions, reach limits and bottlenecks in simulation, long before they turn into costly downtime on your line.",
      vn: "Phát hiện va chạm, giới hạn tầm với và điểm nghẽn ngay trên mô phỏng, trước khi chúng gây dừng máy tốn kém trên dây chuyền.",
    },
  },
  {
    icon: FaChartLine,
    title: { en: "Optimize performance", vn: "Tối ưu hiệu suất" },
    description: {
      en: "Test layouts, cycle times and robot programs virtually, then deploy the configuration that delivers the highest throughput.",
      vn: "Thử nghiệm mặt bằng, thời gian chu kỳ và chương trình robot trên môi trường ảo, rồi triển khai cấu hình mang lại năng suất cao nhất.",
    },
  },
  {
    icon: IoWallet,
    title: { en: "Reduce cost and risk", vn: "Giảm chi phí và rủi ro" },
    description: {
      en: "Fewer on-site iterations, shorter commissioning and predictive maintenance keep both capital and operating costs under control.",
      vn: "Ít lần chỉnh sửa tại hiện trường, thời gian chạy thử ngắn hơn và bảo trì dự đoán giúp kiểm soát cả chi phí đầu tư lẫn chi phí vận hành.",
    },
  },
  {
    icon: FaUsers,
    title: { en: "One source of truth for every team", vn: "Một nguồn dữ liệu chung cho mọi bộ phận" },
    description: {
      en: "Engineering, operations and management share the same live model and data, so decisions are faster and better informed.",
      vn: "Kỹ thuật, vận hành và ban lãnh đạo cùng làm việc trên một mô hình và dữ liệu trực quan, giúp ra quyết định nhanh và chính xác hơn.",
    },
  },
];

export const catalogCopy: Record<
  Lang,
  { eyebrow: string; heading: string; subheading: string; cta: string; videoBadge: string; realBadge: string }
> = {
  en: {
    eyebrow: "Solutions",
    heading: "All Applications",
    subheading:
      "Filter by solution area to find the cell closest to your process. Every application can be adapted to your parts, your robot brand and your floor space.",
    cta: "Discuss this application",
    videoBadge: "Digital Twin simulation",
    realBadge: "Real robot",
  },
  vn: {
    eyebrow: "Giải pháp",
    heading: "Tất cả ứng dụng",
    subheading:
      "Lọc theo lĩnh vực để tìm giải pháp gần nhất với quy trình của bạn. Mọi ứng dụng đều có thể điều chỉnh theo chi tiết sản phẩm, hãng robot và diện tích nhà xưởng của bạn.",
    cta: "Tư vấn ứng dụng này",
    videoBadge: "Mô phỏng Digital Twin",
    realBadge: "Robot thực tế",
  },
};

export const processCopy: Record<
  Lang,
  { eyebrow: string; heading: string; subheading: string; cta: string; note: string }
> = {
  en: {
    eyebrow: "How we work",
    heading: "Digital Twin Commissioning, from idea to running cell",
    subheading:
      "A clear, four-step path that lets you see your automated cell working before any hardware is ordered.",
    cta: "Request a free Digital Twin Commissioning",
    note: "Free initial simulation for qualified projects. No CAD model required.",
  },
  vn: {
    eyebrow: "Quy trình",
    heading: "Chạy thử trên Digital Twin, từ ý tưởng đến trạm robot vận hành",
    subheading:
      "Lộ trình bốn bước rõ ràng giúp bạn thấy trạm tự động hóa hoạt động trước khi đặt mua bất kỳ thiết bị nào.",
    cta: "Yêu cầu mô phỏng Digital Twin miễn phí",
    note: "Miễn phí mô phỏng ban đầu cho dự án phù hợp. Không bắt buộc mô hình CAD.",
  },
};

export const processSteps: { title: Localized; description: Localized }[] = [
  {
    title: { en: "Share your process", vn: "Chia sẻ quy trình" },
    description: {
      en: "Send us a short video, a floor layout or your cycle-time target. That is all we need to get started.",
      vn: "Gửi cho chúng tôi video ngắn, bản vẽ mặt bằng hoặc mục tiêu thời gian chu kỳ. Chỉ cần vậy là có thể bắt đầu.",
    },
  },
  {
    title: { en: "We build the twin", vn: "Xây dựng digital twin" },
    description: {
      en: "Our engineers model your cell, robot, gripper and parts in a physics-accurate simulation.",
      vn: "Kỹ sư của chúng tôi mô hình hóa trạm, robot, tay gắp và chi tiết trong môi trường mô phỏng vật lý chính xác.",
    },
  },
  {
    title: { en: "Validate virtually", vn: "Kiểm chứng trên môi trường ảo" },
    description: {
      en: "Reach, cycle time, collision-free motion and safety zones are verified and reviewed together with your team.",
      vn: "Tầm với, thời gian chu kỳ, chuyển động không va chạm và vùng an toàn được kiểm chứng và rà soát cùng đội ngũ của bạn.",
    },
  },
  {
    title: { en: "Deploy and monitor", vn: "Triển khai và giám sát" },
    description: {
      en: "The validated program moves to the real robot, and the twin stays connected over OPC UA for live monitoring.",
      vn: "Chương trình đã kiểm chứng được chuyển sang robot thật, và digital twin tiếp tục kết nối qua OPC UA để giám sát trực tiếp.",
    },
  },
];

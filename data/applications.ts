export type Lang = "en" | "vn";

export type CategoryId = "material-handling" | "logistics" | "inspection";

type Localized = Record<Lang, string>;

export interface Application {
  id: string;
  category: CategoryId;
  video: string;
  // Low-res copy for the hover previews on the small tiles
  preview: string;
  poster: string;
  // Footage of the physical cell, shown side by side with the simulation
  real?: { video: string; poster: string };
  title: Localized;
  description: Localized;
  features: Record<Lang, string[]>;
}

const VIDEO_DIR = "/videos/digital_twins";

export const categories: { id: CategoryId | "all"; label: Localized }[] = [
  { id: "all", label: { en: "All Applications", vn: "Tất cả ứng dụng" } },
  { id: "material-handling", label: { en: "Material Handling", vn: "Xử lý vật liệu" } },
  { id: "logistics", label: { en: "Logistics & Warehousing", vn: "Logistics & Kho vận" } },
  { id: "inspection", label: { en: "Quality Inspection", vn: "Kiểm tra chất lượng" } },
];

export const applications: Application[] = [
  {
    id: "bin-picking",
    category: "material-handling",
    video: `${VIDEO_DIR}/720p/1_bin_picking_1.5x.webm`,
    preview: `${VIDEO_DIR}/360p/1_bin_picking_1.5x.webm`,
    poster: `${VIDEO_DIR}/posters/1_bin_picking_1.5x.jpg`,
    real: {
      video: `${VIDEO_DIR}/720p/1_real_ur10e_bin_picking.webm`,
      poster: `${VIDEO_DIR}/posters/1_real_ur10e_bin_picking.jpg`,
    },
    title: { en: "Bin Picking", vn: "Gắp vật từ thùng" },
    description: {
      en: "A collaborative arm works in a compact cell, locating randomly placed parts with 3D vision and transferring them between bins without fixtures or manual teaching.",
      vn: "Cánh tay robot cộng tác trong một trạm nhỏ gọn, định vị các chi tiết đặt ngẫu nhiên bằng thị giác 3D và chuyển chúng giữa các thùng mà không cần đồ gá hay dạy robot thủ công.",
    },
    features: {
      en: ["3D Vision Localization", "Collision-free Advanced Motion Planning", "Zero-Fixture Setup", "Compact Footprint"],
      vn: ["Định vị bằng thị giác 3D", "Lập quỹ đạo tiên tiến không va chạm", "Không cần đồ gá", "Diện tích nhỏ gọn"],
    },
  },
  {
    id: "bin-picking-amr",
    category: "material-handling",
    video: `${VIDEO_DIR}/720p/3_UR_and_AMR.webm`,
    preview: `${VIDEO_DIR}/360p/3_UR_and_AMR.webm`,
    poster: `${VIDEO_DIR}/posters/3_UR_and_AMR.jpg`,
    real: {
      video: `${VIDEO_DIR}/720p/3_real_UR_AMR.webm`,
      poster: `${VIDEO_DIR}/posters/3_real_UR_AMR.jpg`,
    },
    title: { en: "Picking with Automation Flow AMR — Pilot Project with Gradion", vn: "Gắp vật từ thùng kết hợp AMR" },
    description: {
      en: "A pilot project with Gradion demonstrating AI-powered bin picking integrated with autonomous material flow. A robot picks parts from bins while an AMR autonomously docks, collects finished bins, and delivers them to the next station. ",
      vn: "Dự án kết hợp với Gradion, Robot tích hợp AI gắp chi tiết từ thùng tại trạm, trong khi AMR cập trạm, nhận thùng đã hoàn tất và vận chuyển đến trạm tiếp theo. Việc gắp và vận chuyển diễn ra liên tục mà không cần con người trung chuyển.",
    },
    features: {
      en: ["3D Vision Bin Picking", "AMR Docking & Bin Transfer", "Station-to-Station Delivery", "Continuous Material Flow"],
      vn: ["Gắp vật bằng thị giác 3D", "AMR cập trạm & chuyển thùng", "Vận chuyển giữa các trạm", "Dòng vật liệu liên tục"],
    },
  },
  {
    id: "mobile-palletizing",
    category: "logistics",
    video: `${VIDEO_DIR}/720p/2_Palletizing.webm`,
    preview: `${VIDEO_DIR}/360p/2_Palletizing.webm`,
    poster: `${VIDEO_DIR}/posters/2_Palletizing.jpg`,
    title: { en: "Mobile Unloading & Palletizing", vn: "Dỡ hàng & xếp pallet di động" },
    description: {
      en: "An autonomous mobile manipulator picks cartons from the conveyor and builds stable pallet patterns, moving between stations as demand shifts across the line.",
      vn: "Robot di động tự hành gắp thùng carton từ băng tải và xếp pallet ổn định, tự di chuyển giữa các trạm theo nhu cầu của dây chuyền.",
    },
    features: {
      en: ["Autonomous Mobile Base", "Conveyor-to-Pallet Transfer", "Configurable Pallet Patterns", "Multi-station Coverage"],
      vn: ["Đế di động tự hành", "Chuyển từ băng tải sang pallet", "Mẫu xếp pallet tùy chỉnh", "Phục vụ nhiều trạm"],
    },
  },
  {
    id: "column-palletizing",
    category: "logistics",
    video: `${VIDEO_DIR}/720p/4_palletizing.webm`,
    preview: `${VIDEO_DIR}/360p/4_palletizing.webm`,
    poster: `${VIDEO_DIR}/posters/4_palletizing.jpg`,
    title: { en: "Dual-station Palletizing", vn: "Xếp pallet hai trạm" },
    description: {
      en: "A cobot on a vertical lift column serves left and right pallets, so a full pallet can be swapped out while the robot keeps stacking on the other side.",
      vn: "Cobot gắn trên trụ nâng phục vụ hai pallet trái và phải, nhờ đó có thể thay pallet đầy trong khi robot vẫn tiếp tục xếp hàng ở phía còn lại.",
    },
    features: {
      en: ["Left / Right Pallet Stations", "Vertical Lift Column", "Continuous Operation", "Safety-zoned Cobot Cell"],
      vn: ["Hai trạm pallet trái / phải", "Trụ nâng theo phương đứng", "Vận hành liên tục", "Trạm cobot có vùng an toàn"],
    },
  },
  {
    id: "engine-inspection",
    category: "inspection",
    video: `${VIDEO_DIR}/720p/5_inspection.webm`,
    preview: `${VIDEO_DIR}/360p/5_inspection.webm`,
    poster: `${VIDEO_DIR}/posters/5_inspection.jpg`,
    title: { en: "Engine Crack Inspection", vn: "Kiểm tra vết nứt động cơ" },
    description: {
      en: "A mobile robot scans an engine block from multiple viewpoints, fusing RGB and depth data to detect surface cracks and defects that are hard to catch by eye.",
      vn: "Robot di động quét khối động cơ từ nhiều góc nhìn, kết hợp dữ liệu ảnh màu RGB và độ sâu để phát hiện vết nứt và khuyết tật bề mặt khó nhận biết bằng mắt thường.",
    },
    features: {
      en: ["RGB + Depth Fusion", "Multi-view Scanning", "AI Defect Detection", "Traceable Inspection Reports"],
      vn: ["Kết hợp RGB + độ sâu", "Quét đa góc nhìn", "Phát hiện lỗi bằng AI", "Báo cáo kiểm tra truy xuất được"],
    },
  },
  {
    id: "mobile-manipulation",
    category: "material-handling",
    video: `${VIDEO_DIR}/720p/6_ur10e_mobile_manipulation.webm`,
    preview: `${VIDEO_DIR}/360p/6_ur10e_mobile_manipulation.webm`,
    poster: `${VIDEO_DIR}/posters/6_ur10e_mobile_manipulation.jpg`,
    title: { en: "Mobile Manipulation & Bin Picking", vn: "Robot di động gắp vật từ thùng" },
    description: {
      en: "A UR10e on an autonomous mobile base travels to the line, picks parts from bins and feeds the next process, bringing flexible automation to brownfield factories.",
      vn: "UR10e gắn trên đế di động tự hành di chuyển đến dây chuyền, gắp chi tiết từ thùng và cấp cho công đoạn tiếp theo, mang tự động hóa linh hoạt đến các nhà máy hiện hữu.",
    },
    features: {
      en: ["UR10e on AMR", "Vision-guided Picking", "Line-side Part Feeding", "Brownfield Retrofit"],
      vn: ["UR10e trên AMR", "Gắp vật dẫn hướng bằng thị giác", "Cấp phôi cạnh dây chuyền", "Nâng cấp nhà máy hiện hữu"],
    },
  },
];

export const applicationsCopy: Record<
  Lang,
  {
    eyebrow: string;
    heading: string;
    subheading: string;
    featuredLabel: string;
    simTitle: string;
    simBody: string;
    simCta: string;
    simulatedNote: string;
    viewAll: string;
  }
> = {
  en: {
    eyebrow: "Applications",
    heading: "Explore Applications",
    subheading:
      "Every workflow below runs in our physics-accurate digital twin. We validate reach, cycle time and safety in simulation before a single robot is installed on your floor.",
    featuredLabel: "Featured application",
    simTitle: "See how our robots handle your specific use case",
    simBody:
      "Send us a short clip or layout of your process, and we'll build a free digital-twin simulation of the automated cell.",
    simCta: "Request a free Digital Twin Commissioning",
    simulatedNote: "Digital Twin Commissioning",
    viewAll: "Explore all applications",
  },
  vn: {
    eyebrow: "Ứng dụng",
    heading: "Khám phá các ứng dụng",
    subheading:
      "Mọi quy trình dưới đây đều chạy trên nền tảng digital twin mô phỏng vật lý chính xác. Chúng tôi kiểm chứng tầm với, thời gian chu kỳ và an toàn trên mô phỏng trước khi lắp đặt robot tại nhà máy của bạn.",
    featuredLabel: "Ứng dụng nổi bật",
    simTitle: "Xem robot của chúng tôi xử lý bài toán của bạn",
    simBody:
      "Gửi cho chúng tôi một đoạn video ngắn hoặc bản vẽ mặt bằng quy trình, chúng tôi sẽ dựng mô phỏng digital twin miễn phí cho trạm tự động hóa.",
    simCta: "Yêu cầu mô phỏng miễn phí",
    simulatedNote: "Mô phỏng digital twin",
    viewAll: "Khám phá tất cả ứng dụng",
  },
};

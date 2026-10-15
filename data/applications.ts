export type Lang = "en" | "vn";

export type CategoryId = "material-handling" | "logistics" | "inspection";

type Localized = Record<Lang, string>;

export interface Application {
  id: string;
  category: CategoryId;
  video: string;
  poster: string;
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
    video: `${VIDEO_DIR}/1_bin_picking_1.5x.webm`,
    poster: `${VIDEO_DIR}/posters/1_bin_picking_1.5x.jpg`,
    title: { en: "Bin Picking", vn: "Gắp vật từ thùng" },
    description: {
      en: "The collaborative arm share a compact cell, locating randomly placed parts with 3D vision and transferring them between bins without fixtures or manual teaching.",
      vn: "Cánh tay robot cộng tác trong một trạm nhỏ gọn, định vị các chi tiết đặt ngẫu nhiên bằng thị giác 3D và chuyển chúng giữa các thùng mà không cần đồ gá hay dạy robot thủ công.",
    },
    features: {
      en: ["3D Vision Localization", "Collision-free Dual-arm Planning", "Zero-Fixture Setup", "Compact Footprint"],
      vn: ["Định vị bằng thị giác 3D", "Lập quỹ đạo hai tay không va chạm", "Không cần đồ gá", "Diện tích nhỏ gọn"],
    },
  },
  {
    id: "mobile-palletizing",
    category: "logistics",
    video: `${VIDEO_DIR}/2_Palletizing.webm`,
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
    id: "container-unloading",
    category: "logistics",
    video: `${VIDEO_DIR}/3_Unloading_container.webm`,
    poster: `${VIDEO_DIR}/posters/3_Unloading_container.jpg`,
    title: { en: "Truck & Container Unloading", vn: "Dỡ hàng từ container" },
    description: {
      en: "The robot works inside the container, detecting each carton in a mixed wall and placing it onto an extendable conveyor. This removes one of the most physically demanding jobs in the warehouse.",
      vn: "Robot làm việc ngay trong container, nhận diện từng thùng carton trong khối hàng hỗn hợp và đặt lên băng tải. Robot thay con người đảm nhận một trong những công việc nặng nhọc nhất trong kho.",
    },
    features: {
      en: ["Mixed-SKU Carton Detection", "Wall-by-wall Unloading", "Extendable Conveyor Integration", "Ergonomic Risk Reduction"],
      vn: ["Nhận diện thùng hàng hỗn hợp", "Dỡ hàng theo từng lớp", "Tích hợp băng tải co giãn", "Giảm rủi ro lao động"],
    },
  },
  {
    id: "column-palletizing",
    category: "logistics",
    video: `${VIDEO_DIR}/4_palletizing.webm`,
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
    video: `${VIDEO_DIR}/5_inspection.webm`,
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
    video: `${VIDEO_DIR}/6_ur10e_mobile_manipulation.webm`,
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
    cta: string;
    simTitle: string;
    simBody: string;
    simCta: string;
    simulatedNote: string;
  }
> = {
  en: {
    eyebrow: "Applications",
    heading: "Explore Applications",
    subheading:
      "Every workflow below runs in our physics-accurate digital twin. We validate reach, cycle time and safety in simulation before a single robot is installed on your floor.",
    featuredLabel: "Featured application",
    cta: "Request a demo",
    simTitle: "See how our robots handle your specific use case",
    simBody:
      "Send us a short clip or layout of your process, and we'll build a free digital-twin simulation of the automated cell.",
    simCta: "Request a free Digital Twin Commissioning",
    simulatedNote: "Digital Twin Commissioning",
  },
  vn: {
    eyebrow: "Ứng dụng",
    heading: "Khám phá các ứng dụng",
    subheading:
      "Mọi quy trình dưới đây đều chạy trên nền tảng digital twin mô phỏng vật lý chính xác. Chúng tôi kiểm chứng tầm với, thời gian chu kỳ và an toàn trên mô phỏng trước khi lắp đặt robot tại nhà máy của bạn.",
    featuredLabel: "Ứng dụng nổi bật",
    cta: "Yêu cầu Demo",
    simTitle: "Xem robot của chúng tôi xử lý bài toán của bạn",
    simBody:
      "Gửi cho chúng tôi một đoạn video ngắn hoặc bản vẽ mặt bằng quy trình, chúng tôi sẽ dựng mô phỏng digital twin miễn phí cho trạm tự động hóa.",
    simCta: "Yêu cầu mô phỏng miễn phí",
    simulatedNote: "Mô phỏng digital twin",
  },
};

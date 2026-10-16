import type { Lang } from "./applications";

type Localized = Record<Lang, string>;

export type NewsCategoryId = "exhibition" | "award" | "partnership" | "pitch";

export const newsCategories: Record<NewsCategoryId, Localized> = {
  exhibition: { en: "Exhibition", vn: "Triển lãm" },
  award: { en: "Award", vn: "Giải thưởng" },
  partnership: { en: "Partnership", vn: "Hợp tác" },
  pitch: { en: "Pitch & Summit", vn: "Gọi vốn & Hội nghị" },
};

export type NewsImage = { src: string; width: number; height: number };

export type NewsArticle = {
  slug: string;
  // ISO date; `precision: "month"` when only the month of the event is known
  date: string;
  precision: "day" | "month";
  category: NewsCategoryId;
  event: string;
  location: Localized;
  title: Localized;
  summary: Localized;
  body: Record<Lang, string[]>;
  technology: { eye: Localized; brain: Localized };
  highlightsHeading: Localized;
  highlights: { title: Localized; body: Localized }[];
  closing?: Localized;
  press?: { name: string; href: string }[];
  // The first image is the cover
  images: NewsImage[];
};

const img = (slug: string, file: string, width: number, height: number): NewsImage => ({
  src: `/news-media/${slug}/${file}`,
  width,
  height,
});

const HCMC: Localized = { en: "Ho Chi Minh City, Vietnam", vn: "TP. Hồ Chí Minh, Việt Nam" };

// Newest first: the order mirrors the numbered source folders in reverse (10 = latest, 1 = oldest).
export const newsArticles: NewsArticle[] = [
  {
    slug: "kuka-vietnam-technical-exchange",
    date: "2026-10-01",
    precision: "month",
    category: "partnership",
    event: "KUKA Vietnam",
    location: HCMC,
    title: {
      en: "OpenMind Robotics Engages in Technical Exchange with KUKA Vietnam",
      vn: "OpenMind Robotics trao đổi kỹ thuật cùng KUKA Việt Nam",
    },
    summary: {
      en: "Alongside Professor Dirk Engel of HAW Hamburg, OpenMind Robotics visited KUKA Vietnam's solution center to explore integrating advanced 3D AI vision with world-class industrial robotics.",
      vn: "Cùng Giáo sư Dirk Engel từ HAW Hamburg, OpenMind Robotics đã đến thăm trung tâm giải pháp của KUKA Việt Nam để cùng khai thác khả năng tích hợp thị giác AI 3D tiên tiến với robot công nghiệp hàng đầu thế giới.",
    },
    body: {
      en: [
        "In October 2026, OpenMind Robotics visited the KUKA Vietnam office and solution center in Ho Chi Minh City alongside Professor Dirk Engel from HAW Hamburg (Hamburg University of Applied Sciences). The visit served as a collaborative technical exchange exploring the integration of advanced 3D AI vision with world-class industrial robotics.",
      ],
      vn: [
        "Vào tháng 10/2026, OpenMind Robotics đã đến thăm văn phòng và trung tâm giải pháp của KUKA Việt Nam tại TP. Hồ Chí Minh cùng Giáo sư Dirk Engel đến từ HAW Hamburg (Đại học Khoa học Ứng dụng Hamburg). Chuyến thăm là dịp trao đổi kỹ thuật nhằm khai thác khả năng tích hợp thị giác AI 3D tiên tiến với các dòng robot công nghiệp hàng đầu thế giới.",
      ],
    },
    technology: {
      eye: {
        en: "Our high-precision 3D AI vision system engineered for cognitive awareness, real-time spatial processing, and adaptive object recognition in dynamic factory environments.",
        vn: "Hệ thống thị giác AI 3D độ chính xác cao, được thiết kế cho khả năng nhận thức, xử lý không gian thời gian thực và nhận dạng vật thể thích ứng trong môi trường nhà máy biến động.",
      },
      brain: {
        en: "Our adaptable open manipulation architecture built to power seamless, intelligent robotic control and task execution across industrial workflows.",
        vn: "Kiến trúc thao tác mở, linh hoạt, giúp điều khiển robot thông minh và thực thi tác vụ liền mạch trên mọi quy trình công nghiệp.",
      },
    },
    highlightsHeading: { en: "Key highlights & strategic collaboration", vn: "Điểm nổi bật & hợp tác chiến lược" },
    highlights: [
      {
        title: { en: "Solution center exploration", vn: "Tham quan trung tâm giải pháp" },
        body: {
          en: "Touring KUKA's solution center allowed the team to explore technical synergies between KUKA's robotic hardware and OpenMind Robotics' AI vision systems.",
          vn: "Chuyến tham quan trung tâm giải pháp của KUKA giúp đội ngũ tìm hiểu sự cộng hưởng kỹ thuật giữa phần cứng robot của KUKA và hệ thống thị giác AI của OpenMind Robotics.",
        },
      },
      {
        title: { en: "Technical exchange", vn: "Trao đổi kỹ thuật" },
        body: {
          en: "Engaged in technical discussions with KUKA Vietnam representative Mr. Phu Huynh, focusing on smart robotic automation, bin-picking applications, and industrial deployments.",
          vn: "Thảo luận kỹ thuật cùng ông Phu Huynh, đại diện KUKA Việt Nam, xoay quanh tự động hóa robot thông minh, ứng dụng gắp vật từ thùng (bin-picking) và triển khai trong công nghiệp.",
        },
      },
      {
        title: { en: "Advancing smart manufacturing", vn: "Thúc đẩy sản xuất thông minh" },
        body: {
          en: "The exchange reinforces OpenMind Robotics' ongoing mission to collaborate with global academic institutions and industrial leaders, pushing the boundaries of Physical AI and automated manufacturing.",
          vn: "Buổi trao đổi củng cố sứ mệnh của OpenMind Robotics trong việc hợp tác với các tổ chức học thuật và doanh nghiệp công nghiệp hàng đầu thế giới, mở rộng giới hạn của Physical AI và sản xuất tự động.",
        },
      },
    ],
    images: [img("kuka-vietnam-technical-exchange", "01.jpg", 1542, 1334)],
  },
  {
    slug: "google-ai-native-maker-experience",
    date: "2026-10-01",
    precision: "month",
    category: "pitch",
    event: "Google AI Native Maker Experience",
    location: HCMC,
    title: {
      en: "OpenMind Robotics Presents Physical AI Solutions at Google AI Native Maker Experience",
      vn: "OpenMind Robotics giới thiệu giải pháp Physical AI tại Google AI Native Maker Experience",
    },
    summary: {
      en: "At an exclusive gathering hosted by GenAI Fund, OpenMind Robotics pitched robotics AI adoption in Vietnam to a delegation of 30 global Google Vice Presidents.",
      vn: "Tại sự kiện do GenAI Fund tổ chức, OpenMind Robotics đã trình bày về ứng dụng AI robot tại Việt Nam trước phái đoàn 30 Phó Chủ tịch toàn cầu của Google.",
    },
    body: {
      en: [
        "In October 2026, OpenMind Robotics participated in the Google AI Native Maker Experience, an exclusive gathering hosted by GenAI Fund bringing together global tech leaders, AI pioneers, and founders shaping the future of artificial intelligence.",
        "The event featured an executive delegation of 30 global Google Vice Presidents, providing a dynamic platform to share OpenMind Robotics' vision for physical AI and intelligent automation originating from Vietnam.",
      ],
      vn: [
        "Vào tháng 10/2026, OpenMind Robotics đã tham gia Google AI Native Maker Experience, sự kiện đặc biệt do GenAI Fund tổ chức, quy tụ các lãnh đạo công nghệ toàn cầu, những người tiên phong về AI và các nhà sáng lập đang định hình tương lai của trí tuệ nhân tạo.",
        "Sự kiện có sự tham dự của phái đoàn 30 Phó Chủ tịch toàn cầu của Google, mở ra cơ hội để OpenMind Robotics chia sẻ tầm nhìn về Physical AI và tự động hóa thông minh xuất phát từ Việt Nam.",
      ],
    },
    technology: {
      eye: {
        en: "Our 3D vision system engineered for high precision, real-time cognitive awareness, and dynamic spatial processing in complex operational environments.",
        vn: "Hệ thống thị giác 3D được thiết kế cho độ chính xác cao, khả năng nhận thức thời gian thực và xử lý không gian linh hoạt trong môi trường vận hành phức tạp.",
      },
      brain: {
        en: "Our open manipulation architecture built to power seamless, adaptable, and intelligent robotic control across industrial workflows.",
        vn: "Kiến trúc thao tác mở giúp điều khiển robot liền mạch, linh hoạt và thông minh trên mọi quy trình công nghiệp.",
      },
    },
    highlightsHeading: { en: "Key highlights & strategic ecosystem", vn: "Điểm nổi bật & hệ sinh thái chiến lược" },
    highlights: [
      {
        title: { en: "Pitching to Google leadership", vn: "Trình bày trước lãnh đạo Google" },
        body: {
          en: "Pitched to 30 global Google Vice Presidents on the adoption of Robotics AI in Vietnam, highlighting real-world applications that solve critical operational bottlenecks in industrial automation and smart logistics.",
          vn: "Trình bày trước 30 Phó Chủ tịch toàn cầu của Google về việc ứng dụng AI robot tại Việt Nam, nhấn mạnh các ứng dụng thực tế giúp giải quyết những điểm nghẽn vận hành trong tự động hóa công nghiệp và logistics thông minh.",
        },
      },
      {
        title: { en: "Google ecosystem synergies", vn: "Cộng hưởng với hệ sinh thái Google" },
        body: {
          en: "Explored strategic growth opportunities and technical synergies through the integration of OpenMind Robotics' physical AI frameworks with Google's advanced AI ecosystem.",
          vn: "Tìm kiếm cơ hội tăng trưởng chiến lược và sự cộng hưởng kỹ thuật thông qua việc tích hợp nền tảng Physical AI của OpenMind Robotics với hệ sinh thái AI tiên tiến của Google.",
        },
      },
      {
        title: { en: "Global executive engagement", vn: "Kết nối lãnh đạo toàn cầu" },
        body: {
          en: "Engaged in high-level exchanges with global tech executives and AI innovators hosted by GenAI Fund, reinforcing the convergence of physical AI with world-class technology platforms.",
          vn: "Trao đổi cấp cao với các lãnh đạo công nghệ và nhà đổi mới AI toàn cầu do GenAI Fund kết nối, khẳng định xu hướng hội tụ giữa Physical AI và các nền tảng công nghệ hàng đầu thế giới.",
        },
      },
    ],
    images: [img("google-ai-native-maker-experience", "01.jpg", 1920, 1440)],
  },
  {
    slug: "abb-robotics-tech-day-2026",
    date: "2026-09-01",
    precision: "month",
    category: "exhibition",
    event: "ABB Robotics Tech Day 2026",
    location: HCMC,
    title: {
      en: "OpenMind Robotics Connects with Industry Leaders at ABB Robotics Tech Day 2026",
      vn: "OpenMind Robotics kết nối cùng các doanh nghiệp đầu ngành tại ABB Robotics Tech Day 2026",
    },
    summary: {
      en: "At ABB Vietnam's Tech Day, OpenMind Robotics joined automation pioneers to explore how pairing advanced robotics with high-precision AI vision drives intelligent manufacturing forward.",
      vn: "Tại ABB Robotics Tech Day, OpenMind Robotics cùng các doanh nghiệp tiên phong về tự động hóa thảo luận cách kết hợp robot tiên tiến với thị giác AI độ chính xác cao để thúc đẩy sản xuất thông minh.",
    },
    body: {
      en: [
        "In September 2026, OpenMind Robotics participated in ABB Robotics Tech Day 2026, an event hosted by ABB Vietnam that brought together automation pioneers, industry leaders, and technology innovators to explore the future of industrial robotics and smart manufacturing.",
      ],
      vn: [
        "Vào tháng 9/2026, OpenMind Robotics đã tham gia ABB Robotics Tech Day 2026, sự kiện do ABB Việt Nam tổ chức, quy tụ các doanh nghiệp tiên phong về tự động hóa, lãnh đạo ngành và các nhà đổi mới công nghệ để cùng thảo luận về tương lai của robot công nghiệp và sản xuất thông minh.",
      ],
    },
    technology: {
      eye: {
        en: "Our 3D vision system engineered for high precision, real-time cognitive awareness, and dynamic spatial processing in complex industrial environments.",
        vn: "Hệ thống thị giác 3D được thiết kế cho độ chính xác cao, khả năng nhận thức thời gian thực và xử lý không gian linh hoạt trong môi trường công nghiệp phức tạp.",
      },
      brain: {
        en: "Our open manipulation architecture built to power seamless, adaptable, and intelligent robotic control across dynamic factory workflows.",
        vn: "Kiến trúc thao tác mở giúp điều khiển robot liền mạch, linh hoạt và thông minh trong các quy trình nhà máy biến động.",
      },
    },
    highlightsHeading: { en: "Key highlights & strategic ecosystem", vn: "Điểm nổi bật & hệ sinh thái chiến lược" },
    highlights: [
      {
        title: { en: "Industry collaboration", vn: "Hợp tác trong ngành" },
        body: {
          en: "Engaging with ABB's latest robotic innovations underscored the immense potential of pairing advanced robotics with high-precision AI vision systems to drive intelligent manufacturing forward.",
          vn: "Tiếp cận những cải tiến robot mới nhất của ABB cho thấy tiềm năng to lớn khi kết hợp robot tiên tiến với hệ thống thị giác AI độ chính xác cao nhằm thúc đẩy sản xuất thông minh.",
        },
      },
      {
        title: { en: "Ecosystem networking", vn: "Kết nối hệ sinh thái" },
        body: {
          en: "The event served as a collaborative platform to connect with tech enthusiasts, system integrators, and strategic partners shaping the future of industrial automation.",
          vn: "Sự kiện là nơi kết nối với cộng đồng công nghệ, các đơn vị tích hợp hệ thống và đối tác chiến lược đang định hình tương lai của tự động hóa công nghiệp.",
        },
      },
      {
        title: { en: "Driving smart manufacturing", vn: "Thúc đẩy sản xuất thông minh" },
        body: {
          en: "Participation reaffirmed OpenMind Robotics' commitment to fostering strong industry partnerships and elevating physical AI capabilities across smart factories.",
          vn: "Việc tham gia khẳng định cam kết của OpenMind Robotics trong việc xây dựng quan hệ đối tác vững chắc và nâng tầm năng lực Physical AI cho các nhà máy thông minh.",
        },
      },
    ],
    images: [img("abb-robotics-tech-day-2026", "01.jpg", 1920, 872)],
  },
  {
    slug: "automation-world-vietnam-2026",
    date: "2026-09-01",
    precision: "month",
    category: "exhibition",
    event: "Automation World Vietnam 2026",
    location: { en: "Hanoi, Vietnam", vn: "Hà Nội, Việt Nam" },
    title: {
      en: "OpenMind Robotics Showcases 3D AI Vision & AMR Integration at Automation World Vietnam 2026",
      vn: "OpenMind Robotics trình diễn tích hợp thị giác AI 3D & AMR tại Automation World Vietnam 2026",
    },
    summary: {
      en: "Co-exhibiting with strategic partner GRADION, OpenMind Robotics demonstrated zero-shot 3D vision bin-picking integrated with autonomous mobile robots for warehouse logistics.",
      vn: "Đồng triển lãm cùng đối tác chiến lược GRADION, OpenMind Robotics trình diễn công nghệ gắp vật bằng thị giác 3D zero-shot tích hợp với robot tự hành (AMR) cho logistics kho vận.",
    },
    body: {
      en: [
        "In September 2026, OpenMind Robotics participated in Automation World Vietnam 2026 at the Vietnam Exhibition Center (VEC) in Hanoi. Co-exhibiting alongside strategic partner GRADION, OpenMind Robotics demonstrated real-world deployments of Physical AI and zero-shot 3D vision integrated with Autonomous Mobile Robots (AMRs) for next-generation warehouse logistics and factory automation.",
      ],
      vn: [
        "Vào tháng 9/2026, OpenMind Robotics đã tham gia Automation World Vietnam 2026 tại Trung tâm Triển lãm Việt Nam (VEC), Hà Nội. Đồng triển lãm cùng đối tác chiến lược GRADION, OpenMind Robotics đã trình diễn các ứng dụng thực tế của Physical AI và thị giác 3D zero-shot tích hợp với robot tự hành (AMR) cho logistics kho vận và tự động hóa nhà máy thế hệ mới.",
      ],
    },
    technology: {
      eye: {
        en: "Our high-precision 3D AI vision camera system demonstrated zero-shot bin-picking capabilities: picking completely unseen, irregularly shaped objects on the first attempt with zero prior CAD models or pre-training.",
        vn: "Hệ thống camera thị giác AI 3D độ chính xác cao đã trình diễn khả năng gắp vật zero-shot: gắp thành công ngay lần đầu những vật thể hoàn toàn mới, hình dạng bất định mà không cần mô hình CAD hay huấn luyện trước.",
      },
      brain: {
        en: "Our adaptable control framework engineered for seamless synchronization with AMRs and mobile manipulation robots in dynamic warehouse environments.",
        vn: "Nền tảng điều khiển linh hoạt, được thiết kế để đồng bộ liền mạch với AMR và robot thao tác di động trong môi trường kho vận biến động.",
      },
    },
    highlightsHeading: { en: "Key highlights & strategic collaboration", vn: "Điểm nổi bật & hợp tác chiến lược" },
    highlights: [
      {
        title: { en: "Joint solution with GRADION", vn: "Giải pháp chung cùng GRADION" },
        body: {
          en: "Featured live demonstrations highlighting the seamless collaboration between OM-Eye™ 3D AI Vision bin-picking and GRADION's mobile robot (AMR) systems in modern logistics workflows.",
          vn: "Trình diễn trực tiếp sự phối hợp liền mạch giữa giải pháp gắp vật bằng thị giác AI 3D OM-Eye™ và hệ thống robot tự hành (AMR) của GRADION trong quy trình logistics hiện đại.",
        },
      },
      {
        title: { en: "Ecosystem connections", vn: "Kết nối hệ sinh thái" },
        body: {
          en: "The OpenMind Robotics team engaged in technical exchanges and partnership discussions with representatives from Qualcomm, KUKA, and Oriental Motor Asia Pacific.",
          vn: "Đội ngũ OpenMind Robotics đã trao đổi kỹ thuật và thảo luận hợp tác với đại diện từ Qualcomm, KUKA và Oriental Motor Asia Pacific.",
        },
      },
      {
        title: { en: "Live challenge sessions", vn: "Thử thách trực tiếp tại gian hàng" },
        body: {
          en: "Visitors and industry peers brought challenging, complex objects directly to the booth to test OM-Eye's real-time spatial awareness and dynamic picking capabilities live.",
          vn: "Khách tham quan và đồng nghiệp trong ngành mang những vật thể phức tạp đến tận gian hàng để thử thách trực tiếp khả năng nhận thức không gian thời gian thực và gắp vật linh hoạt của OM-Eye.",
        },
      },
    ],
    images: [
      img("automation-world-vietnam-2026", "08.jpg", 1280, 960),
      img("automation-world-vietnam-2026", "01.jpg", 1920, 1281),
      img("automation-world-vietnam-2026", "11.jpg", 960, 1048),
      img("automation-world-vietnam-2026", "03.jpg", 849, 930),
      img("automation-world-vietnam-2026", "04.jpg", 1649, 1207),
      img("automation-world-vietnam-2026", "05.jpg", 1920, 1445),
      img("automation-world-vietnam-2026", "06.jpg", 1280, 960),
      img("automation-world-vietnam-2026", "07.jpg", 1280, 720),
      img("automation-world-vietnam-2026", "02.jpg", 1920, 1280),
      img("automation-world-vietnam-2026", "09.jpg", 1280, 960),
      img("automation-world-vietnam-2026", "10.jpg", 1276, 956),
    ],
  },
  {
    slug: "qualcomm-qvic-2026-innovation-award",
    date: "2026-08-01",
    precision: "month",
    category: "award",
    event: "Qualcomm Vietnam Innovation Challenge 2026",
    location: HCMC,
    title: {
      en: "OpenMind Robotics Wins Innovation Award at Qualcomm Vietnam Innovation Challenge (QVIC) 2026",
      vn: "OpenMind Robotics giành Giải Đổi mới Sáng tạo tại Qualcomm Vietnam Innovation Challenge (QVIC) 2026",
    },
    summary: {
      en: "After a six-month acceleration and incubation journey, OpenMind Robotics received the Innovation Award at the QVIC 2026 finale, joining Qualcomm's global technology network.",
      vn: "Sau sáu tháng tăng tốc và ươm tạo, OpenMind Robotics đã nhận Giải Đổi mới Sáng tạo tại vòng chung kết QVIC 2026 và chính thức gia nhập mạng lưới công nghệ toàn cầu của Qualcomm.",
    },
    body: {
      en: [
        "OpenMind Robotics has officially been awarded the Innovation Award at the Qualcomm Vietnam Innovation Challenge (QVIC 2026) during the finale ceremony held at InnoEx 2026.",
        "This prestigious recognition follows an intensive six-month acceleration and incubation journey, marking a major milestone in OpenMind Robotics' mission to advance industrial automation and physical AI from Vietnam to global markets.",
      ],
      vn: [
        "OpenMind Robotics đã chính thức được trao Giải Đổi mới Sáng tạo (Innovation Award) tại Cuộc thi Thử thách Đổi mới Sáng tạo Qualcomm Việt Nam (QVIC 2026) trong lễ chung kết diễn ra tại InnoEx 2026.",
        "Giải thưởng danh giá này đến sau hành trình tăng tốc và ươm tạo kéo dài sáu tháng, đánh dấu cột mốc quan trọng trong sứ mệnh đưa tự động hóa công nghiệp và Physical AI từ Việt Nam ra thị trường toàn cầu.",
      ],
    },
    technology: {
      eye: {
        en: "Our 3D vision system engineered for high precision, real-time cognitive awareness, and dynamic spatial processing in complex operational environments.",
        vn: "Hệ thống thị giác 3D được thiết kế cho độ chính xác cao, khả năng nhận thức thời gian thực và xử lý không gian linh hoạt trong môi trường vận hành phức tạp.",
      },
      brain: {
        en: "Our open manipulation architecture built to empower seamless, adaptable, and precise robotic control across dynamic industrial workflows.",
        vn: "Kiến trúc thao tác mở giúp điều khiển robot liền mạch, linh hoạt và chính xác trong các quy trình công nghiệp biến động.",
      },
    },
    highlightsHeading: { en: "Key highlights & program milestones", vn: "Điểm nổi bật & cột mốc chương trình" },
    highlights: [
      {
        title: { en: "Qualcomm global network", vn: "Mạng lưới toàn cầu của Qualcomm" },
        body: {
          en: "Joining the winners of QVIC 2026, OpenMind Robotics integrates into Qualcomm's global technology network, opening avenues for international trade showcases, technical collaboration, and industry connectivity.",
          vn: "Cùng các đội đoạt giải QVIC 2026, OpenMind Robotics gia nhập mạng lưới công nghệ toàn cầu của Qualcomm, mở ra cơ hội tham gia các triển lãm quốc tế, hợp tác kỹ thuật và kết nối ngành.",
        },
      },
      {
        title: { en: "Milestone acceleration support", vn: "Hỗ trợ tăng tốc" },
        body: {
          en: "We extend our sincere gratitude to Qualcomm, the InnoEx organizing team, mentors, and advisors for their invaluable guidance throughout this transformative incubation journey.",
          vn: "Chúng tôi xin chân thành cảm ơn Qualcomm, Ban tổ chức InnoEx, các mentor và cố vấn đã đồng hành và hướng dẫn tận tình trong suốt hành trình ươm tạo.",
        },
      },
      {
        title: { en: "Advancing Edge AI & Physical AI", vn: "Phát triển Edge AI & Physical AI" },
        body: {
          en: "The award reinforces our commitment to expanding the boundaries of Edge AI, computer vision, and universal robotic control systems in industrial logistics.",
          vn: "Giải thưởng củng cố cam kết của chúng tôi trong việc mở rộng giới hạn của Edge AI, thị giác máy tính và hệ thống điều khiển robot đa năng trong logistics công nghiệp.",
        },
      },
    ],
    press: [
      {
        name: "Qualcomm: Official announcement",
        href: "https://www.qualcomm.com/company/locations/vietnam/vietnam-innovation-challenge/qvic-2026",
      },
      { name: "VnEconomy", href: "https://vneconomy.vn/5-giai-phap-ai-sang-tao-cua-startup-viet-rinh-255000-usd.htm" },
      {
        name: "Doanh Nhân Thị Trường",
        href: "https://doanhnhanthitruong.vn/qualcomm-cong-bo-ket-qua-chung-ket-cuoc-thi-thu-thach-doi-moi-sang-tao-qualcomm-viet-nam-qvic-2026/",
      },
      { name: "Kinh Tế Today", href: "https://www.kinhtetoday.vn/2026/09/qvic-2026-startup-viet-toa-sang-voi.html" },
    ],
    images: [
      img("qualcomm-qvic-2026-innovation-award", "07.jpg", 1920, 1445),
      img("qualcomm-qvic-2026-innovation-award", "05.jpg", 1920, 1445),
      img("qualcomm-qvic-2026-innovation-award", "08.jpg", 1920, 1445),
      img("qualcomm-qvic-2026-innovation-award", "06.jpg", 1920, 1280),
      img("qualcomm-qvic-2026-innovation-award", "01.jpg", 1920, 1280),
      img("qualcomm-qvic-2026-innovation-award", "02.jpg", 1920, 1280),
      img("qualcomm-qvic-2026-innovation-award", "03.jpg", 1600, 1200),
      img("qualcomm-qvic-2026-innovation-award", "04.jpg", 1920, 1280),
    ],
  },
  {
    slug: "innoex-2026",
    date: "2026-08-01",
    precision: "month",
    category: "exhibition",
    event: "InnoEx 2026",
    location: HCMC,
    title: {
      en: "OpenMind Robotics Presents AI-Driven Robotics Solutions at InnoEx 2026",
      vn: "OpenMind Robotics giới thiệu giải pháp robot ứng dụng AI tại InnoEx 2026",
    },
    summary: {
      en: "At one of Southeast Asia's premier innovation exhibitions, OpenMind Robotics presented its AI-driven robotics to Ho Chi Minh City leadership alongside the Qualcomm team.",
      vn: "Tại một trong những triển lãm đổi mới sáng tạo hàng đầu Đông Nam Á, OpenMind Robotics đã giới thiệu giải pháp robot ứng dụng AI tới lãnh đạo TP. Hồ Chí Minh cùng đội ngũ Qualcomm.",
    },
    body: {
      en: [
        "In August 2026, OpenMind Robotics showcased its latest technological advancements in AI-driven robotics at InnoEx 2026, one of Southeast Asia's premier innovation and trade exhibitions bringing together tech pioneers, industry leaders, and policymakers.",
      ],
      vn: [
        "Vào tháng 8/2026, OpenMind Robotics đã giới thiệu những tiến bộ công nghệ mới nhất về robot ứng dụng AI tại InnoEx 2026, một trong những triển lãm đổi mới sáng tạo và thương mại hàng đầu Đông Nam Á, quy tụ các nhà tiên phong công nghệ, lãnh đạo doanh nghiệp và nhà hoạch định chính sách.",
      ],
    },
    technology: {
      eye: {
        en: "Our 3D vision system engineered for high precision, real-time cognitive processing, and dynamic spatial awareness in complex industrial environments.",
        vn: "Hệ thống thị giác 3D được thiết kế cho độ chính xác cao, xử lý nhận thức thời gian thực và khả năng nhận biết không gian linh hoạt trong môi trường công nghiệp phức tạp.",
      },
      brain: {
        en: "Our open manipulation framework built to seamlessly synchronize flexible robotic control and dynamic factory workflows.",
        vn: "Nền tảng thao tác mở giúp đồng bộ liền mạch giữa điều khiển robot linh hoạt và các quy trình nhà máy biến động.",
      },
    },
    highlightsHeading: { en: "Key highlights & strategic ecosystem", vn: "Điểm nổi bật & hệ sinh thái chiến lược" },
    highlights: [
      {
        title: { en: "Distinguished leadership engagement", vn: "Đón tiếp lãnh đạo Thành phố" },
        body: {
          en: "OpenMind Robotics had the honor of presenting its AI-driven robotics innovations to Mr. Dang Minh Thong, Deputy Secretary of the Ho Chi Minh City Party Committee, alongside the Qualcomm team and the InnoEx 2026 Organizing Committee.",
          vn: "OpenMind Robotics vinh dự giới thiệu các giải pháp robot ứng dụng AI tới ông Đặng Minh Thông, Phó Bí thư Thành ủy TP. Hồ Chí Minh, cùng đội ngũ Qualcomm và Ban tổ chức InnoEx 2026.",
        },
      },
      {
        title: { en: "Acceleration program milestones", vn: "Cột mốc chương trình tăng tốc" },
        body: {
          en: "Participation in the event marked a key milestone in OpenMind Robotics' growth journey, supported by Qualcomm and the InnoEx Acceleration program.",
          vn: "Sự kiện đánh dấu cột mốc quan trọng trong hành trình phát triển của OpenMind Robotics, với sự hỗ trợ từ Qualcomm và chương trình tăng tốc InnoEx.",
        },
      },
      {
        title: { en: "Driving industrial innovation", vn: "Thúc đẩy đổi mới công nghiệp" },
        body: {
          en: "The showcase reaffirmed OpenMind Robotics' commitment to advancing smart manufacturing, logistics automation, and high-impact deep-tech solutions in Vietnam and beyond.",
          vn: "Sự kiện khẳng định cam kết của OpenMind Robotics trong việc phát triển sản xuất thông minh, tự động hóa logistics và các giải pháp công nghệ sâu có tác động lớn tại Việt Nam và khu vực.",
        },
      },
    ],
    images: [img("innoex-2026", "01.jpg", 1920, 1280), img("innoex-2026", "02.jpg", 1280, 853)],
  },
  {
    slug: "mta-vietnam-2026",
    date: "2026-07-01",
    precision: "month",
    category: "exhibition",
    event: "MTA Vietnam 2026",
    location: HCMC,
    title: {
      en: "OpenMind Robotics Showcases 3D AI-Vision & Intelligent Automation at MTA Vietnam 2026",
      vn: "OpenMind Robotics trình diễn thị giác AI 3D & tự động hóa thông minh tại MTA Vietnam 2026",
    },
    summary: {
      en: "At SECC, OpenMind Robotics ran live 3D AI-vision picking demos and showed how physical AI has moved from experimental concept to high-ROI industrial deployment.",
      vn: "Tại SECC, OpenMind Robotics trình diễn trực tiếp công nghệ gắp vật bằng thị giác AI 3D, cho thấy Physical AI đã chuyển từ ý tưởng thử nghiệm sang triển khai công nghiệp với hiệu quả đầu tư cao.",
    },
    body: {
      en: [
        "OpenMind Robotics participated in MTA Vietnam 2026 at the Saigon Exhibition and Convention Center (SECC), demonstrating how physical AI and 3D vision technology have transitioned from experimental concepts into high-ROI, real-world industrial deployments.",
      ],
      vn: [
        "OpenMind Robotics đã tham gia MTA Vietnam 2026 tại Trung tâm Hội chợ và Triển lãm Sài Gòn (SECC), cho thấy Physical AI và công nghệ thị giác 3D đã chuyển mình từ ý tưởng thử nghiệm thành các ứng dụng công nghiệp thực tế mang lại hiệu quả đầu tư cao.",
      ],
    },
    technology: {
      eye: {
        en: "Our 3D vision system engineered for high precision, real-time cognitive processing, and dynamic spatial awareness, powering advanced live 3D AI-vision picking demonstrations.",
        vn: "Hệ thống thị giác 3D được thiết kế cho độ chính xác cao, xử lý nhận thức thời gian thực và nhận biết không gian linh hoạt, vận hành các màn trình diễn gắp vật bằng thị giác AI 3D trực tiếp.",
      },
      brain: {
        en: "Our open manipulation framework built to seamlessly synchronize dynamic industrial workflows and flexible robotic control.",
        vn: "Nền tảng thao tác mở giúp đồng bộ liền mạch giữa các quy trình công nghiệp biến động và điều khiển robot linh hoạt.",
      },
    },
    highlightsHeading: { en: "Key highlights & strategic ecosystem", vn: "Điểm nổi bật & hệ sinh thái chiến lược" },
    highlights: [
      {
        title: { en: "Global ecosystem connections", vn: "Kết nối hệ sinh thái toàn cầu" },
        body: {
          en: "The OpenMind Robotics team engaged in partnership discussions with industry leaders and global technology representatives, including GRADION, KUKA, ABB, Cicor Group, Festo, and Qualcomm.",
          vn: "Đội ngũ OpenMind Robotics đã thảo luận hợp tác với các doanh nghiệp đầu ngành và đại diện công nghệ toàn cầu, bao gồm GRADION, KUKA, ABB, Cicor Group, Festo và Qualcomm.",
        },
      },
      {
        title: { en: "Distinguished industry visitors", vn: "Khách mời tiêu biểu" },
        body: {
          en: "OpenMind Robotics was deeply honored to welcome Mr. Pham Van Tai, former CEO of THACO Group, to discuss the expansion of strategic partnerships in robotics and sustainable smart automation across Vietnam.",
          vn: "OpenMind Robotics vinh dự đón tiếp ông Phạm Văn Tài, nguyên Tổng Giám đốc Tập đoàn THACO, để trao đổi về việc mở rộng hợp tác chiến lược trong lĩnh vực robot và tự động hóa thông minh bền vững tại Việt Nam.",
        },
      },
      {
        title: { en: "Institutional support", vn: "Hỗ trợ từ các tổ chức" },
        body: {
          en: "We express our sincere appreciation to the Investment and Trade Promotion Center of Ho Chi Minh City (ITPC) for their support in empowering our tech journey.",
          vn: "Chúng tôi xin chân thành cảm ơn Trung tâm Xúc tiến Thương mại và Đầu tư TP. Hồ Chí Minh (ITPC) đã đồng hành và hỗ trợ trên hành trình công nghệ của chúng tôi.",
        },
      },
    ],
    images: [
      img("mta-vietnam-2026", "04.jpg", 1920, 1446),
      img("mta-vietnam-2026", "07.jpg", 1380, 1536),
      img("mta-vietnam-2026", "05.jpg", 1920, 1383),
      img("mta-vietnam-2026", "01.jpg", 1280, 1770),
      img("mta-vietnam-2026", "02.jpg", 1352, 1536),
      img("mta-vietnam-2026", "03.jpg", 1280, 1828),
      img("mta-vietnam-2026", "06.jpg", 1470, 1536),
    ],
  },
  {
    slug: "vietnam-smart-factory-expo-2026",
    date: "2026-06-01",
    precision: "month",
    category: "exhibition",
    event: "Vietnam Smart Factory Expo 2026",
    location: HCMC,
    title: {
      en: "OpenMind Robotics Demonstrates Smart Automation Ecosystem at VSE 2026",
      vn: "OpenMind Robotics trình diễn hệ sinh thái tự động hóa thông minh tại VSE 2026",
    },
    summary: {
      en: "Supported by the National Innovation Center (NIC), OpenMind Robotics hosted live demonstrations of its vision and control ecosystem at Southeast Asia's smart-factory expo.",
      vn: "Với sự hỗ trợ của Trung tâm Đổi mới Sáng tạo Quốc gia (NIC), OpenMind Robotics trình diễn trực tiếp hệ sinh thái thị giác và điều khiển robot tại triển lãm nhà máy thông minh hàng đầu Đông Nam Á.",
    },
    body: {
      en: [
        "OpenMind Robotics participated in the Vietnam Smart Factory Expo (VSE 2026), a premier international event dedicated to smart manufacturing, industrial automation, and smart factory technologies in Southeast Asia. Supported by the National Innovation Center (NIC), OpenMind Robotics presented its latest technological advancements designed to reshape warehouse and factory automation.",
      ],
      vn: [
        "OpenMind Robotics đã tham gia Triển lãm Nhà máy Thông minh Việt Nam (VSE 2026), sự kiện quốc tế hàng đầu về sản xuất thông minh, tự động hóa công nghiệp và công nghệ nhà máy thông minh tại Đông Nam Á. Với sự hỗ trợ của Trung tâm Đổi mới Sáng tạo Quốc gia (NIC), OpenMind Robotics đã giới thiệu những tiến bộ công nghệ mới nhất nhằm định hình lại tự động hóa kho vận và nhà máy.",
      ],
    },
    technology: {
      eye: {
        en: "Engineered for high precision, real-time cognitive processing, and dynamic 3D spatial awareness in complex operational environments.",
        vn: "Được thiết kế cho độ chính xác cao, xử lý nhận thức thời gian thực và nhận biết không gian 3D linh hoạt trong môi trường vận hành phức tạp.",
      },
      brain: {
        en: "An adaptable open manipulation architecture built to seamlessly synchronize intelligent robotics with dynamic industrial workflows.",
        vn: "Kiến trúc thao tác mở, linh hoạt, giúp đồng bộ liền mạch robot thông minh với các quy trình công nghiệp biến động.",
      },
    },
    highlightsHeading: { en: "Industry recognition & institutional support", vn: "Ghi nhận từ ngành & hỗ trợ từ các tổ chức" },
    highlights: [
      {
        title: { en: "Distinguished guests", vn: "Khách mời tiêu biểu" },
        body: {
          en: "OpenMind Robotics had the honor of welcoming Mr. Vo Quang Hue to its booth at VSE 2026. The team extends its deepest gratitude to Mr. Hue for his valuable time, insights, and continued support of local AI and robotics innovations.",
          vn: "OpenMind Robotics vinh dự đón tiếp ông Võ Quang Huệ tại gian hàng VSE 2026. Đội ngũ xin gửi lời tri ân sâu sắc đến ông Huệ vì thời gian quý báu, những góp ý giá trị và sự ủng hộ không ngừng dành cho các đổi mới về AI và robot trong nước.",
        },
      },
      {
        title: { en: "National ecosystem support", vn: "Hỗ trợ từ hệ sinh thái quốc gia" },
        body: {
          en: "The company expresses its sincere appreciation to the National Innovation Center (NIC) for their backing in empowering high-tech startups and fostering digital transformation across Vietnam's manufacturing sector.",
          vn: "Công ty xin chân thành cảm ơn Trung tâm Đổi mới Sáng tạo Quốc gia (NIC) đã hỗ trợ các startup công nghệ cao và thúc đẩy chuyển đổi số trong ngành sản xuất Việt Nam.",
        },
      },
    ],
    images: [
      img("vietnam-smart-factory-expo-2026", "02.jpg", 1920, 1446),
      img("vietnam-smart-factory-expo-2026", "01.jpg", 1920, 1446),
    ],
  },
  {
    slug: "future-ai-startup-pitch-2026",
    date: "2026-06-01",
    precision: "month",
    category: "pitch",
    event: "Future AI - StartupPitch @ APK 2026",
    location: HCMC,
    title: {
      en: "OpenMind Robotics Featured at Future AI - StartupPitch @ APK 2026",
      vn: "OpenMind Robotics góp mặt tại Future AI - StartupPitch @ APK 2026",
    },
    summary: {
      en: "OpenMind Robotics joined the Vietnam pitching and nomination session co-organized by AHK Vietnam and the German Business Association, alongside leading AI startups.",
      vn: "OpenMind Robotics tham gia vòng thuyết trình và đề cử tại Việt Nam do AHK Việt Nam và Hiệp hội Doanh nghiệp Đức đồng tổ chức, cùng các startup AI hàng đầu.",
    },
    body: {
      en: [
        "OpenMind Robotics recently took part in the Vietnam Pitching & Nomination Session for Future AI - StartupPitch @ APK 2026, co-organized by AHK Vietnam (Delegation of German Industry and Commerce in Vietnam) and the German Business Association (GBA).",
        "The event brought together leading AI startups showcasing high-impact, scalable technologies designed to address real-world industrial challenges and expand into international markets.",
      ],
      vn: [
        "OpenMind Robotics vừa tham gia Vòng thuyết trình & đề cử tại Việt Nam của Future AI - StartupPitch @ APK 2026, do AHK Việt Nam (Phòng Công nghiệp và Thương mại Đức tại Việt Nam) và Hiệp hội Doanh nghiệp Đức (GBA) đồng tổ chức.",
        "Sự kiện quy tụ các startup AI hàng đầu với những công nghệ có tác động lớn, khả năng mở rộng cao, hướng tới giải quyết các thách thức công nghiệp thực tế và vươn ra thị trường quốc tế.",
      ],
    },
    technology: {
      eye: {
        en: "Our next-generation vision system bringing unparalleled precision, cognitive awareness, and real-time processing to industrial environments.",
        vn: "Hệ thống thị giác thế hệ mới mang lại độ chính xác vượt trội, khả năng nhận thức và xử lý thời gian thực cho môi trường công nghiệp.",
      },
      brain: {
        en: "Our universal control framework built to power seamless, adaptable, and intelligent robotic manipulation.",
        vn: "Nền tảng điều khiển đa năng giúp robot thao tác liền mạch, linh hoạt và thông minh.",
      },
    },
    highlightsHeading: { en: "Key highlights", vn: "Điểm nổi bật" },
    highlights: [
      {
        title: { en: "AI innovation platform", vn: "Sân chơi đổi mới AI" },
        body: {
          en: "Joined a select group of top AI innovators presenting cutting-edge solutions focused on practical application, scalable infrastructure, and cross-border impact.",
          vn: "Góp mặt cùng nhóm các nhà đổi mới AI tiêu biểu, giới thiệu những giải pháp tiên tiến tập trung vào ứng dụng thực tiễn, hạ tầng có khả năng mở rộng và tác động xuyên biên giới.",
        },
      },
      {
        title: { en: "Cross-border ecosystem connections", vn: "Kết nối hệ sinh thái quốc tế" },
        body: {
          en: "Engaged with international jury members, industry experts, and global business communities connecting Vietnam's technology landscape to global markets.",
          vn: "Giao lưu với ban giám khảo quốc tế, chuyên gia trong ngành và cộng đồng doanh nghiệp toàn cầu, kết nối hệ sinh thái công nghệ Việt Nam với thị trường thế giới.",
        },
      },
      {
        title: { en: "Strengthening strategic ties", vn: "Củng cố quan hệ chiến lược" },
        body: {
          en: "Reinforced our commitment to fostering international partnerships and driving forward smart logistics and industrial automation.",
          vn: "Khẳng định cam kết xây dựng quan hệ đối tác quốc tế và thúc đẩy logistics thông minh cùng tự động hóa công nghiệp.",
        },
      },
    ],
    closing: {
      en: "We extend our sincere thanks to AHK Vietnam and GBA for hosting an exceptional event, as well as the jury members for their valuable insights. Congratulations to enfarm Agritech on their selection as the Vietnam nominee at Future AI - StartupPitch @ APK 2026 in Seoul, Korea! We look forward to nurturing these connections and exploring potential partnerships in logistics automation and industrial applications.",
      vn: "Chúng tôi xin chân thành cảm ơn AHK Việt Nam và GBA đã tổ chức một sự kiện ấn tượng, cùng ban giám khảo vì những góp ý quý báu. Chúc mừng enfarm Agritech đã được chọn là đại diện Việt Nam tham dự Future AI - StartupPitch @ APK 2026 tại Seoul, Hàn Quốc! Chúng tôi mong được tiếp tục vun đắp các mối quan hệ này và mở ra cơ hội hợp tác trong tự động hóa logistics và ứng dụng công nghiệp.",
    },
    images: [
      img("future-ai-startup-pitch-2026", "01.jpg", 1920, 1440),
      img("future-ai-startup-pitch-2026", "02.jpg", 1920, 1440),
    ],
  },
  {
    slug: "vipc-2026",
    date: "2026-05-28",
    precision: "day",
    category: "pitch",
    event: "VIPC Summit 2026",
    location: { en: "Landmark 81, Ho Chi Minh City, Vietnam", vn: "Landmark 81, TP. Hồ Chí Minh, Việt Nam" },
    title: {
      en: "OpenMind Robotics Highlights Advanced AI Vision & Robotic Control at VIPC 2026",
      vn: "OpenMind Robotics giới thiệu thị giác AI & điều khiển robot tiên tiến tại VIPC 2026",
    },
    summary: {
      en: "At the Vietnam Innovation & Private Capital Summit, OpenMind Robotics presented its integrated vision and control ecosystem to global venture capitalists, policy makers and industry leaders.",
      vn: "Tại Hội nghị Đổi mới Sáng tạo & Vốn Tư nhân Việt Nam, OpenMind Robotics giới thiệu hệ sinh thái thị giác và điều khiển tích hợp tới các quỹ đầu tư quốc tế, nhà hoạch định chính sách và lãnh đạo doanh nghiệp.",
    },
    body: {
      en: [
        "On May 28, 2026, OpenMind Robotics was proud to participate in the Vietnam Innovation & Private Capital Summit (VIPC 2026) at Landmark 81, Ho Chi Minh City, joining global venture capitalists, policy makers, and industry leaders shaping the future of Vietnam's technology ecosystem.",
      ],
      vn: [
        "Ngày 28/05/2026, OpenMind Robotics vinh dự tham gia Hội nghị Đổi mới Sáng tạo & Vốn Tư nhân Việt Nam (VIPC 2026) tại Landmark 81, TP. Hồ Chí Minh, cùng các quỹ đầu tư mạo hiểm quốc tế, nhà hoạch định chính sách và lãnh đạo doanh nghiệp đang định hình tương lai hệ sinh thái công nghệ Việt Nam.",
      ],
    },
    technology: {
      eye: {
        en: "Engineered for high precision, real-time cognitive processing, and dynamic 3D spatial awareness in complex operational environments.",
        vn: "Được thiết kế cho độ chính xác cao, xử lý nhận thức thời gian thực và nhận biết không gian 3D linh hoạt trong môi trường vận hành phức tạp.",
      },
      brain: {
        en: "An adaptable open manipulation architecture designed to seamlessly synchronize intelligent robotics with dynamic industrial workflows.",
        vn: "Kiến trúc thao tác mở, linh hoạt, giúp đồng bộ liền mạch robot thông minh với các quy trình công nghiệp biến động.",
      },
    },
    highlightsHeading: { en: "Key highlights", vn: "Điểm nổi bật" },
    highlights: [
      {
        title: { en: "Technology demonstration", vn: "Trình diễn công nghệ" },
        body: {
          en: "Showcased our universal control framework powered by advanced AI vision and machine learning, designed to address real-world challenges in warehouse and factory automation.",
          vn: "Giới thiệu nền tảng điều khiển đa năng ứng dụng thị giác AI và học máy tiên tiến, giải quyết các thách thức thực tế trong tự động hóa kho vận và nhà máy.",
        },
      },
      {
        title: { en: "Strategic networking", vn: "Kết nối chiến lược" },
        body: {
          en: "Our tech booth welcomed delegates, venture capitalists, strategic partners, and representatives from the Vietnamese-German University (VGU) to experience our latest deep-tech innovations.",
          vn: "Gian hàng công nghệ của chúng tôi đã đón tiếp các đại biểu, quỹ đầu tư, đối tác chiến lược và đại diện Trường Đại học Việt Đức (VGU) đến trải nghiệm những đổi mới công nghệ sâu mới nhất.",
        },
      },
      {
        title: { en: "Global ambition", vn: "Tầm nhìn toàn cầu" },
        body: {
          en: "The event served as a major milestone in strengthening OpenMind Robotics' position in the Deep-Tech & Edge AI space, bridging local innovation with international markets.",
          vn: "Sự kiện là cột mốc quan trọng giúp củng cố vị thế của OpenMind Robotics trong lĩnh vực Deep-Tech & Edge AI, kết nối đổi mới sáng tạo trong nước với thị trường quốc tế.",
        },
      },
    ],
    images: [
      img("vipc-2026", "01.jpg", 1920, 1280),
      img("vipc-2026", "02.jpg", 1153, 742),
      img("vipc-2026", "05.jpg", 1920, 1176),
      img("vipc-2026", "03.jpg", 1440, 1920),
      img("vipc-2026", "04.jpg", 1555, 1852),
    ],
  },
];

export const getNewsArticle = (slug: string) => newsArticles.find((a) => a.slug === slug);

export const formatNewsDate = (article: Pick<NewsArticle, "date" | "precision">, lang: Lang) =>
  new Intl.DateTimeFormat(lang === "vn" ? "vi-VN" : "en-US", {
    year: "numeric",
    month: "long",
    ...(article.precision === "day" ? { day: "numeric" } : {}),
    timeZone: "UTC",
  }).format(new Date(article.date));

export const newsPageMeta: Record<Lang, { title: string; description: string }> = {
  en: {
    title: "News & Events | OpenMind Robotics",
    description:
      "Exhibitions, awards and partnerships: the latest from OpenMind Robotics on physical AI, 3D vision and intelligent robotic automation.",
  },
  vn: {
    title: "Tin tức & Sự kiện | OpenMind Robotics",
    description:
      "Triển lãm, giải thưởng và hợp tác: tin tức mới nhất từ OpenMind Robotics về Physical AI, thị giác 3D và tự động hóa robot thông minh.",
  },
};

export const newsCopy: Record<
  Lang,
  {
    eyebrow: string;
    heading: string;
    subheading: string;
    latest: string;
    readMore: string;
    viewAll: string;
    allNews: string;
    homeHeading: string;
    homeSubheading: string;
    technologyHeading: string;
    eyeLabel: string;
    brainLabel: string;
    pressHeading: string;
    galleryHeading: string;
    moreHeading: string;
    photo: string;
    close: string;
    previous: string;
    next: string;
  }
> = {
  en: {
    eyebrow: "Newsroom",
    heading: "News & Events",
    subheading:
      "Exhibitions, awards and partnerships: follow how OpenMind Robotics is bringing physical AI from Vietnam to factories and warehouses worldwide.",
    latest: "Latest",
    readMore: "Read story",
    viewAll: "View all news",
    allNews: "All news",
    homeHeading: "Latest News",
    homeSubheading: "Recent milestones, events and partnerships from the OpenMind Robotics team.",
    technologyHeading: "Technology featured",
    eyeLabel: "AI Vision System",
    brainLabel: "Universal Control Framework",
    pressHeading: "Featured in the press",
    galleryHeading: "Photo gallery",
    moreHeading: "More news",
    photo: "Photo",
    close: "Close",
    previous: "Previous photo",
    next: "Next photo",
  },
  vn: {
    eyebrow: "Tin tức",
    heading: "Tin tức & Sự kiện",
    subheading:
      "Triển lãm, giải thưởng và hợp tác: theo dõi hành trình OpenMind Robotics đưa Physical AI từ Việt Nam đến các nhà máy và kho vận trên toàn thế giới.",
    latest: "Mới nhất",
    readMore: "Đọc tiếp",
    viewAll: "Xem tất cả tin tức",
    allNews: "Tất cả tin tức",
    homeHeading: "Tin tức mới nhất",
    homeSubheading: "Những cột mốc, sự kiện và hợp tác gần đây của đội ngũ OpenMind Robotics.",
    technologyHeading: "Công nghệ nổi bật",
    eyeLabel: "Hệ thống thị giác AI",
    brainLabel: "Nền tảng điều khiển đa năng",
    pressHeading: "Báo chí đưa tin",
    galleryHeading: "Hình ảnh sự kiện",
    moreHeading: "Tin tức khác",
    photo: "Ảnh",
    close: "Đóng",
    previous: "Ảnh trước",
    next: "Ảnh tiếp theo",
  },
};

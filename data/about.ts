import type { Lang } from "./applications";

type Localized = Record<Lang, string>;

export const aboutPageMeta: Record<Lang, { title: string; description: string }> = {
  en: {
    title: "About Us | OpenMind Robotics",
    description:
      "OpenMind Robotics is a deep-tech spin-off from Vietnamese-German University (VGU) building the Physical AI that makes robots see, think, and act autonomously in the real world.",
  },
  vn: {
    title: "Về chúng tôi | OpenMind Robotics",
    description:
      "OpenMind Robotics là công ty công nghệ sâu, spin-off từ Trường Đại học Việt Đức (VGU), phát triển Physical AI giúp robot nhận biết, tư duy và hành động tự chủ trong thế giới thực.",
  },
};

export const aboutHero: Record<Lang, { eyebrow: string; heading: string; lead: string; motto: string; imageCaption: string }> = {
  en: {
    eyebrow: "About OpenMind Robotics",
    heading: "Engineering the intelligence behind autonomous robotics",
    lead: "OpenMind Robotics builds the Physical AI that makes robots see, think, and act autonomously in the real world.",
    motto: "ONE Brain, ANY Robots, ANY Task",
    imageCaption: "Born at Vietnamese-German University (VGU)",
  },
  vn: {
    eyebrow: "Về OpenMind Robotics",
    heading: "Kiến tạo trí tuệ cho robot tự chủ",
    lead: "OpenMind Robotics phát triển Physical AI giúp robot nhận biết, tư duy và hành động tự chủ trong thế giới thực.",
    motto: "Một bộ não, mọi robot, mọi tác vụ",
    imageCaption: "Khởi nguồn từ Trường Đại học Việt Đức (VGU)",
  },
};

export const aboutStats: { value: string; label: Localized }[] = [
  { value: "VGU", label: { en: "University spin-off", vn: "Doanh nghiệp spin-off từ đại học" } },
  { value: "Top 5", label: { en: "Qualcomm QVIC 2026 finalist", vn: "Chung kết Qualcomm QVIC 2026" } },
  { value: "Deep-Tech", label: { en: "Robotics & Physical AI", vn: "Robot & AI vật lý" } },
  { value: "Germany· Vietnam", label: { en: "International perspective", vn: "Góc nhìn quốc tế" } },
];

export const aboutWhoWeAre: Record<Lang, { eyebrow: string; heading: string; body: string[]; missionLabel: string; mission: string }> = {
  en: {
    eyebrow: "Who we are",
    heading: "Embodied AI for industrial robotics",
    body: [
      "We are a deep-tech robotics company and a spin-off from Vietnamese-German University (VGU), focused on translating advanced research into practical industrial solutions.",
      "By combining Physical AI, 3D computer vision, robot intelligence, embedded systems, and physics-based digital twins, we help manufacturers automate complex tasks that traditionally require extensive manual programming and specialized tooling.",
    ],
    missionLabel: "Our mission",
    mission:
      "To make intelligent robotics more accessible, adaptable, and scalable through one simple principle: ONE Brain, ANY Robots.",
  },
  vn: {
    eyebrow: "Chúng tôi là ai",
    heading: "Embodied AI cho robot công nghiệp",
    body: [
      "Chúng tôi là công ty robot công nghệ sâu, spin-off từ Trường Đại học Việt Đức (VGU), tập trung chuyển hóa nghiên cứu tiên tiến thành giải pháp công nghiệp thực tiễn.",
      "Kết hợp Physical AI, thị giác máy tính 3D, trí tuệ robot, hệ thống nhúng và digital twin dựa trên mô phỏng vật lý, chúng tôi giúp nhà sản xuất tự động hóa các tác vụ phức tạp vốn đòi hỏi nhiều công lập trình thủ công và đồ gá chuyên dụng.",
    ],
    missionLabel: "Sứ mệnh",
    mission:
      "Đưa robot thông minh đến gần hơn, linh hoạt hơn và dễ mở rộng hơn với một nguyên tắc đơn giản: Một bộ não, mọi robot.",
  },
};

export const aboutResearch: Record<Lang, { eyebrow: string; heading: string; body: string[]; expertiseLabel: string; imageCaption: string }> = {
  en: {
    eyebrow: "Our team",
    heading: "Bridging research and industry",
    body: [
      "Our team combines hands-on industrial robotics experience with academic research and engineering innovation. We work across the entire technology stack, from AI perception and real-time embedded computing to robot motion planning, simulation, and system integration.",
      "Supported by interdisciplinary expertise in business administration and business development, we approach robotics not only as an engineering challenge but as a path toward commercially viable, scalable industrial solutions.",
      "Our development benefits from academic guidance and international perspectives connected with Germany, Belgium, and Vietnam, linking advanced research with the practical requirements of manufacturing, logistics, and other industrial environments.",
    ],
    expertiseLabel: "Multidisciplinary expertise",
    imageCaption: "Robotics lab, Vietnamese-German University",
  },
  vn: {
    eyebrow: "Đội ngũ",
    heading: "Kết nối nghiên cứu và công nghiệp",
    body: [
      "Đội ngũ của chúng tôi kết hợp kinh nghiệm thực tế về robot công nghiệp với nghiên cứu học thuật và đổi mới kỹ thuật. Chúng tôi làm chủ toàn bộ công nghệ, từ nhận thức AI và tính toán nhúng thời gian thực đến hoạch định chuyển động robot, mô phỏng và tích hợp hệ thống.",
      "Được hỗ trợ bởi chuyên môn liên ngành về quản trị và phát triển kinh doanh, chúng tôi tiếp cận robot không chỉ như một bài toán kỹ thuật mà còn là con đường dẫn đến các giải pháp công nghiệp khả thi về thương mại và dễ mở rộng.",
      "Quá trình phát triển được dẫn dắt bởi giới học thuật cùng góc nhìn quốc tế từ Đức, Bỉ và Việt Nam, giúp gắn kết nghiên cứu tiên tiến với yêu cầu thực tế của sản xuất, logistics và các môi trường công nghiệp khác.",
    ],
    expertiseLabel: "Chuyên môn liên ngành",
    imageCaption: "Phòng thí nghiệm robot, Trường Đại học Việt Đức",
  },
};

export const expertise: Localized[] = [
  { en: "Robotics engineering", vn: "Kỹ thuật robot" },
  { en: "Mechanical systems", vn: "Hệ thống cơ khí" },
  { en: "3D computer vision", vn: "Thị giác máy tính 3D" },
  { en: "Embedded AI", vn: "AI nhúng" },
  { en: "Robot control", vn: "Điều khiển robot" },
  { en: "Digital twins", vn: "Digital twin" },
  { en: "Business development", vn: "Phát triển kinh doanh" },
];

export const aboutDeployment: Record<Lang, { eyebrow: string; heading: string; subheading: string }> = {
  en: {
    eyebrow: "Our approach",
    heading: "From research to real-world deployment",
    subheading:
      "Robotics innovation creates value only when it works reliably beyond the laboratory. We combine AI software, 3D vision, robot intelligence, and industrial automation into deployable systems, reducing integration complexity at every step.",
  },
  vn: {
    eyebrow: "Cách tiếp cận",
    heading: "Từ nghiên cứu đến triển khai thực tế",
    subheading:
      "Đổi mới trong robot chỉ tạo ra giá trị khi vận hành tin cậy bên ngoài phòng thí nghiệm. Chúng tôi kết hợp phần mềm AI, thị giác 3D, trí tuệ robot và tự động hóa công nghiệp thành các hệ thống sẵn sàng triển khai, giảm độ phức tạp tích hợp ở mọi bước.",
  },
};

export const deploymentSteps: { title: Localized; body: Localized }[] = [
  {
    title: { en: "Proof of concept", vn: "Thử nghiệm khái niệm" },
    body: {
      en: "Validate feasibility on your parts, cells, and constraints.",
      vn: "Kiểm chứng tính khả thi trên chi tiết, cell và điều kiện thực tế của bạn.",
    },
  },
  {
    title: { en: "Digital twin validation", vn: "Kiểm chứng bằng digital twin" },
    body: {
      en: "Simulate and commission the workflow virtually before touching hardware.",
      vn: "Mô phỏng và chạy thử quy trình trên môi trường ảo trước khi lắp đặt phần cứng.",
    },
  },
  {
    title: { en: "Pilot project", vn: "Dự án thí điểm" },
    body: {
      en: "Run on the shop floor and measure performance against real targets.",
      vn: "Vận hành tại xưởng và đo lường hiệu suất theo mục tiêu thực tế.",
    },
  },
  {
    title: { en: "Industrial deployment", vn: "Triển khai công nghiệp" },
    body: {
      en: "Scale to production with continuous improvement from field data.",
      vn: "Mở rộng ra sản xuất và cải tiến liên tục từ dữ liệu vận hành.",
    },
  },
];

export const deploymentPrinciples: Localized[] = [
  { en: "Measurable performance", vn: "Hiệu suất đo lường được" },
  { en: "Hardware flexibility", vn: "Linh hoạt phần cứng" },
  { en: "Continuous real-world testing", vn: "Kiểm thử liên tục trong thực tế" },
];

export const aboutAward: Record<
  Lang,
  { eyebrow: string; heading: string; award: string; body: string[]; quote: string; cta: string; imageAlt: [string, string] }
> = {
  en: {
    eyebrow: "Recognized by Qualcomm",
    heading: "QVIC 2026 Innovation Award winner",
    award: "Qualcomm Vietnam Innovation Challenge 2026",
    body: [
      "In 2026, OpenMind Robotics was selected among the Top 5 finalists of the Qualcomm Vietnam Innovation Challenge (QVIC 2026) and received the Innovation Award, accompanied by a US$15,000 prize, recognizing our work at the intersection of robotics, artificial intelligence, and industrial automation.",
      "We were also the only university spin-off among the five finalists, highlighting our commitment to transforming university research into commercially viable technology.",
    ],
    quote:
      "For us, this milestone is more than an award. It reinforces our mission to bring Physical AI out of the research environment and into real industrial applications.",
    cta: "Read the story",
    imageAlt: ["OpenMind Robotics team receiving the QVIC 2026 Innovation Award", "Guests at the OpenMind Robotics demo booth at QVIC 2026"],
  },
  vn: {
    eyebrow: "Được Qualcomm ghi nhận",
    heading: "Giải Đổi mới sáng tạo QVIC 2026",
    award: "Qualcomm Vietnam Innovation Challenge 2026",
    body: [
      "Năm 2026, OpenMind Robotics lọt Top 5 chung kết Qualcomm Vietnam Innovation Challenge (QVIC 2026) và nhận Giải Đổi mới sáng tạo trị giá 15.000 USD, ghi nhận tiềm năng của chúng tôi ở giao điểm giữa robot, trí tuệ nhân tạo và tự động hóa công nghiệp.",
      "OpenMind Robotics cũng là doanh nghiệp spin-off từ đại học duy nhất trong năm đội chung kết, khẳng định cam kết biến nghiên cứu đại học thành công nghệ có giá trị thương mại.",
    ],
    quote:
      "Với chúng tôi, cột mốc này không chỉ là một giải thưởng. Nó củng cố sứ mệnh đưa Physical AI ra khỏi phòng thí nghiệm và vào các ứng dụng công nghiệp thực tế.",
    cta: "Đọc bài viết",
    imageAlt: ["Đội ngũ OpenMind Robotics nhận Giải Đổi mới sáng tạo QVIC 2026", "Khách tham quan gian trưng bày của OpenMind Robotics tại QVIC 2026"],
  },
};

export const AWARD_NEWS_SLUG = "qualcomm-qvic-2026-innovation-award";

export const aboutTechnologyCopy: Record<Lang, { eyebrow: string; heading: string; subheading: string }> = {
  en: {
    eyebrow: "Our technology",
    heading: "One platform, three building blocks",
    subheading:
      "Together, these technologies form the foundation of our vision for adaptable, intelligent, and hardware-independent robotics.",
  },
  vn: {
    eyebrow: "Công nghệ",
    heading: "Một nền tảng, ba khối công nghệ",
    subheading:
      "Cùng nhau, các công nghệ này tạo nền móng cho tầm nhìn về robot linh hoạt, thông minh và độc lập với phần cứng.",
  },
};

export const aboutTechnologies: { name: string; subtitle: Localized; body: Localized; image: string }[] = [
  {
    name: "OM-Eye™",
    subtitle: { en: "AI-powered 3D vision", vn: "Thị giác 3D ứng dụng AI" },
    body: {
      en: "Transforms RGB-D sensor data into 3D scene understanding and object pose estimation, so robots can perceive and locate objects in complex environments, including unstructured bins and dynamic production settings.",
      vn: "Chuyển dữ liệu cảm biến RGB-D thành hiểu biết không gian 3D và ước lượng tư thế vật thể, giúp robot nhận biết và định vị vật thể trong môi trường phức tạp, kể cả thùng chứa lộn xộn và dây chuyền sản xuất biến động.",
    },
    image: "/AIparts2.png",
  },
  {
    name: "OM-Brain™",
    subtitle: { en: "Intelligent robot control", vn: "Điều khiển robot thông minh" },
    body: {
      en: "Connects perception with action through task planning, motion planning, and intelligent execution, enabling robots to handle variable objects, adapt to changing environments, and recover from common execution failures.",
      vn: "Kết nối nhận thức với hành động thông qua hoạch định tác vụ, hoạch định chuyển động và thực thi thông minh, giúp robot xử lý vật thể đa dạng, thích ứng với môi trường thay đổi và tự phục hồi sau các lỗi thực thi thường gặp.",
    },
    image: "/picking.png",
  },
  {
    name: "OM-Twin",
    subtitle: { en: "Digital twin & virtual commissioning", vn: "Digital twin & chạy thử ảo" },
    body: {
      en: "Combines virtual commissioning, 3D simulation, robot programming, and physical system integration to validate automation workflows before deployment and bridge the gap between simulation and real-world operation.",
      vn: "Kết hợp chạy thử ảo, mô phỏng 3D, lập trình robot và tích hợp hệ thống vật lý để kiểm chứng quy trình tự động hóa trước khi triển khai, thu hẹp khoảng cách giữa mô phỏng và vận hành thực tế.",
    },
    image: "/digitaltwin_ur.png",
  },
];

export const aboutCollaboration: Record<Lang, { eyebrow: string; heading: string; body: string[]; areasLabel: string; cta: string }> = {
  en: {
    eyebrow: "Collaboration",
    heading: "Collaboration for innovation",
    body: [
      "We value collaboration between academia and industry as a foundation for advancing robotics technology. Building on our origins within the VGU ecosystem, we work with researchers, engineers, industrial partners, and technology providers.",
      "Our long-term ambition is a strong innovation ecosystem that connects scientific research, engineering expertise, and industrial demand to accelerate the development and commercialization of Physical AI.",
    ],
    areasLabel: "Ways to work with us",
    cta: "Partner with us",
  },
  vn: {
    eyebrow: "Hợp tác",
    heading: "Hợp tác vì đổi mới",
    body: [
      "Chúng tôi coi sự hợp tác giữa học thuật và công nghiệp là nền tảng thúc đẩy công nghệ robot. Bắt nguồn từ hệ sinh thái VGU, chúng tôi làm việc cùng các nhà nghiên cứu, kỹ sư, đối tác công nghiệp và nhà cung cấp công nghệ.",
      "Mục tiêu dài hạn của chúng tôi là xây dựng hệ sinh thái đổi mới vững mạnh, kết nối nghiên cứu khoa học, chuyên môn kỹ thuật và nhu cầu công nghiệp để đẩy nhanh việc phát triển và thương mại hóa Physical AI.",
    ],
    areasLabel: "Hình thức hợp tác",
    cta: "Hợp tác cùng chúng tôi",
  },
};

export const collaborationAreas: Localized[] = [
  { en: "Joint research", vn: "Nghiên cứu chung" },
  { en: "Experimental validation", vn: "Kiểm chứng thực nghiệm" },
  { en: "Dataset development", vn: "Xây dựng bộ dữ liệu" },
  { en: "Pilot projects", vn: "Dự án thí điểm" },
  { en: "Technology transfer", vn: "Chuyển giao công nghệ" },
];

export const aboutVision: Record<Lang, { eyebrow: string; heading: string; body: string; closing: string }> = {
  en: {
    eyebrow: "Our vision",
    heading: "A world where every robot can become intelligent, adaptable, and autonomous.",
    body: "We are building the next generation of robotics intelligence to help industries move beyond rigid automation toward flexible systems that perceive, reason, and act in the real world.",
    closing: "From research to reality. From intelligent perception to autonomous action.",
  },
  vn: {
    eyebrow: "Tầm nhìn",
    heading: "Một thế giới nơi mọi robot đều có thể trở nên thông minh, linh hoạt và tự chủ.",
    body: "Chúng tôi đang xây dựng thế hệ trí tuệ robot tiếp theo, giúp các ngành công nghiệp vượt qua tự động hóa cứng nhắc để tiến tới những hệ thống linh hoạt, có khả năng nhận biết, suy luận và hành động trong thế giới thực.",
    closing: "Từ nghiên cứu đến thực tế. Từ nhận thức thông minh đến hành động tự chủ.",
  },
};

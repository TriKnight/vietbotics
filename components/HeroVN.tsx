"use client";
import React, { useEffect, useState } from "react";
import { Spotlight } from './ui/Spotlight';
import { Carousel, Card } from "./ui/apple-cards-carousel";
import InfoVideo from "@/components/Videos";
import { MagicButton } from './ui/MagicButton';
import { Menu} from './ui/NavBar';
import { cn } from "@/utils/cn";
import { HoverEffect } from "./ui/CardHoverEffect";
import WobbleCardInfoVN from "./CardVN";
import FooterVN from "./FooterVN";
import Image from 'next/image'; // Assuming you're using Next.js
import { FaBrain, FaEye, FaShieldAlt } from 'react-icons/fa';
import { IoLogoElectron, IoFlash, IoTime } from 'react-icons/io5';
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { SignupFormDemo } from "./ui/SignUp"; // adjust path if needed
import { usePathname, useRouter } from 'next/navigation';



const Hero = () => {
    const [] = useState(false); // toggle state
    const cards = data.map((card, index) => (
        <Card key={card.src} card={card} index={index} layout={true} />
      ));
    return (
        <div className="pb-10 pt-26">
            <div>
            <Spotlight className="top-60 left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
            <Spotlight className="top-30 right-60 md:-right-32 md:-top-50 h-screen" fill="white" />
            <Spotlight className="top-10 left-full h-[100vh] w-[60vw]" fill="purple" />
            <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
            </div>

            <div className="relative w-full flex items-center justify-center z-50">
            <Navbar className="top-2" />
          </div>
            {/* <div className="relative  w-full">
            <FloatingNav navItems={navItems} />
             </div> */}
            <div className="h-[40rem] w-full dark:bg-black  bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
            {/* Radial gradient for the container to give a faded look */}
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">
            </div>
            <div className="flex justify-center relative my-20 z-5">
                <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                   <div className="flex justify-center items-center space-x-4 py-8">
                  {/* <img src="/circle.svg" alt="OpenMind Logo" className="w-12 h-12" /> */}
                  <h1 className="text-5xl sm:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-neutral-400 to-yellow-100 py-8 text-center ">
                    OpenMind Robotics
                  </h1>
                </div>
                    <p className="text-4xl sm:text-5xl font-bold  bg-clip-text text-transparent bg-gradient-to-b from-yellow-500 to-white-100  text-center">
                    Embodied AI định hình
                    </p>
                    <p className="text-4xl sm:text-5xl font-bold  bg-clip-text text-transparent bg-gradient-to-b from-yellow-500 to-white-100  text-center">
                     tương lai ngành Logistics
                    </p>
                   
                    {/* <TextGenerateEffect
                        words="AI-Powered Robots Redefining Industry"
                        className="text-center text-[40px] md:text-5xl lg:text-6xl"
                    /> */}
                    
                   <a href='#contact_us'>
                        <p className="text-2xl sm:text-3xl font-bold text-center text-neutral-600 dark:text-neutral-400 mt-4">
                        <MagicButton title="Yêu cầu Demo" icon={undefined} position={''}/>
                        </p>
                    </a>
                
                </div>
               
            </div>
            </div>

            <div className="w-full h-full rounded-lg ">
            <InfoVideo />
            </div>
            
            {/* <Grid /> */}
            
           

            <div id="solutions_pick_place" className="w-full h-full py-10">
            <h2   className="text-4xl sm:text-5xl font-bold  bg-clip-text text-transparent bg-gradient-to-b from-neutral-400 to-yellow-100 py-8 text-center">
            Giải pháp robotics của chúng tôi
            </h2>
            <Carousel items={cards} />
            </div>
            
            <div id="technology" className="w-full h-full py-20">
            <h2  className="text-4xl sm:text-5xl font-bold  bg-clip-text text-transparent bg-gradient-to-b from-neutral-400 to-yellow-100 py-8 text-center">
            Các công nghệ lõi 
            </h2>
            <WobbleCardInfoVN />
            </div>

            
            <div id="why_us" className="w-full h-full py-10">
            <h2 className="text-4xl sm:text-5xl font-bold  bg-clip-text text-transparent bg-gradient-to-b from-neutral-400 to-yellow-100 py-8 text-center">
             Tại sao chọn chúng tôi?
            </h2>
            <HoverEffect items={projects} />
            </div>
            
              {/* 🔁 Infinite Moving Logos */}
              <div id="technology" className="w-full h-full py-20">
            <h2  className="text-4xl sm:text-5xl font-bold  bg-clip-text text-transparent bg-gradient-to-b from-neutral-400 to-yellow-100 py-8 text-center">
            Hỗ trợ đa dạng các hãng robot
            </h2>

          <div className="w-full max-w-7xl">
            <InfiniteMovingCards
              items={partnerLogos}
              direction="left"
              speed="normal"
            />
          </div>
          </div>

        

              <section id="contact_us" className="bg-black dark:bg-black py-16 px-4 md:px-8">
              <div className="max-w-4xl mx-auto text-center">
                <h1   className="text-4xl sm:text-5xl font-bold  bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-yellow-100 py-8 text-center">
                  Liên hệ với chúng tôi
                </h1>
                <p className="mt-4 text-lg font-bold text-neutral-600 text-white text-neutral-300">
                  Tự động hóa cấp cao cho nhà xưởng của bạn
                </p>
                  <div className="mt-12">
                  <SignupFormDemo />
                </div>
                
                </div>
            </section>
  

            

            <div className="w-full py-20">
            <FooterVN />
            </div>
            {/* <BackGroundBoxes /> */}
        </div>

        
    );
}
export const projects = [
  {
    title: "Cuộc cách mạng logistics dựa trên AI",
    description: "Công nghệ sâu và trí tuệ nhân tạo tiên tiến của chúng tôi cho phép cung cấp giải pháp robot chọn và đặt hàng tốt nhất cho doanh nghiệp của bạn",
    icon: FaBrain
  },
  {
    title: "Nền tảng Digital Twins sáng tạo",
    description: "Công nghệ Digital Twins của chúng tôi tạo ra các bản sao ảo cực kỳ chính xác của hệ thống robot, thay đổi cách thiết kế, kiểm thử và vận hành các hệ thống này",
    icon: IoLogoElectron
  },
  {
    title: "Công nghệ tích hợp thị giác độc đáo",
    description: "Các thuật toán thị giác máy tính tiên tiến giúp robot nhận biết và hiểu môi trường xung quanh với độ chính xác vượt trội",
    icon: FaEye
  },
  {
    title: "Tăng tốc hoàn vốn đầu tư",
    description: "Thời gian thiết lập nhanh, giúp hệ thống của bạn hoạt động ngay lập tức và trải nghiệm hoàn vốn đầu tư nhanh chóng thông qua nâng cao hiệu quả vận hành",
    icon: IoTime
  },
  {
    title: "Năng suất tăng cao",
    description: "Giải pháp của chúng tôi thực hiện công việc nhanh hơn nhiều, với công suất và sản lượng lớn hơn, ít lỗi và khuyết tật hơn, duy trì chất lượng đồng đều qua các lô sản xuất",
    icon: IoFlash
  },
  {
    title: "An toàn được cải thiện",
    description: "Robot có thể đảm nhận các nhiệm vụ nguy hiểm như nâng vật nặng hoặc làm việc trong môi trường rủi ro, giảm thiểu nguy cơ chấn thương cho người lao động",
    icon: FaShieldAlt
  },
];




function Navbar({ className }: { className?: string }) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [active, setActive] = useState<string | null>(null);
  const [currentLang, setCurrentLang] = useState<"en" | "vn">("en");
  const [dropdownOpen, setDropdownOpen] = useState(false);


  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (pathname?.startsWith("/vn")) {
      setCurrentLang("vn");
    } else {
      setCurrentLang("en");
    }
  }, [pathname]);

  const changeLanguage = (lang: "en" | "vn") => {
    if (!pathname) return;
    const segments = pathname.split("/");

    if (["en", "vn"].includes(segments[1])) {
      segments[1] = lang;
    } else {
      segments.unshift(lang);
    }

    const newPath = segments.join("/");
    setDropdownOpen(false);
    router.push(newPath);
  };

  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 font-bold", className)}>
      <Menu setActive={setActive}>
        <div className="relative px-4 py-2 text-big text-black dark:text-white hover:text-yellow-400 cursor-pointer transition-colors duration-300">
          <a href="/">Trang chủ</a>
        </div>
        <div className="relative px-4 py-2 text-big text-black dark:text-white hover:text-yellow-400 cursor-pointer transition-colors duration-300">
          <a href="#solutions_pick_place">Giải pháp</a>
        </div>
        <div className="relative px-4 py-2 text-big text-black dark:text-white hover:text-yellow-400 cursor-pointer transition-colors duration-300">
          <a href="#technology">Công nghệ</a>
        </div>
        {/* <div className="relative px-4 py-2 text-big text-black dark:text-white hover:text-yellow-400 cursor-pointer transition-colors duration-300">
          <a href="#why_us">Ưu điểm</a>
        </div> */}
        <div className="relative px-4 py-2 text-big text-black dark:text-white hover:text-yellow-400 cursor-pointer transition-colors duration-300">
          <a href="#contact_us">Liên hệ</a>
        </div>

        {/* 🌐 Language Dropdown */}
        <div className="relative mt-2 ml-4">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center space-x-2 p-1 hover:bg-neutral-200 dark:hover:bg-neutral-700 rounded-md transition"
          >
            <Image
              src={`/logos/${currentLang}.png`}
              alt={currentLang === "en" ? "EN" : "VN"}
              width={24}
              height={24}
            />
            <span className="text-sm text-black dark:text-white">
              {currentLang === "en" ? "EN" : "VN"}
            </span>
            <svg
              className="w-3 h-3 text-black dark:text-white"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                d="M6 8l4 4 4-4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Dropdown content */}
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-32 bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-600 rounded-md shadow-lg z-50">
              <button
                onClick={() => changeLanguage("en")}
                className="w-full flex items-center space-x-2 px-4 py-2 text-sm text-left hover:bg-gray-100 dark:hover:bg-neutral-700"
              >
                <Image src="/logos/en.png" alt="EN" width={20} height={20} />
                <span className="text-black dark:text-white">EN</span>
              </button>
              <button
                onClick={() => changeLanguage("vn")}
                className="w-full flex items-center space-x-2 px-4 py-2 text-sm text-left hover:bg-gray-100 dark:hover:bg-neutral-700"
              >
                <Image src="/logos/vn.png" alt="VN" width={20} height={20} />
                <span className="text-black dark:text-white">VN</span>
              </button>
            </div>
          )}
        </div>
      </Menu>
    </div>
  );
}


const VisionContent = () => (
  <div className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4">
    <div className="flex justify-center mb-6">
      <Image
        src="/AIparts3.png"
        alt="Ảnh minh họa nội dung"
        width={500}
        height={300}
        className="rounded-lg"
      />
    </div>
    <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
      <span className="font-bold text-neutral-700">
        Mô hình AI tích hợp thị giác tiên tiến hàng đầu
      </span>{" "}
      hệ thống tiên tiến của chúng tôi sử dụng công nghệ thị giác máy tính và AI hiện đại để giúp robot nhận biết và tương tác thông minh với môi trường xung quanh. Quá trình bắt đầu với việc quét 3D độ phân giải cao, tạo ra bản sao kỹ thuật số chi tiết của không gian làm việc. Các thuật toán định vị tiên tiến sau đó xác định các vật thể tối ưu để thao tác, tính đến các mối quan hệ không gian và khả năng va chạm.
    </p>

    <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
      <span className="font-bold text-neutral-700">
        Nhiều chiến lược cầm nắm
      </span>{" "}
      AI đánh giá nhiều chiến lược cầm nắm khác nhau, mô phỏng kết quả để xác định phương pháp hiệu quả và an toàn nhất. Lập kế hoạch đường đi tinh vi tối ưu hóa quỹ đạo robot, tránh chướng ngại vật đồng thời tăng hiệu suất. Thông qua học hỏi và thích nghi liên tục, hệ thống cải thiện hiểu biết về thế giới vật lý, nâng cao hiệu suất theo thời gian.
    </p>

    <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
      <span className="font-bold text-neutral-700">
        Kết hợp nhận thức, suy luận và hành động
      </span>{" "}
      AI tích hợp của chúng tôi kết hợp liền mạch giữa nhận thức, suy luận và hành động. Nó kết hợp học máy, thị giác máy tính và điều khiển robot để đạt được sự khéo léo và khả năng giải quyết vấn đề gần như con người trong môi trường phức tạp và động. Công nghệ này cho phép robot thực hiện đa dạng nhiệm vụ với ít lập trình lại, từ lắp ráp chính xác đến lấy hàng thích ứng.
    </p>

    <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
      <span className="font-bold text-neutral-700">
        Thu hẹp khoảng cách giữa trí tuệ số và tương tác vật lý
      </span>{" "}
      hệ thống AI tích hợp thị giác của chúng tôi đại diện cho bước tiến đáng kể trong khả năng robot cho sản xuất, logistics và nhiều lĩnh vực khác.
    </p>
  </div>
);

const PickingContent = () => (
  <div className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4">
    <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
      <span className="font-bold text-neutral-700">
        Với công nghệ sâu và AI cùng công nghệ Digital Twins tiên tiến.
      </span>{" "}
      Chúng tôi có thể cung cấp giải pháp robot chọn và đặt hàng tốt nhất cho doanh nghiệp của bạn. Các hệ thống robot tiên tiến này được thiết kế để làm việc an toàn và hiệu quả cùng với nhân viên con người. Hỗ trợ nhiều robot cộng tác như Universal Robot, Panda, Xarm, v.v. Và toàn bộ quy trình được chia thành 4 bước:
    </p>

    <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
      <span className="font-bold text-neutral-700">
        Bước 1: Đối tượng Digital Twins
      </span>{" "}
      Camera số hóa cảnh làm việc thực tế dưới dạng đám mây điểm 3D. Cảm biến sử dụng công nghệ thị giác lập thể để thu thập dữ liệu, đảm bảo chất lượng thông tin trong bản quét để đạt hiệu suất tối đa. Người dùng có thể định nghĩa đồ họa các tham số của cảnh lấy hàng trong thùng: thể tích làm việc, mật độ điểm trong đám mây điểm, v.v.
    </p>
    <div className="flex justify-center mb-6">
      <Image
        src="/grasping_pointcloud.png"
        alt="Ảnh minh họa nội dung"
        width={500}
        height={300}
        className="rounded-lg"
      />
    </div>
    <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
      <span className="font-bold text-neutral-700">
        Bước 2: Định vị đối tượng dựa trên mô hình AI tích hợp thị giác
      </span>{" "}
      Phần mềm xử lý hình ảnh xác định vị trí phần tốt nhất để cầm dựa trên đo đạc 3D, so sánh với mô hình CAD của chi tiết, hoặc tự động phát hiện hình dạng. Để đảm bảo cầm nắm an toàn, mọi sự chồng lấn với các chi tiết khác được mô phỏng bằng cách xây dựng cảnh làm việc ảo.
    </p>
    <div className="flex justify-center mb-6">
      <Image
        src="/grasping_point.png"
        alt="Ảnh minh họa nội dung"
        width={500}
        height={300}
        className="rounded-lg"
      />
    </div>
    <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
      <span className="font-bold text-neutral-700">
        Bước 3: Quản lý gripper và điểm cầm nắm
      </span>{" "}
      Nhiều gripper và điểm lấy hàng có thể dễ dàng định nghĩa trong phần mềm để làm rỗng hoàn toàn container. Công cụ mô phỏng tích hợp kiểm tra thiết kế các phần cơ khí (cell, robot, gripper) và khả năng tiếp cận các điểm cầm nắm.
    </p>
    <div className="flex justify-center mb-6">
      <Image
        src="/grasping.png"
        alt="Ảnh minh họa nội dung"
        width={500}
        height={300}
        className="rounded-lg"
      />
    </div>
    <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
      <span className="font-bold text-neutral-700">
        Bước 4: Quản lý quỹ đạo robot
      </span>{" "}
      Phần mềm tính toán quỹ đạo robot tối ưu, bất kể hãng và mẫu mã, để tránh va chạm với môi trường làm việc và đồng nghiệp con người. Nó truyền các vị trí góc của từng trục đến bộ điều khiển robot, tính đến các điểm kỳ dị.
    </p>
    <div className="flex justify-center mb-6">
      <Image
        src="/grasping_panda.png"
        alt="Ảnh minh họa nội dung"
        width={500}
        height={300}
        className="rounded-lg"
      />
    </div>
  </div>
);

const PalletizingContent = () => (
  <div className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4">
    <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
      <span className="font-bold text-neutral-700">
        Với công nghệ sâu và AI cùng công nghệ Digital Twins tiên tiến.
      </span>{" "}
      Chúng tôi có thể cung cấp giải pháp robot xếp pallet tốt nhất cho doanh nghiệp của bạn.
    </p>
    <div className="flex justify-center mb-6">
      <Image
        src="/fanuc_palletizing.png"
        alt="Ảnh minh họa nội dung"
        width={800}
        height={400}
        className="rounded-lg"
      />
    </div>
    <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
      <span className="font-bold text-neutral-700">
        Độ bền kết hợp hiệu suất:
      </span>{" "}
      Giải pháp xếp pallet của chúng tôi được thiết kế để hoạt động bền bỉ trong môi trường khắc nghiệt, đảm bảo hiệu suất ổn định ngay cả trong điều kiện khó khăn nhất.
    </p>

    <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
      <span className="font-bold text-neutral-700">
        Công nghệ tiên tiến
      </span>{" "}
      Trang bị cảm biến và hệ thống giám sát hiện đại, thiết bị xếp pallet của chúng tôi thích ứng với điều kiện thay đổi, đảm bảo hiệu suất và an toàn tối ưu mọi lúc.
    </p>

    <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
      <span className="font-bold text-neutral-700">
        Tính năng an toàn nâng cao
      </span>{" "}
      Thiết bị xếp pallet chắc chắn của chúng tôi bao gồm các cơ chế an toàn tiên tiến nhằm bảo vệ cả lực lượng lao động và máy móc trong môi trường làm việc đầy thách thức.
    </p>

    <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
      <span className="font-bold text-neutral-700">
        Tích hợp hiệu quả
      </span>{" "}
      Hệ thống xếp pallet của chúng tôi dễ dàng tích hợp vào quy trình làm việc hiện có, đảm bảo chuyển đổi liền mạch giúp tăng năng suất mà không gây gián đoạn.
    </p>

    <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
      <span className="font-bold text-neutral-700">
        Đối tác thành công
      </span>{" "}
      Hãy để chúng tôi giúp bạn vượt qua những thách thức của môi trường khắc nghiệt với giải pháp xếp pallet đáng tin cậy và bền bỉ, được thiết kế để hỗ trợ mục tiêu kinh doanh của bạn trong nhiều năm tới.
    </p>
  </div>
);

const DigitalTwinContent = () => (
  <div className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4">
    <div className="flex justify-center mb-6">
      <Image
        src="/digitaltwin_ur.png"
        alt="Ảnh minh họa nội dung"
        width={800}
        height={500}
        className="rounded-lg"
      />
    </div>

    <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
      <span className="font-bold text-neutral-700">
        Cách mạng hóa Công nghiệp 4.0 với công nghệ Digital Twin theo thời gian thực
      </span>{" "}
      Khung Digital Twin (DT) tiên tiến của chúng tôi đang chuyển đổi việc giám sát sức khỏe máy móc trong các ứng dụng chăm sóc máy robot. Được xây dựng dựa trên tiêu chuẩn ISO 23247, hệ thống sáng tạo này tạo ra bản sao ảo của tài sản vật lý, cho phép giám sát thời gian thực và bảo trì dự đoán.
    </p>
    <div className="flex justify-center mb-6">
      <Image
        src="/digitaltwin_palletizing.png"
        alt="Ảnh minh họa nội dung"
        width={800}
        height={400}
        className="rounded-lg"
      />
    </div>
    <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
      <span className="font-bold text-neutral-700">
        Các tính năng chính:
      </span>{" "}
      <ul>
        <li>• Tích hợp liền mạch với robot và gripper thông qua giao tiếp công nghiệp mạnh mẽ,</li>
        <li>• Cấu hình phần cứng tiên tiến bao gồm cobot, gripper thông minh và camera độ chính xác cao,</li>
        <li>• Kiến trúc không gian mạng ba lớp cho quản lý và phân tích dữ liệu toàn diện,</li>
        <li>• Khả năng tính toán biên cho quyết định tự chủ,</li>
        <li>• Giao diện người dùng dựa trên đám mây cho giám sát và điều khiển từ xa,</li>
      </ul>
    </p>

    <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
      <span className="font-bold text-neutral-700">
        Hiệu suất đã được chứng minh:
      </span>{" "}
      Khung DT của chúng tôi đã thể hiện độ chính xác xuất sắc trong việc tái tạo chuyển động cobot và vị trí công cụ. Kiểm tra nghiêm ngặt sử dụng các chỉ số tiêu chuẩn ngành (RMSE, MAPE, R2 Score) xác nhận độ trung thực cao của các mô phỏng kỹ thuật số.
    </p>
    <div className="flex justify-center mb-6">
      <Image
        src="/digitaltwin_framework.png"
        alt="Khung giám sát sức khỏe máy thời gian thực cho ứng dụng chăm sóc robot CNC dựa trên kiến trúc ISO 23247 với giao tiếp qua OPC-UA."
        width={800}
        height={400}
        className="rounded-lg"
      />
    </div>
    <p className="text-neutral-600 text-base md:text-1xl font-sans max-w-3xl mx-auto">
      Khung giám sát sức khỏe máy thời gian thực cho ứng dụng chăm sóc robot CNC dựa trên kiến trúc ISO 23247 với giao tiếp qua OPC-UA.
    </p>

    <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
      <span className="font-bold text-neutral-700">
        Lợi ích cho doanh nghiệp của bạn:
      </span>{" "}
      <ul>
        <li>• Tăng tính lặp lại của quy trình và khả năng tái tạo chi tiết,</li>
        <li>• Cải thiện khả năng tương tác mô hình cho sản xuất linh hoạt,</li>
        <li>• Thông tin thời gian thực cho bảo trì dự đoán và tối ưu hóa,</li>
        <li>• Giảm thời gian ngừng hoạt động và tăng hiệu quả vận hành,</li>
      </ul>
    </p>
  </div>
);



  const partnerLogos = [
    {
      quote: "/logos/ur.webp",     // ✅ image source in quote
      name: "Universal Robots",
      title: "Cobot Leader",
    },
        {
      quote: "/logos/yaskawa.webp",
      name: "Yaskawa",
      title: "Roburst Industrial Robots",
    },
    {
      quote: "/logos/nvidia.png",
      name: "NVIDIA",
      title: "Humanoid Robot AI Acceleration",
    },
      {
      quote: "/logos/franka.jpg",
      name: "Franka Emika",
      title: "Safe Robotics & high dexterity",
    },
    {
      quote: "/logos/fanuc.png",
      name: "FANUC",
      title: "Leading Industrial Robots",
    },
  
      {
      quote: "/logos/ufactory.png",
      name: "UFactory",
      title: "Affordable Cobots",
    },

  ];

  

  const data = [
    
   
    { 
      category: "Ứng dụng trong ngành logistics",
      title: "Robot tự hành gắp và đặt hàng",
      src: "/ur2.jpg",
      content: <PickingContent /> ,
    },
   
    {
      category: "Tích hợp AI và thị giác máy tính",  
      title: "Mô hình AI Vision-Embodied AI tiên tiến",
      src: "/aimodels.png",
      content: <VisionContent />,
    },
    {
      category: "Tích hợp Digital Twins cho Robotics",
      title: "Nền tảng Digital Twins cho Robotics tiên tiến",
      src: "/dtwin.png",
      content: <DigitalTwinContent />,
    },
   
    {
      category: "Hoạt động trong môi trường khắc nghiệt",
      title: "Robot xếp và dỡ pallet bền bỉ",
      src: "/fanuc.jpg",
      content: <PalletizingContent />,
    },
  
  ];
  
  

export default Hero
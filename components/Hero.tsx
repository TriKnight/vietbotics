"use client";
import React, { useEffect, useState } from "react";
import { Spotlight } from './ui/Spotlight';
import { Carousel, Card } from "./ui/apple-cards-carousel";
import InfoVideo from "@/components/Videos";
import { MagicButton } from './ui/MagicButton';
import { Menu } from './ui/NavBar';
import { cn } from "@/utils/cn";
import { HoverEffect } from "./ui/CardHoverEffect";
import WobbleCardInfo from "./Card";
import Footer from "./Footer";
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
                    Embodied AI Redefining Logistic Industry
                    </p>
                   
                    {/* <TextGenerateEffect
                        words="AI-Powered Robots Redefining Industry"
                        className="text-center text-[40px] md:text-5xl lg:text-6xl"
                    /> */}
                    
                   <a href='#contact_us'>
                        <p className="text-2xl sm:text-3xl font-bold text-center text-neutral-600 dark:text-neutral-400 mt-4">
                        <MagicButton title="Request a demo" icon={undefined} position={''}/>
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
            Your future robotics automation, our solutions
            </h2>
            <Carousel items={cards} />
            </div>
            
            <div id="technology" className="w-full h-full py-20">
            <h2  className="text-4xl sm:text-5xl font-bold  bg-clip-text text-transparent bg-gradient-to-b from-neutral-400 to-yellow-100 py-8 text-center">
            Our core technology
            </h2>
            <WobbleCardInfo />
            </div>

            
            <div id="why_us" className="w-full h-full py-10">
            <h2 className="text-4xl sm:text-5xl font-bold  bg-clip-text text-transparent bg-gradient-to-b from-neutral-400 to-yellow-100 py-8 text-center">
            Why choosing us?
            </h2>
            <HoverEffect items={projects} />
            </div>
            
              {/* 🔁 Infinite Moving Logos */}
              <div id="technology" className="w-full h-full py-20">
            <h2  className="text-4xl sm:text-5xl font-bold  bg-clip-text text-transparent bg-gradient-to-b from-neutral-400 to-yellow-100 py-8 text-center">
            Supported multiple robotics companies
            </h2>

          <div className="w-full max-w-7xl">
            <InfiniteMovingCards
              items={partnerLogos}
              direction="left"
              speed="slow"
            />
          </div>
          </div>

    

              <section id="contact_us" className="bg-black dark:bg-black py-16 px-4 md:px-8">
              <div className="max-w-4xl mx-auto text-center">
                <h1   className="text-4xl sm:text-5xl font-bold  bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-yellow-100 py-8 text-center">
                  Contact us
                </h1>
                <p className="mt-4 text-lg font-bold text-neutral-600 text-white text-neutral-300">
                  Next-Level Automation for Your Warehouse
                </p>
                  <div className="mt-12">
                  <SignupFormDemo />
                </div>
                
                </div>
            </section>
  

            

            <div className="w-full py-20">
            <Footer />
            </div>
            {/* <BackGroundBoxes /> */}
        </div>

        
    );
}

export const projects = [
  {
    title: "AI-Powered Logistics Revolution",
    description: "Our deep technology and cutting-edge artificial intelligence enable us to provide the best robotics picking and placing solutions for your business",
    icon: FaBrain
  },
  {
    title: "Innovative Digital Twins Platform",
    description: "Our Digital Twins technology creates highly accurate virtual replicas of robotic systems, transforming the way these systems are designed, tested, and operated",
    icon: IoLogoElectron
  },
  {
    title: "Unique Vision-Embodied Technology",
    description: "Cutting-edge computer vision algorithms that enable robots to perceive and understand their surroundings with exceptional accuracy",
    icon: FaEye
  },
  {
    title: "Rapid Return on Investment",
    description: "Fast setup time, get your system up and running quickly, and experience a swift return on your investment through enhanced operational efficiency",
    icon: IoTime
  },
  {
    title: "Increased productivity",
    description: "Our solutions generally perform tasks much faster, higher throughput and output volumes, fewer errors and defects, maintaining consistent quality across production batches",
    icon: IoFlash
  },
  {
    title: "Improved Safety",
    description: "Robots can handle dangerous tasks, such as lifting heavy objects or working in hazardous environments, minimizing the risk of injury for human workers",
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
          <a href="/">Home</a>
        </div>
        <div className="relative px-4 py-2 text-big text-black dark:text-white hover:text-yellow-400 cursor-pointer transition-colors duration-300">
          <a href="#solutions_pick_place">Solutions</a>
        </div>
        <div className="relative px-4 py-2 text-big text-black dark:text-white hover:text-yellow-400 cursor-pointer transition-colors duration-300">
          <a href="#technology">Technology</a>
        </div>
        {/* <div className="relative px-4 py-2 text-big text-black dark:text-white hover:text-yellow-400 cursor-pointer transition-colors duration-300">
          <a href="#why_us">Why us</a>
        </div> */}
        <div className="relative px-4 py-2 text-big text-black dark:text-white hover:text-yellow-400 cursor-pointer transition-colors duration-300">
          <a href="#contact_us">Contact us</a>
        </div>

        {/* 🌐 Language Dropdown */}
        <div className="relative mt-2 ml-4">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center space-x-2 p-1 hover:bg-neutral-200 dark:hover:bg-neutral-700 rounded-md transition"
          >
            <Image
              src={`/logos/${currentLang}.svg`}
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
                <Image src="/logos/en.svg" alt="EN" width={20} height={20} />
                <span className="text-black dark:text-white">EN</span>
              </button>
              <button
                onClick={() => changeLanguage("vn")}
                className="w-full flex items-center space-x-2 px-4 py-2 text-sm text-left hover:bg-gray-100 dark:hover:bg-neutral-700"
              >
                <Image src="/logos/vn.svg" alt="VN" width={20} height={20} />
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
        alt="Dummy content image"
        width={500}
        height={300}
        className="rounded-lg"
      />
    </div>
    <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
      <span className="font-bold text-neutral-700">
      State-of-the-art Vision-Embodied AI models
      </span>{" "}
      our cutting-edge system employs state-of-the-art computer vision and AI to enable robots to perceive and interact with 
      their environment intelligently. The process begins with high-resolution 3D scanning, 
      creating a detailed digital twin of the workspace. Advanced localization algorithms 
      then identify optimal objects for manipulation, factoring in spatial relationships and potential collisions.

    </p>
    <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
      <span className="font-bold text-neutral-700">
      Multiple grasping strategies
      </span>{" "}
      the AI evaluates multiple grasping strategies, simulating outcomes to determine the most effective and safe approach. 
      Sophisticated path planning optimizes robot trajectories, avoiding obstacles while maximizing efficiency. Through continuous learning and adaptation, 
      the system refines its understanding of the physical world, improving performance over time.
    </p>
    <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
      <span className="font-bold text-neutral-700">
      Combined perception, reasoning, and action
      </span>{" "}
      our embodied AI integrates perception, reasoning, and action seamlessly. It combines machine learning, computer vision, 
      and robotic control to achieve nearly human-like dexterity and problem-solving in complex, dynamic environments. 
      This technology enables robots to handle diverse tasks with minimal reprogramming, from precise assembly to adaptive bin picking.
    </p>

    <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
      <span className="font-bold text-neutral-700">
      Bridging the gap between digital intelligence and physical interaction
      </span>{" "}
      our vision-embodied AI system represents a significant leap forward in robotic capabilities for manufacturing, logistics, and beyond
    </p>
    
  </div>
);

const PickingContent = () => (
  <div   className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4">
     <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
      <span className="font-bold text-neutral-700">
      With deep technology and cutting-edge AI and Digital Twins technology.
      </span>{" "}
      We are able to provide the best robotics picking and placing solutions for your business. These advanced robotic systems are designed to work alongside human workers safely and efficiently.
      Supported multiple colaborative robots like Universal Robot, Panda, Xarm, etc. And whole process is divided into 4 steps:
    </p>
  

    <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
      <span className="font-bold text-neutral-700">
      Step 1: Digital Twins objects
      </span>{" "}
      camera digitizes the actual work scene in the form of a 3D point cloud. The sensor uses stereovision technology for data acquisition,
      ensuring the quality of the information contained in the scan for maximum performance in scanning results. The user can graphically
      define the parameters of the bin picking scene: working volume, density of points contained in the point cloud, etc.
    </p>
    <div className="flex justify-center mb-6">
      <Image
        src="/grasping_pointcloud.png"
        alt="Dummy content image"
        width={500}
        height={300}
        className="rounded-lg"
      />
    </div>
    <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
      <span className="font-bold text-neutral-700">
      Step 2: Localization objects based on Vision-Embodied AI models
      </span>{" "}
      The image processing software locates the best part to grip based on its 3D measurements, or comparison with the CAD model of the part,
      or by automatically detecting its shape. To guarantee safe gripping, any overlap with other parts is simulated by building a virtual work scene.
    </p>
    <div className="flex justify-center mb-6">
      <Image
        src="/grasping_point.png"
        alt="Dummy content image"
        width={500}
        height={300}
        className="rounded-lg"
      />
    </div>
    <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
      <span className="font-bold text-neutral-700">
      Step 3: Gripper management and gripping points
      </span>{" "}
      Several grippers and pick-up points can be easily defined in the software for complete container emptying. An integrated simulation tool 
      checks the design of mechanical elements (cell, robot, grippers) and the accessibility of gripping points.
    </p>
    <div className="flex justify-center mb-6">
      <Image
        src="/grasping.png"
        alt="Dummy content image"
        width={500}
        height={300}
        className="rounded-lg"
      />
    </div>
    <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
      <span className="font-bold text-neutral-700">
      Step 4: Robot trajectory management
      </span>{" "}
      software calculates the optimal robot trajectory, whatever the make and model, to avoid collisions with the working environment and human coworkers.
      It transmits the angular positions of each axis to the robot controller, taking into account any singularities.
    </p>
    <div className="flex justify-center mb-6">
      <Image
        src="/grasping_panda.png"
        alt="Dummy content image"
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
      With deep technology and cutting-edge AI and Digital Twins technology.
      </span>{" "}
      We are able to provide the best robotics palletizing solutions for your business. 
    </p>
    <div className="flex justify-center mb-6">
      <Image
        src="/fanuc_palletizing.png"
        alt="Dummy content image"
        width={800}
        height={400}
        className="rounded-lg"
      />
    </div>
    <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
      <span className="font-bold text-neutral-700">
      Durability Meets Performance: 
      </span>{" "}
      Our palletizing solutions are engineered to thrive in harsh environments, ensuring consistent performance even under the toughest conditions.
    </p>
   
    <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
      <span className="font-bold text-neutral-700">
      Advanced Technology
      </span>{" "}
      Equipped with cutting-edge sensors and monitoring systems, our palletizers adapt to changing conditions,
      ensuring optimal performance and safety at all times.
    </p>
    
    <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
      <span className="font-bold text-neutral-700">
      Enhanced Safety Features
      </span>{" "}
      Our robust palletizing equipment includes advanced safety mechanisms designed to protect both your workforce and machinery in challenging environments.
    </p>
   
    <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
      <span className="font-bold text-neutral-700">
      Efficient Integration
      </span>{" "}
      Our palletizing systems are easy to integrate into existing workflows, ensuring a seamless transition that boosts productivity without disruption.
    </p>
    
    <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
      <span className="font-bold text-neutral-700">
      Partner in Success
      </span>{" "}
      Let us help you navigate the challenges of harsh environments with our dependable and robust palletizing solutions, 
      designed to support your business goals for years to come.
    </p>

  </div>
);

const DigitalTwinContent = () => (
  <div className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4">
    <div className="flex justify-center mb-6">
      <Image
        src="/digitaltwin_ur.png"
        alt="Dummy content image"
        width={800}
        height={500}
        className="rounded-lg"
      />
    </div>

    <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
      <span className="font-bold text-neutral-700">
       Revolutionizing Industry 4.0 with Real-Time Digital Twin Technology
      </span>{" "}
      Our cutting-edge Digital Twin (DT) framework is transforming machine health monitoring in robot machine-tending applications. Built on ISO 23247 standards, this innovative system 
      creates a virtual replica of physical assets, enabling real-time monitoring and predictive maintenance.
    </p>
    <div className="flex justify-center mb-6">
      <Image
        src="/digitaltwin_palletizing.png"
        alt="Dummy content image"
        width={800}
        height={400}
        className="rounded-lg"
      />
    </div>
    <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
      <span className="font-bold text-neutral-700">
      Key Features:
      </span>{" "}
      <ul>
      <li>• Seamless integration with  robots and grippers through robust industrial communication,</li>
      <li>• Advanced hardware setup including cobots, smart grippers, and high-precision cameras,</li>
      <li>• Three-layer cyberspace architecture for comprehensive data management and analysis,</li>
      <li>• Edge computing capabilities for autonomous decision-making,</li>
      <li>• Cloud-based user interface for remote monitoring and control,</li>
    </ul>
    </p>

    <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
      <span className="font-bold text-neutral-700">
      Proven Performance:

      </span>{" "}
      Our DT framework has demonstrated exceptional accuracy in replicating cobot movements and tool positioning.
      Rigorous testing using industry-standard metrics (RMSE, MAPE, R2 Score) confirms the high fidelity of our digital simulations
    </p>
    <div className="flex justify-center mb-6">
      <Image
        src="/digitaltwin_framework.png"
        alt="Real-time machine health monitoring DT framework for robot CNC tending application based on ISO ISO 23247 architecture with communication via ROS and OPC-UA."
        width={800}
        height={400}
        className="rounded-lg"
      />
      
    </div>
    <p className="text-neutral-600 text-base md:text-1xl font-sans max-w-3xl mx-auto">
      Real-time machine health monitoring DT framework for robot CNC tending application based on ISO ISO 23247 architecture with communication via ROS and OPC-UA.
      </p>


    <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
      <span className="font-bold text-neutral-700">
      Benefits for Your Business:
      </span>{" "}
      <ul>
      <li>• Enhanced process repeatability and part reproducibility</li>
      <li>• Improved model interoperability for flexible manufacturing,</li>
      <li>• Real-time insights for predictive maintenance and optimization,</li>
      <li>• Reduced downtime and increased operational efficiency,</li>
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
      category: "Working with Humans",
      title: "Autonomous Cobot Picking and Placing",
      src: "/ur2.jpg",
      content: <PickingContent /> ,
    },
   
    {
      category: "Working Intelligent",  
      title: "Advanced Vision-Embodied AI models",
      src: "/aimodels.png",
      content: <VisionContent />,
    },
    {
      category: "Working in Digital",
      title: "Advanced Digital Twins Robotics platform",
      src: "/dtwin.png",
      content: <DigitalTwinContent />,
    },
   
    {
      category: "Working in Harsh Environment",
      title: "Reliable and Robust Palletizing ",
      src: "/fanuc.jpg",
      content: <PalletizingContent />,
    },
   

    
   
   
  ];
  
  
              
export default Hero
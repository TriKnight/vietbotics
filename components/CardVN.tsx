"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "./ui/WobbleCard";

const WobbleCardInfoVN = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-blue-1200 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Robot vận hành bằng AI cho toàn ngành logistics.
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
            Với công nghệ sâu và AI tiên tiến, chúng tôi có thể cung cấp giải pháp robot tự hành gắp và đặt hàng tốt nhất cho doanh nghiệp của bạn.
          </p>
        </div>
        <Image
          src="/picking.png"
          width={500}
          height={500}
          alt="hình ảnh demo tuyến tính"
          className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 bg-blue-1000 min-h-[300px]">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Nền tảng Digital Twins tiên tiến
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          Tạo ra các bản sao ảo cực kỳ chính xác của hệ thống robot. Thay đổi cách thiết kế, kiểm thử và vận hành các hệ thống robot.
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-1100 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Công nghệ Embodied AI tích hợp thị giác máy 
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            Phát triển các thuật toán thị giác máy tính tiên tiến cho phép robot nhận biết và hiểu môi trường xung quanh với độ chính xác cao.
          </p>
        </div>
        <Image
          src="/AIparts2.png"
          width={500}
          height={500}
          alt="hình ảnh demo tuyến tính"
          className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
    </div>
  );
}

export default WobbleCardInfoVN;

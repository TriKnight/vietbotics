import { cn } from "@/utils/cn";
import Image from "next/image";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 relative rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
    >
      {header}

      {img && (
        <Image
          src={img}
          alt={`grid-image-${id}`}
          width={500}
          height={300}
          className={cn("rounded-md mb-2", imgClassName)}
        />
      )}

      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div
          className={cn(
            "font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2",
            titleClassName
          )}
        >
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div>

        {spareImg && (
          <Image
            src={spareImg}
            alt={`grid-spare-${id}`}
            width={500}
            height={300}
            className="rounded-md mt-4"
          />
        )}
      </div>
    </div>
  );
};

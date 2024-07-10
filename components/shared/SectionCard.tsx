import Image from "next/image";
import { RiCloseLargeFill } from "react-icons/ri";
import { GiCheckMark } from "react-icons/gi";
import { cn } from "@/utils/cn";

type SectionData = {
  imageSrc: string;
  alt: string;
  title: string;
  points: string[];
  mark: string;
  style: string;
};

const SectionCard = ({
  imageSrc,
  alt,
  title,
  points,
  mark,
  style,
}: SectionData) => {
  return (
    <div className={cn("p-16 rounded-lg bg-background_two flex flex-col items-center gap-4", style)}>
      <Image
        src={imageSrc}
        alt={alt}
        className="mb-2"
        width={100}
        height={100}
      />
      <p className="p-bold-24 text-center text2">{title}</p>
      <div className="flex flex-col gap-5">
        {points.map((point, index) => (
          <div key={index} className="flex gap-1 items-start">
            <span className="mt-1">
              {" "}
              {mark === "positive" ? (
                <GiCheckMark className="text-green-600 font-bold w-5" />
              ) : (
                <RiCloseLargeFill className="text-red-700 font-bold w-5" />
              )}
            </span>
            <span className="-regular-16 text2">{point}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionCard;

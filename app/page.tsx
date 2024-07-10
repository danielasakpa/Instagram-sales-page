import Hero from "@/components/shared/Hero";
import Image from "next/image";
import {
  sectionsData,
  cardsData,
  sectionsData2,
  sectionsData3,
} from "@/constants";
import SectionCard from "@/components/shared/SectionCard";
import InfiniteMovingCards from "@/components/shared/InfiniteMovingCards";
import { FaBusinessTime } from "react-icons/fa6";
import { RiFolderVideoFill } from "react-icons/ri";
import { HiMiniSpeakerWave } from "react-icons/hi2";
import { RxDotFilled } from "react-icons/rx";
import Accordion from "@/components/shared/Accordion";
import Footer from "@/components/shared/Footer";
import { CiCircleQuestion } from "react-icons/ci";

const Home = () => {
  return (
    <main className="overflow-x-hidden flex min-h-screen flex-col items-center justify-between lg:justify-normal md:px-16 md:py-2">
      <div className="flex wrapper z-10 items-center justify-between text-sm mt-6">
        <div className="flex items-end justify-center lg:size-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative inline-block">
              {/* Skewed Background for Insta */}
              <span className="absolute left-0 top-0 h-full  bg-accent w-1/2 rounded-l-md"></span>
              {/* Skewed Background for Bucks */}
              <span className="absolute right-0 top-0 h-full  bg-primary w-1/2 rounded-r-md"></span>
              {/* Text */}
              <span className="relative flex">
                <span className="p-bold-16 text-foreground text2 py-[9px] px-2">
                  Insta
                </span>
                <span className="p-bold-16 text-white py-[9px] px-2">Bucks</span>
              </span>
            </div>
          </a>
        </div>

        <button className="flex justify-center rounded-md py-3 px-4 lg:px-10 bg-foreground text2 text-white lg:w-auto shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
          Get now
        </button>
      </div>

      <Hero />

      <section className="wrapper flex flex-col items-center gap-16 mt-28 lg:mt-32">
        <h2 className="h2-large text-balance text3 text-foreground md:text-wrap text-center">
          Everything You Need to{" "}
          <span className="underline underline-offset-2 decoration-secondary">
            Win on Instagram
          </span>{" "}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 justify-items-center">
          {sectionsData.map((section, index) => (
            <SectionCard
              key={index}
              imageSrc={section.imageSrc}
              alt={section.alt}
              title={section.title}
              points={section.points}
              mark={section.mark}
              style="bg-accent opacity-90 p-8 lg:px-12 w-[95%] lg:max-w-[400px] shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]"
            />
          ))}
        </div>
      </section>

      <section>
        <InfiniteMovingCards />
      </section>

      <section className="wrapper flex flex-col items-center gap-6">
        <span className="p-medium-16 lg:p-regular-20 text2 mb-4 text-foreground text-center">
          Coming up with new ideas is hard. So we’re doing the work for you.
        </span>
        <h2 className="h2-large tracking-[0.030em] text-center text3 !leading-[45px] xl:!leading-[88px]">
          Get a{" "}
          <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-primary relative inline-block">
            <span className="relative text-white">custom</span>
          </span>{" "}
          niche-specific content calendar built{" "}
          <span className="underline underline-offset-2 decoration-secondary">
            JUST FOR YOU!
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 justify-items-center place-content-center  my-10 lg:mt-16">
          {cardsData.map((card, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-3 p-10 w-[95%] lg:w-full rounded-lg bg-primary text-center shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
            >
              {card.icon === "FaBusinessTime" ? (
                <FaBusinessTime className="mb-2 w-24 h-24 text-white" />
              ) : card.icon === "RiFolderVideoFill" ? (
                <RiFolderVideoFill className="mb-2 w-24 h-24 text-white" />
              ) : (
                <HiMiniSpeakerWave className="mb-2 w-24 h-24 text-white" />
              )}
              <span className="p-bold-24 text-white text2">{card.title}</span>
              <span className="p-regular-16 text-white opacity-80 mt-1 text2">
                {card.description}
              </span>
            </div>
          ))}
        </div>

        <button className="p-semibold-20 text2 flex gap-2 items-center px-4 py-2 mt-8 lg:mt-12 opacity-90 rounded-md border border-primary bg-neutral-100 text-foreground text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md">
          Yap, I want this!
          <svg
            fill="none"
            height="20"
            viewBox="0 0 24 24"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.75 8.75L14.25 12L10.75 15.25"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
          </svg>
        </button>

        <div className="flex justify-center items-center bg-foreground text-white w-full p-10 lg:p-12 mt-16 rounded-lg shadow-[5px_5px_rgba(105,_132,_116,_0.4),_10px_10px_rgba(105,_132,_116,_0.3),_15px_15px_rgba(105,_132,_116,_0.2),_20px_20px_rgba(105,_132,_116,_0.1),_25px_25px_rgba(105,_132,_116,_0.05)]">
          <span className="p-medium-24 text2 text-center">
            Wanna know the best part? As an{" "}
            <span className="h5-bold text-[#D10363]">InstaBucks</span> member, our
            team will send you a new calendar every month. And you can submit
            real-time feedback on your calendar, so it’ll just keep getting{" "}
            <span className="h5-bold text-[#D10363]">better and better.</span>
          </span>
        </div>
      </section>

      <section>
        <InfiniteMovingCards />
      </section>

      <section className="wrapper">
        <h2 className="h2-large text-center text3 text-foreground">
          Customized trainings for{" "}
          <span className="underline underline-offset-4 decoration-secondary">
            success{" "}
          </span>{" "}
          on Instagram
        </h2>

        <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-4 mt-16">
          {sectionsData2.map((section, index) => (
            <SectionCard
              key={index}
              imageSrc={section.imageSrc}
              alt={section.alt}
              title={section.title}
              points={section.points}
              mark={section.mark}
              style="lg:py-12 px-16 basis-1/2 bg-accent opacity-90 w-[95%] max-w-[400px] shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]"
            />
          ))}
        </div>

        <button className="flex gap-2 mx-auto items-center px-8 py-3 mt-16 text2 bg-foreground rounded-md text-white text2 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
          Click here for instance access
          <svg
            fill="none"
            height="20"
            viewBox="0 0 24 24"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.75 8.75L14.25 12L10.75 15.25"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
          </svg>
        </button>
      </section>

      <section className="wrapper mt-36">
        <h2 className="h2-large text-center text3 mb-24 xl:leading-[108px] text-foreground">
          WHAT’S INSIDE <br />
          <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-primary relative inline-block">
            <span className="relative text-white">INSTABUCKS</span>
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-16">
          {sectionsData3.map((section, index) => (
            <div key={index} className="flex flex-col gap-4 text-left">
              <Image
                src={section.imageSrc}
                alt={section.alt}
                className="mb-2 self-center"
                width={300}
                height={300}
              />

              {section.points.map((point, index) => (
                <div key={index} className="flex items-start gap-1 lg:gap-3">
                  <RxDotFilled className="text-accent w-5 h-5 basis-1/6 lg:basis-1/5" />
                  <span className="basis-4/5 text2">{point}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="wrapper mt-20 lg:mt-40">
        <div className="flex gap-12 items-center justify-center">
          <div className="basis-1/2">
            <h2 className="h2-large text-foreground text3 mt-10">
              Inspiration, innovation, and opportunities.
            </h2>
            <p className="p-medium-18 text-foreground mt-8 mb-12 text2">
              Take advantage of the experiential-learning opportunities built
              into many programs. You can work in labs on and off
            </p>{" "}
            <Accordion />
          </div>
          <div className="hidden relative md:flex items-center justify-center basis-1/2 w-[250px] lg:h-[604px] xl:h-[750px]">
            <Image
              src={"/images/accordion2.jpg"}
              alt={"accordion2"}
              className="w-full h-full rounded-md"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </section>
      <button className="fixed border border-foreground bottom-5 right-5 text2 flex gap-2 items-center p-3 rounded-md bg-primary text-white">
        <CiCircleQuestion className="w-6 h-6" /> Support
      </button>
      <section className="w-full mt-8">
        <Footer />
      </section>
    </main>
  );
};

export default Home;

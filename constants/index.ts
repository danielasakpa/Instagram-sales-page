import { ReactNode } from "react";

export const sectionsData = [
  {
    imageSrc: "/images/Group-551.webp",
    alt: "Proven Results",
    title: "Proven Results",
    points: [
      "Step-by-step lessons",
      "Up to date strategies",
      "Premade templates",
      "Expert Q&A",
    ],
    mark: "positive",
  },
  {
    imageSrc: "/images/Group-552.webp",
    alt: "Work Smarter, Not Harder",
    title: "Work Smarter, Not Harder",
    points: [
      "Customized lessons to fit your needs",
      "In-depth trainings",
      "Advanced-topic Live Trainings",
    ],
    mark: "positive",
  },
  {
    imageSrc: "/images/Group-553.webp",
    alt: "Expert Advice",
    title: "Expert Advice",
    points: [
      "Weekly trending audios & new feature updates",
      "Expert coaches with over 1 Million followers",
      "Direct advice from Instagram Staff",
    ],
    mark: "positive",
  },
];

export interface CardData {
  icon: string;
  title: string;
  description: string;
}

export const cardsData: CardData[] = [
  {
    icon: "FaBusinessTime",
    title: "30 DAYS OF POST IDEAS",
    description:
      "Go from yawn-inspiring to awe-inspiring with 30 ideas of posts to fit your unique account.",
  },
  {
    icon: "RiFolderVideoFill",
    title: "4 REEL SCRIPTS",
    description:
      "Get polished, fully written scripts that are designed to deliver maximum views and results.",
  },
  {
    icon: "HiMiniSpeakerWave",
    title: "5 STORY IDEAS",
    description:
      "Turn followers into buyers with story prompts that leverage the latest IG features and best practices.",
  },
];

export const sectionsData2 = [
  {
    imageSrc: "/images/wrong.png",
    alt: "WHAT’S OUT",
    title: "WHAT’S OUT",
    points: [
      "Copying others",
      "Stressing over posts",
      "Missing updates",
      "Low engagement",
      "Imposter syndrome",
    ],
    mark: "negative",
  },
  {
    imageSrc: "/images/Group-572.webp",
    alt: "WHAT’S IN",
    title: "WHAT’S IN",
    points: [
      "Sustained growth",
      "Consistent engagement",
      "Staying up-to-date",
      "Saving time",
      "Connecting with a community",
    ],
    mark: "positive",
  },
];


export const sectionsData3 = [
  {
    imageSrc: "/images/live-training.webp",
    alt: "live-training",
    points: [
      "Real-time trainings of what’s WORKING NOW",
      "Expert Q&A",
      "Algorithm and trend UPDATES",
      "Held ONCE PER MONTH (always recorded)",
      "We do the IG RESEARCH for you"
    ]
  },
  {
    imageSrc: "/images/ond-emand@2x.webp",
    alt: "ond-emand@2x",
    points: [
      "Personalized journey to get you seeing results FAST",
      "Tutorials for ANYTHING you want to know",
      "Actionable tips and strategies"
    ]
  },
  {
    imageSrc: "/images/communti.webp",
    alt: "communti",
    points: [
      "Find collaborators and accountability partners",
      "A friendly, supportive community of Instapreneurs"
    ]
  },
  {
    imageSrc: "/images/cust-cont.webp",
    alt: "cust-cont",
    points: [
      "Complete calendars full of done-for-you content ideas",
      "Monthly, niche-specific CONTENT CALENDARS delivered to your inbox every month",
      "Professional, customizable templates"
    ]
  },
  {
    imageSrc: "/images/questions.webp",
    alt: "questions",
    points: [
      "Sophisticated search functions for answers at your fingertips",
      "Get answers direct from the InstaClubHub team on Live calls"
    ]
  },
  {
    imageSrc: "/images/adviec.webp",
    alt: "adviec",
    points: [
      "What’s Hot This Week? keeps you updated weekly",
      "Trending audios so you can stay ahead of the algorithm"
    ]
  }
];
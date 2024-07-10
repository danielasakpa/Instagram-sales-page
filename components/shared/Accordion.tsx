import React from "react";

import {
  Accordion as Accord,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Accordion = () => {
  return (
    <div>
      <Accord type="single" collapsible className="w-[295px] md:w-full">
        <AccordionItem value="item-1" className="mb-7 border-none">
          <AccordionTrigger className="flex items-center justify-center h5-bold p-medium-16 lg:!p-bold-24 hover:no-underline px-10 py-7 bg-primary text-white hover:bg-foreground data-[state=open]:bg-foreground rounded-md">Hub Business vision</AccordionTrigger>
          <AccordionContent className="px-3 py-4 p-medium-12 lg:!p-regular-18 text-foreground text2 opacity-90">
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="mb-7 border-none">
          <AccordionTrigger className="flex items-center justify-center h5-bold p-medium-16 lg:!p-bold-24 hover:no-underline px-10 py-7 bg-primary text-white hover:bg-foreground data-[state=open]:bg-foreground rounded-md">Our mission for Sustainability</AccordionTrigger>
          <AccordionContent className="px-3 py-4 p-medium-12 lg:!p-regular-18 text-foreground text2 opacity-90">
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" className="mb-7 border-none">
          <AccordionTrigger className="flex items-center justify-center h5-bold p-medium-16 lg:!p-bold-24 hover:no-underline px-10 py-7 bg-primary text-white hover:bg-foreground data-[state=open]:bg-foreground rounded-md">Qualified Team</AccordionTrigger>
          <AccordionContent className="px-3 py-4 p-medium-12 lg:!p-regular-18 text-foreground text2 opacity-90">
            Yes. It&apos;s animated by default, but you can disable it if you
            prefer.
          </AccordionContent>
        </AccordionItem>
      </Accord>
    </div>
  );
};

export default Accordion;

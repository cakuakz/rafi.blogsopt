import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@components/ui/button";
import { useState } from "react";

interface Props {
  headings: {
    depth: number;
    slug: string;
    text: string;
  }[];
}

export default function TocDrawer({ headings }: Props) {
  const [open, setOpen] = useState(false);
  const handleNavigation = (slug: string) => {
    setOpen(false);
    setTimeout(() => {
      const element = document.getElementById(slug);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 300);
  };

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline" className="!bg-[#272727] !text-[#83868A]">
          Table of Content
        </Button>
      </DrawerTrigger>
      <DrawerContent className="!bg-transparent backdrop-blur-xl">
        <div className="w-full max-w-sm pb-14 pt-4">
          <DrawerHeader>
            <DrawerTitle className="text-start">On this page</DrawerTitle>
          </DrawerHeader>
          <div className="px-4 pb-0">
            <ul>
              {headings.map((heading) => (
                <li
                  className={`depth-${heading.depth} space-y-4 text-[#83868A] hover:text-white`}
                >
                  <a
                    href={`#${heading.slug}`}
                    className="block"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigation(heading.slug);
                    }}
                  >
                    {heading.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

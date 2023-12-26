import About from "@/components/About";
import Work from "@/components/work";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/contact";
import Download from "@/components/Download";
import { useState } from "react";

export default function home() {



  return(
    <div className="w-screen h-screen flex flex-col items-center p-10">
      <div className="w-11/12 h-fit border-solid border rounded-t-3xl pt-2.5 px-10 flex justify-between">
        <div>SS</div>
        <div className="flex gap-2.5 items-center">
        <About>
          <button>About</button>
        </About>
        <Work>
          <button>Work</button>
        </Work>
        <Testimonials>
          <button>Testimonials</button>
        </Testimonials>
        <Download>
          <button className="w-32 h-9 border-solid border rounded-xl bg-gray-900 text-gray-50 text-base">Download CV</button>
        </Download>
        </div>
      </div>

    </div>
  )
  
}

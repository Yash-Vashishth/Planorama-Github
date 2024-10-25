import * as React from "react";
import { FilterOption } from "./FilterOption";
import { VenueCard } from "./VenueCard";

const venues = [
  { imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/d5de9032144fbf275dc9f4bd6b6a69db3cf421b594e2275554384eccb876a665?placeholderIfAbsent=true&apiKey=22ac4411aedd473cb3b80d88f999f372", alt: "Venue 1" },
  { imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/61ebe52d7985e4355f7f642ae957e8110a462d9c42bdb1f21ab0b87a8a4665b7?placeholderIfAbsent=true&apiKey=22ac4411aedd473cb3b80d88f999f372", alt: "Venue 2" },
  { imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/b482050eee460ca7fe96b48c89ae0acbd22a9568c975c8c309db236eedce1a17?placeholderIfAbsent=true&apiKey=22ac4411aedd473cb3b80d88f999f372", alt: "Venue 3" },
  { imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/407594049aee5ce9c2606e453e021a98963fc0623ae7bd3f6eaaac2ca479ed90?placeholderIfAbsent=true&apiKey=22ac4411aedd473cb3b80d88f999f372", alt: "Venue 4" },
  { imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/3c9a596423223fb28f7be65c7a54854dcdda2d2a3a41f0d8717a042a2d3e0372?placeholderIfAbsent=true&apiKey=22ac4411aedd473cb3b80d88f999f372", alt: "Venue 5" },
  { imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/878e0bf10036804aa48313c52b7f2e727f445ab37b01e6455c7054c5c1023db8?placeholderIfAbsent=true&apiKey=22ac4411aedd473cb3b80d88f999f372", alt: "Venue 6" }
];

export const VenueSearch: React.FC = () => {
  return (
    <main className="flex overflow-hidden flex-wrap gap-10 px-16 py-10 bg-black max-md:px-5">
      <aside className="flex flex-col self-end pt-4 mt-16 rounded-2xl border border-solid border-yellow-400 border-opacity-80 max-md:mt-10">
        <h2 className="self-center text-xl text-center text-stone-300">
          Filters
        </h2>
        <div className="flex flex-col py-3 mt-1.5 rounded-none border border-solid border-yellow-400 border-opacity-80">
          <section className="flex flex-col pr-8 pl-1.5 w-full text-white whitespace-nowrap max-md:pr-5">
            <h3 className="self-start text-base">Budget</h3>
            <div className="flex gap-5 self-end mt-2 max-w-full text-xs w-[106px]">
              <div className="flex flex-col flex-1">
                <input type="number" aria-label="Minimum budget" className="flex shrink-0 rounded-md border border-solid border-stone-300 h-[25px]" />
                <label htmlFor="min-budget" className="self-center">min</label>
              </div>
              <div className="flex flex-col flex-1 self-start">
                <input type="number" aria-label="Maximum budget" className="flex shrink-0 rounded-md border border-solid border-stone-300 h-[25px]" />
                <label htmlFor="max-budget" className="self-center">max</label>
              </div>
            </div>
          </section>

          <section className="flex flex-col pr-9 pl-1.5 mt-3.5 text-base text-white whitespace-nowrap max-md:pr-5">
            <h3 className="self-start">Capacity</h3>
            <input type="number" aria-label="Venue capacity" className="flex shrink-0 self-center mt-1 w-11 rounded-md border border-solid border-stone-300 h-[25px]" />
          </section>

          <section className="flex flex-col items-start pr-9 pl-1.5 mt-3.5 text-xs text-zinc-300 max-md:pr-5">
            <h3 className="text-base text-white">By Occasion</h3>
            <FilterOption label="Annual Fest" className="mt-2.5 text-stone-300" />
            <FilterOption label="Bachelors Party" className="mt-1.5" />
            <FilterOption label="Birthday Party" className="text-stone-300" />
            {/* Additional occasion options */}
          </section>

          {/* Region, Food Options, Caterers, and Beverages sections follow similar pattern */}
        </div>
      </aside>

      <section className="flex flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full">
        <div className="flex flex-col ml-28 max-w-full text-2xl text-center text-stone-300 w-[618px]">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3dae8744fbb947b2ee3825912f7d17ff9d7dabcfb5220d63c65ad86df997794c?placeholderIfAbsent=true&apiKey=22ac4411aedd473cb3b80d88f999f372" alt="Venue search logo" className="object-contain self-center max-w-full aspect-[4.9] w-[260px]" />
          
          <form className="flex flex-wrap gap-10 py-px pr-16 pl-1.5 mt-9 w-full border border-solid border-yellow-400 border-opacity-80 rounded-[1500px] max-md:pr-5 max-md:max-w-full">
            <div className="flex gap-1.5 my-auto whitespace-nowrap">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/de907afc004e032af47e469f5888fde1954281416808f2c98a8198059e3c50f5?placeholderIfAbsent=true&apiKey=22ac4411aedd473cb3b80d88f999f372" alt="" className="object-contain shrink-0 w-7 aspect-[0.93]" />
              <label htmlFor="location" className="my-auto">Location</label>
            </div>
            <div className="flex gap-4">
              <div className="shrink-0 w-px border border-solid border-stone-500 h-[45px]" />
              <input type="text" id="venue-name" placeholder="Name of the venue" className="my-auto basis-auto bg-transparent text-white" />
            </div>
          </form>
        </div>

        <div className="mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            {venues.slice(0, 3).map((venue, index) => (
              <VenueCard key={index} {...venue} />
            ))}
          </div>
        </div>

        <div className="mt-9 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            {venues.slice(3).map((venue, index) => (
              <VenueCard key={index + 3} {...venue} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

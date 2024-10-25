import * as React from 'react';
import { Button } from './Button';
import { HeroText } from './components/HeroText'; 

export const PlanoramaHero: React.FC = () => {
  return (
    <header className="flex flex-col px-16 max-md:pl-5">
      <div className="flex overflow-hidden relative flex-col items-start w-full bg-black max-md:max-w-full">
        <img 
          loading="lazy" 
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a2401342d40e128798aa69993505deedfea2ebe8e8c714186899f29b85d864a3?placeholderIfAbsent=true&apiKey=22ac4411aedd473cb3b80d88f999f372" 
          alt=""
          className="object-contain z-0 max-w-full aspect-[2.27] w-[1681px]" 
        />
        
        <nav className="flex absolute z-0 flex-wrap gap-10 items-center text-xl left-[42px] text-stone-300 top-[95px] max-md:max-w-full">
          <img 
            loading="lazy" 
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3dae8744fbb947b2ee3825912f7d17ff9d7dabcfb5220d63c65ad86df997794c?placeholderIfAbsent=true&apiKey=22ac4411aedd473cb3b80d88f999f372" 
            alt="Planorama Logo"
            className="object-contain shrink-0 self-stretch my-auto aspect-[4.9] min-w-[240px] w-[260px]" 
          />
          <div className="flex gap-10 items-center self-stretch my-auto min-w-[240px] w-[272px]">
            <button className="self-stretch my-auto">Sign Up</button>
            <button className="self-stretch my-auto">Login</button>
          </div>
        </nav>

        <section className="flex absolute right-0 z-0 flex-col max-w-full text-xl bottom-[214px] h-[260px] w-[1402px]">
          <HeroText
            title="Welcome to Planorama"
            description="Trying to plan the perfect event but overwhelmed with all the tasks? Sit back and relax while we take care of everything—finding the ideal venue, arranging catering, and creating the perfect décor—all in one place!"
          />
          
          <div className="flex flex-wrap gap-10 mt-10 max-w-full rounded-[487px] w-[586px] max-md:mt-10">
            <Button variant="primary">Start Organising</Button>
            <Button variant="secondary">Explore Events Nearby</Button>
          </div>
        </section>

        <img 
          loading="lazy" 
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1586a972f287b835a7977e6d48399eaf55c3a64721dd4c9d5fe6f0f03434458d?placeholderIfAbsent=true&apiKey=22ac4411aedd473cb3b80d88f999f372" 
          alt=""
          className="object-contain absolute bottom-0 -right-52 z-0 max-w-full aspect-[2.27] h-[739px] w-[1681px]" 
        />
      </div>
    </header>
  );
};

import React from "react";

const Aboutus: React.FC = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-10 py-24 md:flex-row flex-col items-center gap-10">
        {/* Text Content */}
        <div className="lg:flex-grow md:w-1/2 lg:pr-12 md:pr-8 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <p className="mb-8 leading-relaxed">
            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.
          </p>
        </div>

        {/* Image Content */}
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img className="object-cover object-center rounded" alt="hero" src="Images/mobile.jpeg" />
        </div>
      </div>
    </section>
  );
};

export default Aboutus;

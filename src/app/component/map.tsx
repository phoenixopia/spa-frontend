'use client';
import Head from "next/head";

const MapPage = () => {
  return (
    
    <div className="w-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.880755343577!2d38.80751057449846!3d8.983119089706546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8505d89f4fb1%3A0xad6e2c31003f6146!2sFana%20weyba%20tis!5e0!3m2!1sen!2set!4v1746515077470!5m2!1sen!2set"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
}



export default MapPage;



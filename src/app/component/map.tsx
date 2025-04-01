import Head from "next/head";

const MapPage = () => {
  return (
    
      
      <div className="w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.473747961033!2d38.799827974498754!3d9.02047448912341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b855cd643a691%3A0x5ce3922436b4f99a!2sMegenagna!5e0!3m2!1sen!2set!4v1743489958847!5m2!1sen!2set"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
  );
}

export default MapPage;

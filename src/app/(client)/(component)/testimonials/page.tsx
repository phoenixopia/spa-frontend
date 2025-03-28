import Image from 'next/image';

const Testimonials = () => {
  return (
    <section className="text-gray-600 body-font bg-brown-700">
      <div className="container px-25 py-24 mx-auto">
        {/* Title for Testimonials Section */}
        <h1 className="text-4xl font-bold text-center text-[#F6D1D1] mb-12">Testimonials</h1>

        <div className="flex flex-wrap -m-4">
          {[
            {
              name: 'HOLDEN CAULFIELD',
              title: 'Senior Product Designer',
              image: '/Images/mobile.jpeg', // ✅ Corrected path
              testimonial:
                "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
            },
            {
              name: 'ALPER KAMU',
              title: 'UI Developer',
              image: '/Images/mobile.jpeg', // ✅ Corrected path
              testimonial:
                "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
            },
            {
              name: 'HENRY LETHAM',
              title: 'CTO',
              image: '/Images/mobile.jpeg', // ✅ Corrected path
              testimonial:
                "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
            },
          ].map((item, index) => (
            <div key={index} className="lg:w-1/3 w-full mb-6 p-4">
              <div className="bg-[#D1B29F] text-[#F6D1D1] border rounded-lg shadow-lg p-6 h-full flex flex-col items-center">
                <Image
                  alt="testimonial"
                  className="w-20 h-20 mb-6 object-cover object-center rounded-full border-2 border-gray-200 bg-gray-100"
                  src={item.image}
                  width={80}
                  height={80}
                />
                <p className="leading-relaxed text-center text-[#F6D1D1] mb-4">{item.testimonial}</p>
                <span className="inline-block h-1 w-10 rounded bg-pink-300 mt-4 mb-4"></span>
                <h2 className="text-[#F6D1D1] font-medium title-font tracking-wider text-lg">{item.name}</h2>
                <p className="text-[#F6D1D1]">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

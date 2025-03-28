import Image from 'next/image';

const Testimonials = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
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
            <div key={index} className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <Image
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src={item.image}
                  width={80}
                  height={80}
                />
                <p className="leading-relaxed">{item.testimonial}</p>
                <span className="inline-block h-1 w-10 rounded bg-pink-300 mt-6 mb-4"></span>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                  {item.name}
                </h2>
                <p className="text-gray-500">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

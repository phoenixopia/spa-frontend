import Link from "next/link";

export default function BlogSection() {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        {/* Title for Blog Section */}
        <h1 className="text-4xl font-bold text-center mb-20">Blog</h1>

        <div className="-my-8 divide-y-2 divide-gray-100">
          {[  
            {
              title: "Bitters hashtag waistcoat fashion axe chia unicorn",
              date: "12 Jun 2019",
              category: "CATEGORY",
              description:
                "Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.",
            },
            {
              title: "Meditation bushwick direct trade taxidermy shaman",
              date: "12 Jun 2019",
              category: "CATEGORY",
              description:
                "Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.",
            },
            {
              title: "Woke master cleanse drinking vinegar salvia",
              date: "12 Jun 2019",
              category: "CATEGORY",
              description:
                "Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="py-8 flex flex-wrap md:flex-nowrap"
            >
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col px-6">
                <span className="font-semibold title-font text-gray-700">{item.category}</span>
                <span className="mt-1 text-gray-500 text-sm">{item.date}</span>
              </div>
              <div className="md:flex-grow px-6">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                  {item.title}
                </h2>
                <p className="leading-relaxed">{item.description}</p>
                <Link href="#" className="text-pink-300 inline-flex items-center mt-4">
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

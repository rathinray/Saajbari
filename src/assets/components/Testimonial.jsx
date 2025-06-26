import React from "react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Wedding Client",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: `Saajbari transformed our wedding into a fairy tale. Their attention to detail was impeccable, and they handled everything so professionally. We didn't have to worry about a thing!`,
    stars: 5,
  },
  {
    name: "Rahul Mehta",
    role: "Corporate Client",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: `Our corporate anniversary event was a huge success thanks to Saajbari. They understood our brand perfectly and created an atmosphere that impressed all our clients and partners.`,
    stars: 5,
  },
  {
    name: "Ananya Patel",
    role: "Birthday Party Client",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    text: `My daughter's birthday party was beyond anything I could have imagined. The team listened to all her ideas and brought them to life in the most magical way. Worth every penny!`,
    stars: 5,
  },
];

const TestimonialCard = ({ name, role, image, text, stars }) => (
  <div className="bg-secondary p-8 rounded-lg shadow-sm">
    <div className="flex items-center mb-4">
      <div className="text-primary text-2xl mr-2">
        {[...Array(stars)].map((_, i) => (
          <i key={i} className="fas fa-star"></i>
        ))}
      </div>
    </div>
    <p className="text-gray-600 mb-6">"{text}"</p>
    <div className="flex items-center">
      <img
        src={image}
        alt={name}
        className="w-12 h-12 rounded-full mr-4"
      />
      <div>
        <h4 className="font-bold">{name}</h4>
        <p className="text-gray-500 text-sm">{role}</p>
      </div>
    </div>
  </div>
);

const Testimonial = () => (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
          What Our Clients Say
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
        <p className="max-w-2xl mx-auto text-lg text-gray-600">
          Hear from those who've experienced our magic firsthand.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, idx) => (
          <TestimonialCard key={idx} {...testimonial} />
        ))}
      </div>
    </div>
  </section>
);

export default Testimonial;
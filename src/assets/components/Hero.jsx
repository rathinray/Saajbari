
import HeroImage from "../images/hero.jpg";
const Hero = () => (
  <section
    id="home"
    className="bg-cover bg-no-repeat pt-32 pb-20 md:pt-40 md:pb-32 text-white relative overflow-hidden"
    style={{ backgroundImage: `url(${HeroImage})` }}
  >
    {/* Small overlay */}
    <div className="absolute inset-0 bg-black/20 pointer-events-none z-0"></div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="md:w-2/3 animate-fade-in">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 animate-slide-up">
          Creating Unforgettable Moments
        </h1>
        <p className="text-lg md:text-xl mb-8 opacity-90 animate-slide-up animate-delay-100">
          Saajbari transforms your vision into breathtaking reality with our
          premium event planning services.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 animate-slide-up animate-delay-200">
          <a
            href="#contact"
            className="bg-primary hover:bg-opacity-90 text-white px-8 py-3 rounded-full text-center font-medium transition-all group relative overflow-hidden"
          >
            <span
              className="absolute left-0 bottom-0 w-full h-0 bg-white transition-all duration-300 group-hover:h-full group-hover:border-primary group-hover:border-2 rounded-full"
            ></span>
            <span className="relative z-10 transition-colors duration-300 group-hover:text-primary">
             Book Now
            </span>
          </a>
          <a
            href="#services"
            className="border border-white hover:bg-white hover:text-dark px-8 py-3 rounded-full text-center font-medium transition-all"
          >
            Our Services
          </a>
        </div>
      </div>
    </div>
    <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent backdrop-blur-[2px] z-10"></div>
  </section>
);

export default Hero;
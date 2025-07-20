import desktop from "../assets/images/image-web-3-desktop.jpg";
import NewArticles from "./NewArticles";

const HeroSection = () => {
  return (
    <main className="flex flex-col md:flex-row gap-10">
      <div className="flex-1">
        <img
          src={desktop}
          className="w-full object-cover max-h-[19rem]"
          alt="web"
        />
        <div className="flex flex-col  flex-wrap md:flex-row justify-between">
          <div className="md:max-w-80 font-extrabold text-6xl text-veryDarkBlue mt-8 mb-2">
            The Bright Future of Web 3.0?
          </div>
          <div className="max-w-96 px-2 mt-6 flex flex-col justify-between">
            <p className="text-darkGrayishBlue leading-7">
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>
            <div>
              <button className="font-bold mt-5 lg:mt-0 bg-softRed py-3 px-8 tracking-[0.2em] hover:text-offWhite duration-200 transition-all hover:bg-veryDarkBlue">
                READ MORE
              </button>
            </div>
          </div>
        </div>
      </div>
      <NewArticles />
    </main>
  );
};

export default HeroSection;

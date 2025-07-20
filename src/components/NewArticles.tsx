const NewArticles = () => {
  const list = [
    {
      title: "Hydrogen VS Electric Cars",
      desc: "Will hydrogen-fueled cars ever catch up to EVs?",
    },
    {
      title: "The Downsides of AI Artistry",
      desc: "What are the possible adverse effects of on-demand AI image generation?",
    },
    {
      title: "Is VC Funding Drying Up?",
      desc: "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
    },
  ];
  return (
    <div>
      <div className="px-5 pt-5 my-3 md:my-0 bg-veryDarkBlue text-offWhite md:max-w-[23rem]">
        <div>
          <h1 className="text-4xl font-bold text-softOrange my-2">New</h1>
          {list.map((item, index) => (
            <div
              key={index}
              className={
                "flex flex-col py-7 gap-2" +
                (list.length !== index + 1
                  ? " border-b border-grayishBlue"
                  : "")
              }
            >
              <h1 className="font-bold text-xl  hover:text-softOrange duration-200 transition-all cursor-pointer">
                {item.title}
              </h1>
              <p className="text-grayishBlue leading-7">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewArticles;

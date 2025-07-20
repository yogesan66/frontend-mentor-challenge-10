const ArticleCard = ({ item }: { item: any }) => {
  return (
    <div className="flex gap-6">
      <div>
        <img src={item.image} className="w-28" alt={item.title} />
      </div>
      <div className="flex flex-col justify-between">
        <p className="text-softRed font-extrabold text-3xl">{item.serialNo}</p>
        <p className="font-extrabold text-xl  hover:text-softRed duration-200 transition-all cursor-pointer">
          {item.title}
        </p>
        <p className="max-w-60 text-darkGrayishBlue leading-7">{item.desc}</p>
      </div>
    </div>
  );
};

export default ArticleCard;

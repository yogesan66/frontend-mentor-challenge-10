import retro from "../assets/images/image-retro-pcs.jpg";
import latops from "../assets/images/image-top-laptops.jpg";
import gaming from "../assets/images/image-gaming-growth.jpg";
import ArticleCard from "./ArticleCard";

const FeaturedArticles = () => {
  const imageList = [
    {
      image: retro,
      serialNo: "01",
      title: "Reviving Retro PCs",
      desc: "What happens when old PCs are given modern upgrades?",
    },
    {
      image: latops,
      serialNo: "02",
      title: "Top 10 Laptops of 2022",
      desc: "Our best picks for various needs and budgets.",
    },
    {
      image: gaming,
      serialNo: "03",
      title: "The Growth of Gaming",
      desc: "How the pandemic has sparked fresh opportunities.",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row flex-wrap gap-6 lg:gap-0 justify-between">
      {imageList.map((item, index) => (
        <ArticleCard key={index} item={item} />
      ))}
    </div>
  );
};

export default FeaturedArticles;

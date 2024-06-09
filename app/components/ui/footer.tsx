import FooterPricing from "@/app/pricing/footerPricing";
import Link from "next/link";

const Footer = () => {
  type DataType = {
    name: string;
    link: string;
  };

  const Data: DataType[] = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Service",
      link: "#service",
    },
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  return (
    <div className="text-center justify-center mt-5 items-center">
      <div className="overflow-x-hidden  w-screen md:w-[1000px] text-center border-t-[1px] border-b-[1px] pt-10 pb-10 grid grid-cols-4 justify-center items-center text-md md:text-xl">
        {Data.map((item, index) => (
          <Link href={item.link} className="text-white md:text-slate-300 hover:text-white text-center font-abc " key={index}>
            {item.name}
          </Link>
        ))}
      </div>
      <FooterPricing />
    </div>
  );
};

export default Footer;

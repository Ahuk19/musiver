"use client";
import { FaChartBar } from "react-icons/fa";
import { FaSackDollar } from "react-icons/fa6";
import { MdOutlineTimeline } from "react-icons/md";
import { MdCardMembership } from "react-icons/md";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { FaRegCopyright } from "react-icons/fa6";
import VisiComponent from "./visi";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const About = () => {
  type ItemsType = {
    icon: any;
    title: string;
    description: string;
  };

  const items: ItemsType[] = [
    {
      icon: <FaChartBar className="md:text-7xl text-3xl" />,
      title: "Apa itu Musiver?",
      description:
        "Kami lebih suka menyebut diri kami sebagai one stop music solution. Dimana kita mempunyai visi misi untuk selalu membantu band/musisi Indonesia untuk bisa maju secara mandiri dan mempunyai wawasan industri musik yang luas. Kami menghubungkan band/musisi ke pasar indonesia maupun dunia dengan layanan digital distribution yang melibatkan store digital dunia seperti iTunes, Spotify, Joox, Tiktok, Youtube Track, Amazon,dll.",
    },
    {
      icon: <FaSackDollar className="md:text-7xl text-3xl" />,
      title: "Berapa Profit Sharing dari Royalty?",
      description: "Sebagai bentuk apresiasi kepada musisi Indonesia, kami memberikan 90% untuk kalian.",
    },
    {
      icon: <MdOutlineTimeline className="md:text-7xl text-3xl" />,
      title: "Berapa Lama Proses Rilis lagu hingga berada di store ?",
      description: "Terdapat proses kurasi dari team Musiver.id dan Store, idealnya adalah 14 hari dan kalian bisa menentukan tanggal rilis yang inginkan.",
    },
    {
      icon: <MdCardMembership className="md:text-7xl text-3xl" />,
      title: "Apakah Ada Biaya Tahunan dan Berapa lama lagu kami ada di Store ?",
      description: "Tidak ada biaya tahunan di Musiver.id, dan lagu kalian akan berada distore tanpa batas waktu sampai kalian mengajukan takedown dari digital store.",
    },
    {
      icon: <HiOutlineDocumentReport className="md:text-7xl text-3xl" />,
      title: "Bagaimana User Dapat Report Royalti?",
      description: "Report royalti bisa didapat dengan klik tombol request report di dasboard user. Proses reportnya adalah 3x24 jam dikirimkan ke email user terdaftar.",
    },
    {
      icon: <FaRegCopyright className="md:text-7xl text-3xl" />,
      title: "Youtube / Facebook Copyright Service.",
      description:
        "Kami membantu melindungi karya kalian di youtube dan facebook. Jika ada konten video yang beredar di youtube dan facebook yang berisi lagu kalian maka akan otomatis terclaim oleh sistem kami, dan termonetize oleh kami. Bagaimana jika konten kalian ikut terclaim? Ya, otomatis akan terclaim juga, tapi tenang...channel kalian tetap aman dan bisa kalian monetize sendiri dengan cara Request Unclaim ke kami. Maka akan kami release claimnya.",
    },
    // Add more items here
  ];

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <section id="about">
      <div className=" container text-white pb-20">
        <div className="text-center " data-aos="fade-up" data-aos-duration="600">
          <h1 className="font-abc text-2xl md:text-5xl pt-20">About Us</h1>
          <p className="text-sm md:text-lg px-5 pt-5 font-abc text-zinc-400 text-start">
            Musiver adalah salah satu perusahaan musik digital pertama di Indonesia yang memberikan layanan self servis di dalam satu aplikasi website, dimana band atau musisi yang ingin merilis karyanya bisa melakukanya sendiri dengan
            mudah dalam waktu kurang dari 5 menit. Musiver membantu musisi untuk merilis karyanya di seluruh dunia dengan jalur store digital seperti Itunes, Spotify, Youtube Art Track, Deezer, Google Play, dll, dan juga pengaktivan RBT
            untuk pengguna selular di Indonesia. Musiver juga memberikan layanan promosi seperti penayangan iklan di Facebook, Instagram dan youtube.
          </p>
        </div>
        {items.map((item) => (
          <div className="container px-7 pt-10 font-abc" key={item.title} data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
            <div className="flex flex-col-2 gap-3 items-center">
              <div className="text-3xl items-center">{item.icon}</div>
              <h1 className="pt-3 text-lg md:text-2xl flex flex-row">{item.title}</h1>
            </div>
            <div className="pt-5 text-sm md:text-md text-zinc-400">{item.description}</div>
          </div>
        ))}
        <VisiComponent />
      </div>
    </section>
  );
};

export default About;

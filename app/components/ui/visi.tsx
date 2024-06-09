import React from "react";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Misi from "@/public/mission vision.jpg";
import Misi2 from "@/public/tanggung jawab.jpg";
import Image from "next/image";

const VisiComponent = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="container bg-zinc-900 py-24 mt-10  md:rounded-3xl md:shadow-sm md:shadow-slate-50">
      <div className="pt-10 md:pt-32 grid xl:grid-cols-2 items-center justify-center gap-11">
        <Image src={Misi} alt="Description of the image" className="md:w-[500px] md:h-[300px] md:ms-28" />

        <div className="pt-10 font-abc" data-aos="zoom-in-up">
          <h1 className="text-center text-2xl md:text-5xl uppercase">visi misi</h1>
          <p className="container text-sm md:text-md px-5 pt-5 font-abc ">
            Kami mempunyai Visi “mengembangkan industri musik Indonesia dengan mandiri”, Dan Misi “Membantu musisi Indonesia berkembang sehingga dapat memberikan kontribusi yang maksimal bagi industri musik Indonesia” . Maka jadikanlah kamu
            sebagai label rekamanmu sendiri, SEKARANG.
          </p>
        </div>
        <div className="pt-10 font-abc container order-last md:order-none" data-aos="zoom-in-up">
          <h1 className="text-center text-2xl md:text-5xl uppercase px-8">TANGGUNG JAWAB PRIBADI TERHADAP PENGGUNAAN KONTEN</h1>
          <p className="container text-sm md:text-md px-5 xl:ps-10 pt-5 font-abc ">
            Pengguna bertanggung jawab tehadap konten yang Anda bagikan, termasuk teks, foto, lagu dan video. Pengguna juga wajib memeriksa bahwa konten tidak megindikasikan masalah atau menggangu hak orang lain. Kami tidak bertanggung
            jawab terhadap klaim hak cipta dari pengguna lain atau yang berhak menerima royalty terhadap lagu / materi yang kami rilis. Pengguna bertanggung jawab penuh dari apa yang pengguna rilis kan di Musiver. Pengguna dianggap setuju
            dan mengerti bahwa pengguna adalah pemegang hak cipta lagu / materi atau pengguna adalah pemegang kuasa atas lagu/materi yang di rilis di Musiver.
          </p>
        </div>
        <div className="pt-10">
          <Image src={Misi2} alt="Description of the image" className="md:w-[500px] md:h-[300px] md:ms-24" />
        </div>
      </div>
    </div>
  );
};

export default VisiComponent;

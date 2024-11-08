import Header from "./components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <div >
      <Header />
      <div className="flex justify-between items-center bg-white py-12 px-10">
      <div className="w-1/2 flex flex-col justify-center items-start m-14 space-y-6">
    <h1 className="text-4xl font-bold text-black w-[496px]">
      IMPECCABLE CRAFTSMANSHIP AND FINESSE
    </h1>
    <p className="text-lg text-[#787054;] w-[500px]">
      An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.
    </p>
    <button className="bg-[#A29875] text-white px-4 py-2 rounded-full hover:bg-[#8b7d5f]">
      Explore Now
    </button>
    
  </div>
  <div className="w-1/2 flex justify-center items-center m-50 py-2 px-5">
          <Image
            src={"/images/manzzari.svg"}
            alt="manzzari image"
            width={462}
            height={647}
          />
        </div>
    </div>
    </div>
  );
}

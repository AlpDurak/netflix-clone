import Image from "next/image";
export default function RankCard({ rating, src }) {
  return (
    <div className="rankCardWrap">
      {/* Top ... Card Component */}
      <h1 className="rankCardRank">{rating}</h1>
      <div className="rankCard">
        <Image
          alt="Some Show"
          className="rankCardImage"
          layout="responsive"
          src={src}
        />
      </div>
    </div>
  );
}

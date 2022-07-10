import Image from "next/image";
export default function RankCard({ rating, src }) {
  return (
    <div className="rankCardWrap">
      <h1 className="rankCardRank">{rating}</h1>
      <div className="rankCard">
        <Image className="rankCardImage" layout="fill" src={src} />
      </div>
    </div>
  );
}

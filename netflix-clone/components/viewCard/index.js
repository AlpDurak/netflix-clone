import Image from "next/image";
export function ViewCard(props) {
  return (
    <div className="viewCard">
      <Image className="viewCardImage" layout="responsive" src={props.src} />
      {props.watched && (
        <div className="progressBar">
          <div style={{ width: `${props.watched}%` }} />
        </div>
      )}
    </div>
  );
}

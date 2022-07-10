import Image from "next/image";
export function ViewCard(props) {
  return (
    <div className="viewCard">
      {/* Show Card Component */}
      <Image className="viewCardImage" layout="responsive" src={props.src} />
      {props.watched && (
        <div className="progressBar">
          {/* Adds a Progress Bar If "watched" Was Passed */}
          <div style={{ width: `${props.watched}%` }} />
        </div>
      )}
    </div>
  );
}

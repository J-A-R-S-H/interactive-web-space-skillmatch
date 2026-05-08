import Image from "next/image";
export const Card = (id, frontSrc, frontAlt, backText) => {
  return (
    <div className="card" id={id}>
      <div className="card-wrapper">
        <div className="flip-card-inner">
          <div className="flip-card-front"></div>
          <div className="flip-card-back"></div>
        </div>
      </div>
    </div>
  );
};

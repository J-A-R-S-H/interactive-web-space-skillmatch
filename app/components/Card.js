import { forwardRef } from "react";
import { useResumeStore } from "../store/store";

export const Card = forwardRef(({ id, frontSrc, frontAlt, backText }, ref) => {
  const addSkill = useResumeStore((state) => state.addSkill);

  return (
    <div className="card" id={id} ref={ref}>
      <div className="card-wrapper">
        <div className="flip-card-inner">
          <div className="flip-card-front"></div>
          <div className="flip-card-back">
            <p> Javascript, React</p>
            <br />
            <button onClick={() => addSkill("Javascript, React")}>
              Add Skills
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});

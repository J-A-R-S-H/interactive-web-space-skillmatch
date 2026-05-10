import { useResumeStore } from "../store/store";

const Resume = () => {
  const skills = useResumeStore((state) => state.skills);

  return (
    <div>
      {skills.map((skill) => (
        <span key={skill} className="skill">
          {skill + "  "}
        </span>
      ))}
    </div>
  );
};

export default Resume;

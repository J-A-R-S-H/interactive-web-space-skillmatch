import { create } from "zustand";

export const useResumeStore = create((set) => ({
  skills: [],

  addSkill: (skill) =>
    set((state) => {
      if (state.skills.includes(skill)) return state;
      return { skills: [...state.skills, skill] };
    }),

  removeSkill: (skillName) =>
    set((state) => ({
      skills: state.skills.filter((s) => s !== skillName),
    })),

  resetSkills: () => set({ skills: [] }),
}));

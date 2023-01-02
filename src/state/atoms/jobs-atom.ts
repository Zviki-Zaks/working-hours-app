import { atom } from "recoil";
import type { Job } from "../../model/job-model";

export const jobsAtom = atom<Job[] | []>({
  key: "jobsAtom",
  default: [],
});

import { IEducation } from "./education";
import { IExperience } from "./experience";

export interface ICv {
    education?: IEducation[];
    experience?: IExperience[];
}

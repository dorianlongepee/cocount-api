import {Group} from "./group";

export type User = {
  firstname: string;
  lastname: string;
  email: string;
  groups?: Group[];
}
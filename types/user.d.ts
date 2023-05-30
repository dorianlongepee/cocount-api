export type User = {
    firstname: string;
    lastname: string;
    email: string;
    /*
      * Array of group ids (not populated by default)
     */
    groups?: string[];
}
export type Group = {

    /*
    * Unique name of the group (unique for a given user)
     */
    name: string;

    /*
    * Optional description of the group
     */
    description?: string;

    /*
    * User id of the group owner
     */
    owner: string;

    /*
    * Array of user ids (not populated by default)
     */
    users?: string[];

    /*
    * Array of expense ids  (not populated by default)
     */
    expenses?: string[];
}
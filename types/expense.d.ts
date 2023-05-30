export type Expense = {
    name: string;
    amount: number;

    /*
     * UserId of the user who paid for the expense
     */
    paidBy: string;

    /*
     * Array of user ids who benefited from the expense
     * The paidBy user is automatically added to the list of beneficiaries
     */
    beneficiaries: string[];

    /*
     * Group id of the group to which the expense belongs
     */
    group: string;

    /*
     * Date of the expense
     * Default value is the current date
     * Format: YYYY-MM-DD
     * Example: 2020-12-31
     */
    date?: string;
    refunded?: boolean;
}

export type Expense = {
    name: string;
    category: string;
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
     * Timestamp of the expense
     */
    date?: string;

    refunded?: boolean;
}

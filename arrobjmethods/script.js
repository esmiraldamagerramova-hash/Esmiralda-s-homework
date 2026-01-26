const transactions = [
  { id: 1, user: "Ali", type: "deposit", amount: 200 },
  { id: 2, user: "Ali", type: "withdraw", amount: 50 },
  { id: 3, user: "Leyla", type: "deposit", amount: 500 },
  { id: 4, user: "Ali", type: "deposit", amount: 100 },
  { id: 5, user: "Leyla", type: "withdraw", amount: 200 },
  { id: 6, user: "Murad", type: "deposit", amount: 300 }
];

const summary = [...new Set (transactions.map(t => t.user))].map(user =>{
    const userTransactions = transactions.filter(t => t.user === user);
    const balance = userTransactions.reduce((sum,t) => {
        if (t.type === 'deposit'){
            return sum + t.amount;
        } else {
            return sum - t.amount;
        }
        }, 0);
        return{
            user: user,
            balance: balance,
            transactionsCount: userTransactions.length

        }
})

console.log(summary);
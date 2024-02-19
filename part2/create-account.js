function createAccount(pin, amount) {
    let PIN = pin;
    let balance = amount || 0;
    const account =
    {
        checkBalance: function (enteredPIN) { 
            return enteredPIN === PIN ? `$${balance}` : "Invalid PIN.";
        },
        deposit: function (enteredPIN, deposit) {
            if (enteredPIN === PIN) {
                balance = balance + deposit;
                return `Succesfully deposited $${deposit}. Current balance: $${balance}.`;
            } else {
                return "Invalid PIN.";
            }
        },
        withdraw: function (enteredPIN, amount) {
            if (enteredPIN === PIN) {
                if (amount > balance) return "Withdrawal amount exceeds account balance. Transaction cancelled."
                balance = balance - amount;
                return `Succesfully withdrew $${amount}. Current balance: $${balance}.`;
            } else {
                return "Invalid PIN.";
            }
        },
        changePin: function (enteredPIN, newPIN) {
            if (enteredPIN === PIN) {
                PIN = newPIN
                return "PIN successfully changed!"
            } else {
                return "Invalid PIN.";
            }
        }
    }
    return account;
}

module.exports = { createAccount };

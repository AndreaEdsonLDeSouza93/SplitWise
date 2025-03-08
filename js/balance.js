// Variables
let totalSpent = parseFloat(localStorage.getItem("totalSpent")) || 0;
let andreaBalance = parseFloat(localStorage.getItem("andreaBalance")) || 0;
let martaBalance = parseFloat(localStorage.getItem("martaBalance")) || 0;

// DOM Elements
const totalSpentElement = document.getElementById("total_spent");
const andreaBalanceElement = document.getElementById("andrea_balance");
const martaBalanceElement = document.getElementById("marta_balance");

// Load saved values
updateUI();

// Function to handle spending
function handleSpending(user) {
    let input = document.getElementById(`money_spent_${user}`);
    let amount = parseFloat(input.value);

    if (!isNaN(amount) && amount > 0) {
        totalSpent += amount;

        if (user === "andrea") {
            andreaBalance += amount / 2;
            martaBalance -= amount / 2;
        } else if (user === "marta") {
            andreaBalance -= amount / 2;
            martaBalance += amount / 2;
        }

        // Save to localStorage
        localStorage.setItem("totalSpent", totalSpent);
        localStorage.setItem("andreaBalance", andreaBalance);
        localStorage.setItem("martaBalance", martaBalance);

        updateUI();
    } else {
        alert("Please enter a valid number.");
    }

    input.value = "";
}

// Function to update UI
function updateUI() {
    totalSpentElement.innerHTML = totalSpent.toFixed(2);
    andreaBalanceElement.innerHTML = andreaBalance.toFixed(2);
    martaBalanceElement.innerHTML = martaBalance.toFixed(2);
}

// Event Listeners
document.getElementById("button_andrea").onclick = function () {
    handleSpending("andrea");
};

document.getElementById("button_marta").onclick = function () {
    handleSpending("marta");
};

function getInputValue(id) {
    const inputField = document.getElementById(id);
    const amount = parseFloat(inputField.value);
    // Clear deposit input
    inputField.value = '';
    return amount;
}
// update all balance
function updateTotalField(id, amount) {
    const balanceText = document.getElementById(id);
    const balance = parseFloat(balanceText.innerText);
    balanceText.innerText = balance + amount;
}

// update main balance
function updateMainBalance(depositAmount, isAdd) {
    const mainBalanceText = document.getElementById('balance');
    const mainBalance = parseFloat(mainBalanceText.innerText);
    if (isAdd) {
        mainBalanceText.innerText = mainBalance + depositAmount;
    } else {
        mainBalanceText.innerText = mainBalance - depositAmount;
    }
}

// deposit and update balance
function depositBalance() {
    // update deposit balance
    const depositAmount = getInputValue('deposit-input');
    if (depositAmount > 0) {
        // update after deposit balance
        updateTotalField('deposit', depositAmount);
        //update main balance
        updateMainBalance(depositAmount, true);
    }
}

// withdraw and update balance
function withdrawBalance() {
    // update withdraw balance
    const withdrawInputBalance = getInputValue('withdraw-input');
    const mainBalanceText = document.getElementById('balance');
    const mainBalance = parseFloat(mainBalanceText.innerText);
    if (withdrawInputBalance > 0) {
        if (mainBalance > withdrawInputBalance) {
            // update after withdraw balance
            updateTotalField('withdraw', withdrawInputBalance);
            // update main balance
            updateMainBalance(withdrawInputBalance, false);
        } else {
            alert("You don't have sufficient balance or your number is negative")
        }
    } else {
        alert("Input cannot be negative!!")
    }
}

// document.getElementById('deposit-btn').addEventListener('click', function() {
//     // update deposit balance
//     const depositAmount = getInputValue('deposit-input');
//     // update after deposit balance
//     updateTotalField('deposit', depositAmount);
//     //update main balance
//     updateMainBalance(depositAmount, true);

// });

// document.getElementById('withdraw-btn').addEventListener('click', function() {
//     // update withdraw balance
//     const withdrawInputBalance = getInputValue('withdraw-input');
//     // update after withdraw balance
//     updateTotalField('withdraw', withdrawInputBalance)
//         // update main balance
//     updateMainBalance(withdrawInputBalance, false)
// })
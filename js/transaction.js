function getInputValue(id) {
    const inputField = document.getElementById(id);
    const amount = parseFloat(inputField.value);
    // Clear deposit input
    amount.value = '';
    return amount;
}

document.getElementById('deposit-btn').addEventListener('click', function() {
    const depositAmount = getInputValue('deposit-input');
    const depositText = document.getElementById('deposit');
    const depositBalance = parseFloat(depositText.innerText);
    const mainBalanceText = document.getElementById('balance');
    // Convert string to number
    const mainBalance = parseFloat(mainBalanceText.innerText);
    // Update Deposit balance and main balance
    depositText.innerText = depositBalance + depositAmount;
    mainBalanceText.innerText = mainBalance + depositAmount;
});

document.getElementById('withdraw-btn').addEventListener('click', function() {
    const withdrawInputBalance = getInputValue('withdraw-input')
    const withdrawBalanceText = document.getElementById('withdraw');
    const mainBalanceText = document.getElementById('balance');
    // Convert string to number
    const withdrawBalance = parseFloat(withdrawBalanceText.innerText);
    const mainBalance = parseFloat(mainBalanceText.innerText);
    // Update withdraw balance and main balance
    withdrawBalanceText.innerText = withdrawBalance + withdrawInputBalance;
    mainBalanceText.innerText = mainBalance - withdrawInputBalance;
})
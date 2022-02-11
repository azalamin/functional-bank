function getInputValue() {
    const depositInput = document.getElementById('deposit-input');
    const depositAmount = parseFloat(depositInput.value);
    // Clear deposit input
    depositInput.value = '';
    return depositAmount;
}

document.getElementById('deposit-btn').addEventListener('click', function() {
    const depositAmount = getInputValue();
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
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawBalanceText = document.getElementById('withdraw');
    const mainBalanceText = document.getElementById('balance');
    // Convert string to number
    const withdrawInputBalance = parseFloat(withdrawInput.value);
    const withdrawBalance = parseFloat(withdrawBalanceText.innerText);
    const mainBalance = parseFloat(mainBalanceText.innerText);
    // Update withdraw balance and main balance
    withdrawBalanceText.innerText = withdrawBalance + withdrawInputBalance;
    mainBalanceText.innerText = mainBalance - withdrawInputBalance;
    // Clear withdraw input
    withdrawInput.value = '';
})
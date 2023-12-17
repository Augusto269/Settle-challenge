const calculateReserverFee = (fixerRate,converseCurrency) => {
    const { rates } = fixerRate;
    const originalRate = 1 / rates[converseCurrency];
    return originalRate;
}

module.exports = {
    calculateReserverFee,
};
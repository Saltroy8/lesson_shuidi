var canCompleteCircuit = function (gas, cost) {
    let left = 0, start = 0, totalGas = 0, totalCost = 0;
    for (let i = 0; i < gas.length; i++) {
        totalGas += gas[i];
        totalCost += cost[i];
        left += gas[i] - cost[i];
        if (left < 0) {
            start = i + 1;
            left = 0;
        }
    }
    if (totalGas < totalCost) {
        return -1;
    }
    return start;
};

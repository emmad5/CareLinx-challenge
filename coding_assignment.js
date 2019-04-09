function amountToCoins(amt, set) {
    let result = [];
    let sum = 0;
    // ensure the the set is in descending order
    set = set.sort((a, b) => a - b).reverse();
    for (let i = 0; i < set.length; i++) {
        if (sum === amt) return result;
        while (sum + set[i] <= amt) {
            result.push(set[i]);
            sum += set[i];
        }
    }
    return result;
}


//Assignment 1
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

//Assignment 2
function getText(node) {
   let queue = [node];
   let text = '';
    while (queue.length > 0) {
      let n = queue.shift();
      if (n.is_tex) {
          text += string;
      }
      if (!n.children) {
        continue;
      }
     for (var i = 0; i < n.children.length; i++) {
        queue.push(n.children[i]);
     }
    }
    return text;
}
function compareText(node1, node2) {
    return getText(node1) == getText(node2);
}
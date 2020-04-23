export default (expenses) => {
    var total = 0;
    
    if (expenses.length === 0)
        return total;

    for (var i = 0; i < expenses.length; i++) {
        total += expenses[i].amount;
    }
    
    return total;
};
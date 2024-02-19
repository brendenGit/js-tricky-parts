function curriedAdd(total = 0) {
    if(arguments.length === 0) return 0;
    return function add(b) {
        if (b === undefined) {
            return total;
        }
        total += b;
        return add;
    }
}

module.exports = { curriedAdd };
class MultiplicatorUnitFailure extends Error { }

function primitiveMultiply(a: number, b: number) {
    if (Math.random() < 0.2) {
        return a * b;
    } else {
        throw new MultiplicatorUnitFailure();
    }
}

function reliableMultiply(a: number, b: number) {
    let result=undefined;
    while (1) {
        try {
            result = primitiveMultiply(a, b);
            break;
        } catch (err) {
            if (!(err instanceof MultiplicatorUnitFailure))
                throw err;
        }
    }
    return result;
}

console.log(reliableMultiply(8, 8));
// → 64
const isPositive = (a) => {
    if (a === 0)
        throw Error('Zero Error');
    if (a < 0)
        throw Error('Negative Error');

    return 'YES';
}

console.log(isPositive(12));
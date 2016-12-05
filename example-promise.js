

function addPromise(a, b) {
    return new Promise(function(resolve, reject) {
        if (typeof a !== 'number' || typeof b !== 'number') {
            reject('a and b should be a number!');
        } else {
            resolve(a + b);
        }
    });
}

addPromise(4, 5).then(function(resolve) {
    console.log(resolve);
}, function(err) {
    console.log(err);
});


addPromise('4', 5).then(function(resolve) {
    console.log(resolve);
}, function(err) {
    console.log(err);
});

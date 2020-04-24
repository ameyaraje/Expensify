const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve({
        //     message: 'you were successful',
        //     code: 'S01'
        // });
    
        reject({
            message: 'you failed',
            code: 'E01'
        });
    }, 5000);
});


console.log('before');

promise.then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
});

console.log('after');

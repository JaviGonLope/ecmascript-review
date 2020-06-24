const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if(true){
            resolve('Hey!');
        } else {
            reject('Something went wrong!');
        }
    });
}

helloPromise()
    .then(response => console.log(response))
    .catch(error => console.log(error))
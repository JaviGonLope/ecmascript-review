const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Hello world'), 3000) 
            : reject(new Error('Test Error'))
    })
}

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Promise finished'))
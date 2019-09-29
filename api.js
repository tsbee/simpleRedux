const people = [
    { name: 'Nader', age: 36 },
    { name: 'Amanda', age: 24 },
    { name: 'Jason', age: 44 },
    { name: 'Cheng', age: 30 }
]

export default() => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            return resolve(people)
        }, 2000)
    })
}

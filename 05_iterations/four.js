const myObject = {
    js: 'Javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: "Swift by apple"
}


// for (const key in myObject) {
//     console.log(`${key} is shortcut for ${myObject[key]}`)
// }

const programming = ['js', 'rb', 'py', 'java', 'cpp']

for (const key in programming) {
    console.log(programming[key])
}
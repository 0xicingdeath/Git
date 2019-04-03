//Function 4
// Array must be defined.

function getNames() {
    var length = 0,
        names = "",
        array = ['John', 'Susan', 'Joe']

    array.forEach(function (name, i) {
        length = i + 1
        names += name + ' '
    })

    return {
        length: length,
        names: names
    }
}
console.log(getNames())
//Function 5


//Function 6


// Function 7
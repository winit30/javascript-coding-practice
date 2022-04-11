//String1 = "975639857693846793854739485934584293"
//String2 = "4659384765354793845793845793353389456893"

function addNumbers(a, b) {

    let string1
    let string2

    if(a.length === b.length) {
      string1 = a;
      string2 = b;
    } else {
       string1 = a.length > b.length ? a : b;
       string2 = a.length < b.length ? a : b;
    }

    const diff = 1 + string1.length - string2.length;

    const numberArray = [];

    let temp = 0;

    for(let i = string1.length; i > 0; i--) {

        let secondVal = 0;

        if(parseInt(string2[i-diff])) {
            secondVal = parseInt(string2[i-diff]);
        }

         const add = parseInt(string1[i - 1]) + secondVal + temp;

         temp = 0;

         if(i == 1) {
           numberArray.push(add)
         } else if(add < 10) {
             numberArray.push(add)
         } else {
           temp = 1
           numberArray.push(add - 10)
         }
    }

    return numberArray.reverse().join('');
}

add('975639857693846793854739485934584293', '4659384765354793845793845793353389456893');

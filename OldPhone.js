/*function oldPhone(stringB){

    let arr = []

    for(let i = 0; i < stringB.length; i++){
        if ( stringB[i] === "a"){
            arr.push(1)
            if(stringB[i] === "b" || stringB[i] === "c"){
                arr.push(2)
            }
        }
        else{
            if(arr.length === 0){
                return false
            }
            let lastValue = arr[arr.length-1]
            if( (stringB[i] === ']' && lastValue === '[') || (stringB[i] === '}' && lastValue === '{') || (stringB[i] === ')' && lastValue === '('))
            {
                arr.pop()
            } else {
                break;
                }
            }
        return arr;
    }
    return arr.length === 0
}*/

function oldPhone(stringB){

    let arr = []

    for(let i = 0; i < stringB.length; i++){
        if ( stringB[i] === "a"){
            arr.push(1)
        }
    }

    for(let i = 0; i < stringB.length; i++){
        if(stringB[i] === "b" || stringB[i] === "c"){
            arr.push(2)
        }
    }

    for(let i = 0; i < stringB.length; i++){
        if(stringB[i] === "d" || stringB[i] === "e" || stringB[i] === "f"){
            arr.push(3)
        }
    }

    for(let i = 0; i < stringB.length; i++){
        if(stringB[i] === "g" || stringB[i] === "h" || stringB[i] === "i"){
            arr.push(4)
        }
    }

    for(let i = 0; i < stringB.length; i++){
        if(stringB[i] === "j" || stringB[i] === "k" || stringB[i] === "l"){
            arr.push(5)
        }
    }

    for(let i = 0; i < stringB.length; i++){
        if(stringB[i] === "m" || stringB[i] === "n" || stringB[i] === "o"){
            arr.push(6)
        }
    }

    for(let i = 0; i < stringB.length; i++){
        if(stringB[i] === "p" || stringB[i] === "q" || stringB[i] === "r" || stringB[i] === "s"){
            arr.push(7)
        }
    }

    for(let i = 0; i < stringB.length; i++){
        if(stringB[i] === "t" || stringB[i] === "u" || stringB[i] === "v"){
            arr.push(8)
        }
    }

    for(let i = 0; i < stringB.length; i++){
        if(stringB[i] === "w" || stringB[i] === "x" || stringB[i] === "y"){
            arr.push(9)
        }
    }

    for(let i = 0; i < stringB.length; i++){
        if ( stringB[i] === "z"){
            arr.push(0)
        }
    }

    return arr;

}

console.log(oldPhone("bbzdpkmt"));

//console.log(bracesValid("{{()}}[]"));
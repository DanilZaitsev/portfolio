const roomba = "FFFRFRFFR";

let x = 0;
let y = 0;
let rot = 0;

for (let i = 0; i < roomba.length; i ++) {
    if (roomba[i] === 'F' && rot === 0)
        x += 2;
    else if (roomba[i] === 'F' && rot === 180)
        x -= 2;
    else if (roomba[i] === 'F' && rot === 90)
        y -= 2;
    else if (roomba[i] === 'F' && rot === 270)
        y += 2;
    if (roomba[i] === 'R')
        rot = (rot + 90) % 360;
}

console.log(x, y, rot);
function rotate() {
    console.log('R');
    return (rot + 90) % 360;
}

if (y > 0) {
    //rotate to 90
    while(rot !== 90) {
        rot = rotate(rot);
    }
} else if (y < 0) {
    //rotate to 270
    while(rot !== 270) {
        rot = rotate(rot);
    }
}
for (let i = 0; i < Math.abs(y/2); i+=2)
    console.log('F');

if (x > 0) {
    //rotate to 180
    while(rot !== 180) {
        rot = rotate(rot);
    }
} else if (x < 0) {
    //rotate to 0
    while(rot !== 0) {
        rot = rotate(rot);
    }
}
for (let i = 0; i < Math.abs(x/2); i+=2)
    console.log('F');




const res = {};

function random5() {
    return Math.random() * 5;
}

function random8() {
    return (random5() / 5) * 8;
}

// function random8() {
// 	return (random5() + random5() + random5()) % 8;
// }

for (let i = 0; i < 10000; i++) {
    const r = random8();
    if (!res[parseInt(r)])
        res[parseInt(r)] = 0;
    res[parseInt(r)]++;
}

console.log(res);

function is_Palindrome(str1) {
    var rev = str1.split("").reverse().join("");
    return str1 == rev;
}

function longest_palindrome(str1){

    var max_length = 0,
        maxp = '';

    for(var i=0; i < str1.length; i++)
    {
        var subs = str1.substr(i, str1.length);

        for(var j=subs.length; j>=0; j--)
        {
            var sub_subs_str = subs.substr(0, j);
            if (sub_subs_str.length <= 1)
                continue;

            if (is_Palindrome(sub_subs_str))
            {
                if (sub_subs_str.length > max_length)
                {
                    max_length = sub_subs_str.length;
                    maxp = sub_subs_str;
                }
            }
        }
    }

    return maxp;
}
console.log(longest_palindrome("abracadabra"));

console.log(longest_palindrome("HYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDE"));









function checkPalidrome(str){
    for (let i = 0; i < str.length; i++) {
        if (i < (str.length / 2 + 1))
            if (str[i] !== str[str.length - 1 - i])
                return 0;
    }
    return str.length;
}

const r = checkPalidrome('saassaas');

let str = 'abracadabra';
let max_lenght = 0;
let win_string = '';

for (let i = 0; i < str.length; i++) {
    for (let j = str.length; j > 0; j--) {
        if (i > j)
            break;
        if (str[i] === str[j]) {
            let pal = str.substring(i, j + 1);
            const lenght = checkPalidrome(pal);
            if (lenght > max_lenght) {
                max_lenght = lenght;
                win_string = pal;
                break;
            }
        }
    }
}
console.log(win_string);
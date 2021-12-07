const fs = require('fs');
const path = require('path');

const data = fs.readFileSync(path.join(__dirname, 'teste.txt'), 'utf-8');

const KEY_WORDS_REGEX = /(printint|int|printf|return)/g

//const IDENTIFIER_REGEX = /(^[a-zA-Z][0-9]|[a-zA-Z]+[0-9]*)/g
const IDENTIFIER_REGEX = /[_|a-zA-Z][a-zA-Z0-9]*/g


function readTokens(regexList, data){

    const map = {};
    let i = 0;

    while(true){
        const regex = regexList[i];
        const result = regex.exec(data);

        if(!result){
            i++;
            if(i >= regexList.length){
                break;
            }else{
                continue;
            }
        }

        const index = result.index;
        const word = result[0];
        map[index] = word;
    }

    const indexers = Object.keys(map).sort((a, b) => a - b);
    const tokens = indexers.map((index) => map[index]);

    console.log(tokens);
}

readTokens([KEY_WORDS_REGEX, IDENTIFIER_REGEX], data);
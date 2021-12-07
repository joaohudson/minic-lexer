const fs = require('fs');
const path = require('path');

const data = fs.readFileSync(path.join(__dirname, 'teste.txt'), 'utf-8');

const KEY_WORDS_REGEX = /(printint|int|printf|return)/g

//const IDENTIFIER_REGEX = /(^[a-zA-Z][0-9]|[a-zA-Z]+[0-9]*)/g
const IDENTIFIER_REGEX = /[_|a-zA-Z][a-zA-Z0-9]*/g


function readTokens(regex, data){

    while(true){
        const result = regex.exec(data);

        if(!result){
            break;
        }

        const index = result.index;
        const word = result[0];
        console.log('index: ', index);
        console.log('result: ', word);

    }
}

readTokens(IDENTIFIER_REGEX ,data);
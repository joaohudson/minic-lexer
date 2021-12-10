const fs = require('fs');
const path = require('path');
const {analyzers} = require('./analyze');

const data = fs.readFileSync(path.join(__dirname, 'teste.txt'), 'utf-8');

function readTokens(analyzeList, data){

    const map = {};

    for(const {regex, createToken} of analyzeList){

        while(true){
            const result = regex.exec(data);
            
            if(!result){
                break;
            }

            const index = result.index;
            const word = result[0];
            map[index] = createToken(word);
        }
    }

    const indexers = Object.keys(map).sort((a, b) => a - b);
    const tokens = indexers.map((index) => map[index]);

    console.log(tokens);
}

readTokens(analyzers, data);
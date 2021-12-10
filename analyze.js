
const TokenType = {
    KEY_WORD: 'Key Word',
    IDENTIFIER: 'Identifier',
    INTEGER_LITERAL: 'Integer Literal',
    STRING_LITERAL: 'String Literal',
    OPERATOR: 'Operator',
    COMMENT: 'Comment'
}

const KEY_WORDS_ANALYZE = {
    createToken: (str) => ({
        type: TokenType.KEY_WORD,
        value: str
    }),
    regex: /(printint|int|printf|return)/g
}

const IDENTIFIER_ANALYZE = {
    createToken: (str) => ({
        type: TokenType.IDENTIFIER,
        value: str
    }),
    regex: /[_|a-zA-Z][a-zA-Z0-9]*/g
}

const INTEGER_LITERAL_ANALYZE = {
    createToken: (str) => ({
        type: TokenType.INTEGER_LITERAL,
        value: new Number(str)
    }),
    regex: /-[0-9]+|[0-9]+/g
}

const STRING_LITERAL_ANALYZE = {
    createToken: (str) => {
        const temp = str.substr(1);
        const value = temp.substr(0, temp.length - 1);

        return {
            type: TokenType.STRING_LITERAL,
            value
        }
    },
    regex: /".*"/g
}

const OPERATOR_ANALYZE = {
    createToken: (str) => ({
        type: TokenType.OPERATOR,
        value: str
    }),
    regex: /\+|\*|-|\//g
}

const COMMENT_ANALYZE = {
    createToken: (str) => ({
        type: TokenType.COMMENT,
        value: str.substr(2)
    }),
    regex: /\/\/.*\n*/g
}

module.exports = {
    TokenType,
    analyzers: 
    [
        KEY_WORDS_ANALYZE,
        STRING_LITERAL_ANALYZE,
        IDENTIFIER_ANALYZE,
        INTEGER_LITERAL_ANALYZE,
        OPERATOR_ANALYZE,
        COMMENT_ANALYZE
    ]
}
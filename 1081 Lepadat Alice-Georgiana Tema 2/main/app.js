function addTokens(input, tokens) {
    if (typeof input === 'string') { //test1
        if (input.length >= 6) { //test2
            for (let i = 0; i < tokens.length; i++) {
                if (typeof tokens[i].tokenName === 'string') { //test3
                    if (input.includes("...")) {
                        input = input.replace("...", "${" + `${tokens[i].tokenName}` + "}")
                    }
                    return input; //test4 + test5
                }
                else throw new Error("Invalid array format!")
            }
        }
        else throw new Error("Input should have at least 6 characters!");
    }
    else throw new Error("Invalid input!");
}

const app = {
    addTokens: addTokens
}

module.exports = app;
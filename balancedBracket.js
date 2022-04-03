
// balanced Bracket
function isBalanced(str) {
    // Your code here
    const openBracketsStack = [];
    const open = "[{(";
    const close = "]})";

    const match = {
        "(": ")",
        "{": "}",
        "[": "]"
    }

    for(let char of str) {
        if(open.includes(char)) {
            openBracketsStack.push(char)
        } else if(close.includes(char)) {
            const lastOpenBR = openBracketsStack.pop();

            if(match[lastOpenBR] !== char) {
                return false;
            }
        }
    }

    return !openBracketsStack.length;
}

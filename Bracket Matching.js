const map = {
    '(': ')',
    '[': ']',
    '{': '}'
}


const bracketmatching = (str) => {
    const mystack = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] == "{" || str[i] == "[" || str[i] == "(") {
            mystack.push(str[i]);
        } else if (str[i] == "}" || str[i] == "]" || str[i] == ")") {
            let lastbracket = mystack.pop()
            if (str[i] !== map[lastbracket]) {
                return i + 1;
            }
        }

    }


    if (mystack.length !== 0) {
        return (mystack.indexOf(mystack[mystack.length - 1]) + 1);
    }


    return "Success";
}

str1 = "{}[]";
str2 = "{[]}()";
str3 = "{";
str4 = "{[}";
str5 = "foo(bar)";
str6 = "foo(bar[i)";

console.log(bracketmatching(str1));
console.log(bracketmatching(str2));
console.log(bracketmatching(str3));
console.log(bracketmatching(str4));
console.log(bracketmatching(str5));
console.log(bracketmatching(str6));

function isValidSParenthesis(str) {
    let stack = [];
    let current;
    let value = true
    for (let i in str) {
      if (str[i] == "{" || str[i] == "[" || str[i] == "(") {
        stack.push(str[i]);
      }
      if (str[i] == "}" || str[i] == "]" || str[i] == ")") {
        current = stack.pop(str[i]);
        if (current == "{" && str[i] != "}") {
          value = false;
          break
        }
        if (current == "(" && str[i] != ")") {
          value = false;
          break
        }
        if (current == "[" && str[i] != "]") {
          value = false;
          break
        }
      }
    }
    return stack.length == 0 && value;
  }

  let output = isValidSParenthesis("({}");
  console.log(output);

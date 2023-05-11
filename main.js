function add(n1, n2) {
    return n1 + n2;
  }
  
  function sub(n1, n2) {
    return n1 - n2;
  }
  
  function multiply(n1, n2) {
    return n1 * n2;
  }
  
  function div(n1, n2) {
    return n1 / n2;
  }
  
  let n1 = 1;
  let n2 = 2;
  let operator = "+";
  
  function operate(n1, oprtr, n2) {
    if (oprtr === "+") {
      return add(n1, n2);
    } else if (oprtr === "-") {
      return sub(n1, n2);
    } else if (oprtr === "*") {
      return multiply(n1, n2);
    } else if (oprtr === "/") {
      return div(n1, n2);
    }
  }
  
  console.log(operate(n1, operator, n2)); // Output: 3
  
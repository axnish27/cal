  const display = document.getElementById("display")
  const display2 = document.getElementById("display2")
  const digits = document.querySelectorAll(".btn")
  
  const arr = [];

  function diplayValue(digit) {
    digit.addEventListener('click', function(event) {
      let value = event.target.id;
      
      if (value == "=") {
        
        const operator = arr.find(opt => opt == "+" || opt == "-" || opt == "*" || opt == "/" );
        const optIndex = arr.indexOf(operator);
        const num1 = parseFloat(arr.slice(0, optIndex).join(""));
        const num2 = parseFloat(arr.slice(optIndex + 1).join(""));
        const sum = operate(num1, operator, num2);

        display2.innerHTML = sum;
        arr.length = 0; // Clear the array
      
      } else {
        arr.push(value);
      }
      
      
      display.innerHTML = arr.join("");
      

      
      
    });
  }
  
  digits.forEach(diplayValue);

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

  
  
  
  const display = document.getElementById("display")
  const display2 = document.getElementById("display2")
  const digits = document.querySelectorAll(".btn")
  
  const arr = [];
  const displayArr=[];
  let result = 0;
  let dvalue=0;

  function operations(digit) {
    digit.addEventListener('click', function(event) {
      let id = event.target.id;

      if (id == "=") {
        
        const operators = arr.filter(opt => opt == "+" || opt == "-" || opt == "*" || opt == "/" );
        console.log(operators)
        
        let operator;
        const len = operators.length
        console.log("len",len)
        for(let i = 0;len > i; i++){
          
          operator = operators[i] 
          console.log(operator)
          const optIndex = arr.indexOf(operator);
          console.log("optIndex",optIndex)

          if(i==0){
            console.log("ifresult",result)
            let num1;
            if(result==0){
              num1 = parseFloat(arr.slice(0, optIndex).join(""));
              console.log("num1",num1)
            }
            else{
              num1 = result;
              console.log("else num1",num1)
            }

            const num2 = parseFloat(arr.slice(optIndex + 1).join(""));
            console.log("num2",num2)
            result = operate(num1, operator, num2);
            console.log("result",result)
          
          }
          else{

            result = (operate(result, operator, arr[optIndex + 1]));
            console.log("else result",result)
            
          }
          
          

          
        
        }
        
      
        arr.length = 0; 
        displayresult(result)
        
      
      } 
      else if(id == "clear"){
        arr.length = 0;
        displayArr.length = 0;
        dvalue=0; 
        result=0;
        displayresult(result);

        
      }
      else {
      arr.push(id);
      console.log("array",arr)
      displayArr.push(id)
      dvalue = displayArr.join("");
      }

      display.innerHTML = dvalue 

      
      
    });
  }
  


  digits.forEach(operations);


  function displayresult(result){
    let display;
    if( isNaN(result) == 1 || result === Infinity)
    {
      display = "ERROR";
    }
    else if(isDecimal(result) == 1){
      
      let string = result.toString()
      const arr = string.split(".")
      const len = arr[1].length
      
      if(len > 7){
        display = result.toFixed(7)
      }
    }
    else{
      display = result;
    } 
    return display2.innerHTML = display;
  }

  
  function isDecimal(n) {
    var result = n - Math.floor(n) !== 0;
    if (result) return true;
    else return false;
  }


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
    n1 = parseFloat(n1)
    n2 = parseFloat(n2)

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

  
  
  
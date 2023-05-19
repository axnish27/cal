  const display1 = document.getElementById("display")
  const display2 = document.getElementById("display2")
  const digits = document.querySelectorAll(".btn")

  document.addEventListener('click',operations,false);
  document.addEventListener('keydown',operations,false);
  
  
  const mainArr = [];
  const displayArr=[];
  let result = 0;
  let dvalue=0;
  const idArr = ["1","2","3","4","5","6","7","8","9","0","+","-","*","/","delete","clear",".","="]
  

  function operations(event){
      let eventType = event.type;
      let id;
      if(eventType === "keydown"){
        id = keycodeConverter(event.keyCode);    
      }
      else if(eventType === "click"){
        id = event.target.id;
        if(idArr.includes(id) == false){
          id = ""
        }

      }

      if (id == "=") {
        const operators = mainArr.filter(opt => opt == "+" || opt == "-" || opt == "*" || opt == "/" );
       
        let operator;
        const len = operators.length
       
        for(let i = 0;len > i; i++){
          operator = operators[i] 
                   const optIndex = mainArr.indexOf(operator);
          if(i==0){
            let num1;
            if(result==0){
              num1 = parseFloat(mainArr.slice(0, optIndex).join(""));
            }
            else{
              num1 = result;
            }
            const num2 = parseFloat(mainArr.slice(optIndex + 1).join(""));
            result = operate(num1, operator, num2);
          
          }
          else{

            result = (operate(result, operator, mainArr[optIndex + 1]));
          }
          
        }
        
      
        mainArr.length = 0;
        displayresult(result)
        
        
      
      } 

      else if(id == "clear"){
        mainArr.length = 0;
        displayArr.length = 0;
        dvalue=0; 
        result=0;
        displayresult(result);
      }
      /*
      else if(id == "delete"){
        const newArr = deleteOne(displayArr);
        for(let i = 0; newArr.length > i;i++){
          mainArr.push(newArr[i])
        }
       mainArr)
        

      }*/

      else if(id == "" || id == undefined){
        //do nothing syntax is this....

      }
      
      else{
      mainArr.push(id);

      displayArr.push(id)
      dvalue = displayArr.join("");
      }

      display1.innerHTML = dvalue ;

      
      
    };
  

/*  function deleteOne(arr){
    arr.splice(-1,1)
    arr.join("")
    return arr

  }
*/

  function keycodeConverter(key){
    if(key >= 48 && key <= 57 ){
      key = key-48;    
    }
    else if(key >= 96 && key <= 105){
      key = key-96;
    }
    else if(key == 13){
      key = "=";
    }
    else if(key == 107){
      key = "+";
    }
    else if(key == 109){
      key = "-";
    }
    else if(key == 106){
      key = "*";
    }
    else if(key == 111){
      key = "/";
    }
    else if(key == 46){
      key = "clear";
    }
    /*
    else if(key == 8){
      key = "delete";
    }*/
    else {
      key = "";
    }
    return key

  }

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
      else{
        display = result
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

  
  
  
 function hideShowCalculator(showHideCalculator){
    var elements = document.getElementsByClassName("hideTheCalculator");
    for (let i=0; i < elements.length; i++){
        elements[i].style.display = showHideCalculator;
    }
 }

 function WriteNumber(prmButtonPressedObj) {
     document.getElementById('calculationMain').value += prmButtonPressedObj;
      }


function withOperator(operatorSign){
   var takeValue = document.getElementById('calculationMain').value;
   var operatorValue =  document.getElementById('calculationMain').value = operatorSign;
   var concatFinalResult = takeValue.concat(operatorValue);
   document.getElementById('calculationMain').value = "";
   document.getElementById('history').innerHTML = concatFinalResult;
//    var takevalue = document.getElementById('calculationMain').value += document.getElementById('calculationMain').innerHTML = operatorSign;
//   document.getElementById('calculationMain').value = "";
//    document.getElementById('history').innerHTML = takevalue;
}

function EqualOperator(){
   var result = 0;
   var takeAnotherValue =  document.getElementById('calculationMain').value;
   var historyValue = document.getElementById('history').innerHTML;
   var withHistoryValue = historyValue.concat(takeAnotherValue);
   // console.log(withHistoryValue);
   var equlOperatorValue = document.getElementById('calculationMain').value = '=';
   var concatEqualResult = withHistoryValue.concat(equlOperatorValue);
   // console.log(concatEqualResult);
   result = eval(withHistoryValue);
      document.getElementById('calculationMain').value = result;
      document.getElementById('history').innerHTML = concatEqualResult;
      
   }


function clearBtn() {
   document.getElementById('calculationMain').value = "";
   document.getElementById("history").innerHTML = "";
}
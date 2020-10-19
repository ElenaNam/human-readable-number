module.exports = function toReadable (number) {
    let numberArr = number.toString().split('') 
    let namesNumbers1 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let namesNumbers2 = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let namesNumbers3 = ['hundred'];
    let namesNumbers4 = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    let result = '';
  
    for (let i = 0; i < numberArr.length; i++){
        if (numberArr.length === 1) {
            result += namesNumbers1[numberArr[0]];
  
        } else if (numberArr.length === 2){
            if (numberArr[0] === '1' && numberArr[1] !== '0'){
                result += namesNumbers4[+numberArr[1]-1]
                break;
  
            } else if (numberArr[1] === '0') {
                result += namesNumbers2[+numberArr[0]-1];
              break;
  
            } else {                  
              
              result += namesNumbers2[+numberArr[0]-1] + ' ' + namesNumbers1[+numberArr[1]];
              break;
            }        
       
  
        } else if (numberArr.length === 3){
            if (numberArr[1] === '0'&& numberArr[2] !== '0') {
                result += namesNumbers1[+numberArr[0]] + ' ' + namesNumbers3[0] + ' ' +  namesNumbers1[numberArr[2]];
                break;
            } else if (numberArr[2] === '0' && numberArr[1] !== '0') {
                result += namesNumbers1[+numberArr[0]] + ' ' + namesNumbers3[0] + ' ' +  namesNumbers2[+numberArr[1]-1];
                break;              
  
            } else if (numberArr[1] === '0' && numberArr[2] === '0') {
                result += namesNumbers1[+numberArr[0]] + ' ' + namesNumbers3[0];
                break;              
  
            } else {
                if (numberArr[1] === '1'){
                result += namesNumbers1[+numberArr[0]] + ' ' + namesNumbers3[0] + ' ' + namesNumbers4[+numberArr[2]-1]
                break;
                } else {
                  result += namesNumbers1[+numberArr[0]] + ' ' + namesNumbers3[0] + ' ' + namesNumbers2[+numberArr[1]-1] + ' ' +  namesNumbers1[numberArr[2]];
                  break;
                }
            }
  
        }
  
    }
    return result;
  }

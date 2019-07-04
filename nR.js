function tipeNumber(number){

    let result = number.toLowerCase()
      if(result === 'i'){
        return 1;
      }
      else if( result === 'v'){
        return 5;
      }
      else if( result === 'x'){
        return 10;
      }
      else if( result === 'l'){
        return 50;
      }
      else if( result === 'c'){
        return 100;
      }
      else if (result === 'd'){
        return 500;
      }
      else if(result === 'm'){
        return 1000;
      }
      else{
        return 'incorrect number'
      }
    }

    function equal(number){
        let result = number.toLowerCase()

        if(result === 'i'){
            return number.toLowerCase();
          }
          else if(result === 'v'){
            return number.toLowerCase();
          }
          else if(result === 'x'){
            return number.toLowerCase();
          }
          else if(result === 'l'){
            return number.toLowerCase();
          }
          else if(result === 'c'){
            return number.toLowerCase();
          }
          else if (result === 'd'){
            return number.toLowerCase();
          }
          else if(result === 'm'){
            return number.toLowerCase();
          }
          else{
            return false
          }
    }

    function isCorrect(number){

        number.split('');

        let resultCorrect = [];
        let resultIncorrect = [];
        for ( let i= 0; i < number.length ; i++){
            
            const correct = equal(number[i])

            if(correct === false){
                
                resultIncorrect.push(number[i])
                
            }
            else{
                resultCorrect.push(number[i]);

            }
        }

        if(resultIncorrect.length > 0 ){
            return 'Datos incorrectos: ' + resultIncorrect;
        }
        else {
            return resultCorrect;
        }
        console.log(resultCorrect)
        console.log(resultIncorrect)
        
    }

    let number = "Xoppi"
    //console.log(equal(number))
    //console.log(tipeNumber("l"))
    console.log(isCorrect(number))
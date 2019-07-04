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
    
    console.log(tipeNumber("l"))
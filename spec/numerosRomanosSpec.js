describe("Numeros Romanos", function() {
  

  it(" When the number is one", function() {
    const number = "I";

    const result = tipeNumber(number)

    expect(result).toEqual(1);

    
  });
  it("When the number is five", function() {
    const number = "V";

    const result = tipeNumber(number)

    expect(result).toEqual(5);

    
  });

  it("Define all the numbers", function() {
    const number = "M";

    const result = tipeNumber(number)

    expect(result).toEqual(1000);

    
  });
  
  it("Some number of the chain is incorrect", function() {
    const number = "xii";

    const result = isCorrect(number)

    expect(result).toEqual('xii');

    
  });
 
});


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
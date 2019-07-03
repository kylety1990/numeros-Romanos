describe("Numeros Romanos", function() {
  

  it(" When the number is one", function() {
    const number = "I";

    const result = tipeNumber(number)

    expect(result).toEqual(1);

    
  });

});


function tipeNumber(number){

let result = number.toLowerCase()
  if(result === 'i'){
    return 1
  }
}
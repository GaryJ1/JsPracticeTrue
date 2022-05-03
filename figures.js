//Square Code
console.group('Square')

function SquarePerimeter(squareSize) {
    return squareSize * 4
}

function SquareArea(squareSize) {
    return squareSize**2
}

console.groupEnd()



//Triangule Code
console.group('Triangule')

function triangulePerimeter( TrianguleBase, TrianguleSize, TrianguleSize2){
   
   result = TrianguleBase + TrianguleSize + TrianguleSize2
   return result
}
  

function trianguleArea(TrianguleBase, TrianguleHigh){
    return (TrianguleBase * TrianguleHigh)/2
}
console.groupEnd('Triangule')




//Circle code
console.group('Circle')


function diameterCircle(radio){ 
    return radio * 2
}

const pi = Math.PI

function perimeterCircle(radio){
    const diameter = diameterCircle(radio)
    return diameter * pi
}

function circleCircuference(diameterCircle){
    return diameterCircle * pi
}

function areaCircle(radio){
    return (radio * radio) * pi
}


console.groupEnd()

//function square in html

function calculateSquarePerimeter(){
    const input = document.getElementById('InputSquare');
    const value = input.value;

    const perimeter = SquarePerimeter(value);
    alert(perimeter)
}

function calculateSquarePerimeter(){
    const input = document.getElementById('InputSquare');
    const value = input.value;

    const perimeter = SquarePerimeter(value);
    alert(perimeter)
}
//function trangule in htmll
    function calculatetriangulePerimeter(){
    const input = document.getElementById('TrinaguleInOne')
    const inputTwo = document.getElementById('TrinaguleInTwo')
    const inputBase = document.getElementById('TrinaguleInBase');

    const value = parseInt(input.value);
    const valueTwo = parseInt(inputTwo.value);
    const valueBase = parseInt(inputBase.value);

    const perimeter = triangulePerimeter(value, valueTwo, valueBase);

    alert(perimeter)
}

function calculatetrianguleArea(){
    const inputHeight = document.getElementById('TrinaguleInHeight')
    const inputBase = document.getElementById('TrinaguleInBase');

    const valueHeight = parseInt(inputHeight.value);
    const valueBase = parseInt(inputBase.value);

    const area = trianguleArea(valueHeight, valueBase);

    alert(area)
}

//function Circle in html

function calculateCirclePerimeter(){
    const inputRadio = document.getElementById('radio')
    const valueRadio = parseInt(inputRadio.value)

    const perimeter = perimeterCircle(valueRadio)
    
    alert(perimeter)
}

function calculateCircleDiameter(){
    const inputRadio = document.getElementById('radio')
    const  inputValue = parseInt(inputRadio.value)

    const diameter = diameterCircle(inputValue);

    alert(diameter)
}

function calculateCircleCircunference(){
    const inputRadio = document.getElementById('radio')
    const inputValue = parseInt(inputRadio.value)
    diameter = inputValue*2

    const circuference = circleCircuference(diameter)
    alert(circuference)

}
function calculateCircleArea(){
    const inputRadio = document.getElementById('radio')
    const inputValue = parseInt(inputRadio.value)

    const area = areaCircle(inputValue)
    alert(area)
}

//Square Code
console.group('Square')
//const squareSize = 5
//console.log('Square Sizes is:' + squareSize + 'cm')

function SquarePerimeter(squareSize) {
    return squareSize * 4

}
//console.log('the square perimeter is:' + SquarePerimeter + 'cm')

function SquareArea(squareSize) {
    return squareSize**2
}
//console.log('The square area is:' + SquareArea + 'cm^2')

console.groupEnd()

//Triangule Code
console.group('Triangule')
/*const TrianguleSize = 6
const TrianguleSize2 = 6
const TrianguleHigh = 5.5
const TrianguleBase = 4

console.log(
    'Triangule Sizes are:' 
    + TrianguleSize + 'cm,' 
    + TrianguleSize2 + 'cm,'
    + TrianguleBase + 'cm')

console.log('The high of the triangule is:' + TrianguleHigh + 'cm')
*/  
function triangulePerimeter( TrianguleBase, TrianguleSize, TrianguleSize2){
   return TrianguleBase + TrianguleSize + TrianguleSize2
}
//console.log('the Triangule perimeter is:' + triangulePerimeter + 'cm')    

function trianguleArea(TrianguleBase, TrianguleHigh){
    return (TrianguleBase * TrianguleHigh)/2
}
//console.log('The Triangule area is:' + trianguleArea + 'cm^2')
console.groupEnd('Triangule')




//Circle code
console.group('Circle')

//const radio = 4;
//console.log('radio is: ' + radio + 'cm')

function diameterCircle(radio){ 
    return radio * 2
}
//console.log('diameter of the circle is: ' + diameter + 'cm')

const pi = Math.PI
//console.log('pi is: ' + pi)

function perimeterCircle(radio){
    const diameter = diameterCircle(radio)
    return diameter * pi
}

function circuference(diameterCircle){
    circuference = diameterCircle * pi
}

//console.log('the circuference of the circle is: ' + circuference + 'cm')

function areaCircle(radio){
    return (radio * radio) * pi
}
//console.log('The area of the circle: ' + areaCircle + 'cm')


console.groupEnd()

//Here we made the interaction with html

function calculateSquarePerimeter(){
    const input = document.getElementById("InputSquare");
    const value = input.value;

    const perimeter = SquarePerimeter(value);
    alert(perimeter);
}

function calculateSquareArea() {
    const input = document.getElementById("InputSquare");
    const value = input.value;

    const area = SquareArea(value);
    alert(area);

}
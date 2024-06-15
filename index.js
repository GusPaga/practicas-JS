// 1. Contraseña válida
//Escribir una función llamada contrasenaValida que reciba un string y retorne true si el string es igual a "2Fj(jjbFsuj" o "eoZiugBf&g9". De lo contrario debe retornar false.
// escribe tu respuesta acá
// const contrasenaValida = (contraseña) => {
//   if (contraseña === "") {
//     return false;
//   } else if (contraseña === "2Fj(jjbFsuj" || "eoZiugBf&g9") {
//     return true;
//   } else {
//     return false;
//   }
// };
// código de prueba
// console.log(contrasenaValida("2Fj(jjbFsuj")); // true
// console.log(contrasenaValida("eoZiugBf&g9")); // true
// console.log(contrasenaValida("hola")); // false
// console.log(contrasenaValida("")); // false
////////////////////////////////////////////////////////////////////////////////////////////////////////////

//2. Calcular impuestos
// Escribir una función llamada calcularImpuestos que reciba dos argumentos numéricos: edad e ingresos. Si edad es igual o mayor a 18 y los ingresos son iguales o mayores a 1000 debe retornar ingresos * 40%. De lo contrario retornar 0.

// escribe tu respuesta acá
// const calcularImpuestos = (edad, ingresos) => {
//   if (edad < 18 || ingresos < 1000) {
//     return 0;
//   } else {
//     return ingresos * 0.4;
//   }
// };
// código de prueba
// console.log(calcularImpuestos(18, 1000)); // 400
// console.log(calcularImpuestos(40, 10000)); // 4000
// console.log(calcularImpuestos(17, 5000)); // 0
// console.log(calcularImpuestos(30, 500)); // 0
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//3. IMC (ïndice de masa corporal)
// El índice de masa corporal (IMC), o BMI por sus siglas en inglés, es un valor que determina la cantidad de grasa de una persona.

// El BMI se calcula con la siguiente formula: peso / altura^2

// Escribir una función llamada bmi que reciba dos argumentos: peso y altura, y retorne un string con las siguientes posibilidades:

// "Bajo de peso" si el BMI < 18.5
// "Normal" si está entre 18.5 y 24.9
// "Sobrepeso" si está entre 25 y 29.9
// "Obeso" si es igual o mayor a 30

// escribe la función bmi acá
// const bmi = (peso, altura) => {
//   let indice = peso / (altura * altura);
//   let number = indice.toFixed(1);
//   console.log(number);

//   if (!peso || !altura) return "comprueba los datos";
//   if (number < 18.5) return "Bajo de peso";
//   if (number >= 18.5 && number < 24.9) return "Normal";
//   if (number > 25 && number < 29.9) return "Sobrepeso";
//   if (number > 30) return "Obeso";
// };
// código de prueba
// console.log(bmi(0, 1.8)); // "comprueba los datos"
// console.log(bmi(65, 1.8)); // "Normal"
// console.log(bmi(72, 1.6)); // "Sobrepeso"
// console.log(bmi(52, 1.75)); //  "Bajo de peso"
// console.log(bmi(135, 1.7)); // "Obeso"
///////////////////////////////////////////////////////////////////////////////////////////////////

//4. Escribir una función llamada imprimirArreglo que reciba un arreglo e imprima cada elemento en una línea a parte:
// escribe tu respuesta acá

const imprimirArreglo = (data) => {
  // for (const e of data) {
  //   console.log(e);
  // }

  // for (let index = 0; index < data.length; index++) {
  //   console.log(data[index]);
  // }

  data.map((e) => {
    console.log(e);
  });
};

// código de prueba
console.log(imprimirArreglo([1, "Hola", 2, "Mundo"]));
// 1
// Hola
// 2
// Mundo
////////////////////////////////////////////////////////////////////////////////////////////////////

// Escribe una función llamada likes que reciba un número y retorne un string utilizando el formato de K para miles y M para millones.

// Por ejemplo:
// const likes = (data) => {
//   if (typeof data === "number") {
//     if (data < 1000) {
//       return data;
//     }
//     if (data > 1000 && data < 1000000) {
//       const result = data / 1000;
//       return result.toFixed(0) + "K";
//     }
//     if (data > 1000000) {
//       const result = data / 1000000;
//       return result.toFixed(0) + "M";
//     }
//   } else {
//     return "verifica los datos";
//   }
// };

// 1400 se convierte en 1K
// 34,567 se convierte en 34K
// 7’456,345 se convierte en 7M.
// Si el número es menor a 1000 se debe devolver el mismo número como un string.
// escribe tu respuesta acá

// código de prueba
// console.log(likes("casa"));
// console.log(likes(983)); // "983"
// console.log(likes(1900)); // "1K"
// console.log(likes(54000)); // "54K"
// console.log(likes(120800)); // "120K"
// console.log(likes(25222444)); // "25M"
//////////////////////////////////////////////////////////////////////////////////////////////

//EJEMPLO DE CLASE Y MÉTODO
// class Car {
//   constructor(brand, year) {
//     this.brand = brand;
//     this.year = year;
//   }
//   age() {
//     const date = new Date();
//     return date.getFullYear() - this.year;
//   }
// }

// const myCar = new Car("Ford", 2006);
// console.log(  "My car is " + myCar.age() + " years old.");
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 6. FizzBuzz
// Escribir una función llamada fizzBuzz que reciba un número y retorne un string de acuerdo a lo siguiente:

// "fizz" si el número es múltiplo de 3.
// "buzz" si el número es múltiplo de 5.
// "fizzbuzz" si el número es múltiplo tanto de 3 como de 5.
// Si no cumple ninguna de las condiciones anteriores debe retornar el mismo número.

// escribe tu respuesta acá
// const fizzBuzz = (value) => {
//   if (typeof value === "number") {
//     if (value % 3 !== 0 && value % 5 !== 0) {
//       return value;
//     } else if (value % 3 === 0 && value % 5 === 0) {
//       return "fizzbuzz";
//     } else if (value % 3 === 0) {
//       return "fizz";
//     } else if (value % 5 === 0) {
//       return "buzz";
//     }
//   } else {
//     return "verifique sus datos";
//   }
// };

// código de prueba
// console.log(fizzBuzz(6)); // "fizz"
// console.log(fizzBuzz(20)); // "buzz"
// console.log(fizzBuzz(30)); // "fizzbuzz"
// console.log(fizzBuzz(8)); // 8
// console.log(fizzBuzz("hola")); // verifique sus datos
// console.log(fizzBuzz("")); // verifique sus datos
// console.log(fizzBuzz()); // verifique sus datos
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//7. Contar rango de números
// Escribir una función llamada contarRango que reciba dos números y retorne cuántos números que hay entre ellos (excluyéndolos):

// Nota: Utiliza un ciclo en tu solución. Puedes asumir que el primer número va a ser menor que el segundo.

// escribe tu respuesta acá
const contarRango = (a, b) => {
  let count = 0;

  let i = a + 1;

  while (i < b) {
    count++;
    a++;
  }
  return count;
};

// código de prueba
console.log(contarRango(1, 9)); // 7
console.log(contarRango(1332, 8743)); // 7410
console.log(contarRango(5, 6)); // 0

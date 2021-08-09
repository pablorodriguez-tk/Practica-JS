/*Variables y operaciones
1️⃣ Responde las siguientes preguntas en la sección de comentarios:

¿Qué es una variable y para qué sirve?

Una variable es un espacio reservado en memoria donde se almacena informacion.

¿Cuál es la diferencia entre declarar e inicializar una variable?

Una variable se declara para reservar el espacio en memoria, se inicializa para guardar info en ese espacio.

¿Cuál es la diferencia entre sumar números y concatenar strings?

Sumar numeros es una operacion matematica y concatenar es cuando se juntan 2 textos para formar uno solo.

¿Cuál operador me permite sumar o concatenar?

el signo de +


2️⃣ Determina el nombre y tipo de dato para almacenar en variables la siguiente información:
3️⃣ Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.

let nombre = 'Juanito';
let apellido = 'Alcachofa';
let nombreUsuario = 'JAlcachofa';
let edad = 21;
let email = 'jalcachofa@mail.com';
let mayorEdad = true;
let dineroAhorrado = 10000;
let deudas = null;

4️⃣ Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:

Nombre completo (nombre y apellido)
Dinero real (dinero ahorrado menos deudas)

const nombreCompleto = `${nombre} ${Apellido}`
const dineroReal = dineroAhorrado - deudas
console.log(nombreCompleto)
console.log(dineroReal)

FUNCIONES
1️⃣ Responde las siguientes preguntas en la sección de comentarios:

¿Qué es una función?

Es un bloque de codigo que hace una serie de procedimientos

¿Cuándo me sirve usar una función en mi código?

Cuando se repite varias lineas de codigo en el proyecto

¿Cuál es la diferencia entre parámetros y argumentos de una función?

Parametro es una variable que esta en la definicion de una funcion.
Argumento son los datos que se le pasan a los parametros de una funcion.

2️⃣ Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:

const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

const funcion = (name,lastname,nickname) => {
  const response = completeName = `mi nombre es ${name} ${lastname}, y mi nickname es ${nickname}`;
  console.log(response);

}
funcion("Juan David","Castro Gallego","juandc")

Condicionales
1️⃣ Responde las siguientes preguntas en la sección de comentarios:

¿Qué es una condicional?

Es un grupo de instrucciones que se ejecuta segun el resultado de una evaluacion


¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?

if , else if, switch

¿Puedo combinar funciones y condicionales?

Si se puede

2️⃣ Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:

const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}
3️⃣ Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).

const tipoDeSuscripcion = "basic";
if(tipoDeSuscripcion === 'Free'){
	console.log("Solo puedes tomar los cursos gratis");
} else if (tipoDeSuscripcion === 'Basic') {
	console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if (tipoDeSuscripcion === 'Expert') {
	console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else if (tipoDeSuscripcion === 'Expert+') {
	console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}

// Codigo solo con if
const tipoDeSuscripcion = 'basic';
if (tipoDeSuscripcion === 'Free') {
  console.log('Solo puedes tomar los cursos gratis');
} else {
  if (tipoDeSuscripcion === 'Basic') {
    console.log('Puedes tomar casi todos los cursos de Platzi durante un mes');
  } else {
    if (tipoDeSuscripcion === 'Expert') {
      console.log(
        'Puedes tomar casi todos los cursos de Platzi durante un año'
      );
    } else {
      if (tipoDeSuscripcion === 'Expert+') {
        console.log(
          'Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año'
        );
      }
    }
  }
}

Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays y un solo condicional. 😏

Ciclos
1️⃣ Responde las siguientes preguntas en la sección de comentarios:

¿Qué es un ciclo? Un bloque de codigo que se repite n veces
¿Qué tipos de ciclos existen en JavaScript? for for in for of while do while
¿Qué es un ciclo infinito y por qué es un problema? Es un ciclo que nunca se va a detener, puede causar que nuestro ordenador se apague por exceso consumo de memoria en el navegador
¿Puedo mezclar ciclos y condicionales? si se puede


2️⃣ Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:

for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}
for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}

let i = 0;
while (i < 5) {
	console.log("El valor de i es: " + i);
	i++;
}

i = 10;
while (i >= 2) {
	console.log("El valor de i es: " + i);
	i--;
}


3️⃣ Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.

Pista: puedes usar la función prompt de JavaScript.

function juego() {
  let resultado;
  do {
    resultado = parseInt(prompt('¿Cuál es el resultado de "2 + 2". R: '));
  } while (resultado !== 4);

  return console.log('¡Eres un GENIO!');
}
juego();


Listas
1️⃣ Responde las siguientes preguntas en la sección de comentarios:

¿Qué es un array? Un Un array es un tipo de datos objetos, puedes guardar distintos valores como si fuera una lista y se encuentran seguidos en memoria.
    let lista = ['hola', 'como', 'estas']
¿Qué es un objeto?
Un objeto te permite guardar datos con claves y valores ejemplo:
  const objetoCarro = {
    marca: 'Bugatti',
    modelo: 'Chiron',
    precio: '1 USD'
  }
¿Cuándo es mejor usar objetos o arrays?
Depende mucho, pero algo que ahorita se me viene a la cabeza, es mejor utilizar un objeto cuando tienes que
 guardar datos que son repetitivos como un usuario que siempre va a tener las mismas claves y solo cambian los valores.
¿Puedo mezclar arrays con objetos o incluso objetos con arrays? si

2️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.
const array = [1,2,3,4,5]
const funcion = (array = []) => {
console.log(array[0]);
}

3️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).
const array = [1, 2, 3, 4, 5];

const funcion = (array = []) => {
  array.map((value) => console.log(value));
};

funcion(array);


4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).


const objeto = { a: 'ok', b: 'no' };

const funcion = (objeto = {}) => {
  Object.values(objeto).map((elemento) => console.log(elemento));
};

funcion(objeto);


¿Cómo te fue? 🏆
¡Felicidades por completar la prueba de JavaScript! Confío en que hayas completado cada paso y hayas pausado para repasar los temas de los ejercicios que se te complicaron.

Ahora sí, continúa a la siguiente clase, pero recuerda que ya no puedes abandonar el curso, debes completarlo hasta el final. No importa cuánto tiempo te tome. Yo sé que tú puedes y tú deberías de saberlo también. Mira todo lo que lograste con esta prueba. 🏆

¡Te espero en la siguiente clase para comenzar!*/

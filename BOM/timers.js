


/*const saludo = () =>
{

    console.log('Hola');
};

let id;
const iniciar = () => 
{
    console.log('iniciando...');
   id = setTimeout(saludo, 5000);
};

const parar = () => 
{
    console.log('se detuvo');
    clearTimeout(id);
};*/


let contador = 0;
let id;
const iniciar = () => 
{
id = setInterval(() => {
    console.log(contador);
    contador++;
}, 1000);
};

const parar = () => 
{
    console.log('se detuvo');
    clearInterval(id);
};
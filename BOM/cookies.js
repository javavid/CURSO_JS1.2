







let inicioSesion = () => 
{
    const usuario = prompt('Usuario:');
    document.cookie = `nombre=${usuario}`;
    alert('Sesion iniciada');
};

console.log(document.cookie);//para mostrar las cookies guardadas.

let Ususario;

const cookies = document.cookie.split(';');

cookies.forEach((cooki) => {
    const propiedad = cooki.split('=')[0];
    if(propiedad === 'nombre')
    {
        Ususario = cooki.split('=')[1];
    }
});

if(Ususario)
{
    console.log('Hola', Ususario);
}else
{
    console.log('por favor inicia Sesion');
}
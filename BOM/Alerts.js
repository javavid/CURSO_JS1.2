

//alert('hola usuario');

const ingresar = () => 
{
    const permitido = confirm('Eres mayor de edad?');
    if(permitido)
    {
        alert('Bienvenido');
    }else
    {
        alert('no apto');
    }
};
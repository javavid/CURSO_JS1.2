

const eliminarCaja = () =>
{
    const padre = document.getElementById('contenedor1');
    const boxADelete = padre.querySelector('.caja');

    if(boxADelete)
    {
    padre.removeChild(boxADelete);
    }else
    {
        alert("Vacido, no se puede eleminar");
    }
}
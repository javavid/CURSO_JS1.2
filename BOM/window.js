

let ventana;
const abrirVentana = () => {
  ventana = window.open('https://www.facebook.com/?locale=es_LA','Mi Ventana');
};

const cerrarVentana = () => {
    ventana.close();
  };
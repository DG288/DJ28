
function Boton({ texto }) {
  texto ||= "Haz clic aquí";
  return <button>{texto}</button>;
}
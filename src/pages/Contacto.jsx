export default function contacto() {
    return (
    <div className="container_contact">
      <h1>Cuéntanos, ¿en qué te podemos ayudar?</h1>
      <p>Correo</p>
      <input type="email" placeholder="nombre@ejemplo.com" />
      <p>Descripción</p>
      <textarea type="text" maxlength="500" />
      <button className="btn btn-danger">Enviar</button>
    </div>
  )}
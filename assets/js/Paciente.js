export default class Paciente {
  constructor(nombre, edad, rut, diagnostico) {
    this._nombre = () => nombre;
    this._edad = () => edad;
    this._rut = () => rut;
    this._diagnostico = () => diagnostico;
  }
  get nombre() {
    return this._nombre();
  }
  get edad() {
    return this._edad();
  }
  get rut() {
    return this._rut();
  }
  get diagnostico() {
    return this._diagnostico();
  }
  set nombre(nombre) {
    this._nombre = () => nombre;
  }
  set edad(edad) {
    this._edad = () => edad;
  }
  set rut(rut) {
    this.rut = () => rut;
  }
  set diagnostico(diagnostico) {
    this._diagnostico = () => diagnostico;
  }
  listPacientes(id, i) {
    const data = document.getElementById(id);
    data.innerHTML += `<tr>
      <th scope="row">${i}</th>
      <td>${this.nombre}</td>
      <td>${this.edad}</td>
      <td>${this.rut}</td>
      <td>${this.diagnostico}</td>
    </tr>;`;
  }
}
/* export default Paciente;  Es lo mismo */

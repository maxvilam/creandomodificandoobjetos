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
    imprimirDatos(id, i) {
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
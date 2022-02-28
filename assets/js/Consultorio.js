export default class Consultorio {
    constructor(nombre, paciente) {
      this._nombre = () => nombre;
      this._paciente = () => paciente;
    }
    get nombre() {
      return this._nombre();
    }
    get paciente() {
      return this._paciente();
    }
  }
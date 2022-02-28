"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Paciente = /*#__PURE__*/function () {
  function Paciente(nombre, edad, rut, diagnostico) {
    _classCallCheck(this, Paciente);

    this._nombre = function () {
      return nombre;
    };

    this._edad = function () {
      return edad;
    };

    this._rut = function () {
      return rut;
    };

    this._diagnostico = function () {
      return diagnostico;
    };
  }

  _createClass(Paciente, [{
    key: "nombre",
    get: function get() {
      return this._nombre();
    }
  }, {
    key: "edad",
    get: function get() {
      return this._edad();
    }
  }, {
    key: "rut",
    get: function get() {
      return this._rut();
    }
  }, {
    key: "diagnostico",
    get: function get() {
      return this._diagnostico();
    }
  }, {
    key: "imprimirDatos",
    value: function imprimirDatos(id, i) {
      var data = document.getElementById(id);
      data.innerHTML += "<tr>\n    <th scope=\"row\">".concat(i, "</th>\n    <td>").concat(this.nombre, "</td>\n    <td>").concat(this.edad, "</td>\n    <td>").concat(this.rut, "</td>\n    <td>").concat(this.diagnostico, "</td>\n  </tr>;");
    }
  }]);

  return Paciente;
}();

var paciente1 = new Paciente("Max Avila", 47, "12131313-9", "hipertencion arterial");
var paciente2 = new Paciente("Jack Sear", 27, "213123123-9", "hipertencion arterial");
var paciente3 = new Paciente("Enrique Flores", 17, "213123123-9", "Difucion a la vista");
var paciente4 = new Paciente("Milagros Acosta", 47, "213123123-9", "hipertencion Pulmonar");
var paciente5 = new Paciente("Victor Fernandez", 47, "213123123-9", "Diabetes Mellitus 3");
var paciente6 = new Paciente("Is Pinto ", 15, "213123123-9", "Pancreatitis");
var paciente7 = new Paciente("Grancisco Lobos ", 2, "213123123-9", "Neuroblastoma");
var paciente8 = new Paciente("Jean Jaque ", 67, "213123123-9", "Enfermedad de PArkinson");
var paciente9 = new Paciente("Cesar Riveros ", 87, "213123123-9", "Alopecia por radiacion");
var paciente10 = new Paciente("Joshua Espinoza", 77, "213123123-9", "Enfermendad");
var pacientes = [{
  nombre: "Franco Urra",
  edad: 47,
  rut: "12345678-9",
  diagnostico: "Hipertensión Arterial"
}, {
  nombre: "Matías Mesa",
  edad: 27,
  rut: "12345678-9",
  diagnostico: "Diabetes Mellitus 1"
}, {
  nombre: "Enrique Flores",
  edad: 37,
  rut: "12345678-9",
  diagnostico: "Disfunción de la vista"
}, {
  nombre: "Milagros Acosta",
  edad: 17,
  rut: "12345678-9",
  diagnostico: "Hipertensión Pulmonar"
}, {
  nombre: "Victor Fernandez",
  edad: 47,
  rut: "12345678-9",
  diagnostico: "Diabetes Mellitus 2"
}, {
  nombre: "Is Pinto",
  edad: 15,
  rut: "12345678-9",
  diagnostico: "Pancreatitis Aguda"
}, {
  nombre: "Francisco Lobos",
  edad: 2,
  rut: "12345678-9",
  diagnostico: "Neuroblastoma"
}, {
  nombre: "Jean Jaque",
  edad: 67,
  rut: "12345678-9",
  diagnostico: "Enfermedad de Parkinson"
}, {
  nombre: "Cesar Riveros",
  edad: 87,
  rut: "12345678-9",
  diagnostico: "Alopecia por Radiación"
}, {
  nombre: "Joshua Espinoza",
  edad: 77,
  rut: "12345678-9",
  diagnostico: "Enfermedad de Creutzfeldt-Jakob"
}];
var promedioedad = 0;
var cantidadalumnos = 0;
pacientes.forEach(function (paciente, i) {
  var datosPacienet = new Paciente(paciente.nombre, paciente.edad, paciente.rut, paciente.diagnostico);
  promedioedad = paciente.edad + promedioedad;
  datosPacienet.imprimirDatos("table", i + 1);
  cantidadalumnos = i;
});
console.log(promedioedad, "-", cantidadalumnos, promedioedad / cantidadalumnos);
/* paciente1.imprimirDatos("table");
paciente2.imprimirDatos("table");
paciente3.imprimirDatos("table");
paciente4.imprimirDatos("table");
paciente5.imprimirDatos("table");
paciente6.imprimirDatos("table");
paciente7.imprimirDatos("table");
paciente8.imprimirDatos("table");
paciente9.imprimirDatos("table");
paciente10.imprimirDatos("table"); */
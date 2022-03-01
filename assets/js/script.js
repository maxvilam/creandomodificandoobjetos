import Consultorio from "./Consultorio.js";
import Paciente from "./Paciente.js";
import { pacientes } from "./data.js";

let promedioedad = 0;
let cantidadalumnos = 0;

function filterItems(query) {
  return pacientes.filter(function (el) {
    return el.nombre.toLowerCase().indexOf(query.toLowerCase()) > -1;
  });
}

const input = document.getElementById("buscapaciente");
input.addEventListener("keyup", logKey);
pacientes.forEach((paciente, i) => {
  const DatosPacienete = new Paciente(
    paciente.nombre,
    paciente.edad,
    paciente.rut,
    paciente.diagnostico
  );
  DatosPacienete.listPacientes("table", i + 1);
});
const agregarpaciente = document.getElementById("agregarpaciente");
agregarpaciente.addEventListener("click", cl);


function cl() {
  const nombrepaciente = document.getElementById("nombrepaciente").value;
  const edad = document.getElementById("edad").value;
  const rut = document.getElementById("rut").value;
  const diagnostico = document.getElementById("diagnostico").value;
  pacientes.push({nombre: nombrepaciente, edad: edad, rut: rut, diagnostico: diagnostico});
  logKey();
}
const data = document.getElementById("table");
function limpia() {data.innerHTML = ""};

function logKey() {
  limpia();
  /* data.innerHTML = ""; */
  const buscapaciente = document.getElementById("buscapaciente").value;
  const pacientesfiltrador = filterItems(buscapaciente);
  pacientesfiltrador.forEach((paciente, i) => {
    const DatosPacienete = new Paciente(
      paciente.nombre,
      paciente.edad,
      paciente.rut,
      paciente.diagnostico
    );
    DatosPacienete.listPacientes("table", i + 1);
  });
}

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

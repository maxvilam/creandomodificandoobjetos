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
function ordenar(){
  pacientes.sort(function (a, b) {
    if (a.nombre > b.nombre) {
      return 1;
    }
    if (a.nombre < b.nombre) {
      return -1;
    }
    return 0;
  });
}
ordenar();

const input = document.getElementById("buscapaciente");
input.addEventListener("keyup", filtrarportexto);
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
agregarpaciente.addEventListener("click", agrega);

const mod_paciente = document.getElementById("mod_paciente");
mod_paciente.addEventListener("click", modificar);

const kill_paciente = document.getElementById("kill_paciente");
kill_paciente.addEventListener("click", eliminarpaciente);

function eliminarpaciente() {
  const longitud = pacientes.length;
  const item = document.getElementById("item").value;

  if (item == "" || item < 1 || item > longitud) {
    alert("Ingrese un item a eliminar, debe ser entre 1 y " + longitud);
    return;
  }
  const resultado = window.confirm(
    "Estas seguro que deseas eliminar al paciente: " + pacientes[item - 1].nombre
  );
  if (resultado === true) {
    delete pacientes[item - 1];
    ordenar();
    filtrarportexto();
    return;
  } else {
    window.alert("No eliminado");
    return;
  }
}

function modificar() {
  const longitud = pacientes.length;
  const item = document.getElementById("item").value;
  const nombrepaciente = document.getElementById("nombrepaciente").value;
  const edad = document.getElementById("edad").value;
  const rut = document.getElementById("rut").value;
  const diagnostico = document.getElementById("diagnostico").value;

  if (item == "" || item < 1 || item > longitud) {
    alert("Ingrese un item a modificar, debe ser entre 1 y " + longitud);
    return;
  }
  if (nombrepaciente == "") {
    alert("Ingrese en nombre del paciente");
    return;
  }
  if (edad == "") {
    alert("Ingrese la edad del paciente");
    return;
  }
  if (rut == "") {
    alert("Ingrese el rut del paciente");
    return;
  }
  if (diagnostico == "") {
    alert("Ingrese el diagnostico del paciente");
    return;
  }
  const resultado = window.confirm(
    "Estas seguro que deseas modificar a: " + pacientes[item - 1].nombre
  );
  if (resultado === true) {
    pacientes[item-1] = {
      nombre: nombrepaciente,
      edad: edad,
      rut: rut,
      diagnostico: diagnostico,
    };
    ordenar();
    filtrarportexto();
    return;
  } else {
    window.alert("No modificado");
    return;
  }
}

function agrega() {
  const nombrepaciente = document.getElementById("nombrepaciente").value;
  const edad = document.getElementById("edad").value;
  const rut = document.getElementById("rut").value;
  const diagnostico = document.getElementById("diagnostico").value;
  pacientes.push({
    nombre: nombrepaciente,
    edad: edad,
    rut: rut,
    diagnostico: diagnostico,
  });
  filtrarportexto();
}
const data = document.getElementById("table");
function limpia() {
  data.innerHTML = "";
}

function filtrarportexto() {
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
<template>
    <div class="container">
      <div class="col">
      </div>
      <div class="col">
        <div class="row-md-8 pt-3">
            <div class="card shadow rounded">
                <div class="card-header">
                    <h3>Paciente</h3>
                </div>
                <div class="card-body">
                  <div class="form-group">
                    <input type="text" class="form-control form-control-sm" v-model="paciente.sip" placeholder="SIP" disabled>
                  </div>
                  <div class="form-group">
                    <input type="email" class="form-control form-control-sm" v-model="paciente.email" placeholder="@Correo" disabled>
                  </div>
                  <div class="form-group">
                    <input type="text" class="form-control form-control-sm" v-model="paciente.nombre" placeholder="Nombre" disabled>
                  </div>
                  <div class="form-group">
                    <input type="text" class="form-control form-control-sm" v-model="paciente.pApellido" placeholder="Primer Apellido" disabled>
                  </div>
                  <div class="form-group">
                    <input type="text" class="form-control form-control-sm" v-model="paciente.sApellido" placeholder="Segundo Apellido" disabled>
                  </div>
                  <div class="form-group">
                    <input type="tel" class="form-control form-control-sm" v-model="paciente.telefono" placeholder="Telefono" disabled>
                  </div>
                  <div class="form-group">
                    <input type="tel" class="form-control form-control-sm" v-model="paciente.otroTelefono" placeholder="Otro Telefono" disabled>
                  </div>
                  <div class="form-group">
                    <input type="text" class="form-control form-control-sm" v-model="paciente.direccion" placeholder="Direccion" disabled>
                  </div>
                  <div class="form-group">
                    <input type="text" class="form-control form-control-sm" v-model="paciente.localidad" placeholder="Localidad" disabled>
                  </div>
                  <div class="form-group">
                    <input type="text" class="form-control form-control-sm" v-model="paciente.cp" placeholder="Codigo Postal" disabled>
                  </div>
                  <div class="form-group">
                    <input type="date" class="form-control form-control-sm" v-model="paciente.fNacimiento" placeholder="Fecha Nacimiento" disabled>
                  </div>
                </div>
            </div>
        </div>
        <div class="row-md-8 pt-5">
                <div class="card shadow">
                    <div class="card-header">
                        <h3>Sesiones Pendientes</h3>
                    </div>
                    <div class="card-body">
                        <b-pagination align="center" :total-rows="this.sesiones.length" v-model="paginaActual" :per-page="itemsPagina"></b-pagination>
                    <table class="table table-bordered table-hover small">
                        <thead>
                            <tr>
                                <th scope="col">F Registro</th>
                                <th scope="col">Monitor</th>
                                <th scope="col">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(s, index) in paginador(sesiones)" :key="index">
                                <td>{{ s.fRegistro }}</td>
                                <td>{{ s.monitor }} ({{ s.numeroSerieMonitor }})</td>
                                <td class="text-center">
                                    <button class="btn btn-success" @click="btnRedirect('registrosesion', s._id)">INICIAR</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
          </div>
          <div class="row-md-8 pt-5 mb-3">
            <div class="card shadow rounded">
                <div class="card-header">
                    <h3>Sesiones Realizadas</h3>
                </div>
                <div class="card-body">

                </div>
            </div>
          </div>
        </div>
        <div class="col-md-2">
        </div>
    </div>
</template>

<script>
import moment from "moment";

import toastr from "toastr";
toastr.options.timeOut = 2000;

import bPagination from "bootstrap-vue/es/components/pagination/pagination"

class Paciente {
  constructor(sip,email,nombre,pApellido,sApellido,telefono,otroTelefono,direccion,localidad,cp,fNacimiento,sexo) {
    this.sip = sip
    this.email = email
    this.nombre = nombre
    this.pApellido = pApellido
    this.sApellido = sApellido
    this.telefono = telefono
    this.otroTelefono = otroTelefono
    this.direccion = direccion
    this.localidad = localidad
    this.cp = cp
    this.fNacimiento = fNacimiento
    this.sexo
  }
}

export default {
  components: {
    bPagination
  },
  data() {
    return {
      paciente: new Paciente(),
      sesiones: [],
      paginaActual: 1,
      pacientesPagina: 8,
      itemsPagina: 10
    };
  },
  created() {
    this.getPaciente()
    this.getSesiones(window.$cookies.get("paciente"));
  },
  methods: {
    getPaciente(){
      fetch("/api/pacientes/sip/" + window.$cookies.get("paciente"))
        .then(res => res.json())
        .then(data => {
          this.paciente = data
          this.paciente.fNacimiento = moment(data.fNacimiento).format('YYYY-MM-DD')
        });
    },
    getPacientes() {
      fetch("/api/pacientes")
        .then(res => res.json())
        .then(data => {
          for (var i = 0; i < data.length; i++) {
            data[i].fNacimiento = moment(data[i].fNacimiento).format(
              "DD/MM/YYYY"
            );
          }

          this.pacientes = data;
        });
    },
    getSesiones(sip) {
      fetch("/api/sesiones/sip/" + sip)
        .then(res => res.json())
        .then(data => {
          for (var i = 0; i < data.length; i++) {
            data[i].fRegistro = moment(data[i].fRegistro).format("DD/MM/YYYY");
          }
          this.sesiones = data;
        });
    },
    paginador(p) {
      const indiceInicio = (this.paginaActual - 1) * this.pacientesPagina;
      const indiceFinal =
        indiceInicio + this.paginaActual > p.length
          ? p.length
          : indiceInicio + this.paginaActual;
      return p.slice(indiceInicio, indiceInicio + this.pacientesPagina);
    },
    btnRedirect(ruta, id) {
      window.location.replace("#/" + ruta);
      window.$cookies.set("sesion", id);
      //window.location.reload()
    }
  }
};
</script>

<style lang="css" scoped>

.card-header .fa {
  transition: .3s transform ease-in-out;
}
.card-header .collapsed .fa {
  transform: rotate(90deg);
}

</style>

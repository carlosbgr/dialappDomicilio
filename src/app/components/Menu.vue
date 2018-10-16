<template>
    <div class="container">
      <div class="col">
        </div>
              <div class="col">
        <div class="row-md-8 pt-5">
                <div class="card shadow">
                    <div class="card-header">
                        <h3>Sesiones</h3>
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
                                    <button class="btn btn-success">INICIAR</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
        </div>
        <div class="row-md-8 pt-5">
            <div class="card shadow rounded">
                <div class="card-header">
                    <h3>Mantenimiento</h3>
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

import bPagination from "bootstrap-vue/es/components/pagination/pagination";

export default {
  components: {
    bPagination
  },
  data() {
    return {
      pacientes: [],
      sesiones: [],
      paginaActual: 1,
      pacientesPagina: 8,
      itemsPagina: 10
    };
  },
  created() {
    //this.getPacientes();
    this.getSesiones(window.$cookies.get("paciente"));
  },
  methods: {
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
      window.$cookies.set("paciente", id);
      //window.location.reload()
    }
  }
};
</script>

<style lang="css" scoped>
</style>

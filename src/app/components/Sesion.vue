<template>
    <div class="container">
      <div class="col">
          <div class="row-md-5 pt-3 mb-3 text-sm">
            <div class="card shadow rounded">
                <div class="card-header">
                    <h3>Sesion {{ fecha }} </h3>
                </div>
                <div class="card-body">

                </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
import moment from "moment";

import toastr from "toastr";
toastr.options.timeOut = 2000;

class Sesion {
  constructor(
    sip,
    facultativo,
    monitor,
    numeroSerieMonitor,
    horasSesion,
    dializador,
    accesoVascular,
    tipobano,
    baseBano,
    bano,
    pesoseco,
    ufmax,
    ac,
    qd,
    obsfacultativo,
    fRegistro
  ) {
    this.sip = sip;
    this.facultativo = facultativo;
    this.monitor = monitor;
    this.numeroSerieMonitor = numeroSerieMonitor;
    this.horasSesion;
    this.dializador, this.accesoVascular, this.tipobano;
    this.basebano;
    this.bano;
    this.pesoseco;
    this.ufmax;
    this.ac;
    this.qd;
    this.obsfacultativo;
    this.fRegistro = fRegistro
  }
}

export default {
  data() {
    return {
      sesion: new Sesion(),
      fecha: new Date().getDay + "/" + new Date().getMonth + "/" + new Date().getFullYear,
    };
  },
  created() {
      this.getFechaHoy()
      this.getSesion()
  },
  methods: {
    getSesion() {
      fetch("/api/sesiones/" + window.$cookies.get("sesion"))
        .then(res => res.json())
        .then(data => {
          console.log(data)

          this.sesion = data;
          this.sesion.fRegistro = moment(this.sesion.fRegistrofRegistro).format("DD/MM/YYYY");
        });
    },
    getFechaHoy(){
      var dt = new Date()
      var d = dt.getDate()
      var m = dt.getMonth()
      var y = dt.getFullYear()

      this.fecha = d + "/" + m + "/" + y
    }
  }
};
</script>

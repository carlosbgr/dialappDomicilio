<template>
    <div class="container">
      <div class="col">
        <div class="row-md-1 pt-3 mb-1">
          <button class="form-group btn btn-primary btn-block shadow" @click="volver">Volver al Menu</button>
        </div>
        <div class="row-md-5 pt-3 mb-1 text-sm">
            <div class="card shadow rounded">
                <div class="card-header">
                    <h3>Monitor Asignado </h3>
                </div>
                <div class="card-body">
                  <div class="form-group row">
                    <div class="col">
                      <label for="ex1">Modelo:</label>
                      <input class="form-control text-center" id="ex1" type="text" v-model=monitor.tipomonitor disabled>
                    </div>
                    <div class="col">
                      <label for="ex2">N\S:</label>
                      <input class="form-control text-center" id="ex1" type="text" v-model=monitor.numeroSerie disabled>
                    </div>
                  </div>
                </div>
            </div>
          </div>
          <div class="row-md-5 pt-3 mb-1 text-sm">
            <div class="card shadow rounded">
                <div class="card-header">
                    <h3>Sesion</h3>
                </div>
                <div class="card-body">
                  <div class="form-group row mb-2">
                    <div class="col">
                      Fecha:
                      <input class="form-control text-center" type="text" v-model=fecha disabled>
                    </div>
                    <div class="col">
                      Hora Inicio:
                      <input class="form-control text-center" type="text" v-model=hora disabled>
                    </div>
                    <div class="col">
                      Duracion:
                      <input class="form-control text-center" type="text" v-model=sesion.horasSesion disabled>
                    </div>
                  </div>
                  <div class="form-group row mb-2">
                    <div class="col">
                      AV:
                      <input class="form-control text-center" type="text" v-model=sesion.accesoVascular disabled>
                    </div>
                    <div class="col">
                      AC:
                      <input class="form-control text-center" type="text" v-model=sesion.ac disabled>
                    </div>
                  </div>
                  <div class="form-group row mb-2">
                    <div class="col">
                      QD:
                      <input class="form-control text-center" type="text" v-model=sesion.qd disabled>
                    </div>
                    <div class="col">
                      Dializador:
                      <input class="form-control text-center" type="text" v-model=sesion.dializador disabled>
                    </div>
                  </div>
                  <div class="form-group row mb-2">
                    <div class="bg-light border mt-1 mb-1 ml-3 mr-3 p-2">
                      <div class="form-row">
                        <div class="col bano">
                          <label><strong>Baño</strong></label>
                        </div>
                      </div>
                      <div class="form-row">
                        <div class="col">
                          Tipo:
                          <input class="form-control text-center" type="text" v-model=sesion.qd disabled>
                        </div>
                        <div class="col">
                          Base:
                          <input class="form-control text-center" type="text" v-model=sesion.dializador disabled>
                        </div>
                        <div class="col">
                          Ca - K:
                          <input class="form-control text-center" type="text" v-model=sesion.bano disabled>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="form-group row mb-2">
                    <div class="col">
                      UFMax:
                      <input class="form-control text-center" type="text" v-model=sesion.ufmax disabled>
                    </div>
                    <div class="col">
                      UF:
                      <input class="form-control text-center" type="text" v-model=sesion.uf>
                    </div>
                  </div>
                  <div class="form-group row mb-2">
                    <div class="col">
                      Peso Seco:
                      <input class="form-control text-center" type="text" v-model=sesion.pesoseco disabled>
                    </div>
                    <div class="col">
                      Peso Inicio:
                      <input class="form-control text-center" type="text" v-model=sesion.peso_con>
                    </div>
                    <div class="col">
                      Peso Fin:
                      <input class="form-control text-center" type="text" v-model=sesion.peso_Desc>
                    </div>
                  </div>
                  <div class="form-group row mb-2">
                    <div class="col">
                      Observaciones Facultativo:
                      <textarea class="form-control text-center" type="text" v-model=sesion.obsfacultativo disabled />
                    </div>
                  </div>
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
  constructor(sip,facultativo,monitor,numeroSerieMonitor,horasSesion,dializador,accesoVascular,tipobano,baseBano,
    bano,pesoseco,ufmax,ac,qd,obsfacultativo,fRegistro,fecha,Hora,peso_con,peso_Desc,uf,tasa,volsanguineo,sintomas,lote,
    obspaciente,conTA,conFC,conTEMP,conQB,conPV,conPA,unaHoraTA,unaHoraFC,unaHoraTEMP,unaHoraQB,unaHoraPV,unaHoraPA,
    dosHoraTA,dosHoraFC,dosHoraTEMP,dosHoraQB,dosHoraPV,dosHoraPA,descHoraTA,descHoraFC,descHoraTEMP,descHoraQB,descHoraPV,descHoraPA) {
    this.sip = sip;
    this.facultativo = facultativo
    this.fRegistro = fRegistro
    this.monitor = monitor;
    this.numeroSerieMonitor = numeroSerieMonitor
    this.horasSesion
    this.dializador 
    this.accesoVascular,
    this.tipobano
    this.basebano
    this.bano
    this.pesoseco
    this.ufmax
    this.ac
    this.qd
    this.obsfacultativo
    this.fecha,
    this.Hora,
    this.peso_con,
    this.peso_Desc,
    this.uf,
    this.tasa,
    this.volsanguineo,
    this.sintomas,
    this.lote,
    this.obspaciente,
    this.conTA,
    this.conFC,
    this.conTEMP,
    this.conQB,
    this.conPV,
    this.conPA,
    this.unaHoraTA,
    this.unaHoraFC,
    this.unaHoraTEMP,
    this.unaHoraQB,
    this.unaHoraPV,
    this.unaHoraPA,
    this.dosHoraTA,
    this.dosHoraFC,
    this.dosHoraTEMP,
    this.dosHoraQB,
    this.dosHoraPV,
    this.dosHoraPA,
    this.descHoraTA,
    this.descHoraFC,
    this.descHoraTEMP,
    this.descHoraQB,
    this.descHoraPV,
   this.descHoraPA
  }
}

class Monitor {
  constructor(numeroSerie,tipomonitor) {
    this.numeroSerie = numeroSerie
    this.tipomonitor = tipomonitor
  }
}

export default {
  data() {
    return {
      sesion: new Sesion(),
      monitor: new Monitor()
    };
  },
  created() {
      this.getFechaHoy()
      this.getSesion()
      this.getMonitor()
  },
  methods: {
    getSesion() {
      fetch("/api/sesiones/" + window.$cookies.get("sesion"))
        .then(res => res.json())
        .then(data => {
          this.sesion = data;
          this.sesion.fRegistro = moment(this.sesion.fRegistrofRegistro).format("DD/MM/YYYY");
          this.sesion.horasSesion += ":00" 
        });
    },
    getMonitor() {
      fetch("/api/monitores/asignacionmonitor/" + window.$cookies.get("paciente"))
        .then(res => res.json())
        .then(data => {
          console.log(data[0])
          this.monitor = data[0]
          //console.log(this.monitor)
        });
    },
    getFechaHoy(){
      var dt = new Date()
      var d = dt.getDate()
      var m = dt.getMonth()
      var y = dt.getFullYear()

      this.fecha = d + "/" + m + "/" + y
    },
    getHora(){
      var dt = new Date()
      var h = dt.getHours
      var m = dt.getMinutes

      this.hora = h + ":" + m
    },
    volver() {
      this.$router.replace("/menu")
      window.$cookies.remove("sesion")
    }
  }
};
</script>

<style lang="css" scoped>

.medidas {
  font-size: 80%;
  padding-top: 1%;
}

</style>

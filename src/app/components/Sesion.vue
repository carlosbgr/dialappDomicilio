<template>
  <div class="container">
    <div class="col">
      <div class="row-md-1 pt-3 mb-1">
        <button class="form-group btn btn-primary btn-block btn-sm shadow" @click="volver">Volver al Menu</button>
      </div>
      <div class="row-md-5 pt-0 mb-1">
        <div class="card shadow rounded ">
          <div class="card-header" style="height: 3rem;">
            <h3 class="text-xl">Monitor Asignado </h3>
          </div>
          <div class="card-body px-3 py-2">
            <div class="form-group row">
              <div class="col">
                Modelo:
                <input class="form-control form-control-sm text-center" id="ex1" type="text" v-model=monitor.tipomonitor disabled>
              </div>
              <div class="col">
                N\S:
                <input class="form-control form-control-sm text-center" id="ex1" type="text" v-model=monitor.numeroSerie disabled>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row-md-5 pt-1 mb-1">
        <div class="card shadow rounded ">
          <div class="card-header" style="height: 3rem;">
            <span class="text-xl">Sesion</span>
            <span class=" text-right text-sm"> {{ fecha }} - {{ hora }}</span>
            <span class=" text-left text-sm"> Duracion: {{ sesion.horasSesion }}</span>
          </div>
          <div class="card-body">
            <div class="form-group row mb-2">
              <div class="col">
                AV:
                <input class="form-control form-control-sm text-center text-md" type="text" v-model=sesion.accesoVascular disabled>
              </div>
              <div class="col">
                AC:
                <input class="form-control form-control-sm text-center text-md" type="text" v-model=sesion.ac disabled>
              </div>
            </div>
            <div class="form-group row mb-2">
              <div class="col">
                QD:
                <input class="form-control form-control-sm text-center text-md" type="text" v-model=sesion.qd disabled>
              </div>
              <div class="col">
                Dializador:
                <input class="form-control form-control-sm text-center text-md" type="text" v-model=sesion.dializador disabled>
              </div>
            </div>
            <div class="form-group row mb-2 border mx-0 py-2 px-2">
              <strong>Baño:</strong>
              <div class="row">
                <div class="col">
                  Tipo:
                  <input class="form-control form-control-sm text-center text-md mx-1" type="text" v-model=sesion.tipobano disabled>
                </div>
                <div class="col">
                  Base:
                  <input class="form-control form-control-sm text-center text-md" type="text" v-model=sesion.basebano disabled>
                </div>
              </div>
              <div class="row ml-1" style="width:98%;">
                Ca - K:
                <input class="form-control form-control-sm text-center text-md block" type="text" v-model=sesion.bano disabled>
              </div>
            </div>
            <div class="form-group row mb-2">
              <div class="col">
                UFMax:
                <input class="form-control form-control-sm text-center text-md" type="text" v-model=sesion.ufmax disabled>
              </div>
              <div class="col">
                UF:
                <input class="form-control form-control-sm text-center" type="text" v-model=sesion.uf required>
              </div>
            </div>
            <div class="form-group row mb-2">
              <div class="col">
                P.Seco:
                <input class="form-control form-control-sm text-center" type="text" v-model=sesion.pesoseco disabled>
              </div>
              <div class="col">
                P.Inicio:
                <input class="form-control form-control-sm text-center" type="text" v-model=sesion.peso_con required>
              </div>
              <div class="col">
                P.Fin:
                <input class="form-control form-control-sm text-center" type="text" v-model=sesion.peso_Desc required>
              </div>
            </div>
            <div class="form-group row mb-3">
              <div class="col">
                Observaciones Facultativo:
                <textarea class="form-control form-control-sm text-center" type="text" v-model=sesion.obsfacultativo disabled />
              </div>
            </div>
            <div class="form-group row mb-1">
              <div class="col">
                <div class="btn-group ">
                  <button type="button" class="boton btn btn-sm btn-outline-primary" @click="cambioEstadoSesion('CON')">CON</button>
                  <button type="button" class="boton btn btn-sm btn-outline-warning" @click="cambioEstadoSesion('1H')">1H</button>
                  <button type="button" class="boton btn btn-sm btn-outline-success" @click="cambioEstadoSesion('2H')">2H</button>
                  <button type="button" class="boton btn btn-sm btn-outline-danger" @click="cambioEstadoSesion('DESC')">DESC</button>
                </div>
              </div>
            </div>
            <!--  CONEXION -->
            <template v-if="estadoSesion === 'CON'">
              <div class="form-group row mt-0 mb-0 border mx-0 py-2 px-2 border border-primary rounded">
                <div class="row">
                  <div class="col">
                    TA:
                    <input class="form-control form-control-sm text-center border border-primary" type="text" v-model=sesion.conTA required>
                  </div>
                  <div class="col">
                    FC:
                    <input class="form-control form-control-sm text-center border border-primary" type="text" v-model=sesion.conFC required>
                  </div>
                  <div class="col">
                    TEMP:
                    <input class="form-control form-control-sm text-center border border-primary" type="text" v-model=sesion.conTEMP required>
                  </div>
                </div>
                <div class="row">
                  <div class="col">
                    QB:
                    <input class="form-control form-control-sm text-center border border-primary" type="text" v-model=sesion.conQB required>
                  </div>
                  <div class="col">
                    PV:
                    <input class="form-control form-control-sm text-center border border-primary" type="text" v-model=sesion.conPV required>
                  </div>
                  <div class="col">
                    PA:
                    <input class="form-control form-control-sm text-center border border-primary" type="text" v-model=sesion.conPA required>
                  </div>
                </div>
              </div>
            </template>
            <!--  1H SESION -->
            <template v-if="estadoSesion === '1H'">
              <div class="form-group row mt-0 mb-0 border mx-0 py-2 px-2 border border-warning rounded">
                <div class="row">
                  <div class="col">
                    TA:
                    <input class="form-control form-control-sm text-center border border-warning" type="text" v-model=sesion.unaHoraTA required>
                  </div>
                  <div class="col">
                    FC:
                    <input class="form-control form-control-sm text-center border border-warning" type="text" v-model=sesion.unaHoraFC required>
                  </div>
                  <div class="col">
                    TEMP:
                    <input class="form-control form-control-sm text-center border border-warning" type="text" v-model=sesion.unaHoraTEMP disabled>
                  </div>
                </div>
                <div class="row">
                  <div class="col">
                    QB:
                    <input class="form-control form-control-sm text-center border border-warning" type="text" v-model=sesion.unaHoraQB disabled>
                  </div>
                  <div class="col">
                    PV:
                    <input class="form-control form-control-sm text-center border border-warning" type="text" v-model=sesion.unaHoraFC required>
                  </div>
                  <div class="col">
                    PA:
                    <input class="form-control form-control-sm text-center border border-warning" type="text" v-model=sesion.unaHoraPA required>
                  </div>
                </div>
              </div>
            </template>
            <!--  2H SESION -->
            <template v-if="estadoSesion === '2H'">
              <div class="form-group row mt-0 mb-0 border mx-0 py-2 px-2 border border-success rounded">
                <div class="row">
                  <div class="col">
                    TA:
                    <input class="form-control form-control-sm text-center border border-success" type="text" v-model=sesion.dosHoraTA required>
                  </div>
                  <div class="col">
                    FC:
                    <input class="form-control form-control-sm text-center border border-success" type="text" v-model=sesion.dosHoraFC required>
                  </div>
                  <div class="col">
                    TEMP:
                    <input class="form-control form-control-sm text-center border border-success" type="text" v-model=sesion.dosHoraTEMP disabled>
                  </div>
                </div>
                <div class="row">
                  <div class="col">
                    QB:
                    <input class="form-control form-control-sm text-center border border-success" type="text" v-model=sesion.dosHoraQB disabled>
                  </div>
                  <div class="col">
                    PV:
                    <input class="form-control form-control-sm text-center border border-success" type="text" v-model=sesion.dosHoraPV required>
                  </div>
                  <div class="col">
                    PA:
                    <input class="form-control form-control-sm text-center border border-success" type="text" v-model=sesion.dosHoraPA required>
                  </div>
                </div>
              </div>
            </template>
            <!--  DESCONEXION -->
            <template v-if="estadoSesion === 'DESC'">
              <div class="form-group row mt-0 mb-0 border mx-0 py-2 px-2 border border-danger rounded">
                <div class="row">
                  <div class="col">
                    TA:
                    <input class="form-control form-control-sm text-center border border-danger" type="text" v-model=sesion.descTA required>
                  </div>
                  <div class="col">
                    FC:
                    <input class="form-control form-control-sm text-center border border-danger" type="text" v-model=sesion.descFC required>
                  </div>
                  <div class="col">
                    TEMP:
                    <input class="form-control form-control-sm text-center border border-danger" type="text" v-model=sesion.descTEMP required>
                  </div>
                </div>
                <div class="row">
                  <div class="col">
                    QB:
                    <input class="form-control form-control-sm text-center border border-danger" type="text" v-model=sesion.descQB required>
                  </div>
                  <div class="col">
                    PV:
                    <input class="form-control form-control-sm text-center border border-danger" type="text" v-model=sesion.descPV required>
                  </div>
                  <div class="col">
                    PA:
                    <input class="form-control form-control-sm text-center border border-danger" type="text" v-model=sesion.descPA required>
                  </div>
                </div>
              </div>
            </template>
            <div class="form-group row border border-secondary mx-0 mt-2 rounded">
              <div class="row w-100 ml-0 mt-2 mb-4">
                <div class="col-4">
                  <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="cefaleas" value="Cefaleas" v-model=sesion.sintomas>
                    <label class="custom-control-label" for="cefaleas">Cefaleas</label>
                  </div>   
                </div>
                <div class="col-4">
                  <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="mareo" value="Mareo" v-model=sesion.sintomas>
                    <label class="custom-control-label" for="mareo">Mareo</label>
                  </div> 
                </div>
                <div class="col-4">
                  <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="calambres" value="Calambres" v-model=sesion.sintomas>
                    <label class="custom-control-label" for="calambres">Calambres</label>
                  </div>
                </div>
              </div>
              <div class="row ml-0 w-100 mb-4">
                <div class="col-4">
                  <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="dprecordial" value="DPrecordial" v-model=sesion.sintomas>
                    <label class="custom-control-label" for="dprecordial">DPrecordial</label>
                  </div>   
                </div>
                <div class="col-4">
                  <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="nauseas" value="Nauseas" v-model=sesion.sintomas>
                    <label class="custom-control-label" for="nauseas">Nauseas</label>
                  </div> 
                </div>
                <div class="col-4">
                  <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="vomitos" value="Vomitos" v-model=sesion.sintomas>
                    <label class="custom-control-label" for="vomitos">Vomitos</label>
                  </div>
                </div>
              </div>
              <div class="row ml-0 w-100 mb-4">
                <div class="ml-5 col-5">
                    <div class="custom-control custom-checkbox">
                      <input type="checkbox" class="custom-control-input" id="disnea" value="Disnea" v-model=sesion.sintomas>
                      <label class="custom-control-label" for="disnea">Disnea</label>
                    </div>   
                </div>
                <div class="col">
                  <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="arritmia" value="Arritmia" v-model=sesion.sintomas>
                    <label class="custom-control-label" for="arritmia">Arritmia</label>
                  </div> 
                </div>
              </div>
              <div class="row ml-0 w-100 mb-4">
                <div class="ml-5 col-5">
                  <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="hipoten" value="Hipoten" v-model=sesion.sintomas>
                    <label class="custom-control-label" for="hipoten">Hipoten</label>
                  </div>
                </div>
                <div class="col">
                  <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="hipert" value="Hipert" v-model=sesion.sintomas>
                    <label class="custom-control-label" for="hipert">Hipert</label>
                  </div>
                </div>
              </div> 
            </div>
          </div>
        </div>
      </div>
      <div class="row-md-1 pt-3 mb-1">
        <button class="form-group btn btn-success btn-block btn-lg shadow" @click="setSesion">TERMINAR</button>
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
    dosHoraTA,dosHoraFC,dosHoraTEMP,dosHoraQB,dosHoraPV,dosHoraPA,descHoraTA,descHoraFC,descHoraTEMP,descHoraQB,descHoraPV,descHoraPA,
    estado) {
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
   this.descHoraPA,
   this.estado
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
      monitor: new Monitor(),
      hora: window.$cookies.get("horaSesion"),
      estadoSesion: "CON",
    };
  },
  created() {
      this.getFechaHoy()
      this.getSesion()
      this.getMonitor()
      this.getHora()
  },
  methods: {
    getSesion() {
      fetch("/api/sesiones/" + window.$cookies.get("sesion"))
        .then(res => res.json())
        .then(data => {
          this.sesion = data;

          console.log(this.sesion.fRegistro);

          this.sesion.fRegistro = moment(this.sesion.fRegistrofRegistro).format("DD/MM/YYYY");
          this.sesion.horasSesion += ":00" 
        });
    },setSesion(){

      this.sesion.fRegistro = moment(this.sesion.fRegistrofRegistro).format("YYYY-MM-DD");
      this.sesion.estado = "F";

      fetch("/api/sesiones/" + window.$cookies.get("sesion"), {
          method: "PUT",
          body: JSON.stringify(this.sesion),
          headers: {
            Accept: "application/json",
            "Content-type": "application/json"
          }
        })
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
      if(window.$cookies.isKey("horaSesion") === false){
        var dt = new Date()
        var h = dt.getHours()
        var m = dt.getMinutes()

        if(m.length == 1){
          m = "0" + m;
        }

         window.$cookies.set("horaSesion", h + ":" + m)
         this.hora = window.$cookies.get("horaSesion")
      }
    },
    cambioEstadoSesion(estado){
      this.estadoSesion = estado;
    },
    volver() {
      this.$router.replace("/menu")
      window.$cookies.remove("sesion")
      window.$cookies.remove("horaSesion")
    }
  }
};
</script>

<style lang="css" scoped>

.text-xl{
  font-size: 100%;
  font-weight: bold;
}

.text-md{
  font-size: 70%;
}

.medidas {
  font-size: 80%;
  padding-top: 1%;
}

.form-group.row.mb-2.mt-0{
  width: 100%;
}

.btn-group{
  width: 101%;
}

.boton.btn.btn-sm{
  width: 25%;
}

.custom-control-label{
  font-size: 90%;
}

</style>
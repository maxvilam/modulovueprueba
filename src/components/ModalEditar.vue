<template>
  <div>
    <div class="modal" :id="dataobject.nombre" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Edicion de Opinion</h5>
          </div>
          <div class="modal-body">
            <p>Editando opinion</p>
            <p>Nombre: <input type="text" v-model="nameClient" /></p>
            <p>Opiniones: <input type="text" v-model="opinionClient" /></p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              @click="guardar"
              type="button"
              class="btn btn-primary"
              data-bs-dismiss="modal"
            >
              Guarda cambios
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  Name: "ModalEditar",
  data() {
    return {
      nombredatals: "GameOpinion",
      LocalData: [],
      nameClient: "",
      opinionClient: "",
      namegame: "",
    };
  },
  props: {
    dataobject: {
      type: Object,
      default: () => {},
    },
    ideditar: {
      type: Number,
      default: () => 0,
    },
  },
  created() {
    this.LocalData = JSON.parse(localStorage.getItem(this.nombredatals));
    this.nameClient = this.dataobject.nombre;
    this.opinionClient = this.dataobject.opinion;
    this.namegame = this.dataobject.namegame;
  },
  computed: {
    datatabla() {
      return this.LocalData;
    },
  },
  methods: {
    guardar() {
      const data = this.LocalData;
      const objeto = new Object({
        namegame: this.namegame,
        nombre: this.nameClient,
        opinion: this.opinionClient,
      });
      data[this.ideditar] = objeto;
      localStorage.setItem(this.nombredatals, JSON.stringify(data));
      alert("Se guardo la edicion");
    },
  },
};
</script>

<style></style>

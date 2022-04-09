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
            <button type="button" @click="guardar" class="btn btn-primary">
              Guardar cambios
            </button>
            <button
              type="button"
              class="btn close btn-secondary"
              data-dismiss="modal"
              aria-label="Close"
            >
              Cerrar
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
  computed: {
    name() {
      return this.nom;
    },
  },
  created() {
    this.LocalData = JSON.parse(localStorage.getItem(this.nombredatals));
    this.nameClient = this.dataobject.nombre;
    this.opinionClient = this.dataobject.opinion;
    this.namegame = this.dataobject.namegame;
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
    },
  },
};
</script>

<style></style>

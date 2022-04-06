<template>
  <div
    class="modal fade"
    :id="data.id"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <h6 class="modal-title" id="exampleModalLabel">
          Agrega tu opinion para el juego {{ data.name }}
        </h6>
        <div class="modal-header">
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <section>
            <p>Nombre: <input type="text" v-model="nameClient" /></p>
            <p>Opiniones: <input type="text" v-model="opinionClient" /></p>
          </section>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button @click="saveOpinion" type="button" class="btn btn-primary">
            Guarda tu opinion
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalOpinion",
  data() {
    return {
      nameClient: "",
      opinionClient: "Ingrese su opinion, Aqui",
    };
  },
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },

  methods: {
    saveOpinion() {
      const vacioarreglo = localStorage.getItem(this.data.id)
        ? localStorage.getItem(this.data.id)
        : "";
      const arrelo = [
        '{"name": "' +
          this.nameClient +
          '", "opinion": "' +
          this.opinionClient +
          '"}' +
          vacioarreglo,
      ];
      localStorage.setItem(this.data.id, arrelo);
      /* const OpinionObject = {
        name: this.nameClient,
        opinion: this.opinionClient,
        id: this.data.id,
      };
      console.log(OpinionObject); */
    },
  },
};
</script>

<style></style>

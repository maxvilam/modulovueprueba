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
      nombredatals: "GameOpinion",
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
      /* console.log("AAA:", localStorage.length + 1); */
      const nameGame = this.data.name,
        name = this.nameClient,
        opinion = this.opinionClient,
        nombreId = this.nombredatals;
      function myFuncion() {
        if (localStorage.length === 0) {
          /* Caso Nada */
          const dato0 = new Array({
            namegame: nameGame,
            nombre: name,
            opinion: opinion,
          });
          console.log("Si");
          return dato0;
        } else {
          /* Caso Existe */
          const dataold = JSON.parse(localStorage.getItem(nombreId));
          const dataNew = new Array({
            namegame: nameGame,
            nombre: name,
            opinion: opinion,
          });
          const dato3 = dataold.concat(dataNew);
          console.log("No");
          return dato3;
        }
      }

      const Opinion = myFuncion();
      /* console.log("antes el local", localStorage.getItem(nombreId)); */
      localStorage.setItem(nombreId, JSON.stringify(Opinion));
      /*       Opinion.forEach((i) =>
        console.log(
          "Numbre Game:",
          i.namegame,
          "Nombre:",
          i.nombre,
          "Opinion:",
          i.opinion
        )
      ); */
    },
  },
};
</script>

<style></style>

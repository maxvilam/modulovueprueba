<template>
  <div>
    <h1>Administrado la Lista de Opiniones</h1>
    <section v-if="LocalData != null">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Persona</th>
            <th scope="col">Juego</th>
            <th scope="col">Opinion</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(data, iterador) in LocalData" :key="data.nombre">
            <th>{{ iterador + 1 }}</th>
            <td>{{ data.nombre }}</td>
            <td>{{ data.namegame }}</td>
            <td>{{ data.opinion }}</td>
            <td>
              <button v-on:click="elimina(iterador)" class="btn btn-danger">
                Eliminar
              </button>
            </td>
            <td>
              <div class="card-body">
                <a href="#" class="card-link"
                  ><button
                    type="button"
                    class="btn btn-primary"
                    data-bs-toggle="modal"
                    :data-bs-target="'#' + data.nombre"
                  >
                    Opinar
                  </button></a
                >
                <ModalEditar :dataobject="data" :ideditar="iterador" />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </section>

    <p v-else class="p-4 bg-danger display-6">No existen opiones por mostrar</p>
  </div>
</template>

<script>
import ModalEditar from "@/components/ModalEditar.vue";
export default {
  name: "OpinionesView",
  data() {
    return {
      nombreId: "GameOpinion",
      LocalData: [],
    };
  },
  components: {
    ModalEditar,
  },
  computed: {
    datactualizada() {
      return this.LocalData;
    },
  },
  props: {
    Local: {
      type: Array,
      default: () => [],
    },
  },
  created() {
    this.LocalData = JSON.parse(localStorage.getItem(this.nombreId));
  },
  methods: {
    elimina(i) {
      this.LocalData.splice(i, 1);
      if (this.LocalData.length === 0) {
        localStorage.removeItem(this.nombreId);
      } else {
        localStorage.setItem(this.nombreId, JSON.stringify(this.LocalData));
      }
    },
  },
};
</script>

<style></style>

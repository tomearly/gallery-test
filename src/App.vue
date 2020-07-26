<template>
  <main>
  <h1>Paris</h1>
  <section>
  <gallery :photos="photos"> </gallery>
  </section>
  </main>
</template>

<script>
import dataService from "@/api/dataService";
import Gallery from "@/components/Gallery";

export default {
  name: "App",
  components: {
    Gallery
  },
  mounted() {
    this.loadPhotos();
  },
  methods: {
    async loadPhotos() {
      this.photos = await dataService.getPhotos(
        "query=paris&orientation=landscape"
      );
    }
  },
  data() {
    return {
      photos: {}
    };
  }
};
</script>

<style lang="scss">
.gallery {
  display: grid;
  grid-gap: 24px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}

main {
  max-width: 1200px;
  margin: 0 auto;
}

h1 {
  font-family: "Josefin Sans", sans-serif;
}
</style>

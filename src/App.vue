<template>
  <div></div>
</template>

<script>
import dataService from "@/api/dataService";

export default {
  name: "App",
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
</style>

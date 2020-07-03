<template>
  <div id="app" v-if="photos.results" class="gallery">
    <thumbnail
      v-for="photo of photos.results"
      :key="photo.id"
      :colour="photo.color"
      :alt-description="photo.alt_description"
      :profile-url="photo.user.links.html"
      :thumb-url="photo.urls.thumb"
      :thumb-link-url="photo.links.html"
      :first-name="photo.user.first_name"
    >
    </thumbnail>
  </div>
</template>

<script>
import Thumbnail from "@/components/Thumbnail";

export default {
  name: "Gallery",
  components: {
    Thumbnail
  },
  props: {
    photos: {
      type: Object,
      default: () => {}
    }
  }
};
</script>

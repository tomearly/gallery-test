<template>
  <div class="thumbnail">
    <a :href="thumbLinkUrl">
      <div class="thumbnail-image" :style="styles">
      </div>
    </a>
    <ThumbnailOverlay
      class="thumbnail-overlay"
      :first-name="firstName"
      :profile-url="profileUrl"
      :thumb-link-url="thumbLinkUrl"
    >
    </ThumbnailOverlay>
  </div>
</template>

<script>
import ThumbnailOverlay from "@/components/ThumbnailOverlay";
export default {
  components: {
    ThumbnailOverlay
  },
  props: {
    colour: {
      type: String
    },
    altDescription: {
      type: String
    },
    profileUrl: {
      type: String
    },
    thumbUrl: {
      type: String
    },
    thumbLinkUrl: {
      type: String
    },
    firstName: {
      type: String
    }
  },
  computed: {
    styles() {
      return {
        'border': `2px solid ${this.colour}`,
        'background-image': `url(${this.thumbUrl})`,
      }
    }
  },
};
</script>

<style lang="scss">
.thumbnail {
  position: relative;
}

.thumbnail-image {
  overflow: hidden;
  height: 133px;
  width: 200px;
  background-repeat: 'no-repeat';
  background-size: 'cover';
}

.thumbnail-image img {
  transition: transform 0.5s ease; /* Animation */
}

.thumbnail-image:hover img {
  transform: scale(1.05);
  position: relative;
}

.thumbnail-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.75);
  padding: 8px;
}

.thumbnail-overlay:hover {
  background-color: rgba(255, 255, 255, 1);
}
</style>

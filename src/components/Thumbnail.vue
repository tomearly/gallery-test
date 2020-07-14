<template>
  <div class="thumbnail">
    <a :href="thumbLinkUrl">
      <div class="wrapper">
        <div class="thumbnail-image" :style="styles">
        </div>
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

.wrapper {
  overflow: hidden; 
  height: 137px;
  width: 204px;
}

.thumbnail-image {
  transition: all 0.7s ease-in-out;
  height: 133px;
  width: 200px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.thumbnail-image:hover {
  transform: scale(1.15, 1.15);
  transition: all 0.7s ease-in-out;
  -webkit-transform: scale(1.15, 1.15);
  -webkit-transition: all 0.3s ease-in-out;
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

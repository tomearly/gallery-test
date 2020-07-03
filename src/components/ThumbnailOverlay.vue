<template>
  <a :href="profileUrl" class="first-name">{{ firstName }}</a>
</template>

<script>
export default {
  props: {
    firstName: {
      type: String
    },
    profileUrl: {
      type: String
    }
  }
};
</script>

<style lang="scss">
.first-name {
  font-family: "Josefin Sans", sans-serif;
  font-size: 16px;
}

a,
a:visited {
  text-decoration: none;
  color: black;
}
</style>

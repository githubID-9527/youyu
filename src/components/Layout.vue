<template>
  <div class="layout-wrapper" :class="contentClass">
    <Navigation />
    <slot />
  </div>
</template>

<script>
export default {
  name: "Layout",
  props: ["contentClass"],
};
</script>

<style lang="scss" scoped>
.layout-wrap {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
}
</style>
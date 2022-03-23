<template>
  <div class="nav-wrapper">
    <router-link
      to="/money"
      class="item"
      active-class="selected"
      >记账</router-link
    >
    <router-link
      to="/labels"
      class="item"
      active-class="selected"
      >标签</router-link
    >
    <router-link to="/statistics" class="item" active-class="selected"
      >统计</router-link
    >
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
a,
.router-link {
  text-decoration: none;
  color: inherit;
}

.nav-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 20px;
  color: #777;

  > .item {
    position: relative;
    padding: 0.5em 2em;
    text-align: center;
  }

  > .item.item.selected {
    color: #f35a5a;
    animation: fade 0.5s ease-in-out;
  }
  @keyframes fade {
    0% {
      background-color: none;
    }
    50% {
      background-color: rgba(105, 101, 101, 0.3);
    }
    100% {
      background-color: none;
    }
  }

  > .item.selected::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    box-sizing: border-box;
    border: 0.03em solid #f35a5a;
  }
}
</style>
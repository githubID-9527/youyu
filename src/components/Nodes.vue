<template>
  <div class="comment-wrapper">
    <Icon class="icon" name="fan" />
    <span>|</span>
    <input type="text" v-model="value" placeholder="写点啥备注下" />
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import { Component, Watch } from "vue-property-decorator"
@Component
export default class Comment extends Vue {
  value = "";
  @Watch("value")
  onValueChanged(value: string){
    this.$emit("update:value", value)
  }
}
</script>

<style lang="scss" scoped>
.comment-wrapper {
  width: 100%;
  border-top: solid 1px #ddd;
  border-bottom: solid 1px #ddd;
  display: flex;
  align-items: center;
  
  color: rgb(110, 110, 110);
  .icon {
    font-size: 0.7em;
    margin: 5px 10px;
    margin-right: 0;
  }

  span {
    padding: 10px;
  }

  input {
    border: none;
    font-size: 16px;
  }

  input:focus {
    outline: none;
  }
}
</style>
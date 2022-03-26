<template>
  <div class="tags">
    <ul class="current">
      <li
        v-for="tag in tags"
        :key="tag"
        :class="{ selected: selectedTags.indexOf(tag) >= 0 }"
        @click="select(tag)"
      >
        {{ tag }}
      </li>
    </ul>
    <div class="new">
      <button>添加标签</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component
export default class Tags extends Vue {
  @Prop() tags: string[] | undefined;
  selectedTags: string[] = [];

  select(tag: string) {
    const index = this.selectedTags.indexOf(tag);
    if (index >= 0) {
      this.selectedTags.splice(index, 1);
    } else {
      this.selectedTags.push(tag);
    }
    this.$emit("onUpdate:value", this.selectedTags);
  }
}
</script>

<style lang="scss" scoped >
.tags {
  display: flex;
  flex-direction: column;
  font-size: 14px;
  margin: 1px 0;
  padding: 16px;
  flex-grow: 1;
  background: white;
  > .current {
    display: flex;
    flex-wrap: wrap;
    > li {
      background: #d3d3d3;
      color: #777;
      $h: 24px;
      height: $h;
      line-height: $h;
      border-radius: $h/2;
      padding: 0 16px;
      margin-right: 12px;
      margin-top: 4px;
      &.selected {
        background: #d9d9d9;
        color: #f35a5a;
      }
    }
  }
  > .new {
    padding-top: 16px;
    button {
      background: transparent;
      border: none;
      color: #999;
      border-bottom: 1px solid;
      padding: 0 4px;
    }
  }
}
</style>
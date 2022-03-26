<template>
  <div class="tags">
    <ul class="current">
      <li
        v-for="tag in tagList"
        :key="tag.id"
        :class="{ selected: selectedTags.indexOf(tag) >= 0 }"
        @click="select(tag)"
      >
        {{ tag.name }}
      </li>
    </ul>
    <div class="new">
      <button @click="create">添加标签</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import store from "@/store/index2";

@Component
export default class Tags extends Vue {
  tagList = store.fetchTags();
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
  create() {
    const name = window.prompt("请输出标签名");
    if (!name) {
      return window.alert("标签名不能为空");
    }
    store.createTag(name);
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
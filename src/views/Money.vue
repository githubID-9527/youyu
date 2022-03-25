<template>
  <div>
    <Layout content-class="layout">
      <Tags :tags.sync="tags" @update:value="onUpdateTags" />
      <Nodes @update:value="onUpdateNodes" />
      <Type :value.sync="recode.type" />
      <Keyboard :value.sync="recode.amount" />
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import Layout from "@/components/Layout.vue";
import Tags from "@/components/Tags.vue";
import Type from "@/components/Type.vue";
import Nodes from "@/components/Nodes.vue";
import Keyboard from "@/components/Keyboard.vue";

type Recode = {
  tags: string[];
  notes: string;
  type: string;
  amount: number;
};

@Component({
  name: "Pay",
  components: { Tags, Keyboard, Layout, Type, Nodes },
})
export default class Money extends Vue {
  tags = ["衣", "食", "住", "行"];
  recode: Recode = {
    tags: [],
    notes: "",
    type: "-",
    amount: 0,
  };
  onUpdateTags(value: string[]) {
    this.recode.tags = value;
  }
  onUpdateNodes(value: string) {
    this.recode.notes = value;
  }
}
</script>

<style lang="scss">
.layout {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
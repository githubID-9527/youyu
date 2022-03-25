<template>
  <div>
    <Layout content-class="layout">
      <Tags :tags.sync="tags" @update:value="onUpdateTags" />
      <Nodes @update:value="onUpdateNodes" />
      <Type :value.sync="record.type" />
      <Keyboard :value.sync="record.amount" @submit="saveRecord" />
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Watch } from "vue-property-decorator";
import Layout from "@/components/Layout.vue";
import Tags from "@/components/Tags.vue";
import Type from "@/components/Type.vue";
import Nodes from "@/components/Nodes.vue";
import Keyboard from "@/components/Keyboard.vue";

type Record = {
  tags: string[];
  notes: string;
  type: string;
  amount: number;
  createdAt?: Date
};

@Component({
  name: "Pay",
  components: { Tags, Keyboard, Layout, Type, Nodes },
})
export default class Money extends Vue {
  tags = ["衣", "食", "住", "行"];
  recordList: Record[] = JSON.parse(
    window.localStorage.getItem("recordList") || "[]"
  );
  record: Record = {
    tags: [],
    notes: "",
    type: "-",
    amount: 0,
  };
  onUpdateTags(value: string[]) {
    this.record.tags = value;
  }
  onUpdateNodes(value: string) {
    this.record.notes = value;
  }
  saveRecord() {
    const record2: Record = JSON.parse(JSON.stringify(this.record));
    record2.createdAt = new Date()
    this.recordList.push(record2);
  }
  @Watch("recordList")
  onRecordListChange() {
    window.localStorage.setItem("recordList", JSON.stringify(this.recordList));
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
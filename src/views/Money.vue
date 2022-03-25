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
import model from "@/model"
import tagListModel from "@/tagListModel"

const recordList = model.fetch()
const tagList= tagListModel.fetch()

@Component({
  name: "Pay",
  components: { Tags, Keyboard, Layout, Type, Nodes },
})
export default class Money extends Vue {
  tags = tagList;
  recordList: RecordItem[] = recordList
  record: RecordItem = {
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
    const record2: RecordItem = model.clone(this.record);
    record2.createdAt = new Date()
    this.recordList.push(record2);
  }
  @Watch("recordList")
  onRecordListChange() {
    model.save(recordList)
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
<template>
  <div>
    <Layout content-class="layout">
      <Tags />
      <FormItem
        @update:value="onUpdateNodes"
        field-name="备注"
        placeholder="在这里输入备注"
      />
      <Type :value.sync="record.type" />
      <Keyboard :value.sync="record.amount" @submit="saveRecord" />
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import Layout from "@/components/Layout.vue";
import Tags from "@/components/Tags.vue";
import Type from "@/components/Type.vue";
import FormItem from "@/components/FormItem.vue";
import Keyboard from "@/components/Keyboard.vue";

@Component({
  name: "Money",
  components: { Tags, Keyboard, Layout, Type, FormItem },
})
export default class Money extends Vue {
  record: RecordItem = {
    tags: [],
    notes: "",
    type: "-",
    amount: 0,
  };

  get recordList() {
    return this.$store.state.recordList;
  }

  created() {
    this.$store.commit("fetchRecords");
  }
  onUpdateNodes(value: string) {
    this.record.notes = value;
  }
  saveRecord() {
    this.$store.commit("createRecord", this.record);
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
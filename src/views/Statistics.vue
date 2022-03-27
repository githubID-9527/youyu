<template>
  <Layout>
    <Tabs
      class-prefix="interval"
      :data-source="intervalList"
      :value.sync="interval"
    />
    <Tabs
      class="type"
      class-prefix="type"
      :data-source="recordTypeList"
      :value.sync="type"
    />
    <div>
      type: {{ type }}
      <br />
      interval: {{ interval }}
    </div>
  </Layout>
</template>


<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import Tabs from "@/components/Tabs.vue";
import intervalList from "@/constants/intervalList";
import recordTypeList from "@/constants/recordTypeList";

@Component({
  components: { Tabs },
})
export default class Statistics extends Vue {
  type = "-";
  interval = "day";
  intervalList = intervalList;
  recordTypeList = recordTypeList;
}
</script>

<style scoped lang="scss">
.type {
  margin: 10px 80px;
  box-shadow: 0 2px 10px rgb(0 0 0/12%);
}
::v-deep .type-tabs-item {
  background: rgb(255 255 255 /85%);
  font-size: 16px;
  color: #454545;
  &.selected {
    background: rgba(5, 5, 5, 0.5);
    color: white;
    font-weight: bold;
    &::after {
      display: none;
    }
  }
}
::v-deep .interval-tabs-item {
  height: 48px;
  background: #e9e9e9;
  font-size: 16px;
  color: #454545;
  &.selected {
    color: white;
    font-weight: bold;
    background: rgba(5, 5, 5, 0.5);
    &:after {
      display: none;
    }
  }
}
</style>
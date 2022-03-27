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
    <ol>
      <!-- <li v-for="(group,index) in result" :key="index">
        <h3 class="title">{{group.title}}</h3>
        <ol>
          <li v-for="item in group.items" :key="item.id"
              class="record"
          >
            <span>{{tagString(item.tags)}}</span>
            <span class="notes">{{item.notes}}</span>
            <span>￥{{item.amount}} </span>
          </li>
        </ol>
      </li> -->
      <li v-for="(group,index) in result" :key="index">
        <h3 class="title">{{group.title}}</h3>
        <ol>
          <li v-for="item in group.items" :key="item.id"
              class="record"
          >
            <span>{{tagString(item.tags)}}</span>
            <span class="notes">{{item.notes}}</span>
            <span>￥{{item.amount}} </span>
          </li>
        </ol>
      </li>
    </ol>
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

  // eslint-disable-next-line no-undef
  tagString(tags: Tag[]) {
      return tags.length === 0 ? '无' : tags.join(',');
    }
    get recordList() {
      // eslint-disable-next-line no-undef
      return (this.$store.state as RootState).recordList;
    }
    get result() {
      const {recordList} = this;
      type HashTableValue = { title: string, items: RecordList[] }
      const hashTable: { [key: string]: HashTableValue } = {};
      for (let i = 0; i < recordList.length; i++) {
        const [date, time] = recordList[i].createdAt!.split('T');
        hashTable[date] = hashTable[date] || {title: date, items: []};
        hashTable[date].items.push(recordList[i]);
      }
      return hashTable;
    }
    beforeCreate() {
      this.$store.commit('fetchRecords');
    }
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
 %item {
    padding: 8px 16px;
    line-height: 24px;
    display: flex;
    justify-content: space-between;
    align-content: center;
  }
  .title {
    @extend %item;
  }
  .record {
    background: white;
    @extend %item;
  }
  .notes {
    margin-right: auto;
    margin-left: 16px;
    color: #999;
  }
  
</style>
<template>
  <div>{{ Man }}</div>
  <div>
    {{ Man1 }}
  </div>
  <hr />
  <button @click="change">修改</button>
  <hr />
  <div>{{ Man4 }}</div>
  <hr />
  <button @click="change1">修改</button>
  <hr />
  <div>{{ Man5 }}</div>
  <hr />
  <button @click="change2">修改</button>
  <hr />
  <div ref="dom" @click="change3">我是dom</div>
  <hr />
</template>
<script setup lang="ts">
import { ref } from "vue";
import { shallowRef } from "vue";
import { isRef } from "vue";
import { triggerRef } from "vue";
import { customRef } from "vue";
import type { Ref } from "vue";
const Man = { name: "小满" };
type M = {
  name: string;
};
const Man1 = ref({ name: "小满" });
const Man2: Ref<M> = ref({ name: "小满" });
const Man3 = ref<M>({ name: "小满" });
const Man4 = shallowRef({ name: "小满2" });
const change = () => {
  Man.name = "大满";
  Man1.value.name = "大满";
  console.log(Man);
  console.log(isRef(Man1));
};
const change1 = () => {
  Man4.value.name = "大满2";
  triggerRef(Man4);
};
const Man5 = MyRef<string>("小满");
function MyRef<T>(value: T) {
  return customRef((track, trigger) => {
    return {
      get() {
        track();
        return value;
      },
      set(newVal) {
        value = newVal;
        trigger();
      },
    };
  });
}
const change2 = () => {
  Man5.value = "customRef修改啦";
};
const dom = ref<HTMLDivElement>();
const change3 = () => {
  console.log(dom.value?.innerText);
};
</script>

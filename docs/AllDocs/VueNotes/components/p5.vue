<template>
  <div>
    <p>{{ a }}</p>
    <p>{{ a + 2 }}</p>
    <p>{{ a ? "true" : "false" }}</p>
    <p>{{ a1.map((v) => ({ num: v })) }}</p>
  </div>
  <div>
    <div contenteditable="true" v-text="b"></div>
    <div v-html="b1"></div>
    <div v-show="b2"></div>
    <div v-if="b3 == 'a'">A</div>
    <div v-else-if="b3 == 'b'">B</div>
    <div v-else>C</div>
    <button v-on:click="xxx">尽情的点击我</button>
    <button @click="xxx">尽情的点击我</button>
    <button @[event]="xxx">尽情的点击我</button>
    <div @click="parent">
      <button @[event].stop="xxx">尽情的点击我</button>
    </div>
    <div v-bind:id="id"></div>
    <div :id="id"></div>
    <div :style="style">演示v-bind</div>
    <div class="c" :class="[Cls ? 'a' : 'b']">演示v-bind</div>
    <div>
      <input type="text" v-model="b4" />
      <div>{{ b4 }}</div>
    </div>
    <div v-for="(item, index) in arr" :key="index">{{ index }}-{{ item }}</div>
    <div v-once @click="b5 = 456">
      {{ b5 }}
    </div>
    <div>
      <div v-memo="[subscribers]">
        <p>Subscribers: {{ subscribers }}</p>
        <p>Likes: {{ likes }}</p>
      </div>
      <button @click="subscribers++">Subscribers++</button>
      <button @click="likes++">Likes++</button>
      <div>
        <p>Current state:</p>
        <p>Subscribers: {{ subscribers }}</p>
        <p>Likes: {{ likes }}</p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
const a: number = 1;
const a1: number[] = [1, 2, 3, 4, 5];
const b: string = "我是一段文字xxxx";
const b1: string = '<section style="color:red">我是一段文字xxxx</section>';
const b2: boolean = false;
const b3: string = "b";
const event: string = "click";
const xxx = () => {
  console.log("点击了xxx");
};
const parent = () => {
  console.log("我是父级");
};
const id: string = "123";
const style = {
  color: "red",
  border: "1px solid #ccc",
};
const Cls: boolean = true;
const b4 = ref("小满");
const arr: string[] = ["小满", "大满", "袜子"];
const b5 = ref(123);
const subscribers = ref(4000);
const likes = ref(3000);
</script>
<style scoped lang="less">
.a {
  color: red;
}
.b {
  border: 1px solid #ccc;
}
.c {
  background-color: aqua;
}
</style>

<template>
  <div class="navnav">
    <div
      class="nav-item"
      :class="{ active: activeVal == index }"
      @mouseenter="activeVal=index"
      @mouseleave="activeVal=null"
      v-for="(item, index) of navList"
    >
      <div class="nav-item-title">
        {{ item.title }}
      </div>
      <div v-if="item.children" class="nav-item-subitems">
        <div class="nav-item-subitem" v-for="item1 of item.children">
          {{ item1.title }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const navList = [
  {
    title: "首页",
    href: "#",
  },
  {
    title: "番剧",
    href: "#",
    children: [
      {
        title: "<==",
        href: "#",
      },
      {
        title: "==>",
        href: "#",
      },
    ],
  },
  {
    title: "绅士",
    href: "#",
    children: [
      {
        title: "===",
        href: "#",
      },
      {
        title: "!==",
        href: "#",
      },
    ],
  },
];
const activeVal = ref();
</script>

<style scoped>
* {
  margin: 0;
  font-family: "fira code", "misans";
}

.navnav {
  box-shadow: 0 0 8px rgba(173, 173, 173, 0.64);
  display: flex;
  align-items: center;

  .nav-item {
    margin: 0 2rem;

    .nav-item-title {
      cursor: pointer;
      line-height: 3.5rem;
      font-size: 18px;
    }

    .nav-item-subitems {
      overflow: hidden;
      transform: translateX(-40%);
      transition: 0.3s;
      height: 0;
      display: flex;
      position: absolute;
      gap: 1rem;
      border-radius: 8px;

      .nav-item-subitem {
        font-size: 18px;
        text-align: center;
        background-color: rgb(255, 167, 181);
        color: rgb(255, 255, 255);
        line-height: 30px;
        border-radius: 5px;
        padding: 0 1rem;
        cursor: pointer;
        transition: 0.3s;
      }

      .nav-item-subitem:hover {
        transform: translateY(-5px);
        background-color: rgb(253, 179, 191);
      }
    }
  }

  .nav-item.active {
    .nav-item-title {
      color: rgb(252, 123, 145);
      text-shadow: 0 0 14px rgb(240, 125, 164);
    }

    .nav-item-subitems {
      height: fit-content;
      display: flex;
      position: absolute;
      gap: 1rem;
      padding: 8px 1rem;
      border-radius: 8px;
      background-color: white;
      box-shadow: 0 0 20px rgba(158, 158, 158, 0.283);
    }
  }
}
</style>

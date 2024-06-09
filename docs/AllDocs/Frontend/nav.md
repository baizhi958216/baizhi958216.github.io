# 手写顶部导航栏

使用 Vue 可以用`mouseenter`和`mouseleave`绑定鼠标移入移出事件，原生 JS 可以使用
`onmousemove`和`onmouseleave`，主要是 CSS 那部分比较头疼。

:::code-group

```html
<!DOCTYPE html>
<html lang="zh">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="./index.css" />
  </head>

  <body>
    <div class="container">
      <div class="nav"></div>
    </div>
    <script src="./index.js"></script>
  </body>
</html>
```

```js
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

const navDom = document.querySelector(".nav");
navList.map((el, index) => {
  let tempNav = "";
  tempNav += `
        <div class="nav-item" onmousemove="showSubitem(${index})" onmouseleave="hideSubitem(${index})">
            <div class="nav-item-title">${el.title}</div>
        `;
  if (el.children) {
    tempNav += `<div class="nav-item-subitems">`;
    el.children.map((el1) => {
      tempNav += `
                    <div class="nav-item-subitem">
                        ${el1.title}
                    </div>
                    `;
    });
  }
  tempNav += `</div>`;
  navDom.innerHTML += tempNav;
});
const navItems = document.querySelectorAll(".nav-item");
const showSubitem = (item) => {
  navItems[item].classList.add("active");
};
const hideSubitem = (item) => {
  navItems[item].classList.remove("active");
};
```

```css
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
```

```vue
<template>
  <div class="navnav">
    <div
      class="nav-item"
      :class="{ active: activeVal == index }"
      @mouseenter="activeVal = index"
      @mouseleave="activeVal = null"
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
```

:::

## 效果如下

<div>
    <Nav/>
</div>

<script setup lang="ts">
import Nav from './nav.vue'
</script>

## 存在问题

效果做好了，但是还有一个问题就是事件绑定在`nav-item`，如果在`nav-item-subitems`的顶部加入外边距，鼠标移动到空隙处的时候将会导致子菜单被隐藏。

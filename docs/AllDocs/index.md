# 小情绪
<!-- <script setup>
import { ref } from 'vue'
import { ElTabs,ElTabPane,ElSkeleton,ElTag } from 'element-plus'
import 'element-plus/es/components/tabs/style/css'
import 'element-plus/es/components/tab-pane/style/css'
import 'element-plus/es/components/skeleton/style/css'
import 'element-plus/es/components/tag/style/css'

const bangumi_list = ref()

const w = ['一','二','三','四','五','六','日']
const today = `周${w[new Date().getDay()==0?6:new Date().getDay()-1]}`
fetch('http://localhost:3001/bangumi_list')
  .then(res => res.json())
  .then(data => {
    bangumi_list.value = data
  })
</script>

# 动漫番组放送信息

<el-skeleton :rows="10" animated  v-if="!bangumi_list"/>
<el-tabs v-model="today" v-else>
  <el-tab-pane :name="`周${day}`" :label="`周${day}`" v-for="day in w">
    <div v-for="fan in bangumi_list[day]">
      <el-tag effect="dark">{{ fan['date'] }}</el-tag>
      {{ fan['title']['cn'] }} 
    </div>
  </el-tab-pane>
</el-tabs>
 -->

你当她恋人，她当你路人，你已经很该死，适应一个人的离开，只需要87天，所以从现在起就下定决心断联，只要你的心够狠，崩溃的那个人，就不会是你，一瞬间的心如刀绞，转念间的如释重负，绷住了，把牙咬紧了，你值得，但你要不听，去回头纠缠，你都该死！
<!--

 <div style="display:flex;justify-content:center;align-items:center;margin:3rem">
 <span style="text-warp:no-warp">Hi 👋, My </span>
 <img src="https://profile-counter.glitch.me/baizhi958216/count.svg" alt="android" width="300" height="40"/>
 <span>visitor</span>
 </div>

 
![Snake animation](https://raw.githubusercontent.com/baizhi958216/baizhi958216/output/github-contribution-grid-snake.svg)

[![trophy](https://github-profile-trophy.vercel.app/?username=baizhi958216&rank=SSS,SS,S,AAA,AA,A,B,C,SECRET)](https://github.com/ryo-ma/github-profile-trophy)
![Top Lang](https://github-readme-stats.vercel.app/api/top-langs/?username=baizhi958216&layout=compact&bg_color=30,FF3F80,FF8CB3&title_color=fff&text_color=fff&hide_border=true&hide=Less,HTML,CSS)

-->


:::warning 倒计时 重联将会重置 重置计数: 1

<br/>
<div class="text-[60px]">{{ dayRef }} {{ hourRef }}:{{ minutesRef }}:{{ secondsRef }}</div>
<br/>

:::

<div style="display:flex;justify-content:center;align-items:center">
<img src="https://api.jun.la/60s.php?format=image" alt="" />
</div>


![nyarch](/nyarch.png)

### 硬件信息：
- **硬件型号：**                                        ASUSTeK COMPUTER INC. ASUS TUF Gaming F16 FX607JV_FX607JV
- **内存：**                                          32.0 GiB
- **处理器：**                                         13th Gen Intel® Core™ i7-13650HX × 20
- **显卡：**                                          NVIDIA GeForce RTX™ 4060 Laptop GPU
- **磁盘容量：**                                        3.1 TB

### 软件信息：
- **固件版本：**                                        FX607JV.309
- **操作系统名称：**                                      Nyarch Linux
- **操作系统内部版本：**                                    rolling
- **操作系统类型：**                                      64 位
- **GNOME 版本：**                                    47
- **窗口系统：**                                        X11
- **内核版本：**                                        Linux 6.12.4-arch1-1


<script lang="ts" setup>
import { computed, ref } from 'vue'
const dayRef = ref()
const hourRef = ref()
const minutesRef = ref()
const secondsRef = ref()
const countdownToTime = (targetDate) => {
  const currentDate = new Date();
  const target = new Date(targetDate);

  const timeDifference = target.getTime() - currentDate.getTime();

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
}

const formatTime = (time) => {
  return time.toString().padStart(2, '0');
}

const targetDate = '2025-03-20';

setInterval(()=>{
  const time = countdownToTime(targetDate);
  dayRef.value = formatTime(time.days)
  hourRef.value = formatTime(time.hours)
  minutesRef.value = formatTime(time.minutes)
  secondsRef.value = formatTime(time.seconds)
),1000)
  
</script>

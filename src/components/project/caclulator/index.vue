<template>
  <div>hell0 - {{ $t("message.hello") }}</div>
  <a-select v-model:value="currentLanguage">
    <a-select-option value="ja">Japanese</a-select-option>
    <a-select-option value="en">English</a-select-option>
  </a-select>

  <div>Count from store {{ count }}</div>
  <div id="app1">
    <h2>Caculator</h2>
    <div class="show-calculation">
      {{ calculateText }}
    </div>
    <div>
      <div class="grid-container">
        <div
          class="circle grid-item"
          v-for="item in listAct"
          :class="{ active: item.isActive }"
          @click="action(item)"
        >
          <div class="inner">{{ item.label }}</div>
        </div>
        <div class="grid-container container-3">
          <div
            class="circle grid-item number"
            v-for="item in 9"
            @click="actionNum(item)"
          >
            <div class="inner">{{ item }}</div>
          </div>
        </div>
        <div class="circle grid-item item-0">
          <div class="inner">0</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, watch } from "vue";
import { counter } from "./data";
import { Select } from "ant-design-vue";
import { useLocaleStoreWithOut } from "../../../store/module/locale";
import { changeLocale } from "/@/locale/setupI18n";
const store = useLocaleStoreWithOut();
const currentLanguage = ref(store.locale); //store.currentLanguage;
watch (currentLanguage, (value) => {
  console.log("changeLocale", changeLocale);
    changeLocale(value);
  }
);

const listAct = ref([
  { value: 0, label: "AC", isActive: false },
  { value: 1, label: "+/-", isActive: false },
  { value: 2, label: "%", isActive: false },
  { value: 3, label: "/", isActive: false },
  { value: 4, label: "x", isActive: false },
  { value: 5, label: "-", isActive: false },
  { value: 6, label: "+", isActive: false },
  { value: 8, label: ",", isActive: false },
  { value: 7, label: "=", isActive: false },
]);
const calculateText = ref("");

const action = (item) => {
  if (!item.isActive) {
    item.isActive = true;
  }
  //listAct.value = listAct.value.map(en => en)
  listAct.value.forEach((element) => {
    if (element.value != item.value) element.isActive = false;
  });
  console.log("action", listAct.value);
};
const actionNum = (item) => {
  console.log("actionNum", item);
};

const count = counter;
</script>

<style>
#app1 {
  width: 400px;
  margin: auto;
}
.show-calculation {
  height: 200px;
}
.circle {
  width: 80px;
  height: 80px;
  border: 1px solid;
  border-radius: 50%;
  position: relative;
  /* margin: 10px; */
}
.inner {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.grid-container {
  display: grid;
  grid-template-columns: auto auto auto auto;
  row-gap: 5px;
  column-gap: 5px;
}
.container-3 {
  grid-template-columns: auto auto auto;
  grid-area: 2 / 1 / 5 / 4;
}
.item-0 {
  grid-area: 5 / 1 / 5 / 3;
}
.grid-item {
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 20px;
  font-size: 30px;
  text-align: center;
}
.active {
  background: yellow;
}
</style>

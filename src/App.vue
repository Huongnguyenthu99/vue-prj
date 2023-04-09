<script>
import parent from "./components/LifecycleHook/parent.vue";
import danhsach from "./components/Router/todolist/danhsach.vue";
import "ant-design-vue/dist/antd.css";
import "bootstrap/dist/css/bootstrap.css";

import { ref, nextTick, onUpdated, unref, onMounted } from "vue";
import { RouterView } from "vue-router";
import { mapGetters } from "vuex";
import { computed, reactive } from "vue";


export default {
  setup() {
    const count = ref(0);
    const count2 = count;
    const count3 = ref(3);
    const state = reactive({count:0});

    let count4 = 0;

    let state2 = state.count;
    const stateChange = () => {
      state.count++;
    }
    
    onUpdated(() => {
      //console.log('updateed');
    })
    async function increment() {
      count2.value++;
      count4++;
      console.log("count4", count4);
     
     
      // DOM not yet updated
      
      // await nextTick(() => {
      //   console.log('value luc nay ', document.getElementById("counter").textContent);
      // });
      // // DOM is now updated
      // console.log(document.getElementById("counter").textContent); // 1
    }

    const privateCount = computed(() => {
      return count.value + 1;
    })

    onMounted(() =>{
      console.log("onMounted");
      nextTick(() => {
        console.log('nextTick', count.value)
      })
    })


    /// 
    const obj = { foo: ref(0) };

    const { foo } = obj;

    return {
      count,
      count2,
      count3,
      count4,
      state,
      state2,
      increment,
      stateChange,
      obj, 
      foo,
      privateCount,
    };
  },
};
</script>

<template>
  <div>
    <!-- <button id="counter" @click="increment()">click{{ count }}</button>
    <br>
    <button id="counter" @click="stateChange()">click {{ privateCount }}</button> -->
   
    <RouterView></RouterView>
    
  </div>
</template>

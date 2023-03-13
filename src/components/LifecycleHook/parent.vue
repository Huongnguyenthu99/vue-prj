<script>
import Child from './child.vue';

    export default {
        data() {
            return {
                msg: "msg parent here",
                isShow: true,
                msg3: ""
            }
        },
        components: {
            Child
        },
        methods: {
            msg3Event(data){
                this.msg3 = data;
            },
            handleClick() {
                this.msg3 = "hello"
            }
        }
        // beforeMount() {
        //     // before DOM render
        //     // after finished set up reative state
        //     let greetings = document.getElementById("greetings");
        //     console.log("beforeMount", greetings);
        // },
        // mounted() {
        //     // after DOM render (child)
        //     let greetings = document.getElementById("greetings");
        //     console.log("mounted", greetings);
        // }
    }
</script>
<template>
    <div>
        <div class="greetings">
            msg3 la: {{ msg3 }}
        <input type="text" v-model="msg">

        <button @click="handleClick"> set msg3 thanh hello</button>
        </div>
        <button type="submit" @click="isShow = !isShow">{{isShow?'Hide':'Show'}}</button>
        <div v-if="isShow">
            <child v-model:value="msg3"/>
        </div>
    </div>
  </template>
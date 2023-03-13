<script>
export default {
    props: ["msg", "value"],
    data() {
        return {
            msg2: "parent",
            msg3: "msg3",
        }
    },
    beforeCreate() {
        console.log("beforeCreate", this.msg);
        console.log("beforeCreate2", this.msg2);
    },
    created() {
        console.log("created", this.msg2);
    },
    beforeMount() {
        // before DOM render
        // after finished set up reative state
        let greetings = document.getElementById("greetings");
        console.log("beforeMount", greetings);
    },
    mounted() {
        // after DOM render
        let greetings = document.getElementById("greetings");
        console.log("mounted", greetings);
    },
    beforeUpdate() {
        // when data change, before re-render DOM
        let greetings = document.getElementById("greetings");
        console.log("beforeUpdate", this.msg, ' - ', greetings);
    },
    updated() {
        // after render DOM
        let greetings = document.getElementById("greetings");
        console.log("updated", greetings);
    },
    beforeUnmount() {
        console.log("beforeUnmount");
    },
    mounted() {
        console.log("mounted");
    },
    emits: ['update:value', 'change'],
    methods: {
        handleChange(e) {
            this.$emit('update:value', e.target.value)
        },
    }
}
</script>
<template>
    <div>
        <!-- <div id="greetings">
                Hi. I'm from child {{ msg }}
            </div> -->
        <input type="text" :value="value" @change="e => $emit('update:value', e.target.value)">
    </div>
</template>
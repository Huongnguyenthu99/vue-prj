<script lang="ts" setup>
import { Modal, Button, Form, FormItem, Input, Select, SelectOption, Textarea  } from 'ant-design-vue'
import { onMounted, ref, reactive } from 'vue';
const visible = ref(false);
const statusOptions = ref([
    { value:0, label: 'To do'},
    { value:1, label: 'In Progress'},
    { value:2, label: 'Done'}
]);

onMounted(() => {
    console.log('Application mounted');
});
function handleOk (){
    visible.value = false;
}
function openModal () {
    visible.value = true;
}
function onFinish() {

}
function onFinishFailed() {

}
const formTask = reactive({
    title: '',
    status: 0,
    description: "",
});

</script>
<template>
    <Modal v-model:visible="visible" title="Thông tin task" @ok="handleOk" >
        <Form :model="formTask" name="basic" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }" autocomplete="off" @finish="onFinish" @finishFailed="onFinishFailed">
            <FormItem label="Tiêu đề" name="title" :rules="[{required: true, message: 'Vui lòng nhập tiêu đề'}]">
                <Input v-model:value="formTask.title"></Input>
            </FormItem>
            <FormItem label="Trạng thái" name="status" :rules="[{required: true, message: 'Vui lòng nhập trạng thái'}]">
                <Select v-model:value="formTask.status">
                    <SelectOption v-for="item in statusOptions" :value="item.value">{{ item.label }}</SelectOption>
                </Select>
            </FormItem>
            <FormItem label="Mô tả" name="description">
                <Textarea v-model:value="formTask.description"></Textarea>
            </FormItem>
        </Form>
    </Modal>
</template>
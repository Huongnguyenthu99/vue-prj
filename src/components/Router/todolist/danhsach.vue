<!-- <script>
import { Modal, Input, Button } from 'ant-design-vue';
import { reactive } from 'vue';
    export default {
        data() {
            return {
                visible: false,
                isShow: true
            }
        },
        methods: {
            handelOk() {
                this.visible = false;
            },
            onFinish() {
                console.log("onFinish");
            },
            onFinishFailed() {
                console.log("onFinishFailed");
            },
            openModal() {
                this.visible = true;
            }
        }
    }
</script> -->

<script lang="ts" setup>
import { onMounted, ref, reactive } from 'vue';
import { Modal,  Button, Form, FormItem, Input, Select, SelectOption, Textarea, Table, Layout, LayoutSider, Menu, MenuItem, LayoutHeader, LayoutContent } from 'ant-design-vue'
const visible = ref(false);
const statusOptions = ref([
    { value:0, label: 'To do'},
    { value:1, label: 'In Progress'},
    { value:2, label: 'Done'}
]);
const columns = [
    {
        title: 'Tiêu đề',
        dataIndex: 'title',
        key: 'title',
    },
    {
        title: 'Trạng thái',
        dataIndex: 'status',
        key: 'status',
    },
    {
        title: 'Mô tả',
        dataIndex: 'description',
        key: 'description',
    },
];
const data = [
    { title: 'Training Vue P1', status: 0, description: "Training Vue P1" },
    { title: 'Training Vue P2', status: 0, description: "Training Vue P2" },
    { title: 'Training Vue P3', status: 0, description: "Training Vue P3" }
]

const account = ref([]);

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
    <div>
        <div class="d-flex justify-content-between">
            <div><a href="/basic-api/account/getAll" target="hello1">Danh sách task</a></div>
            <Button type="primary" @click="openModal">Thêm mới</Button>
        </div>
        <Table :columns="columns" :data-source="data" bordered>
            <template #bodyCell="{ column, text }">
                <template v-if="column.dataIndex === 'name'">
                    <a>{{ text }}</a>
                </template>
            </template>
        </Table>
    </div>
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
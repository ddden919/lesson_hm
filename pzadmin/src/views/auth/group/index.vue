<template>
    <PanelHead />
    <!-- 新增按钮 -->
    <div class="btns">
        <el-button :icon="Plus" type="primary"  @click="open(null)" size="small">新增</el-button>
    </div>
    <!-- 列表 -->
    <el-table :data="tableData.list" style="width: 100%;">
        <el-table-column prop="id" label="id" />
        <el-table-column prop="name" label="昵称" />
        <el-table-column prop="permissionName" label="菜单权限" width="500px" />
        <el-table-column  label="操作">
            <!-- 作用域插槽 -->
            <template #default="scope">
                <el-button type="primary" @click="open(scope.row)">编辑</el-button>
           </template>
        </el-table-column>
    </el-table>
    <!-- 分页 -->
    <div class="pagination-info">
        <el-pagination
            v-model:current-page="paginatationData.pageNum"
            :page-size="paginatationData.pageSize"
            :background="false"
            size="small"
            layout="total, prev, pager, next"
            :total="tableData.total"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
        />
    </div>
    
    <el-dialog
      v-model="dialogFormVisable"
      :before-close="beforeClose"
      title="添加权限"
      width="500px"
    >
        <el-form
          ref="formRef"
          label-width="100px"
          label-position="left"
          :model="form"
          :rules="rules"
        >
           <el-form-item v-show="false" prop="id">
                <el-input v-model="form.id" placeholder="填写权限id" />
           </el-form-item>
            <el-form-item label="名称" prop="name">
                <el-input v-model="form.name" placeholder="填写权限名称" />
            </el-form-item>
            <el-form-item label="权限" prop="permission">
                <el-tree
                  ref="treeRef"
                  style="max-width:600px"
                  :data="permissionData"
                  node-key="id"
                  show-checkbox
                  :default-checked-keys="defaultKeys"
                  :default-expanded-keys="[2]"
                />
            </el-form-item>
        </el-form>
        <template #footer>
            <div class="dialog-footer">
                <el-button type="primary" @click="confirm(formRef)">确认</el-button>
            </div>
        </template>
    </el-dialog>
</template>

<script setup>
import { ref, reactive, onMounted, nextTick } from 'vue'
import { userGetMenu, userSetMenu, menuList } from '../../../api'
import PanelHead from '../../../components/panelHead.vue'
import { Plus } from '@element-plus/icons-vue'

onMounted(() => {
    // 菜单数据
    userGetMenu()
    .then(({data}) => {
        console.log(data)
        permissionData.value = data.data
    })
    // 列表数据
    getListData()
})

// 列表数据
const tableData = reactive({
    list: [],
    total: 0
})

// 打开新增/编辑弹窗
const open = (rowData = {}) => {
    dialogFormVisable.value = true
    // 弹窗打开form生成是异步的
    nextTick(() => {
        if (rowData) {
            // 防止数据丢失
            console.log('rowData:', rowData);
            Object.assign(form, { id: rowData.id, name: rowData.name })
            treeRef.value.setCheckedKeys(rowData.permission)
        }
    })
}

const paginatationData = reactive({
    pageNum:1,
    pageSize:10
})

const handleSizeChange = (val) => {
    paginatationData.pageSize = val
    getListData()
}

const handleCurrentChange = (val) => {
    paginatationData.pageNum = val
    getListData()
}

// 请求列表数据
const getListData = () => {
    menuList(paginatationData)
        .then(({ data }) => {
        // console.log(data)
       const { list, total } = data.data
       tableData.list = list
       tableData.total = total
    })
}

const formRef = ref()

// 表单数据
const form = reactive({
    id:'',
    name:'',
    permissions:'' 
})

// 树形菜单权限数据
const permissionData = ref([])

// 弹窗是否显示
const dialogFormVisable = ref(false)

//关闭弹窗前的回调
const beforeClose = () => {
    dialogFormVisable.value = false
    // 重置表单
    formRef.value.resetFields()
    // tree选择框重置
    treeRef.value.setCheckedKeys(defaultKeys)
}

// 选中权限
const defaultKeys = [4, 5]
const treeRef = ref()

// 表单校验规则
const rules = reactive({
    name:[{required:true, trigger:'blur', message:'请输入权限名称'}],
})

// 表单提交
const confirm = async (formEl) => {
    if (!formEl) return
    await formEl.validate((valid, fields) => {
        if (valid) {
            // 获取选择的chatbox数据
            const permissions=  JSON.stringify(treeRef.value.getCheckedKeys())
            userSetMenu({ name: form.name, permissions, id: form.id })
                .then(({ data }) => {
                    console.log(data)
                    beforeClose()
                    getListData()
            })
        } else {
            console.log('error submit!', fields)
        }
    })
}
</script>

<style lang="scss" scoped>
.btns {
    padding: 10px 0 10px 10px;
    background-color: #fff;
}
</style>
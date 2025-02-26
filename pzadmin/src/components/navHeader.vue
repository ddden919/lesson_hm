<template>
    <div class="header-container">
        <div class="header-left flex-box">
            <el-icon class="icon" size="20" @click="toggleMenuCollapse"><Fold /></el-icon>
            <ul class="flex-box">
                <li 
                  v-for="(item, index) in selectMenu" 
                  :key="item.path"
                  :class="{ selected: $route.path === item.path }"
                  class="tab flex-box"
                >
                    <el-icon size="12"><component :is="item.icon" /></el-icon>
                    <router-link class="text flex-box" :to="item.path">
                        {{ item.name }}
                    </router-link>
                    <el-icon class="close" size="20" @click="closeTab(item, index)"><Close /></el-icon>
                </li>
            </ul>
        </div>
        <div class="header-right">
            <!-- 头像 -->
            <el-dropdown @command="handleClick">
                <div class="el-dropdown-link flex-box">
                    <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"/>
                    <p class="user-name">Admin</p>
                </div>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item command="cancel">退出 1</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </div>
</template>

<script setup>
import { toRefs } from 'vue';
import { useMenuStore } from '../store/menu' // 根据你的文件路径调整导入路径
import { useRouter, useRoute } from 'vue-router';

// 获取当前路由信息
const router = useRouter()
const route = useRoute()

// 获取 menu store 实例
const menuStore = useMenuStore()

// toRefs会把一个响应式对象转换为一组 ref 对象，每个 ref 对象都对应原始对象的一个属性。
// 对于ref对象需要使用.value来获取值
const { selectMenu } = toRefs(menuStore)

// 定义一个方法来关闭标签页
function closeTab(item, index) {
    // 调用 menu store 中的方法来关闭标签页
    const isClosed = menuStore.closeMenu(item);
    if (isClosed) {
        // 删除的非当前页
        if (route.path!== item.path) {
            return;
        }
        // selectMenu已经是ref对象，需要使用.value来获取值
        const selectMenuData = selectMenu.value;
        // 只有一个元素时删除后跳转至首页
        if (selectMenuData.length === 0) {
            router.push('/');
        } else if (index === selectMenuData.length) {  
            // 删除最后一个元素返回至前一个 tab
            router.push(selectMenuData[index - 1].path);
        } else { 
            // 删除中间的跳转至后一个 tab
            router.push(selectMenuData[index].path);
        }
    }
}

// 定义一个方法来切换菜单折叠状态
function toggleMenuCollapse() {
    menuStore.collapseMenu();
}

const handleClick = (command) => {
    if (command === 'cancel') {
        localStorage.removeItem('pz_token')
        localStorage.removeItem('pz_userInfo')
        window.location.href = window.location.origin;
    }
}
</script>

<style lang="scss" scoped>
.flex-box{
    display: flex;
    align-items: center;
    height: 100%;
}
.header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    background-color: #fff;
    padding-right: 25px;
    .header-left{
        height: 100%;
        .icon{
            width: 45px;
            height: 100%;
        }
        .icon:hover{
            background-color: #f5f7fa;
            cursor: pointer;
        }
        .tab{
            padding: 0 10px;
            height: 100%;
            .text{
                margin: 0 5px;
            }
            .close{
                visibility: hidden;
            }
            &:hover{
                // & 代表父选择器 .tab，这里表示 .tab:hover 状态
                background-color: #f5f5f5;
                .close{
                    visibility: visible;
                    cursor: pointer;
                    color: #000;
                }
            }
            &.selected {
                // & 代表父选择器 .tab，这里表示同时拥有 tab 和 selected 类的元素，即 .tab.selected
                background-color: #f5f5f5; /* 高亮背景色 */
                a {
                    // 设置选中 tab 下的路由链接（<router-link> 渲染后的 <a> 标签）的文字颜色为高亮色
                    color: #409eff; 
                }
                i {
                    // 设置选中 tab 下的图标（<el-icon>）的颜色为高亮色，<el-icon> 组件在渲染时内部可能会使用 <i> 标签来展示图标。
                    color: #409eff; /* 高亮图标颜色 */
                }
            }
        }
    }
   .header-right{
        .user-name{
            margin-left: 10px;
        }
   }
   a{
        // 设置所有路由链接（<router-link> 渲染后的 <a> 标签）的通用样式
        height: 100%;
        color: #333;
        font-size:15px;
   }
}
</style>
<template>
        <el-row 
        class="login-container" 
        justify="center" 
        align="middle">
            <el-card style="max-width: 480px;">
                <template #header>
                    <div class="card-header">
                        <img :src="imgUrl" alt="">
                    </div>
                </template>
                <div class="jump-link">
                    <el-link type="primary" @click="handleChange">{{ formType ? '返回登录' : '注册账号' }}</el-link>
                </div>
                 <el-form
                  ref="loginFormRef"
                  style="max-width: 600px;"
                  class="demo-ruleForm"
                  :model="loginForm" 
                  :rules="rules"
                  >
                    <el-form-item prop="userName">
                        <el-input v-model="loginForm.userName" placeholder="手机号" :prefix-icon="UserFilled"></el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input v-model="loginForm.passWord" type="password" placeholder="密码" :prefix-icon="Lock"></el-input>
                    </el-form-item>
                    <el-form-item v-if="formType" prop="validCode">
                        <el-input v-model="loginForm.validCode" placeholder="验证码" :prefix-icon="Lock">
                            <template #append>
                                <span @click="countdownChange">{{ countdown.validText }}</span>
                            </template>
                        </el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" :style="{ width:'100%' }" @click="submitForm(loginFormRef)">
                            {{ formType? '注册账号' : '登录'  }}
                        </el-button>
                    </el-form-item>
                 </el-form>
            </el-card>
        </el-row>
</template>

<script setup>
import { ref, reactive, toRefs, toRaw } from 'vue'
import { getCode, userAuthentication, login, menuPermissions } from '../../api'
import { UserFilled, Lock } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'
import { useMenuStore } from '../../store/menu' // 根据你的文件路径调整导入路径

const menuStore = useMenuStore()

const { routerList } = toRefs(menuStore)

const imgUrl = new URL('../../../public/login-head.png', import.meta.url).href

// 表单数据
const loginForm = reactive({
    "userName": '',
    "passWord": '',
    "validCode": ''
})

// 切换表单(0 登录 1 注册)
const formType = ref(0)
// 点击切换登录和注册
const handleChange = () => {
    formType.value = formType.value === 0 ? 1 : 0
}

// 定义手机号正则表达式，使其在全局作用域可访问
const phoneReg = /^1(3[0-9]|4[01456879]|5[0-35-9]|6[2567]|7[0-8]|8[0-9]|9[0-35-9])\d{8}$/

// 账号校验规则
const validateUser = (rule, value, callback) => {
    // 不能为空
    if(value === '') {
        return callback(new Error('请输入账号'))
    } else {
        // 判断手机号是否正确
        phoneReg.test(value) ? callback() : callback(new Error('请输入正确的手机号'))
    }
}

// 密码校验
const validatePass = (rule, value, callback) => {
    // 不能为空
    if(value === '') {
        return callback(new Error('请输入密码'))
    } else {
        const passReg = /^[a-zA-Z0-9_-]{4,16}$/
        passReg.test(value)? callback() : callback(new Error('请输入正确的密码'))
    }
}

// 表单校验
const rules = reactive({
    userName: [{ validator: validateUser, trigger: 'blur' }],
    passWord: [{ validator: validatePass, trigger: 'blur' }],
})

// 发生短信
const countdown = reactive({
    validText: '获取验证码',
    time: 60,
})
let flag = false
const countdownChange = () => {
    // 如果已发生不处理
    if (flag) return
    
    if (!loginForm.userName || !phoneReg.test(loginForm.userName)) {
        return ElMessage({
            message: '请检查手机号是否正确',
            type: 'error', // 修改为正确的类型
        })
    }
    
    // 倒计时
    const timerId = setInterval(() => {
        if (countdown.time <= 0) {
            countdown.time = 60
            countdown.validText = '获取验证码'
            flag = false
            clearInterval(timerId)
        } else {
            countdown.time--
            countdown.validText = `${countdown.time}s后重试`
        }
    }, 1000) 
    flag = true
    getCode({ tel: loginForm.userName })
        .then(({ data }) => {
            console.log(data, "data")
            if (data.code === 10000) {
                ElMessage.success('发送成功')
            }
        })
}

const router = useRouter()
const loginFormRef = ref()

// 表单提交校验
const submitForm = async (formEl) => {
    if (!formEl) return
    // 手动触发校验
    await formEl.validate((valid, fields) => {
        if (valid) {
            console.log(loginForm, 'submit!')
            // 注册页面
            if (formType.value === 1) {
                console.log("准备注册")
                userAuthentication(loginForm)
                    .then(({data}) => {
                        if (data.code === 10000) {
                            ElMessage.success('注册成功,请登录')
                            formType.value = 0
                        }
                    })
            } else {
                // 登录页面
                login(loginForm)
                  .then(({data}) => {
                    console.log('登录接口返回数据:', data); // 添加日志输出
                    if (data.code === 10000) {
                      ElMessage.success('登录成功');
                      console.log(data);
                      // 将token和用户信息保存到本地
                      localStorage.setItem('pz_token', data.data.token);
                        localStorage.setItem('pz_userInfo', JSON.stringify(data.data.userInfo));
                      router.push('/');
                    } else {
                      console.log('登录失败，返回码不是10000:', data);
                    }
                  })
                 
            }
        } else {
            console.log('error submit!', fields)
        }
    })
}

</script>

<style lang="less" scoped>
:deep(.el-card__header) {
    padding: 0
  }
  .login-container {
    height: 100%;
    .card-header{
      background-color: #899fe1;
      img {
        width: 430px;
      }
    }
    .jump-link {
      text-align: right;
      margin-bottom: 10px;
    }
  }
</style>
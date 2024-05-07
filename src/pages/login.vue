<template>
    <div class="login_bg">
        <div class="login_box tc">
            <h1>欢迎登陆</h1>
            <el-form class="tc">
                <el-form-item prop="" label="账号">
                    <el-input placeholder="请输入账号" v-model="userName"></el-input>
                </el-form-item>
                <el-form-item prop="" label="密码">
                    <el-input placeholder="请输入密码" v-model="password"></el-input>
                </el-form-item>
            </el-form>
            <div class="tc">
                <el-button type="primary">登陆</el-button>
            </div>
            <div class="triangle">

            </div>
        </div>
        <el-button @click="submit">提交</el-button>

    </div>
</template>
<script setup lang="ts" >
import { ref } from 'vue'
import http from '@/utils/http'
const userName = ref('')
const password = ref('')
const submit = () => {
    http.get({
        url: '/api/getUserInfo?userName=liu&password=Liuchuanbo1!',
        duplicateRequestValidation: true,
        duplicateRequestValidationTime: 3000
    }).then(ts => {
        console.log(ts)
    }).catch(e => {
        console.error(e.message)
        console.log()
    })
}
</script>
<style lang="scss" scoped>
.login_bg {
    width: 100%;
    height: 100%;
    background-image: url('../assets/img/bg.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
}

h1 {
    font-size: 1.5rem;
    font-weight: 700;
    color: #fff;
    line-height: 3rem;

}

.login_box {
    width: 100%;
    height: 20rem;
    margin: 0 auto;
    background: transparent;
}

::v-deep(.el-form) {
    width: 60%;
    margin: 0 auto;

    .el-form-item__label {
        color: #fff;
    }
}

::v-deep(.el-input) {
    width: 200px;

    .el-input__wrapper {
        background-color: transparent !important;
    }

    .el-input__inner {
        color: #fff !important;
    }

    .el-input__wrapper.is-focus {
        box-shadow: 0 0 0 1px #11c5dc;
    }
}

.triangle {
    width: 30px;
    height: 30px;
    background-color: #bfd51c;
    // border: 50px solid transparent;
    border-left: 50px solid blue;
    border-top: 50px solid rgb(56, 163, 113);
    border-bottom: 50px solid rgb(140, 56, 163);
    border-right: 50px solid rgb(187, 42, 59);
}

// @media screen and(min-width: 1980px) {}

.tc {
    text-align: center;
}
</style>
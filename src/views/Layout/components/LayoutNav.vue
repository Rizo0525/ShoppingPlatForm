<template>
    <nav class="nav-container">
        <div class="container">
            <ul>
                <template v-if="userStore.userInfo.token">
                    <li><a href="javasciprt:;"><i class="iconfont icon-user"></i>{{ userStore.userInfo.account }}</a></li>

                    <el-popconfirm
                        confirm-button-text="确认"
                        cancel-button-text="取消"
                        icon-color="#626AEF"
                        title="确认退出吗?"
                        @confirm = 'handleConfirm'
                        >
                        <template #reference>
                            <li><a href="javasciprt:;">退出登录</a></li>
                        </template>
                    </el-popconfirm>
                    <li><router-link to="/member">我的订单</router-link></li>
                    <li><router-link to="/member/user">会员中心</router-link></li>
                </template>
                <template v-else>
                    <li><a href="javascript:;" @click="$router.push('/login')">请先登录</a></li>
                    <li><a href="javascript:;">帮助中心</a></li>
                    <li><a href="javascript:;">关于我们</a></li>
                </template>
            </ul>
        </div>
    </nav>
</template>

<script setup>
import {useUserStore} from '@/stores/useUser.js'
import {useRouter} from 'vue-router'
const userStore = useUserStore()
const router = useRouter()
const handleConfirm = ()=>{
    router.push('/login')
    // localStorage.removeItem('user')
    userStore.$reset()
}
</script>

<style lang="scss" scoped>
.nav-container{
    background: #333;
    ul{
        display: flex;
        height: 53px;
        align-items: center;
        justify-content: flex-end;
        padding: 0 50px;
        li{
            a{
                padding: 0 15px;
                color:  #cdcdcd;;
                line-height: 1;
                display: inline-block;
                i{
                    font-size: 14px;
                    margin-right: 2px;
                }
                &:hover{
                    color: $xtxColor;
                }
            }
            ~li{
                a{
                    border-left: 1px solid #666;
                }
            }
        }
    }
}
</style>
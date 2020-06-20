<template>
    <div>
       <van-nav-bar
           title="用户登录"
           left-text="返回"
           left-arrow   
           @click-left="goBack"
        />

        <div class="register-panel">
           <van-field

               v-model="userName"
               label="用户名"
               icon="clear"
               placeholder="请输入用户名"
               required    
               @click-icon="userName=' '"
               :error-message="userNameErrorMsg"
            />
            <van-field
               v-model="password"
               label="密码"
               placeholder="请输入密码"
               required
               :error-message="passwordErrorMsg"
            />
            <div class="register-button">
                <van-button type="primary" @click="LoginAction" :loading="openLoading" size="large">登录</van-button>
            </div>

        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import Url from '@/serviceAPI.config.js'
    import {Toast} from 'vant'
    export default {
        data() {
            return {
                userName: '',   //通过v-model实现数据的双向绑定
                password:'',

                openLoading:false,    //是否开启用户注册的loading
                userNameErrorMsg:'',    //用户名出现错误时的提示信息
                passwordErrorMsg:'',     //密码出现错误时的提示信息
            }
        },
        created(){
            if(localStorage.userInfo){
                Toast.success('您已登录')
                this.$router.push({name:'ShoppingMall'})
            }
        },
        methods:{
            goBack(){
                //返回上一页
                this.$router.go(-1)
            },
            //*********axios登录用户方法********
            axiosLoginUser(){
                this.openLoading=true;
                axios({
                    url:Url.login,
                    method:'post',
                    data:{
                        userName:this.userName,
                        password:this.password
                    }
                }).then(response=>{
                    console.log(response)
                    if(response.data.code==200 && response.data.message){
                         new Promise((resolve,reject)=>{
                        localStorage.userInfo={userName:this.userName}
                        setTimeout(()=>{
                            resolve()
                        },500)
                    }).then(()=>{
                        Toast.success('登录成功')
                        this.$router.push('/')
                    }).catch(err=>{
                        Toast.fail('登录状态保存失败')
                    })
                        
                    }else{
                        Toast.fail('登录失败')
                        this.openLoading=false
                    }
                    
                }).catch((error)=>{
                    Toast.fail('登录失败')
                    this.openLoading=false
                })
            },

            LoginAction(){
                this.checkForm() && this.axiosLoginUser()
            },
            //****表单验证方法 */
            checkForm(){
               let isOk=true
               if(this.userName.length<5){
                   this.userNameErrorMsg="用户名不能少于5位"
                   isOk=false
               }else{
                   this.userNameErrorMsg=''
               }
               if(this.passwordErrorMsg.length<6){
                   this.passwordErrorMsg="密码不能少于6位"
                   isOk=false
               }else{
                    this.passwordErrorMsg=''
               }
               return isOk
            }
        }
    }
</script>

<style  scoped>
     .register-panel{
        width:96%;
        border-radius: 5px;
        margin:20px auto;
        padding-bottom:50px;
    }
    .register-button{
        padding-top:10px;
    }
</style>
<template>
  <div class="login-container">
    <div class="login">
      <Form ref="LoginFormRef" :model="LoginForm" :rules="LoginFormRules">
        <FormItem prop="username">
          <Input type="text" v-model="LoginForm.username" placeholder="Username"></Input>
        </FormItem>
        <FormItem prop="password">
          <Input type="password" v-model="LoginForm.password" placeholder="Password"></Input>
        </FormItem>
        <FormItem>
          <Button type="primary" @click="handleLogin">
            登录
          </Button>
        </FormItem>
      </Form>
    </div>
  </div>
</template>

<script>
import md5 from 'md5'
import { login } from '@/api/auth'

export default {
  name: 'Login',
  data () {
    return {
      LoginForm: {
        username: '',
        password: ''
      },
      LoginFormRules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 5, max: 10, message: '长度在 5 到 10 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleLogin () {
      // 登录前校验
      this.$refs.LoginFormRef.validate(async status => {
        if (!status) return this.$Message.error('格式错误！')
        // 发起登录请求
        // 深拷贝实现解除双向绑定
        let loginForm = JSON.parse(JSON.stringify(this.LoginForm))
        // 加密
        loginForm.password = md5(loginForm.password)
        const { data:res } = await login(loginForm).catch((error) => {
          return this.$Message.error('服务器异常，请联系管理员!')
        })
        if (res.code !== 200 ) return this.$Message.error(res.msg)
        window.sessionStorage.setItem('token', res.data.token)
        this.$Message.success(res.msg)
        await this.$router.push('/home')
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.login-container {
  height: 100vh;
  background: no-repeat url("../../assets/images/girl.jpg");
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
}

.login {
  width: 500px;
  height: 300px;
  text-align: center;

  /deep/ .ivu-input {
    height: 40px;
    width: 35%;
    text-align: center;
    border-radius: 20px;
    transition: 1s;
  }

  /deep/ .ivu-input::placeholder {
    text-align: center;
  }

  /deep/ .ivu-input:focus {
    width: 50%;
  }

  /deep/ .ivu-form-item-error-tip {
    width: 200px;
    top: 16%;
    left: 75%;
  }

  .ivu-btn {
    border-radius: 20px;
    height: 35px;
    width: 100px;
    background-color: transparent;
    color: #9b0932;
  }

  .ivu-btn:hover {
    background-color: #cb7edf;
  }
}
</style>
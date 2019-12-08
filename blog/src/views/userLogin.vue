<template>
  <div class="userLogin">
    <el-tabs v-model="status">
      <el-tab-pane label="登陆" name="login"></el-tab-pane>
      <el-tab-pane label="注册" name="register"></el-tab-pane>
    </el-tabs>
    <!-- userlogin组件里面有slot但是不知道显示那是登录，还是注册组件 那我们为什么不具名slot呢？-->
    <!-- Vue 推荐在绝大多数情况下使用模板来创建你的 HTML。然而在一些场景中，你真的需要 JavaScript 的完全编程的能力。这时你可以用渲染函数，它比模板更接近编译器。 -->
    <addUser :status="status" @submit="submit" :loading="loading">{{status === 'login'?'登录':'注册'}}</addUser>
  </div>
</template>

<script>
import addUser from "@/components/addUser.vue";
// 因为所有系统都设计登录注册 可以把这一块抽为一个模块
export default {
  name: "userLogin",
  data() {
    return {
      status: "login",
      loading: false
    };
  },
  props: {},
  components: {
    addUser
  },
  mounted() {},
  methods: {
    submit(data) {
        this.loading = true;
        console.log(data)
    }
  }
};
</script>

<style lang="scss" scoped>
.userLogin {
  width: 600px;
  margin: 0 auto;
  border: 1px solid #ddd;
  padding: 50px;
  ul {
    display: flex;
    justify-content: space-around;
    li {
      cursor: pointer;
      border: 1px solid #ddd;
      text-align: center;
      line-height: 30px;
    }
  }
}
</style>
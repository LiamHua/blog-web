<template>
  <div id="header-admin">
    <Menu mode="horizontal" theme="dark" active-name="home" @on-select="changeMenuItem">
      <router-link to="home" class="logo">Blog</router-link>
      <MenuItem name="home">
      <Icon type="ios-home" />
      博客
      </MenuItem>
      <MenuItem name="class">
      <Icon type="logo-buffer" />
      分类
      </MenuItem>
      <MenuItem name="tag">
      <Icon type="ios-bulb" />
      标签
      </MenuItem>
      <MenuItem name="write">
      <Icon type="ios-bulb" />
      写博客
      </MenuItem>
    </Menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  methods: {
    changeMenuItem (name) {
      this.$router.push(name)
    }
  },
}
</script >

<style lang="scss" scoped>
.logo {
  float: left;
  font-size: 30px;
  color: #4de0e0;
  margin-left: 35px;
  margin-right: 20px;
}

.ivu-input-wrapper {
  float: right;
  margin-top: 14px;
  margin-right: 80px;
}
</style>
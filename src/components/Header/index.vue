<template>
  <div class="header">
    <Menu mode="horizontal" theme="dark" active-name="home">
      <router-link to="home" class="logo">Blog</router-link>
      <MenuItem name="home">
      <Icon type="ios-home" />
      首页
      </MenuItem>
      <MenuItem name="class">
      <Icon type="logo-buffer" />
      分类
      </MenuItem>
      <MenuItem name="tag">
      <Icon type="ios-bulb" />
      标签
      </MenuItem>
       <MenuItem name="history">
      <Icon type="md-egg" />
      日志
      </MenuItem>
      <MenuItem name="about">
      <Icon type="ios-cafe" />
      关于我
      </MenuItem>
      <Input v-model="searchWord" icon="ios-search" placeholder="想啥呢..." style="width: 200px" />
    </Menu>
  </div>
</template>

<script>
export default {
  name: 'Header'
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
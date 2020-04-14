<template>
  <div id="class-card">
    <Card style="width:350px">
      <p slot="title">
        <Icon type="ios-film-outline"></Icon>
        分类
      </p>
      <router-link to="/class" slot="extra">
        more
      </router-link>
      <List border>
        <ListItem class="class-card-item">
          <span class="class-card-item-keyword">学习日志</span>
          <span class="class-card-item-num">12</span>
        </ListItem>
        <ListItem>思考与感悟</ListItem>
        <ListItem>清单</ListItem>
        <ListItem>JavaScript</ListItem>
        <ListItem>SpringBoot</ListItem>
        <ListItem>认知升级</ListItem>
        <ListItem>面试</ListItem>
      </List>
    </Card>
  </div>

</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.class-card-item {
  display: flex;
  justify-content: space-between;

  .class-card-item-num {
    padding: 0 10px;
    border: 1px solid teal;
    border-radius: 6px;
    color: teal;
  }
  /deep/ .ivu-list-item-extra {
    display: none;
  }
}
</style>


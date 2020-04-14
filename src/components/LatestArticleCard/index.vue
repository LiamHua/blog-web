<template>
  <div id="latest-article-card">
    <Card style="width:350px">
      <p slot="title">
        <Icon type="ios-film-outline"></Icon>
        最新推荐
      </p>
      <List border>
        <ListItem>学习日志</ListItem>
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
  name: 'LatestArticleCard'
}
</script>

<style lang="scss" scoped>
</style>
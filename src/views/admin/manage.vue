<template>
  <div id="manage-container">
    <AdminHeader></AdminHeader>
    <ArticleManage></ArticleManage>
    <Footer></Footer>
  </div>
</template>

<script>
import AdminHeader from '@/components/Header/admin'
import Footer from '@/components/Footer'
import ArticleManage from '@/components/ArticleManage'


export default {
  name: 'Manage',
  components: {
    AdminHeader,
    ArticleManage,
    Footer
  },
}
</script>

<style lang="scss" scoped>
#manage-container {
  width: 70vw;
  margin: 0 auto;
  border: 1px solid #81d1d1;

  /deep/ .ivu-table {
    margin: 60px auto;
  }
}
</style>
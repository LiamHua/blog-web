<template>
  <div id="class-container">
    <Layout>
      <Header></Header>
      <ArticleList></ArticleList>
      <Footer></Footer>
    </Layout>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ArticleList from '@/components/ArticleList'

export default {
  components: {
    Header,
    Footer,
    ArticleList
  }
}
</script>

<style lang="scss" scoped>
#class-container {
  width: 70vw;
  margin: 0 auto;

  #all-class-card {
    margin: 35px auto;
    width:50vw;
  }

  #article-list {
    width:50vw;
    margin: 0 auto;
    margin-bottom: 30px;
    border-top: 2px solid #44efef;

    /deep/ .list-header {
      display: none;
    }
  }
}

</style>
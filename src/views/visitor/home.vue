<template>
  <div id="home-container">
    <Header></Header>
    <div class="content">
      <div class="left">
        <ArticleList></ArticleList>
      </div>
      <div class="right">
        <ClassCard class="card"></ClassCard>
        <TagCard class="card"></TagCard>
        <LatestArticleCard class="card"></LatestArticleCard>
        <FollowMe></FollowMe>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header'
import ArticleList from '@/components/ArticleList'
import ClassCard from '@/components/ClassCard'
import TagCard from '@/components/TagCard'
import LatestArticleCard from '@/components/LatestArticleCard'
import FollowMe from '@/components/FollowMe'
import Footer from '@/components/Footer'

export default {
  components: {
    Header,
    ArticleList,
    ClassCard,
    TagCard,
    LatestArticleCard,
    FollowMe,
    Footer
  } 
}
</script>

<style lang="scss" scoped>
#home-container {
  width: 70%;
  margin: 0 auto;
  border: 1px solid #81d1d1;
  display: flex;
  flex-direction: column;

  .content {
    display: flex;
    justify-content: space-between;

    .left {
      margin-top: 50px;
      margin-left: 50px;
    }

    .right {
      margin: 50px 50px;

      .card {
        margin-bottom: 35px;
      }
    }
  }
}
</style>
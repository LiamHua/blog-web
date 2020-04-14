<template>
  <div id="article-list">
    <div class="list-header">
      <span class="list-header-left">博客</span>
      <div class="list-header-right">
        <span class="list-header-right-word">共</span>
        <span class="list-header-right-number">15</span>
        <span class="list-header-right-word">篇</span>
      </div>
    </div>
    <div class="list-content">
      <List item-layout="vertical">
        <ListItem v-for="item in data" :key="item.title">
          <ListItemMeta :avatar="item.avatar" :title="item.title" :description="item.description" />
          {{ item.content }}
          <template slot="action">
            <li>
              <Icon type="ios-star-outline" /> 123
            </li>
            <li>
              <Icon type="ios-thumbs-up-outline" /> 234
            </li>
            <li>
              <Icon type="ios-chatbubbles-outline" /> 345
            </li>
          </template>
          <template slot="extra">
            <img src="https://dev-file.iviewui.com/5wxHCQMUyrauMCGSVEYVxHR5JmvS7DpH/large" style="width: 280px">
          </template>
        </ListItem>
      </List>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArticleList',
  data () {
      return {
          data: [
              {
                  title: 'This is title 1',
                  description: 'This is description, this is description, this is description.',
                  avatar: 'https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar',
                  content: 'This is the content, this is the content, this is the content, this is the content.'
              },
              {
                  title: 'This is title 2',
                  description: 'This is description, this is description, this is description.',
                  avatar: 'https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar',
                  content: 'This is the content, this is the content, this is the content, this is the content.'
              },
              {
                  title: 'This is title 3',
                  description: 'This is description, this is description, this is description.',
                  avatar: 'https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar',
                  content: 'This is the content, this is the content, this is the content, this is the content.'
              }
          ]
      }
  }
}
</script>

<style lang="scss" scoped>
#article-list {
  border: 1px solid #d4d3d3;

  .list-header {
    border-bottom: 1px solid #d4d3d3;
    height: 50px;

    .list-header-left {
      float: left;
      font-size: 22px;
      color: teal;
      line-height: 50px;
      margin-left: 15px;
      display: block;
    }

    .list-header-right {
      float: right;
      margin-right: 20px;

      .list-header-right-word {
        line-height: 50px;
        font-size: 16px;
      }

      .list-header-right-number {
        margin: 0 10px;
        font-size: 23px;
        color: #e75d5d;
        line-height: 50px;
      }
    }
  }

  .list-content {
    padding: 35px 35px;
  }
}
</style>
<template>
  <div class="footer">
    <Row class="up">
      <Col span="4">
        <img src="../../assets/images/code.jpg" alt="扫一扫加我微信" class="code">
      </Col>
      <Col span="5">
        <h3>最新博客</h3>
        <p>用户故事</p>
        <p>面试</p>
        <p>HashMap知识点</p>
      </Col>
      <Col span="6">
        <h3>联系我</h3>
        <a href="mailto:liamhuazai@gmail.com" target="_blank">
          Email: liamhuazai@gmail.com
          </a>
        <p>QQ: 1120601455</p>
      </Col>
      <Col span="9">
        <h3>Liam</h3>
        <p>这是我的个人博客，会分享关于编程、Blink、思考、面试等相关的任何内容，希望可以对来这儿的朋友有所帮助...</p>
      </Col>
    </Row>
    <Row class="down">
      <p>Copyright © 2020 @Liam | 鄂ICP备19024304号-2</p>
    </Row>
  </div>

</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss" scoped>
.up {
  background-color: #000;
  border-bottom: 1px solid;
  text-align: center;
  padding: 0 10px;

  h3 {
    color: #8c8888;
    margin-top: 60px;
    margin-bottom: 10px;
  }

  p {
    line-height: 1.8;
  }
  
  a {
    color: #515a6e;
  }
}

.code {
  width: 128px;
  height: 128px;
  margin: 60px auto;
  display: block;
}
.down {
  background-color: #000;

  p {
    width: 350px;
    color: #6e706e;
    margin: 25px auto;
    display: block;
  }
}
</style>
<template>
  <div class="write-container">
    <div>
      <Form ref="titleFormRef" :model="markdownForm" inline>
        <FormItem class="titleInput" prop="title">
          <Input v-model="markdownForm.title" maxlength="80" show-word-limit placeholder="请输入文章标题" size="large" style="width: 80vw" />
        </FormItem>
        <FormItem class="btns">
          <Button type="warning" @click="save">保存草稿</Button>
        </FormItem>
        <FormItem class="btns">
          <Button type="error" @click="showModal">发布文章</Button>
        </FormItem>
      </Form>
    </div>
    <mavon-editor ref="mdRef" @save="save" @imgAdd="imgAdd" @imgDel="imgDel" v-model="markdownForm.contentMarkdown"/>
    <!-- 发布文章对话框 -->
    <PublishModal :markdownForm="markdownForm"></PublishModal>
  </div>
</template>

<script>
import PublishModal from '@/components/PublishModal'
import getCurrentDate from '@/utils/date'
import { saveAsDraft } from '@/api/article'

export default {
  name: 'WriteBlog',
  components: {
    PublishModal
  },
  computed: {
    // 监测发布文章对话框的显示
    isShow: {
      get () {
        return this.$store.state.showPublishModal
      },
      set (newVal) {
        this.$store.commit('changePublishModalState', newVal)
      }
    }
  },
  data() {
    return {
      markdownForm: {
        articleId: '',
        title: '',
        contentMarkdown: '',
        type: '',
        classes: [],
        tags: [],
        lastSaveTime: '',
        createTime: '',
        publishTime: '',
        state: 1
      },
    }
  },
  created() {
    if (this.markdownForm.createTime === '') {
      this.markdownForm.createTime = getCurrentDate()
    }
  },
  mounted() {
    
  },
  methods: {
    save () {
      this.markdownForm.lastSaveTime = getCurrentDate()
    },
    imgAdd () {

    },
    imgDel () {

    },
    // 显示发布文章对话框
    showModal () {
      this.isShow = true
    },
          
    //inputTime 参数是毫秒级时间戳
    
  }
}
</script>

<style lang="scss" scoped>
.ivu-form {
  margin: 15px 15px;
  display: flex;
  align-items: center;

  .ivu-form-item {
    margin-bottom: 0;
  }

  .ivu-btn {
    margin-left: 20px;
  }
}

// 覆盖markdown编辑器原样式，该样式会与发布文章Modal冲突
.v-note-wrapper {
  position: static;
}

/deep/ .ivu-modal {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
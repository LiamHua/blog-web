<template>
  <Modal v-model="isShow" title="发布文章" closable>
    <!-- 提示消息 -->
    <div class="tip">
      <p class="tip-words">
        <Icon type="md-alert" />
        请勿发布涉及政治、广告、营销、翻墙、违反国家法律法规等内容
      </p>
    </div>

    <!-- 文章标签选择 -->
    <div class="tags">
      <span>文章标签：</span>
      <Tag v-for="item in markdownForm.tags" :key="item" :name="item" size="medium" closable @on-close="handleDeleteTag">{{ item }}</Tag>
      <Button icon="ios-add" type="dashed" size="small" @click="handleAddTag">
        添加文章标签
      </Button>
    </div>

    <!-- 文章分类选择 -->
    <div class="classes">
      <span>分类专栏：</span>
      <Tag v-for="item in markdownForm.classes" :key="item" :name="item" size="medium" closable @on-close="handleDeleteClass">{{ item }}</Tag>
      <Button id="createClass" icon="ios-add" type="dashed" size="small" @click="handleAddClass">
        新建分类专栏
      </Button>

      <div class="preparedClasses">
        <p>最多选择三个分类专栏</p>
        <div class="preparedClasses-content">
          <CheckboxGroup v-model="markdownForm.classes" @on-change="checkClassesChange">
            <Checkbox :label="item" v-for="item in preparedClasses" :key="item" :disabled = "checkBoxDisabled">
            </Checkbox>
          </CheckboxGroup>
        </div>
      </div>
    </div>

    <!-- 文章类型选择 -->
    <div class="type">
      <span>文章类型：</span>
      <Select v-model="markdownForm.type" style="width:150px">
        <Option value="原创">原创</Option>
        <Option value="转载">转载</Option>
      </Select>
    </div>

    <!-- 发布文章 -->
    <div class="btns" slot="footer">
      <Button type="text" @click="cancel">取消</Button>
      <Button type="text">保存为草稿</Button>
      <Button type="info" @click="ok">发布文章</Button>
    </div>
  </Modal>
</template>
<script>
import getCurrentDate from '@/utils/date'
import { saveAsDraft, publishArticle } from '@/api/article'

export default {
  props: {
    markdownForm: Object
  },
  computed: {
    isShow: {
      get() {
        return this.$store.state.showPublishModal
      },
      set (newVal) {
        this.$store.commit('changePublishModalState', newVal)
      }
    }
  },
  data () {
    return {
      // 数据库中已创建的专栏
      preparedClasses: ['笔记', 'springboot', '面试', 'vue'],
      // 对话框临时保存的值
      value: '',
      // 控制分类专栏中多选框的禁用
      checkBoxDisabled: false
    }
  },
  methods: {
    // 点击发布文章
    ok () {
      this.markdownForm.publishTime = getCurrentDate()
      this.markdownForm.lastSaveTime = getCurrentDate()
      publishArticle(this.markdownForm)
    },
    // 点击取消
    cancel () {
      this.$store.commit('changePublishModalState', false)
    },
    save () {
      this.markdownForm.lastSaveTime = getCurrentDate()
    },
    // 向文章标签栏中添加标签
    handleAddTag () {
      this.$Modal.confirm({
        render: (h) => {
          return h('Input', {
            props: {
              value: this.value,
              autofocus: true,
              enterButton: true,
              maxlength: 15,
              placeholder: '请输入标签名...'
            },
            on: {
              input: (val) => {
                this.value=val.replace(/[, ]/g,'')
              }
              // TODO: 这里可以增加键盘监听事件enter，增加体验，且可以连续添加标签
              // keyup: (event) => {
              //   // if (event.keyCode)
              //   console.log(event.keyCode) 
              // }
            }
          })
        },
        onOk: () => {
          this.markdownForm.tags.push(this.value)
          this.value = ''
        }
      })
    },
    // 删除文章标签中的标签
    handleDeleteTag (event, name) {
      let index = this.markdownForm.tags.indexOf(name)
      this.markdownForm.tags.splice(index, 1)
    },
    // 向分类专栏中添加标签
    handleAddClass () {
      this.$Modal.confirm({
        render: (h) => {
          return h('Input', {
            props: {
              value: this.value,
              autofocus: true,
              ref: 'inputRef',
              maxlength: 15,
              enterButton: true,
              placeholder: '请输入专栏名称...'
            },
            on: {
              input: (val) => {
                // this.value = val
                this.value=val.replace(/[, ]/g,'')
              },
              // TODO: 这里可以增加键盘监听事件enter，增加体验，且可以连续添加标签
              // keydown: (event) => {
              //   // if (event.keyCode)
              //   console.log(event) 
              // }
            }
          })
        },
        onOk: () => {
          if (this.value === '') return
          this.markdownForm.classes.push(this.value)
          this.value = ''
          // 限制数量
          if (this.markdownForm.classes.length === 3) {
            this.checkBoxDisabled = true
            document.getElementById("createClass").disabled = true
          }
        }
      })
    },
    // 删除分类专栏中的标签
    handleDeleteClass (event, name) {
      let index = this.markdownForm.classes.indexOf(name)
      this.markdownForm.classes.splice(index, 1)
      if (this.markdownForm.classes.length === 2) {
        this.checkBoxDisabled = false
        document.getElementById("createClass").disabled = false
      }
    },
    // 分类专栏多选框触发事件
    checkClassesChange () {
      if (this.markdownForm.classes.length === 3) {
        this.checkBoxDisabled = true
        document.getElementById("createClass").disabled = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
/deep/ .ivu-modal {
  width: 550px;

  .ivu-modal-content {
    padding: 16px 16px;
  }
}

.tip {
  height: 36px;
  background: #fff6e5;
  color: #e33e33;
  padding: 0 10px;

  .tip-words {
    line-height: 36px;
  }
}

.tags {
  margin: 1em 0;
  line-height: 32px;
}

.classes {
  margin: 1em 0;
  line-height: 32px;

  .preparedClasses {
    border: 1px solid #e8e8ee;
    padding: 5px 16px;
    margin-top: 8px;
    margin-left: 70px;
    height: 160px;
    border-radius: 4px;

    .preparedClasses-content {
      border-top: 1px solid #e8e8ee;
    }
  }
}

.type {
  margin: 1em 0;
  line-height: 32px;
}

.btns {
  height: 32px;
  padding: 6px 0 0 18px;
}
</style>

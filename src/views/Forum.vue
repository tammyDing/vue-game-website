<template>
  <div class="container">
    <div class="main">
      <div v-if="topicShow" class="topic-container">
        <div class="topic-close">
          <span class="icon-cross" @click="topicHandler"></span>
        </div>
        <h1>{{topic.title}}</h1>
        <p class="update-txt">
          {{topic.update}}
        </p>
        <p>{{topic.content | ForContact}}</p>
      </div>
      <div class="category-title">
        <span :class="{'current': categoryIndex == 0}" @click="categoryHandler(0)">分类</span>
        <span :class="{'current': categoryIndex == 1}" @click="categoryHandler(1)">最新</span>
        <span :class="{'current': categoryIndex == 2}" @click="categoryHandler(2)">热门</span>
      </div>
      <div class="category-content">

        <!-- 分类列表 -->
        <div class="content-container" :class="{'cur-container': categoryIndex == 0}">
          <div class="head">
            分类<span>主题</span>
          </div>
          <div class="main">
            <h2><span>36/周</span>General Discussion</h2>
            <p>不需要分类或者不适合放在现在的任何分类中的主题</p>
          </div>
          <div class="main">
            <h2><span>119/周</span>Get Help</h2>
            <p>Got stuck? Get help from other users here. Better yet, help others out once you leveled up your own skills!</p>
          </div>
        </div>
        <!-- 分类列表over -->

        <!-- 最新列表 -->
        <div class="content-container" :class="{'cur-container': categoryIndex == 1}">
          <table>
            <thead>
              <tr>
                <th><span class="th-padding">主题</span>分类</th>
                <th>用户</th>
                <th>回复</th>
                <th>活动</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Welcome to the Vue Forum!</td>
                <td><span class="td-user-">TTL</span></td>
                <td><span class="td-replay">5</span></td>
                <td><span class="td-active">21天前</span></td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- 最新列表over -->

        <!-- 热门列表 -->
        <div class="content-container" :class="{'cur-container': categoryIndex == 2}">
          <!-- 日期选框 -->
          <!-- 日期选框over -->
          <table>
            <thead>
              <tr>
                <th>主题</th>
                <th>分类</th>
                <th>用户</th>
                <th>回复</th>
                <th>活动</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>[豆瓣]分享一个精致完整的Vue2+项目供大家交流学习</td>
                <td><span class="td-type">中文</span></td>
                <td><span class="td-user-">TTL</span></td>
                <td><span class="td-replay">5</span></td>
                <td><span class="td-active">17年9月</span></td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- 热门列表over -->

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      categoryIndex: 0,
      topic: {
        title: 'What happened to the old forum?',
        update: 'The old forum is available at http://archive.forum.vuejs.org/ - however there will be no new user registration. It will continue to function, but just for archiving purposes.',
        content: [
          'So, as many of you probably noticed, the old forum has been quite unstable lately. We’ve decided to move to Discourse, which is more mature, stable and well documented than NodeBB. Unfortunately, there is currently no NodeBB -> Discourse content migration tool, so we have to start afresh…',
          'This also means you will have to sign up again, apologies for the inconvenience, but hopefully this is worth a more stable forum.'
        ]
      }
    }
  },
  filters: {
    ForContact (value) {
      return value.join('')
    }
  },
  computed: {
    topicShow () {
      return this.$store.state.topicShow
    }
  },
  methods: {
    categoryHandler (index) {
      this.categoryIndex = index
    },
    topicHandler () {
      this.$store.dispatch('onTopicCloseHandler', false)
    }
  }
}
</script>

<style scoped>
.container {
  min-height: 100vh;
}
.main {
  padding: 0.266667rem;
}
.topic-container {
  padding: 0.266667rem;
  background-color: #2697fc;
  border-radius: 0.133333rem;
  color: #fff;
  position: relative;
  margin-bottom: 0.4rem;
}
.topic-container h1 {
  font-size: 0.426667rem;
  font-weight: normal;
  margin: 0.133333rem 0;
}
.topic-close {
  position: absolute;
  top: 0.213333rem;
  right: 0.213333rem;
  opacity: 1;
  transition: all 1s;
  cursor: pointer;
}
.topic-close:hover {
  opacity: 0.8;
}
.category-title {
  margin: 0;
}
.category-title span {
  cursor: pointer;
  display: inline-block;
  padding: 0.133333rem 0.266667rem;
}
.category-title span.current {
  background-color: #2697fc;
  color: #fff;
}
.category-content {
  position: relative;
}
.content-container{
  display: none;
}
.content-container.cur-container {
  display: block;
}
.cur-container .head{
  color: #e9e9e9;
  padding: 0.133333rem;
  border-bottom: 0.053333rem solid #e9e9e9;
}
.cur-container .head span {
  float: right;
}
.cur-container .main {
  padding: 0.133333rem;
  border-bottom: 0.026667rem solid #e9e9e9;
}
.cur-container h2 {
  font-size: 0.426667rem;
  line-height: 0.853333rem;
}

.cur-container table {
  width: 100%
}
.cur-container thead th{
  color: #e9e9e9;
  padding: 0.133333rem;
  border-bottom: 0.053333rem solid #e9e9e9;
}
.cur-container tbody td{
  padding: 0.133333rem;
  border-bottom: 0.026667rem solid #e9e9e9;
}
</style>

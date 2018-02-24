<template>
  <div id="app">
    <router-view/>
    <div class="sticky-footer">
      <div class="item-link">
        <router-link to="/game"><span class="icon-lifebuoy"></span>游戏</router-link>
      </div>
      <div class="item-link">
        <router-link to="/gift"><span class="icon-gift"></span>礼包</router-link>
      </div>
      <div class="item-link">
        <router-link to="/market"><span class="icon-cart"></span>积分商城</router-link>
      </div>
      <div class="item-link">
        <router-link to="/forum"><span class="icon-bubbles2"></span>社区</router-link>
      </div>
      <div class="item-link">
        <router-link to="/user"><span class="icon-user"></span>个人</router-link>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
#app {
  position: relative;
  height: 100vh;
  text-align: center;
}
.container{
  background-color: #fff;
  padding-bottom: 1.25rem;
}
.sticky-footer {
  display: flex;
  align-items: center;
  width: 100%;
  height: 1.2rem;
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 0.133333rem 0;
  border-top: 1px solid #e9e9e9;
  background-color: #fff
}
.sticky-footer .item-link{
  justify-content: center;
  width: 20%;
  font-size: 0.266667rem;
}
.sticky-footer .item-link a{
  display: inline-block;
}
.sticky-footer .item-link span {
  color: #666;
  font-size: 0.48rem;
  display: block;
  padding:0.066667rem 0 0.133333rem 0;
}
.item-link .item-link-active {
  display: block;
  color: #2697fc;
}
.item-link .item-link-active span{
  color: #2697fc;
}

/* 适配处理 */
@media screen and (min-width:750px) {
    body {
      background-color: #80bdfe;
    }
    #app {
        width: 750px;
        margin: 0 auto;
    }
    .sticky-footer {
        width: 750px;
        margin: 0 auto;
        left: auto;
    }
}
</style>

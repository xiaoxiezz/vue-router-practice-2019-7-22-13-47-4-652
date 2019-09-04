<template>
  <div class="personal">
    <p>个人页面</p>
    <ul>
      <li>
        <router-link to="/index">返回</router-link>
      </li>
    </ul>
    <div class="info">
        <p>头像：</p>
        <img src="../heng.png"/>
        <p>姓名：{{userName}}</p>
        <p>电话：</p>
        <p>16666666666</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  data: function(){
      return{
          userName:""
      }
  },
  created() {
      this.userName=this.$store.getters.getName;
  },
};
</script>
<style scoped>
.info {
  position: absolute;
  left: 50%;
  top: 30%;
  margin-left: -100px;
  padding-bottom: 20px;
}
li{
    float: left;
}
</style>

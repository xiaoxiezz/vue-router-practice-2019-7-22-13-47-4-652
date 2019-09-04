<template>
  <div class="welcome">
    <div class="name">
      <input placeholder="请输入姓名" v-model="inputName" />
    </div>
    <div class="btn">
      <button class="button" @click="toIndex">Welcome to TodoList!</button>
    </div>
  </div>
</template>

<script>
import router from "../router/router.js";

export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  methods: {
    toIndex: function() {
      this.$store.commit("setName", this.inputName);
      router.push({ path: "index" });
    }
  }
};
</script>

<style scoped>
.name {
  position: absolute;
  left: 50%;
  top: 30%;
  margin-left: -100px;
  padding-bottom: 20px;
}
.btn {
  position: absolute;
  left: 50%;
  top: 45%;
  margin-left: -120px;
  padding-bottom: 20px;
}
.button {
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
</style>

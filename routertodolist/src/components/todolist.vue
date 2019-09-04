<template>
  <div class="todolist">
    <p>todolist</p>
    <ul>
      <li class="returnIndex">
        <router-link to="/index">返回</router-link>
      </li>
    </ul>
    <article>
      <h2>Jquery To Do List</h2>
      <p>
        <em>Simple Todo List with adding and filter by diff status.</em>
      </p>
    </article>
    <!-- 输入框 -->
    <div>
      <label>
        <input class="input-text" type="text" name="ListItem" id="ListItem" />
      </label>
      <div id="button" v-on:click="addList">Add</div>
    </div>
    <br />
    <!-- 显示列表 -->
    <ol>
      <li v-bind:class="{'checed':$store.getters.getButtonStatus}">
        <label>
          <input name="done-todo" type="checkbox" />
        </label>
        <span>li内容</span>
      </li>
    </ol>

    <div>
      <ul id="filters">
        <li>
          <a href="#" data-filter="all">ALL</a>
        </li>
        <li>
          <a href="#" data-filter="active">Active</a>
        </li>
        <li>
          <a href="#" data-filter="complete">Complete</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "index"
};
</script>

<style scoped>
#button:hover {
  cursor: pointer;
  opacity: 0.8;
}
#button {
  display: inline-block;
  background-color: #fc999b;
  color: #ffffff;
  border-radius: 5px;
  text-align: center;
  margin-top: 2px;
  padding: 5px 15px;
}
ol li {
  padding: 5px;
  color: #000;
}

#filters {
  text-align: center;
  margin-bottom: -10px;
  margin-top: 40px;
}

#filters li a {
  color: #fc999b;
  text-decoration: none;
  border: 1px solid transparent;
  border-radius: 3px;
}
a {
  margin: 3px;
  padding: 3px 7px;
}
#filters li {
  display: inline;
  margin: 0 0 5px 0;
  padding: 8px;
  list-style: none;
  outline: none;
}
.returnIndex {
  float: left;
}
</style>

<template>
  <div class="hello">
    vue2 组件，通过class='hello'设置了2像素的<span style="background-color: red;">红色</span>边框。<br/>
    下面是通过prop传入的文本，通过h1标签样式设置了<span style="background-color: red;">红色</span>字体
    <h1>{{ msg }}</h1>    
  </div>
</template>

<script>
export default {
  name: 'vue2Message',
  props: {
    msg: String
  }
}
</script>

<style scoped>
h1 {
  color: red;  
}
.hello{
  border: 2px solid red;
}
</style>

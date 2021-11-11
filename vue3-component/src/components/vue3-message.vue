<template>
  <div class="hello">
    vue3 组件，通过class='hello'设置了2像素的<span style="background-color: green;">绿色</span>边框。<br/>
    下面是通过prop传入的文本，通过h1标签样式设置了<span style="background-color: green;">绿色</span>字体
    <h1>{{ msg }}</h1>    
  </div>
</template>

<script>
export default {
  name: 'vue3Message',
  props: {
    msg: String
  }
}
</script>

<style>
h1 {
  color: green;  
}
.hello{
  border: 2px solid green;
}
</style>

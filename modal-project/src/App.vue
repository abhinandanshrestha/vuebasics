<template>
  <h1>{{title}}</h1>
  <!----- Attribute/Data Binding (is used for using dynamic data)--->
  <!-- <Modal v-bind:header="header" v-bind:text="text"/>  -->
  <!--- We pass in props from app.vue to children nodes-->
  <Modal :header="header" :text="text" :theme="sale" /> 

</template>

<script>
import Modal from './components/Modal'

export default {
  name: 'App',
  components: { Modal },
  data(){
    return{
      header: 'Signup for the Giveaway',
      text: 'Grab it in half price',
      title: 'My First Vue App :)'
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1{
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>

<template>
  <div id="app">
    
    <!--Header-->
   <Myheader></Myheader>
    <!--Nav-->
	<MyNav></MyNav>  
	<!--Body-->
	<router-view></router-view>
  </div>
</template>

<script>
import Myheader from './components/Header/Header';
import MyNav from './components/Nav/Nav';

export default {
  name: 'App',
  components: {
    Myheader,
    MyNav
  }
}
</script>

<style>
</style>

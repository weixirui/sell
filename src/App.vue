<template>
  <div id="app">
    
    <!--Header-->
   <Myheader :poiInfo='poiInfo'></Myheader>
    <!--Nav-->
	<MyNav></MyNav>  
	<!--Body-->
	<router-view></router-view>
  </div>
</template>

<script>
import Myheader from 'components/Header/Header';
import MyNav from 'components/Nav/Nav';

export default {
  name: 'App',
  components: {
    Myheader,
    MyNav
  },
  data(){
  	return{
  		poiInfo:{}
  	}
  },
  created(){
  	var that = this;
  	this.$axios.get('/api/goods')
  		.then(function(response){
  			//console.log(response);
  			var dataSource = response.data;
  			//console.log(dataSource);
  			if(dataSource.code==0){
  				that.poiInfo = dataSource.data.poi_info;
  			//	console.log(that.poiInfo);
  			}
  		})
  		.catch(function(error){
  			console.log(error);
  		});
  }
}
</script>

<style>
</style>

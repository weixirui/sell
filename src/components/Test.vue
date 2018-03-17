<template>
  <div class="test">
    This is my demo file.
	{{msg}}
  </div>
</template>

<script>
	export default{
		data(){
			return{
				msg:"I am data message."
			}			
		}
	}

</script>


<style scoped>
.test{
	color:red;
}
</style>

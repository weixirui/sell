<template>
	<div class="goods">
		<div class="menu-wrapper">
		<ul>
			<li class="menu-item" >
				<p class="text">
					<img :src="container.tag_icon" v-if="container.tag_icon" class="icon"/>
					{{container.tag_name}}
				</p>
			</li>
			<li class="menu-item" v-for="item in goods">
				<p class="text" >
						<img :src="item.icon" v-if="item.icon" class="icon" />
						{{item.name}}
				</p>
			</li>
		</ul>
		</div>
		<div class="foods-wrapper">
			<ul>
				<li v-for="item in goods">
					<h3 class="title">{{item.name}}</h3>
					<ul>
						<li v-for="food in item.spus">
							<div class="icon" :style="head_bg(food.picture)"></div>
							
							<div class="content">
								<h3 class="name">{{food.name}}</h3>
								<p class="desc" v-if="food.description">{{food.description}}</p>
								<div class="extra">
									<span class="saled">{{food.month_saled_content}}</span>
									<span class="praise">{{food.praise_content}}</span>
								</div>
								<img class="product" :src="food.product_label_picture" />
							</div>
						</li>
					</ul>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				container:{},
				goods: []
			}
		},
		created(){
			var that = this;
			this.$axios.get('/api/goods')
				.then(function(response){
					var dataSource = response.data;
					if(dataSource.code == 0){
						that.container = dataSource.data.container_operation_source;
						that.goods = dataSource.data.food_spu_tags;
						console.log(that.container);
						console.log(that.goods);
					}
				})
				
				.catch(function(error){
					console.log(error);
				});
		},
		method: {
			head_bg(imgName){
				return "background-image: url("+imgName +");"
			}
		}
//		computed:{
//			head_bg(){
//				return
//			}
//		}
	}
</script>

<style>
	@import url("Goods.css"); 
</style>
<template>
<el-container>
	<el-aside width="200px" style="background: green"><left></left></el-aside>
 	<el-container>
    <el-header style="background: red"><header-top></header-top></el-header>
    <el-main style="background: blue"><main-list></main-list></el-main>
  </el-container>
</el-container>

</template>

<script>
	import Left from './Left'
	import MainList from './Main'
	import HeaderTop from './Header'
	export default{
		name:"",
		data(){
			return{

			}
			
		},
		components:{
			Left,
			MainList,
			HeaderTop
		}
	}

</script>

<style rel="stylesheet">

</style>
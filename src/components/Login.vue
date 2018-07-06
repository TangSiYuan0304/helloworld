<template>
	<div style="margin:auto;width: 50%">
		<p style="font-size: 30px">用户登录</p>
		手机号：<el-input v-model="phone" placeholder="请输入内容" style="width: 30%">
		</el-input><br/><br/>
		密&nbsp;&nbsp;&nbsp;&nbsp;码：<el-input v-model="password" placeholder="请输入内容" style="width: 30%"></el-input><br/><br/>
		<el-button type="primary"@click="login">登录</el-button>
		<el-button type="primary" @click="regist">注册</el-button>
	</div>
</template>
<script type="text/javascript">
	export  default{
		data(){
			return{
				phone:'',
				password:''
			}
		},
		methods:{
			login(){
				this.$axios.get('http://localhost:8080/login?phone='+this.phone+'&password='+this.password).then(response => {
					if(response.data.code=="0000"){
						this.$message({
							message:response.data.msg,
							type:"success"
						});
						this.$router.push({path:'/index'})
					}else{
						 this.$message.error(response.data.msg);
					}
				})
				
			},
			regist(){
			this.$router.push({path:'/regist'})
			}
		}
		
	}
</script>
<style type="text/css">
	
</style>
<template>
	<div class="login_container">
		<div class="top_container">
			<transition name="text">
				<span v-if="show">欢迎使用</span>
			</transition>
		</div>
		<transition name="login">
			<div class="form_container" v-if="show">
				<span class="form-text">LOG IN</span>
				<el-form class="login_form" :model="loginForm" :rules="checkData" ref="loginFormRef">
					<!--                    用户名-->
					<el-form-item class="efi" prop="mobile">
						<el-input prefix-icon="el-icon-user" v-model="loginForm.mobile"></el-input>
					</el-form-item>
					<!--                    密码-->
					<el-form-item class="efi" prop="password">
						<el-input prefix-icon="el-icon-lock" v-model="loginForm.password" type="password"
						          @keyup.enter.native="login"></el-input>
					</el-form-item>
					<!--                    按钮-->
					<el-form-item class="ebt">
						<el-button type="primary" @click="login">登 录</el-button>
					</el-form-item>
				</el-form>
				<div class="other">
					<span>忘记密码</span>
					<el-divider direction="vertical"></el-divider>
					<span @click="go('signIn')">手机登录</span>
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
import api from "../../api/api";
import tool from "../../tool/tool";

export default {
	name: "login",
	data() {
		return {
			show: false,
			loginForm: {
				mobile: '18920259091',
				password: '123456',
			},
			//字符检验
			checkData: '',
		}
	},
	methods: {
		checkFormVal() {
			//校验登录参数
			let isReady = false;
			this.$refs.loginFormRef.validate(async isRight => {
				isReady = isRight;
			})
			return isReady;
		},
		async login() {
			if (this.checkFormVal()) {
				const {data} = await api.postPassword(this.loginForm)
				if (data.code == 0) {
					localStorage.setItem('token', data.token)
					var str = this.$dsBridge.call("setToken", data.token);
					this.go('profile')
				} else {
					Notify({
						message: data.msg,
						color: '#ffffff',
						background: '#ffbb55',
						duration: 1000
					})
				}
			}

		},
		go(path) {
			this.$router.push('/' + path)
		}
	},
	mounted() {
		this.show = true
		this.checkData = tool['checkData']
	}
}
</script>

<style scoped lang="less">
.login_container {
	width: 100vw;
	height: 100vh;
	overflow: hidden;
	text-align: center;

	.top_container {
		height: 50vh;
		width: 100vw;
		position: fixed;
		z-index: -1;
		background-image: url("https://s3.ax1x.com/2021/02/11/yBSFot.md.jpg");
		background-repeat: no-repeat;
		background-size: cover;
		background-attachment: fixed;
		text-align: center;
		-webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, .15);
					shadow: 0 1px 2px rgba(0, 0, 0, .15);

		span {
			display: inline-block;
			margin-top: 25%;
			font-size: 30px;
			font-weight: 600;
			letter-spacing: 15px;
			color: #fff;
		}

	}

	.form_container {
		height: 85vh;
		overflow: hidden;
		margin-top: 25vh;
		background-color: white;
		border-top-right-radius: 35px;
		border-top-left-radius: 35px;
		border: 1px solid rgba(236, 236, 236, 0.82);
		box-shadow: 2px -2px 15px 0 rgba(80, 80, 80, 0.6);

		.form-text {
			display: inline-block;
			font-size: 25px;
			letter-spacing: 5px;
			font-weight: 500;
			margin-top: 14%;
		}

		.login_form {
			margin-top: 10%;
			padding: 0 40px;

			.efi {
				margin: 35px auto;
			}
		}

		.other {
			display: inline-block;
			margin-top: 30px;

			span {
				font-size: 14px;
				letter-spacing: 2px;
				color: #5f5f5f;
			}
		}
	}

}

/deep/ .el-input__inner {
	background-color: transparent !important;
	border-top: transparent;
	border-left: transparent;
	border-right: transparent;
	border-bottom: 1px solid rgba(1, 1, 1, 0.24);
	border-radius: 0;
}

/deep/ .el-button {
	width: 50vw;
	font-size: 16px;
	transform: scale(1.1);
	margin-top: 20px;
	letter-spacing: 3px;
	border-radius: 21px;
}

.login-enter {
	transform: translateY(10vh);
}

.text-enter {
	transform: scale(0.1);
}

.login-enter-active {
	transition: .6s all ease-in-out;
}

.text-enter-active {
	transition: .8s all ease-in-out;
}

</style>

<template>
	<div class="profile_container">
		<div class="profile_top">
			<div class="top_bar">
				<span>Profile</span>
				<svg @click="go('settings')" t="1611376430393" class="icon" viewBox="0 0 1024 1024" version="1.1"
				     xmlns="http://www.w3.org/2000/svg" p-id="798" width="30" height="30">
					<path
						d="M606.05 67c59.557 0 107.973 47.721 108.935 106.982l0.015 1.799v103.688c0 14.912-12.088 27-27 27-14.763 0-26.758-11.848-26.996-26.554l-0.004-0.446V175.78c0-29.94-24.1-54.29-54.04-54.774l-0.91-0.007h-432.1c-30.057 0-54.458 24.05-54.943 53.852l-0.007 0.905 0.557 634.345c0 29.94 24.1 54.29 54.04 54.774l0.91 0.007h163.406c14.912 0 27 12.089 27 27 0 14.763-11.848 26.758-26.553 27H174.507c-59.558 0-107.973-47.721-108.936-106.958l-0.014-1.799L65 175.781c0-59.49 47.82-107.806 107.149-108.766L173.95 67h432.1z"
						p-id="799" fill="#ffffff"></path>
					<path
						d="M295 485c14.912 0 27 12.088 27 27s-12.088 27-27 27h-84c-14.912 0-27-12.088-27-27s12.088-27 27-27h84z m274-196c14.912 0 27 12.088 27 27s-12.088 27-27 27H212c-14.912 0-27-12.088-27-27s12.088-27 27-27h357z"
						p-id="800" fill="#ffffff"></path>
					<path
						d="M674.5 562.98c-61.446 0-111.436 50.034-111.436 111.526 0 61.491 49.99 111.519 111.435 111.519 61.451 0 111.441-50.028 111.441-111.52-0.005-61.497-49.995-111.524-111.44-111.524z m0 184.077c-39.98 0-72.503-32.548-72.503-72.557s32.524-72.557 72.502-72.557c39.979 0 72.503 32.548 72.503 72.557s-32.524 72.557-72.503 72.557z m268.172-27.769l-36.088-20.851a236.7 236.7 0 0 0 1.218-23.937c0-7.98-0.41-16-1.218-23.937l36.088-20.851c13.686-7.909 18.396-25.487 10.493-39.184L886.5 474.972c-7.903-13.697-25.468-18.404-39.154-10.5l-36.088 20.85a232.462 232.462 0 0 0-41.429-23.98v-41.66c0-15.817-12.856-28.682-28.667-28.682H607.835c-15.805 0-28.66 12.871-28.66 28.683v41.664a232.852 232.852 0 0 0-41.43 23.981l-36.093-20.851c-13.686-7.91-31.251-3.202-39.154 10.5l-66.664 115.551c-7.903 13.697-3.193 31.275 10.493 39.184l36.088 20.851a236.783 236.783 0 0 0-1.218 23.937c0 7.975 0.41 16 1.218 23.937l-36.088 20.851c-13.686 7.909-18.396 25.487-10.493 39.19l66.664 115.55c7.903 13.702 25.468 18.41 39.154 10.5l36.094-20.85a232.967 232.967 0 0 0 41.428 23.975v41.664c0 15.818 12.856 28.683 28.661 28.683h133.328c15.806 0 28.667-12.871 28.667-28.683v-41.664a233.162 233.162 0 0 0 41.429-23.976l36.088 20.852c13.691 7.909 31.257 3.201 39.154-10.5l66.664-115.552c7.903-13.702 3.199-31.275-10.493-39.189zM846.203 835.27l-30.95-17.888c-9.46-5.461-21.142-4.694-29.768 1.966a181.558 181.558 0 0 1-41.643 24.112c-10.056 4.154-16.558 13.894-16.558 24.812V904H621.706v-35.73c0-10.917-6.497-20.657-16.553-24.811a181.747 181.747 0 0 1-41.643-24.112c-8.626-6.66-20.314-7.432-29.768-1.966l-30.95 17.888L450 743.73l30.94-17.884a26.767 26.767 0 0 0 13.19-26.741 184.266 184.266 0 0 1-1.58-24.107c0-8.054 0.533-16.166 1.58-24.106 1.424-10.793-3.751-21.285-13.19-26.742L450 606.267l52.792-91.541 30.95 17.888c9.454 5.466 21.137 4.693 29.768-1.966a181.747 181.747 0 0 1 41.643-24.112c10.056-4.154 16.558-13.894 16.558-24.812V446h105.583v35.724c0 10.918 6.497 20.658 16.558 24.812a181.667 181.667 0 0 1 41.643 24.112c8.626 6.654 20.309 7.427 29.763 1.966l30.95-17.888L899 606.266l-30.94 17.883c-9.439 5.457-14.61 15.954-13.19 26.747a184.207 184.207 0 0 1 1.58 24.107c0 8.054-0.528 16.16-1.58 24.106-1.424 10.793 3.751 21.29 13.19 26.742L899 743.733l-52.797 91.536z"
						p-id="801" fill="#ffffff"></path>
				</svg>
			</div>
			<div class="top_main">
				<div class="user_img">
					<img
						src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201510%2F12%2F20151012173012_R4rPX.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1613453093&t=f838e32f22c783ea1dc90fbb0581c632"
						alt="">
				</div>
				<div class="user_info">
					<span class="username">Brandon Harris</span>
					<span class="signature">Driving is so hard!</span>
				</div>
			</div>
		</div>
		<div class="profile_middle">
			<span class="middle-head">History</span>
			<div class="middle-func">
				<div class="func">
					<div class="func-name">最近时间</div>
					<div class="func-value">{{ detail.date }}</div>
				</div>
				<div class="func">
					<div class="func-name">疲劳次数</div>
					<div class="func-value">{{ detail.time }}</div>
				</div>
				<div class="func">
					<div class="func-name">是否响应</div>
					<div class="func-value">是</div>
				</div>
			</div>
			<div id="main" style="width: 100%;height:250px; margin: auto"></div>
		</div>
	</div>
</template>

<script>
import api from "@/api/api";

export default {
	name: "Profile",
	data() {

		return {
			option: {
				title: {
					text: '疲劳历史',
					x: 'center'
				},
				tooltip: {},
				legend: {
					x: 'center',
					y: 'bottom',
					data: ['疲劳次数'],
				},
				xAxis: {
					data: ["", "", "", "", "", "", ""]
				},
				yAxis: {},

				series: [{
					name: '疲劳次数',
					type: 'line',
					data: [0, 0, 0, 0, 0, 0, 0]
				}]
			},
			date: [],
			detail: {
				date: 'NAN',
				time: '0'
			},
			myChart: ''
		}
	},
	methods: {
		go(path) {
			this.$router.push('/' + path)
		},
		myEcharts() {
			// 使用刚指定的配置项和数据显示图表。
			this.myChart = this.$echarts.init(document.getElementById('main'))
			this.myChart.setOption(this.option);
		},
		getDate() {
			let dayNow = new Date()
			dayNow.setHours(0, 0, 0, 0)
			for (let item in this.option.xAxis.data) {
				let day = new Date();
				day.setTime(dayNow.getTime() - item * 24 * 60 * 60 * 1000)
				this.date.push(day)
				this.option.xAxis.data[6 - item] = day.getMonth()+1 + '/' + day.getDate()

			}
		},
		async getHistoryInfo() {
			for (let item in this.date) {
				let num;
				if (item == 0) {
					num = await api.getHistory((parseInt(this.date[item].getTime() / 1000)), parseInt(new Date().getTime() / 1000))
				} else {
					num = await api.getHistory(parseInt(this.date[item].getTime() / 1000), parseInt(this.date[item - 1].getTime() / 1000))
				}
				this.getLastest()
				this.option.series[0].data[6 - item] = num.data.count;
			}
		},
		getLastest(){
			let lastestData = 1;
			for (let i =0;i<7;i++){
				if (lastestData && this.option.series[0].data[i]>0) {
					this.detail.time = this.option.series[0].data[i]
					this.detail.date = this.option.xAxis.data[i]
					lastestData=0
				}
			}
		},
	},
	async created() {
		this.getDate()
		await this.getHistoryInfo()
		this.myChart.setOption(this.option);
	},
	mounted() {
		this.myEcharts();
	}
}
</script>

<style scoped lang="less">
.profile_container {
	width: 100%;
	height: 100vh;
	overflow: hidden;

	.profile_top {
		margin: 50px auto;
		width: 88%;
		text-align: center;
		padding: 20px 0;
		border-radius: 30px;
		//#ba78fe
		background-color: #965ecf;
		box-shadow: 0px -2px 15px 0 rgba(118, 74, 106, 0.2);

		.top_bar {
			height: 60px;
			line-height: 60px;
			position: relative;

			svg {
				position: absolute;
				right: 30px;
				transform: translateY(43%);
			}

			span {
				letter-spacing: 2px;
				color: #ffffff;
				font-size: 20px;
				font-weight: 600;
				font-family: 'Avenir', Helvetica, Arial, sans-serif;
			}
		}

		.top_main {
			margin: 4%;
			height: calc(100% - 60px);

			.user_img {
				display: inline-block;
				float: left;
				height: 80px;
				width: 80px;
				margin-left: 8%;
				border-radius: 50%;
				overflow: hidden;

				img {
					padding: 0;
					width: 100px;
					height: 100px;
				}
			}

			.user_info {
				width: 100%;
				height: 80px;
				padding-top: 10px;

				span {
					display: block;
					color: rgb(245, 236, 255);
					font-weight: 500;
				}

				span.username {
					font-size: 24px;
					font-weight: 600;
				}
			}
		}
	}

	.profile_middle {
		margin: 40px auto;
		width: 88%;
		background-color: #ffffff;
		box-shadow: 0px -2px 15px 0 rgba(169, 169, 169, 0.2);
		text-align: center;
		padding: 20px 0;
		border-radius: 30px;

		span.middle-head {
			letter-spacing: 2px;
			color: #FF7E19;
			font-size: 20px;
			font-weight: 600;
			font-family: 'Avenir', Helvetica, Arial, sans-serif;
		}

		.middle-func {
			display: flex;
			flex-direction: row;
			justify-content: center;
			flex-wrap: nowrap;
			margin-top: 20px;

			.func {
				margin: 10px auto;

				.func-name {
					font-weight: 500;
					letter-spacing: 1px;
				}

				.func-value {
					margin: 15px auto;
					font-weight: 500;
				}
			}
		}
	}

}

.profile_container:before {
	content: "";
	position: fixed;
	z-index: -1;
	width: 100%;
	height: 100%;
	background-color: rgba(249, 247, 242, 0.53);
}

</style>

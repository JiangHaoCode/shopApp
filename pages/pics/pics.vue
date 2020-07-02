<template>
	<view class="pics">
		<scroll-view scroll-y="true" class="left">
			<view 
			:class="active === index ? 'active':''" 
			v-for="(item, index) in pics" 
			:key="item.id"
			@click="leftClickHandle(index, item.id)"
			>{{item.title}}</view>
		</scroll-view>
		<scroll-view scroll-y="true" class="right">
			<view class="item" v-for="item in sendData" :key="item.id">
				<image @click="previewImg(item.img_url)" :src="item.img_url"></image>
				<text>{{item.title}}</text>
			</view>
			<text v-if="sendData.length === 0">暂无数据</text>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				pics:[],
				active: 0,
				sendData: [],
			}
		},
		onLoad() {
			this.getPricsCate();
		},
		methods: {
			async getPricsCate() {
				const res = await this.$myRequest({
					url: '/api/getimgcategory',
				});
				
				this.pics = res.data.message;
				if (this.pics[0] && this.pics[0].id) {
					this.leftClickHandle(0, this.pics[0].id);
				}
			},
			async leftClickHandle(index = 0, id) {
				this.active = index;
				
				const res = await this.$myRequest({
					url: '/api/getimages/' + id,
				});
				
				this.sendData = res.data.message;
			},
			previewImg(current) {
				const urls = this.sendData.map(item => item.img_url);
				uni.previewImage({
					urls: [...urls],
					current,
				})
			},
		}
	}
</script>

<style lang="scss">
page{
	height: 100%;
}
.pics {
	height: 100%;
	display: flex;
	.left{
		width: 200rpx;
		height: 100%;
		border-right: 1px solid #eee;
		view{
			height: 60px;
			line-height: 60px;
			color: #333;
			text-align: center;
			font-size: 30rpx;
			border-top: 1px solid #eee;
		}
		.active{
			background-color: $shop-color;
			color: #eee;
		}
	}
	.right {
		height: 100%;
		width: 530rpx;
		margin: 0 auto;
		.item {
			image{
				width: 530rpx;
				height: 530rpx;
				border-radius: 5rpx;
			}
			text {
				font-size: 30rpx;
				height: 60rpx;
			}
		}
	}
}
</style>

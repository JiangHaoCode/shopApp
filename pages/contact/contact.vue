<template>
	<view class="contact">
		<image class="img" src="http://www.itcast.cn/2018czydz/images/gywmban.jpg"></image>
		<view class="info">
			<view @click="phone">联系电话：400 810 4422</view>
			<view>联系地址：</view>
		</view>
		<map class="map" :longitude="longitude" :latitude="latitude" :markers="markers"></map>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				longitude: 120.363172,
				latitude: 30.312212,
				scale: 11,
				markers: [
					{
						longitude: 120.363172,
						latitude: 30.312212,
						iconPath: '../../static/logo.png',
						width: 20,
						height: 20,
					}
				],
			}
		},
		methods: {
			phone() {
				uni.makePhoneCall({
					phoneNumber: '4000181326',
				})
			},
		}
	}
</script>

<style lang="scss">
.contact {
	.img{
		width: 750rpx;
		height: 320rpx;
	}
	.info{
		padding: 10rpx 20rpx;
		font-size: 30rpx;
		view{
			line-height: 60rpx;
			border-bottom: 1px solid #eee;
		}
	}
	.map {
		width: 750rpx;
		height: 750rpx;
	}
}
</style>

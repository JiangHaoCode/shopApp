<template>
	<view class="goods_list">
		<goods-list @goodsItemClick="goDetail" :goods="goods"></goods-list>
		<view class="isOver" v-if="flag">--------到底了---------</view>
	</view>
</template>

<script>
	import goodsList from '@/components/goods-list/goods-list.vue'
	export default {
		components:{'goods-list': goodsList},
		data() {
			return {
				goods: [],
				pageindex: 1,
				flag: false,
			}
		},
		onLoad() {
			this.getGoodsList();
		},
		onReachBottom() {
			// console.log(1231231)
			if (this.goods.length < this.pageindex * 10) {
				this.flag = true;
				return
			}
			this.pageindex ++;
			this.getGoodsList();
		},
		onPullDownRefresh() {
			console.log('刷新了');
			this.pageindex = 1;
			// this.goods = [];
			this.flag = false;
			this.getGoodsList(() => {
				uni.stopPullDownRefresh();
			}, true);
		},
		methods: {
			async getGoodsList(callback, status = false){
				const res = await this.$myRequest({
					url: '/api/getgoods?pageindex=' + this.pageindex,
				});
				if (status) {
					this.goods = res.data.message;
				} else {
					this.goods = [...this.goods, ...res.data.message];
				}
				
				// uni.stopPullDownRefresh();
				callback && callback();
			},
			goDetail(id) {
				console.log(123123123)
				uni.navigateTo({
					url: '/pages/goods-detail/goods-detail?id=' + id,
				})
			},
		}
	}
</script>

<style lang="scss">
.goods_list {
	background-color: #eee;
}
.isOver{
	width: 100%;
	height: 50px;
	line-height: 50px;
	text-align: center;
	font-size: 28rpx;
}
</style>

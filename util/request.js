const base_url = 'http://localhost:8082';

export const myRequest = (options = {}) => {
	return new Promise((resolve, reject) => {
		uni.request({
			url: `${base_url}${options.url}`,
			method: options.method || 'GET',
			data: options.data,
			success: (res) => {
				if(res.data.status !== 0) {
					return uni.showToast({
						title: '获取数据失败',
					})
				}
				resolve(res)
			},
			fail: (err) => {
				return uni.showToast({
					title: '获取接口失败' + err,
				})
				
				reject(err)
			}
		})
	});
	
};
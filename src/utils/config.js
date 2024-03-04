const config = {
    get() {
        return {
            url : process.env.VUE_APP_BASE_API_URL + process.env.VUE_APP_BASE_API + '/',
            name: process.env.VUE_APP_BASE_API,
			menuList:[
				{
					name: '美食资讯',
					icon: '${frontMenu.fontClass}',
					child:[
						{
							name:'健康饮食资讯',
							url:'/index/newsList'
						},
					]
				},
				{
					name: '菜品信息',
					icon: '${frontMenu.fontClass}',
					child:[
						{
							name:'菜品信息',
							url:'/index/caipinxinxiList'
						},
					]
				},
			]
        }
    },
    getProjectName(){
        return {
            projectName: "WUHealthDine线上点单路里健康指导网站"
        } 
    }
}
export default config

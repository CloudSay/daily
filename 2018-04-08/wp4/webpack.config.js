module.exports = {
	entry:{
		build:'./src/index.js',
		build2:'./src/index2.js'
		},//入口文件
	output:{
//		path:path.resolve(__dirname,'dist'),
        path: __dirname + '/dist',
 
		publicPath:'dist',
		filename:'./[name].js'//出口文件
	},
	module:{
		rules:[
			{test:/.css$/,use:['style-loader','css-loader']},
			{
				test:/\.js$/i,
				exclude:/node_modules/,
				use:[{
					loader:'babel-loader',
					options:{
						presets:['env']
					},
				}]
			}
		]
	},
	mode:'development' //| production 区别环境
	
}

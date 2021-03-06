module.exports = {
    devServer:{
        host:'127.0.0.1',
        port:8080,
        proxy:{
            '/api':{
                target:'http://mall-pre.springboot.cn/'
                ,changeOrigin:true
                ,pathRewrite:{
                    '/api':''
                }
            }
        }
    },
    // publicPath:'/app',
    // outputDir:'dist',
    // indexPath:'index2.html',
    // lintOnSave:false,
    productionSourceMap:true,
    //删除预加载标签
    chainWebpack:(config)=>{
        config.plugins.delete('prefetch');
    }
}
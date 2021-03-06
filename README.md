** 学习小程序 **
# 框架
* ## [配置](配置.md)
* ## [逻辑层](逻辑层.md)
    * [路由](逻辑层.md)
* ## [视图层](./框架.md)

* ## [自定义组件](./自定义组件.md)
* ## 性能...

# [组件](组件.md)
* 视图容器
    * swiper 类似**轮播图**
* ## [表单组件](./组件.md#表单组件)
* ## [导航](./组件.md#导航)
* ## 媒体组件
* ## 地图
* ## 画布
* ## 开放能力

# [API](./api.md)
* 网络
## [界面](https://developers.weixin.qq.com/miniprogram/dev/api/api-react.html)
* 交互反馈:
  1. wx.showToast
* 设置导航条
* 设置tabBar
* 设置置顶信息
* [导航](https://developers.weixin.qq.com/miniprogram/dev/api/ui-navigate.html)
    * wx.navigateTo
    ```
    wx.navigateTo({
        url: "test?id=1",
        success: function,
        fail: function,
        complete: function
    })
    ```

## 开放接口

# 工具...

# Q&A...

* 微信小程序文档真是写得烂，文档，账号管理乱七八糟  
* 用json当配置文件真是败笔，注释都加不上去，逗号都不能多写一个  
* 组件都已经用名字进行封装好了，为何css的作用域竟然还是全局的  
* navigateTo和switchtag用处严格分开，如果某个链接变成了主页怎么办  
* 没有对数据的动态监测。
* wxss就多了一个rpx的功能，就是全体用百分比而已，连嵌套都不支持，去模仿一下less啊  
* 对于input，没有一个 wx:bind 的方法，需要手动写 bindinput 的函数，这个太差  
* 不同的组件，在不同地方引用时无法获取parent的路径，还需要手工传入dot  
* request连同步功能都没有  
* request连PATCH的请求都没法发送，还做成开发工具可以用，手机上不可以用  
* wx:for和data-item="{{item}}"好像无法嵌套到内部
* behaviors实现了类似mixin的效果，这个我喜欢


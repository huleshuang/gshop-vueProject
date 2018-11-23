
import ajax from './ajax'

/*
  此模块与后台交互模块;包含n个接口函数的模块，是个对象
  函数的返回值是 promise对象
  下面设置的api会为了处理跨域的请求 逻辑处理
 */

//获取地址信息(根据经纬度) params参数类型
// export const reqAddress = (latitude,longitude) => ajax(`/api/position/${latitude},${longitude}`)
export const reqAddress = geohash => ajax('/api/position/'+geohash)

//获取msite页面食品分类列表 query参数类型
export const reqCategorys = () => ajax('/api/index_category')

// 获取msites商家列表(根据经纬度) query参数类型
export const reqShops = ({latitude,longitude}) => ajax('/api/shops',{latitude,longitude})

//发送短信验证码
export const reqPhone = (phone) =>ajax('/api/sendcode',{phone})

//账号密码，图片验证码登录
export const reqUserLogin = ({name, pwd, captcha}) => ajax('/api/login_pwd',{
  name,
  pwd,
  captcha
},'POST')

//手机号、短信验证码登录
export const reqSmsLogin = (phone, code)=>ajax('/api/login_sms',{phone,code},'POST')

//获取当前用户会话信息
export const reqUserInfo = () =>ajax('/api/userinfo')

//退出当前登录
export const reqLogout = () => ajax('/api/logout')

export const reqShopInfo = () => ajax('/info')
export const reqShopGoods = () => ajax('/goods')
export const reqShopRatings = () => ajax('/ratings')

// //获取图片验证码
// export const reqCaptchas = () => ajax('/api/captchas')
//

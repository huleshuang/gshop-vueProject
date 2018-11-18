import axios from 'axios'

export default function ajax (url='',data={},type = 'GET') {
  return new Promise(function (reslove,reject) {
    let promise

    if(type.toUpperCase() === 'GET'){
      //准备url query参数数据
      let dataStr = '' //用于数据拼接字符串

      //遍历对象数据返回数组
      Object.keys(data).forEach(key=>{
        dataStr+=key+'='+data[key]+'&'
      })

      if(data !== ''){
        dataStr = dataStr.substring(0,dataStr.lastIndexOf('&'))
        url = url + '?' + dataStr
      }

      promise = axios.get(url)
    }else{
      //发送请求
      promise = axios.post(url,data)
    }


    promise.then(response=>{
      resolve(response.data)
    })
      .catch(error=>{
        reject(error)
      })

  })
}

import Mock from 'mockjs'

// 定义用户信息生成函数
const generateUser = () => {
  return Mock.mock({
    id: '@increment', // 自增的整数 ID
    name: '@cname', // 中文姓名
    age: '@integer(18, 60)', // 18 到 60 的整数年龄
    gender: '@pick(["男", "女"])', // 男或女
    email: '@email', // 随机生成邮箱地址
    phone: /^1[3-9]\d{9}$/, // 手机号码
    avatar: '@image("200x200")' // 随机生成头像图片 URL
  })
}

// 定义登录接口
Mock.mock('/api/user/login', 'post', (options) => {
  const { username, password } = JSON.parse(options.body)
  if (username === 'admin' && password === '123456') {
    return Mock.mock({
      code: 0,
      message: '登录成功',
      token: '@guid',
      data: generateUser()
    })
  } else {
    return Mock.mock({
      code: 400,
      message: '用户名或密码错误'
    })
  }
})

// 定义注册接口
Mock.mock('/api/user/register', 'post', (options) => {
  const { username, password } = JSON.parse(options.body)
  const newUser = generateUser()
  newUser.name = username
  newUser.email = `${username}@mock.com`
  newUser.phone = `1${Mock.mock('@string("number", 9)')}`
  newUser.password = password
  return Mock.mock({
    code: 0,
    message: '注册成功',
    data: newUser
  })
})

// 定义用户信息接口
Mock.mock('/api/user/info', 'get', (options) => {
  const newUser = generateUser()
  return Mock.mock({
    code: 0,
    message: '获取成功',
    data: newUser
  })
})

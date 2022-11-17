import { Card, Form, Input, Button, Checkbox } from "antd"
// import logo from '@/assets'
import './index.scss'

const Login = () => {
  const onFinish = values => {
    console.log(values)
  }
  return (
    <div className="login">
      <Card className="login-container">
        <img className="login-logo" src="" alt="" />
        {/* 登陆表单 */}
        <Form
          onFinish={onFinish}
          initialValues={{
            remember: true,
          }}
          validateTrigger={['onBlur', 'onChange']}
        >
          <Form.Item
            name='mobile'
            rules={[
              {
                pattern: /^1[3-9]\d{9}$/,
                message: 'wrong mobile phone',
                validateTrigger: 'onBlur'
              },
              { required: true, message: '请输入手机号' }
            ]}
          >
            <Input size="large" placeholder="请输入手机号" />
          </Form.Item>
          <Form.Item
            name='code'
            rules={[
              { len: 6, message: 'code 6 number', validateTrigger: 'onBlur' },
              { required: true, message: '请输入验证码' }
            ]}
          >
            <Input size="large" placeholder="请输入验证码" />
          </Form.Item>
          <Form.Item
            name='remember'
            valuePropName="checked"
          >
            <Checkbox className="login-checkbox-label">
              我已阅读并同意「用户协议」和「隐私条款」
            </Checkbox>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" size="large" block>
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default Login

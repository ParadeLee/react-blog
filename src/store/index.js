// 所有模块统一处理 导出方法useStore
import React from "react"
import LoginStore from "./login.Store"

class RootStore {
  constructor() {
    this.loginStore = new LoginStore()
  }
}

// 实例化根, 导出useStore context
const rootStore = new RootStore()
const context = React.createContext(rootStore)
const useStore = () => React.useContext()

export { useStore }
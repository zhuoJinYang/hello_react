/**
 * 该文件专门为Count组件生成action对象
 */
import {INCREMENT,DECREMENT} from "../constant";

export const createIncrementAction = data => ({type:INCREMENT,data})
export const createDecrementAction = data => ({type:DECREMENT,data})

// 异步action，就是action的值为函数，一般调用同步action
export const createIncrementAsyncAction = (data,time = 500) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(createIncrementAction(data))
    },time)
  }
}
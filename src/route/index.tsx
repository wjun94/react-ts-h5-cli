/**
 * 文档作者: wjun94
 * 创建时间：2019年09月22日
 * 修改时间：2019年10月12日
 * 描述信息：路由
 */
import React from 'react'
import { RouteProps } from "react-router-dom"
import Loadable from 'react-loadable'
const Index = Loadable({
    loader: () => import('../app/index'),
    loading: () => <div>Loading...</div>,
    delay: 1000 // 设置延时
});

Index.preload()  // 预加载

const routes: RouteProps[] = [
    {
        path: '/index',
        component: Index
    },
    {
        path: '/regist',
        component: React.lazy(() => import('../app/login'))
    },
    {
        path: '/login',
        component: React.lazy(() => import('../app/login'))
    },

    {
        path: '/',
        component: Index
    },
    {
        path: '',   // 路由不匹配默认跳到首页
        component: Index
    },
]

export default routes 
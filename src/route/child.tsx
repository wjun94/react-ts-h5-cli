/**
 * 文档作者: wjun94
 * 创建时间：2019年09月22日
 * 修改时间：2019年10月12日
 * 描述信息：路由
 */
import React from 'react'
import { RouteProps } from "react-router-dom"
import Loadable from 'react-loadable'
const Mine = Loadable({
    loader: () => import('../app/mine'),
    loading: () => <div>Loading...</div>,
    delay: 1000 // 设置延时
});

Mine.preload()  // 预加载

const routes: RouteProps[] = [
    {
        path: '/details',
        component: React.lazy(() => import('../app/details'))
    },
    {
        path: '/mine',
        component: Mine
    },
    {
        path: '/home',
        component: React.lazy(() => import('../app/home'))
    },
    {
        path: '',
        component: React.lazy(() => import('../app/home'))
    }
]

export default routes 
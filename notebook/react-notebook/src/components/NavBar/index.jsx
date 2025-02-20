import React, { useState } from 'react';
// import s from './style.module.less'; // css module js
import { TabBar } from 'zarm';
// 有哪些类型
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import CustomIcon from '@/components/CustomIcon';

// react 风格 原生js 函数式编程
// props
const NavBar = ({ showNav }) => {
    const [activeKey, setActiveKey] = useState('/')
    const navigateTo = useNavigate()
    const changTab = (path) => {
        setActiveKey(path)
        navigateTo(path)
    }
    return (
        <TabBar visible={showNav.toString()} activeKey={activeKey} onChange={changTab}>
            <TabBar.Item
              itemKey="/"
                title="账单"
                icon={<CustomIcon type="zhangdan" />}
            />
            <TabBar.Item
              itemKey="/data"
                title="统计"
                icon={<CustomIcon type="tongji" />}
            />
            <TabBar.Item
              itemKey="/user"
                title="我的"
                icon={<CustomIcon type="wode" />}
            />
        </TabBar>
    )
}

// vue defineProps
// react 申明组件的类型
NavBar.propTypes = {
    showNav: PropTypes.bool 
}

export default NavBar;
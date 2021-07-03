import { useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux'
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import {fetchCategories, setCatId, fetchCategoryImages} from "../../redux/categories/categoryAction";
import Loader from '../Loader'

import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import './sidebar.css';

export default function Sidebar () {
    const dispatch = useDispatch()

    const categories = useSelector((state) => state.category.categories)
    const page = useSelector((state) => state.category.page)
    const loader = useSelector((state) => state.category.loader)
    
    useEffect(() => {
        dispatch(fetchCategories())
    }, [dispatch])


   
    const catNavLinks = categories.map((item) => {
        return (
            <NavItem key={item.id} eventKey={item.id}>
                <NavText>
                   {item.name}
                </NavText>
            </NavItem>
        )
    })
   
    return (
        <SideNav
            onSelect={(selectedId) => {
                dispatch(setCatId(selectedId))
                dispatch(fetchCategoryImages(page,selectedId))
            }}
        >
            <SideNav.Toggle />
            <SideNav.Nav defaultSelected="home">
                <NavItem eventKey="home">
                    <NavIcon>
                        <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                    </NavIcon>
                    <NavText>
                        Home
                    </NavText>
                </NavItem>
                <NavItem eventKey="charts">
                    <NavIcon>
                        <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
                    </NavIcon>
                    <NavText>
                        Categories
                    </NavText>
                    {catNavLinks}
                </NavItem>
            </SideNav.Nav>
        </SideNav>
    )
}

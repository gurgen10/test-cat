import { useEffect} from "react";
import {connect} from 'react-redux';
import { useSelector, useDispatch } from 'react-redux'
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import {fetchCategories} from "../../redux/categories/categoryAction";
import Loader from '../Loader'



import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import './sidebar.css';

export default function Sidebar (props) {
    const categories = useSelector((state) => state.category.categories)
    const loader = useSelector((state) => state.category.loader)

    const dispatch = useDispatch()


    useEffect(async() => {
        dispatch(await fetchCategories())

        // Safe to add dispatch to the dependencies array

    }, [dispatch])


    if(loader) {
        return (<Loader/>)
    }
    console.log(categories)
    console.log(loader)
    if(loader) {
        return (<Loader />)
    }


    return (
        <SideNav
            onSelect={(selected) => {
                console.log(selected)
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
                    <NavItem eventKey="charts/linechart">
                        <NavText>
                            Line Chart
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="charts/barchart">
                        <NavText>
                            Bar Chart
                        </NavText>
                    </NavItem>
                </NavItem>
            </SideNav.Nav>
        </SideNav>
    )
}

// const mapStateToProps =  state=> {
//     return {
//         category: state.category.categories
//     }
//
// }
//
//
//
// export default connect(
//     mapStateToProps) (Sidebar)
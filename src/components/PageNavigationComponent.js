import React from 'react';
import { NavLink } from 'react-router-dom';

const PageNavigationComponent = (props) => {
    return (
        <div className="page-control">
            <NavLink to={props.prev} className="prev">
                <span>Обо мне</span>
                <em></em>
            </NavLink>
            <NavLink to={props.next} className="next">
                <span>Приложения</span>
                <em></em>
            </NavLink>
        </div>
    )
}

export default PageNavigationComponent;

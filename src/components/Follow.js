import React, { Component } from 'react';


class Follow extends Component {
    render() {
        return (
            <div className="follow-me">
                <ul>
                    <li>
                        <small>Подписаться</small>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/timur.bairamgulov" className="vk" title="Facebook" target="_blank" rel="noopener noreferrer">
                          <span>Follow to facebook</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/jesorstaff" className="github" title="Гитхаб" target="_blank" rel="noopener noreferrer">
                            <span>Follow to github</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/jesorstaff/" className="instagram" title="Инстаграм" target="_blank" rel="noopener noreferrer">
                            <span>Follow to Instagram</span>
                        </a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Follow

import React from 'react';

const Follow = () => {
    return (
        <div className="follow-me">
            <small>Подписаться</small>
            <SocialLink 
                href="https://www.facebook.com/timur.bairamgulov"
                className="vk"
                title="Facebook"
            />
            <SocialLink 
                href="https://github.com/jesorstaff"
                className="github"
                title="GitHub"
            />
            <SocialLink 
                href="https://www.instagram.com/jesorstaff/"
                className="instagram"
                title="Instagram"
            />
        </div>
    )
}

const SocialLink = (props) => {
    return (
        <a 
            href={props.href} 
            className={props.className} title={props.title} 
            target="_blank" 
            rel="noopener noreferrer">
            <span>{`Follow to ${props.title}`}</span>
        </a>
    )
}

export default Follow;
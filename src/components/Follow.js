import React from 'react';

const Follow = () => {
    return (
        <div className="follow-me">
            <small>Подписаться</small>
            <SocialLink type="facebook" username="timur.bairamgulov" />
            <SocialLink type="github" username="jesorstaff" />
            <SocialLink type="instagram" username="jesorstaff" />
        </div>
    )
}

const SocialLink = props => {
    const { type, username } = props
    let title, className, urlHost, networkName
    switch (type) {
        case 'facebook':
            title = 'facebook'
            className = 'vk'
            urlHost = 'https://www.facebook.com/'
            networkName = 'facebook'
            break
        case 'github':
            title = 'Гитхаб'
            className = 'github'
            urlHost = 'https://github.com/'
            networkName = 'Github'
            break
        case 'instagram':
            title = 'instagram'
            className = 'instagram'
            urlHost = 'https://www.instagram.com/'
            networkName = 'instagram'
            break
    }
    const href = urlHost + username
    return (
        <a 
            href={href} 
            className={className} 
            title={title} 
            target="_blank"
        >
            <span>Follow on {networkName}</span>
        </a>
    )
}

export default Follow;

const SocialFooter = props => {
    const social = props.social
    return (
        <div className={social.size + " footer-social"}>
            <a href={social.link} target="_blank" rel="noreferrer">
                <div className="icon-social"><img src={social.image} alt={social.title} className="content-center"/>
                </div>
                <div className="text-social">
                    <div className="color-pink font-p">{social.head}</div>
                    <div className="text-black font-p">{social.title}</div>
                </div>
            </a>
        </div>
    )
}

export default SocialFooter;

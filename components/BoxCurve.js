import React from "react";

const BoxCurve = props => {
    const data = props.data
    const scroll = (element) =>{
        document.getElementById(element).scrollIntoView({
            behavior: 'smooth'
        });
    }
    return (
        <div
            className="box-curve w-60 p-2 mt-5 lg:mr-5 md:mr-5 mr-0 lg:mb-6 md:mb-6 mb-10 glass dark">
            <div className="text-3-outline font-p hide-small">
                <div className="stroke">{data.number}</div>
                <div className="stroke">{data.number}</div>
                <div className="stroke">{data.number}</div>
                <div className="stroke">{data.number}</div>
            </div>
            <div className="lg:mb-0 md:mb-0 mb-10 txt">
                <div className="lg:mt-10 md:mt-10 text-white text-4xl font-p px-2">{data.title}</div>
                <div className="lg:mt-5 md:mt-5  font-r text-white px-2" dangerouslySetInnerHTML={{__html:data.html}}>
                </div>
            </div>
            <div className="lg:mt-3 lg:p-5 lg:mb-10 md:mt-3 md:p-5 md:mb-10 img">
                <img src={data.img} alt={data.title} className="mx-auto"/>
            </div>
            <div className="arrow-down shadow-lg mini" onClick={(e) => scroll(data.id)}/>
        </div>
    )
}

export default BoxCurve;

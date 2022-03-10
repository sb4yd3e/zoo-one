import React from "react";

const BlackBox = props => {
    const data = props.data
    return (
        <div className="w-full bg-black text-white img-curve px-2 py-6">
            <div className="font-p text-3xl color-light-green text-center">{data.title}</div>
            <div className="text-xs lh-1-2 font-r text-center mt-2" dangerouslySetInnerHTML={{__html:data.html}}>
            </div>
        </div>
    )
}

export default BlackBox;

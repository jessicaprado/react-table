import React from "react";

interface Props {
    captionIncluded?: string
}

export const Caption: React.FC<Props> = ({captionIncluded}) => {
    return (
        <React.Fragment>
            {captionIncluded ? <caption>{captionIncluded}</caption> : null}
        </React.Fragment>
        
    )
}

export default Caption
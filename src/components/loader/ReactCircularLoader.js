import React from 'react';
import './Styles.css'

const ReactCircularLoader = (props) => {

    return(<div className="reactCircularLoader" >
        <svg className="reactCircularLoaderSvg" 
            height={props.diameter} width={props.diameter} viewBox="0 0 100 100">
            <circle className="reactCircularLoaderSecondary" 
                cx="50%" cy="50%" r="45%"
                style={{
                    strokeWidth: props.secondaryWidth,
                    stroke: props.secondaryColor,
                }}>
            </circle>
            <circle className="reactCircularLoaderPrimary animate" 
                cx="50%" cy="50%" r="45%"
                style={{
                    strokeWidth: props.primaryWidth,
                    stroke: props.primaryColor,
                }}>
            </circle>
        </svg>
    </div>)
}

export default ReactCircularLoader;
import './cat.css';
import React from 'react';

const CatCanvas = () => {
    return(
    <div className='first-body'>
        <div className = "container">
        <div className = "cat">
            <div className = "face">
                <div className = "ear"></div>
                <div className = "eye"></div>
                <div className = "mouth">
                    <div className = "nose"></div>
                    <div className = "whisker-1"></div>
                    <div className = "whisker-2"></div>
                </div>
                <div className = "body-cat">
                    <div className = "hand">
                        <div className = "hand-l"></div>
                        <div className = "hand-r"></div>
                    </div>
                </div>
                <div className = "tail"></div>
            </div>
            <div className = "laptop">
                <div className = "logo"></div>
            </div>
        </div>
    </div>
    </div>
        
    )
}

export default CatCanvas
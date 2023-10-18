import React, { useEffect } from 'react';
import { close } from '../assets';

const Modal = ({ visible, onClose, image, title, date, points }) => {
    

    const handleOnClose = (e) => {
        if (e.target.id === 'container') {
            document.body.style.overflowY = "visible";
            document.body.style.overflowY = "scroll";
            onClose()
        }
    };

    if(visible) {
        useEffect(() => {
            document.body.style.overflow = "hidden";
            return () => {
                document.body.style.overflow = "scroll"
            };
        }, []);
    } else {
        document.body.style.overflowY = "visible";
        document.body.style.overflowY = "scroll";
        return null;
    }

    //if(!visible) return null;

    return (
        <div id = 'container' onClick = { handleOnClose } className = 'fixed z-[1000] inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
            <div className = 'bg-secondary p-2 text-black relative w-full max-w-2xl max-h-full'>
                <div className = "flex items-start justify-between p-1">
                    <button type="button" onClick = { onClose } className="text-black bg-transparent text-sm w-8 h-8 ml-auto inline-flex justify-center items-center">
                        <img src = { close } alt = "close" className='w-[10px] h-[10px] object-contain cursor-pointer'></img>
                    </button>
                </div>
                <img src = { image } alt = "image" className='relative w-full max-h-full card-img_hover'></img>
                <div className='p-5'>
                <h3 className = 'leading-relaxed text-black text-[24px] font-bold'>{ title }</h3>
                <h4 className = 'text-tertiary font-bold'>{ date }</h4>
                <ul className = 'mt-5 list-disc ml-5 space-y-2'>
                    { points.map((point, index) => (
                        <li
                            key = { `project-point-${ index }` }
                            className = 'text-black-100 text-[14px] pl-1 tracking-winder'
                        >
                            { point }
                        </li>
                    )) }
                </ul>
                </div>
            </div>
        </div>
    )
}

export default Modal
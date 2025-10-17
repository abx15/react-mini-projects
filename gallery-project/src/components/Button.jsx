import React from 'react';

const Button = (props) => {
    return (
        <div>
            <div className='flex justify-center items-center p-4 gap-10'>
                <button
                    onClick={() => {
                        if (props.index > 1) {
                            props.setIndex(props.index - 1);
                        }
                    }}
                    className={`px-4 py-2 rounded ${props.index === 1 ? 'bg-amber-200 cursor-not-allowed' : 'bg-amber-300 hover:bg-amber-400'}`}
                    disabled={props.index === 1}
                >
                    Prev
                </button>

                <h2 className='text-gray-700 font-semibold'>Page {props.index}</h2>

                <button
                    onClick={() => {
                        props.setIndex(props.index + 1);
                    }}
                    className='bg-amber-300 hover:bg-amber-400 cursor-pointer rounded px-4 py-2'
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Button;

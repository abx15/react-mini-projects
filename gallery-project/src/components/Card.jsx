import React from 'react'

const Card = (props) => {
    return (
        <div>
            <a href={props.elem.url} target='_blank'>
                <img
                    src={props.elem.download_url}
                    alt={props.elem.author}
                    className="w-full h-60 object-cover"
                />
                <div className="p-4 text-center bg-gray-50">
                    <h3 className="text-lg font-semibold text-gray-800 truncate">{props.elem.author}</h3>
                    <p className="text-sm text-gray-500 mt-1">ID: {props.elem.id}</p>
                </div>
            </a>

        </div>
    )
}

export default Card
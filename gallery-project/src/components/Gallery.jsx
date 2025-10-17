import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './Card';
import Button from './Button';

const Gallery = () => {
    const [userData, setUserData] = useState([]);
    const [index, setIndex] = useState(1)

    const getData = async () => {
        const res = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=30`);
        setUserData(res.data);
    }

    useEffect(function () {
        getData()
    }, [index])

    let printUserData = (
        <p className="text-center text-gray-500 text-lg mt-10 tracking-wide">
            No User Available
        </p>
    );

    if (userData.length > 0) {
        printUserData = userData.map((elem, idx) => {
            return (
                <div
                    key={idx}
                    className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-300"
                >
                    <Card elem={elem} />
                    
                </div>
            );
        });
    }

    return (
        <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-6 min-h-screen">
            <div className="flex justify-center">

            </div>

            <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {printUserData}
            </div>

          <Button index={index} setIndex={setIndex} />

        </div>
    );
}

export default Gallery;

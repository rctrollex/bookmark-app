import React from 'react'
import {Riple} from "react-loading-indicators";

const Loader = () => {
    return (
        <div className="flex justify-center items-center">
            <Riple color="#2563eb" size="medium" text="" textColor="#2090ff" />
        </div>
    )
}
export default Loader

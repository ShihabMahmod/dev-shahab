import * as React from "react"
const ArrowBackIcon = (props) => {

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            fill="none"
            {...props}
        >
            <path
                fill='currentColor'
                d="m7.825 13 5.6 5.6L12 20l-8-8 8-8 1.425 1.4-5.6 5.6H20v2H7.825Z"
            />
        </svg>
    )
}
export default ArrowBackIcon

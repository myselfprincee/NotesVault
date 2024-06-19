import React from 'react'

export const Eye = ({ height, width }) => {
    return (
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" height={height} width={width} xmlns="http://www.w3.org/2000/svg"><path d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"></path></svg>
    )
}

export const MoreOptions = ({ height, width, classname }) => {
    return (
        <svg className={classname} xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="none" viewBox="0 0 128 128" id="dots-menu"><path fill="#000" stroke="#000" strokeWidth="7" d="M64.5 58C60.9101 58 58 60.9101 58 64.5 58 68.0898 60.9101 71 64.5 71 68.0898 71 71 68.0899 71 64.5 71 60.9101 68.0898 58 64.5 58zM64.5 93C60.9101 93 58 95.9101 58 99.5 58 103.09 60.9101 106 64.5 106 68.0898 106 71 103.09 71 99.5 71 95.9101 68.0898 93 64.5 93zM64.5 23C60.9101 23 58 25.9101 58 29.5 58 33.0898 60.9101 36 64.5 36 68.0898 36 71 33.0899 71 29.5 71 25.9101 68.0898 23 64.5 23z"></path></svg>
    )
}


export const EyeSlash = ({ height, width }) => {
    return (
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" height={height} width={width} xmlns="http://www.w3.org/2000/svg"><path d="M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z"></path></svg>
    )
}

export const BackBtn = ({ height, width }) => {
    return (
        <svg className='rounded-full p-3 bg-white transition-all hover:bg-[#dbd8d8] ro' height={height} width={width} xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" id="Back"><path fill="#000000" d="M16,21c-0.3,0-0.5-0.1-0.7-0.3l-8-8C7.1,12.5,7,12.2,7,12c0-0.3,0.1-0.5,0.3-0.7l8-8c0.4-0.4,1-0.4,1.4,0c0.4,0.4,0.4,1,0,1.4L9.4,12l7.3,7.3c0.4,0.4,0.4,1,0,1.4C16.5,20.9,16.3,21,16,21z" className="color3b65f5 svgShape"></path></svg>
    )
}

export const DeleteBtn = ({ classname, height, width }) => {
    return (

        <svg className={classname} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" height={height} width={width} viewBox="0 0 24 24">
            <path d="M 10 2 L 9 3 L 5 3 C 4.448 3 4 3.448 4 4 C 4 4.552 4.448 5 5 5 L 7 5 L 17 5 L 19 5 C 19.552 5 20 4.552 20 4 C 20 3.448 19.552 3 19 3 L 15 3 L 14 2 L 10 2 z M 5 7 L 5 20 C 5 21.105 5.895 22 7 22 L 17 22 C 18.105 22 19 21.105 19 20 L 19 7 L 5 7 z"></path>
        </svg>
    )
}

export const EditBtn = ({ classname, height, width }) => {
    return (

        <svg className={classname} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" height={height} width={width} viewBox="0 0 24 24">
            <path d="M 19.171875 2 C 18.448125 2 17.724375 2.275625 17.171875 2.828125 L 16 4 L 20 8 L 21.171875 6.828125 C 22.275875 5.724125 22.275875 3.933125 21.171875 2.828125 C 20.619375 2.275625 19.895625 2 19.171875 2 z M 14.5 5.5 L 3 17 L 3 21 L 7 21 L 18.5 9.5 L 14.5 5.5 z"></path>
        </svg>
    )
}
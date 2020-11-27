import React from 'react'
// function FuntionalProps({ name, msg }) {
//     return (
//         <>
//             hi {name} {msg}
//         </>
//     );
// }

//simple arrow function
// const FuntionalProps = ({ name, msg }) => {
//     return (
//         <>
//             hi {name} {msg}
//         </>
//     );
// }

//without return

const FuntionalProps = ({ name, msg }) =>

    <>
        {name} {msg}
    </>

export default FuntionalProps;
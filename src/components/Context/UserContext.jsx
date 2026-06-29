import React, { createContext, useState } from 'react'

export const dataContext = createContext()

const UserContext = ({ children }) => {

    let [title, setTitle] = useState("")
    let [addListing, setAddlisting] = useState(false);
    let [addImage1, setAddImage1] = useState(null)
    let [addImage2, setAddImage2] = useState(null)
    let [addImage3, setAddImage3] = useState(null)
    let [price, setPrice] = useState("");

    let value = {
        title, setTitle,
        addListing, setAddlisting,
        addImage1, setAddImage1,
        addImage2, setAddImage2,
        addImage3, setAddImage3,
        price, setPrice

    }



    return (
        
            <dataContext.Provider value={value}>
                {children}
            </dataContext.Provider>
        
    )
}

export default UserContext
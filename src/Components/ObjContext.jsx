import React, { createContext, useContext, useState} from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
const ObjContext = createContext()
export const ObjProvider = ({ children }) => {
    const [fullInfo, setFullInfo] = useState(null)
    const [search, setSearch] = useState('Sun')
    const [myData, setMyData] = useState([])
    const [load, setLoad] = useState(true)
    const changeInfo = (value) => {
        setFullInfo(value)
    }
    const changeSearch = (value) => {
        setSearch(value)
    }
    const changeLoad = (value) => {
        setLoad(value)
    }
    const fetchData = async (search) => {
        
        await axios.get(`https://images-api.nasa.gov/search?q=${search}&media_type=image`).then((res) => {
            const dataA = res.data.collection.items
            console.log(dataA);
            res.data.collection.items.length === 0 ? toast.error("No data found", {position: 'top-center',
                autClose: 3000,
                theme: 'dark'
            }) : setMyData(dataA)
            setLoad(false)

        }).catch((err) => {
            toast.error('Check Your Connection',{
                position:'top-center',
                autClose:3000,
                theme:'dark'
            });
            setMyData((pre)=> pre)
        });
    }
  

    const value = {
        fullInfo,
        changeInfo,
        search,
        changeSearch,
        myData,
        setLoad,
        fetchData,
        load,
        changeLoad
    }
    return <ObjContext.Provider value={value}>
        {children}
    </ObjContext.Provider>
}

function ObjHook() {
    const context = useContext(ObjContext);
    if (context == undefined) {
        throw new Error('hook is not working');
    }
    return context
}
export default ObjHook;
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const AuthContext = React.createContext();

const AuthProvider = ({children})=> {
    const [sellers, setSellers] = useState([])
    const [buyers, setBuyers] = useState([])
    const [products, setProducts] = useState([])
    const [user, setUser] = useState(null)
    const navigate = useNavigate();

    const getSellers = async() => {
        try{
            let res = await axios.get('/api/sellers')
            setSellers(res.data)
        }catch(err){
            console.log(err)
        }
    }

    const getBuyers = async() => {
        try{
            let res = await axios.get('/api/buyers')
            setBuyers(res.data)
        }catch(err){
            console.log(err)
        }
    }

    const getProducts = async() => {
        try{
            let res = await axios.get('/api/products')
            setProducts(res.data)
        }catch(err){
            console.log(err)
        }
    }


    useEffect(()=> {
        getSellers()
        getBuyers()
        getProducts()
    },[])

    const logout = async() => {
        try{
            await axios.delete('/api/auth/sign_out')
            setUser(null)
            navigate('/')
        }catch(err){
            setUser(null)
            console.log(err)
        }
        
    }

    const login =  async(user) => {
        try{
            let res = await axios.post('/api/auth/sign_in', user)
            setUser(res.data.data)
            navigate('/')
        }catch(err){
            alert('failed to sign in')
            console.log(err)
        }
    };

    const register = async(user) => {
        try{
            let res = await axios.post('/api/auth', user)
            console.log(res)
            navigate('/')
        }catch(err){
            alert('failed to register new account')
            console.log(err)
        }
    }

    const updateSeller = async(newInfo) => {
        let newSellers = sellers.map(c => c.id == newInfo.id ? newInfo : c)
        setSellers(newSellers)
        axios.put(`/api/sellers/${newInfo.id}`, newInfo)
    }

    const newSeller = async (newInfo) => {
        let newSellers = [...sellers, newInfo]
        setSellers(newSellers)
        axios.post(`/api/sellers/`, newInfo)
    }

    return (
        <AuthContext.Provider value={{user, setUser, logout, login, register, sellers, buyers, products,
        updateSeller, newSeller, getSellers}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
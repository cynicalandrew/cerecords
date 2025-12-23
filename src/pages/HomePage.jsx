import { useState } from 'react'
import '../App.css'
import { useNavigate } from 'react-router-dom'
import './HomePage.css';

export default function HomePage(){

    const navigate = useNavigate();

    return (
        <>
            <h1 >Cosmic Echo Records</h1>
            <p style={{fontSize:20}}>coming soon</p>
        </>
    )
}
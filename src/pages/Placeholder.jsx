import { useState } from 'react'
import '../App.css'
import { useNavigate} from 'react-router-dom'
import './Placeholder.css';

export default function Placeholder(){

    const navigate = useNavigate();

    return (
        <>
            <div className="noise-bg" />
            <div className="placeholder-content">
                <h1 >Cosmic Echo Records</h1>
                <p style={{fontSize:20}}>coming soon</p>
            </div>
        </>
    )
}
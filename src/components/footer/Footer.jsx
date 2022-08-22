import  React, { useState , useEffect } from 'react'
import "./footer.css"
import { TbWorld } from "react-icons/tb"

function Footer() {
    const [date,setDate] = useState(new Date());

    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });

  return (
    <div>
        <div className="space-footer"></div>
        <footer className='footer-container'>
            <div className='icon-time'>
                <TbWorld/>
                <p className='world'>[{date.toLocaleTimeString()}] CST</p>
            </div>
            <div>
                <p className='copyright-footer'>© 2021. JORGE LLANES. ALL RIGHTS RESERVED</p>
            </div>
        </footer>
    </div>
  )
}

export default Footer

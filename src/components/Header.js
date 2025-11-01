import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <div className="container" style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'18px 0'}}>
        <div style={{display:'flex',alignItems:'center',gap:12}}>
          <div style={{width:48,height:48,background:'linear-gradient(135deg,#ff7a18,#af002d)',borderRadius:12,display:'flex',alignItems:'center',justifyContent:'center',color:'white',fontWeight:700}}>DI</div>
          <Link to="/" style={{fontWeight:700,fontSize:18,color:'var(--brand)'}}>XYZ</Link>
        </div>

        <nav className="nav">
          <NavLink to="/" end style={({isActive})=>({color:isActive? 'var(--brand)':undefined})}>Home</NavLink>
          <NavLink to="/about" style={({isActive})=>({color:isActive? 'var(--brand)':undefined})}>About</NavLink>
          <NavLink to="/services" style={({isActive})=>({color:isActive? 'var(--brand)':undefined})}>Services</NavLink>
          <NavLink to="/work" style={({isActive})=>({color:isActive? 'var(--brand)':undefined})}>Work</NavLink>
          <NavLink to="/contact" style={({isActive})=>({color:isActive? 'var(--brand)':undefined})}>Contact</NavLink>
          <a className="btn btn-primary" href="/contact">Get Quote</a>
        </nav>
      </div>
    </header>
  );
}

import React from 'react';

export default function Footer(){
  return (
    <footer className="footer">
      <div className="container">
        <div style={{marginBottom:12}}>© {new Date().getFullYear()} Dragon Infosolution — All rights reserved.</div>
        <div className="text-muted">Address: Your city, Country · Email: hello@dragoninfotech.com · Phone: +91 90000 00000</div>
      </div>
    </footer>
  )
}

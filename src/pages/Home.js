import React from 'react';
import { motion } from 'framer-motion';

export default function Home(){
  return (
    <section>
      <div className="container">
        <div style={{display:'grid',gridTemplateColumns:'1fr 420px',gap:28,alignItems:'center',padding:'40px 0 20px'}}>
          <div>
            <motion.h1 initial={{opacity:0,y:-10}} animate={{opacity:1,y:0}} transition={{duration:0.6}} style={{fontSize:34,margin:0}}>Dragon Infosolution</motion.h1>
            <p className="text-muted mt-8">All IT Tech Skill — 6+ yrs experience delivering web, cloud, mobile, data & DevOps solutions.</p>

            <div style={{marginTop:24,display:'flex',gap:12}}>
              <a className="btn btn-primary" href="/contact">Hire Us</a>
              <a className="btn" href="/services">Our Services</a>
            </div>

            <div className="mt-8" style={{display:'flex',gap:18}}>
              <div className="card" style={{padding:12,textAlign:'center'}}>
                <div style={{fontWeight:700,fontSize:18}}>6+</div>
                <div className="text-muted">Years</div>
              </div>
              <div className="card" style={{padding:12,textAlign:'center'}}>
                <div style={{fontWeight:700,fontSize:18}}>All</div>
                <div className="text-muted">IT Tech Skill</div>
              </div>
              <div className="card" style={{padding:12,textAlign:'center'}}>
                <div style={{fontWeight:700,fontSize:18}}>End-to-end</div>
                <div className="text-muted">Solutions</div>
              </div>
            </div>

          </div>

          <div className="card">
            <img src="/hero.jpg" alt="Team working" style={{width:'100%',height:220,objectFit:'cover',borderRadius:8}}/>
            <div style={{marginTop:12}}>
              <div style={{fontWeight:700}}>Worldwide Clients</div>
              <div className="text-muted">Serving startups to enterprises across industries.</div>
            </div>
          </div>
        </div>

        <section className="section">
          <h3>Featured services</h3>
          <div className="grid grid-cols-3 mt-8">
            <div className="card">
              <h4>Full‑Stack Development</h4>
              <div className="text-muted">React, Node.js, Next.js, REST, GraphQL</div>
            </div>
            <div className="card">
              <h4>Cloud & DevOps</h4>
              <div className="text-muted">AWS, GCP, Azure, Docker, Kubernetes</div>
            </div>
            <div className="card">
              <h4>AI & Data</h4>
              <div className="text-muted">ML pipelines, Data engineering, MLOps</div>
            </div>
          </div>
        </section>

      </div>
    </section>
  )
}

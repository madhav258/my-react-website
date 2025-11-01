import React from 'react';

const projects = [
  {title:'Analytics SaaS', desc:'Multi-tenant analytics platform — ETL, dashboards, RBAC'},
  {title:'E‑commerce Scale‑up', desc:'Optimized storefront, rebuilt checkout, cloud migration'},
  {title:'Mobile CRM', desc:'Cross-platform app with offline sync and push notifications'}
]

export default function Work(){
  return (
    <section className="section">
      <div className="container">
        <h2>Selected Work</h2>
        <div className="mt-8 grid grid-cols-3">
          {projects.map((p,i)=> (
            <div className="card" key={i}>
              <h4>{p.title}</h4>
              <div className="text-muted">{p.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

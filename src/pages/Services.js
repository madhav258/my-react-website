import React from 'react';

const serviceList = [
  {title:'Web & Mobile Apps', desc:'React, React Native, Next.js, Flutter'},
  {title:'Cloud & DevOps', desc:'AWS, GCP, Azure, Kubernetes, Terraform'},
  {title:'AI & Data', desc:'ML models, Data pipelines, Analytics'},
  {title:'E‑commerce', desc:'Shopify, WooCommerce, Payment integrations'},
  {title:'Managed Services', desc:'Monitoring, Support, Security'},
  {title:'Legacy Modernization', desc:'Migrations, Refactors, Performance'}
]

export default function Services(){
  return (
    <section className="section">
      <div className="container">
        <h2>Services — All IT Tech Skill</h2>
        <div className="grid grid-cols-3 mt-8">
          {serviceList.map((s,idx)=> (
            <div key={idx} className="card">
              <h4>{s.title}</h4>
              <div className="text-muted">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import React from 'react';

export default function About(){
  return (
    <section className="section">
      <div className="container">
        <h2>About XYZ</h2>
        <p className="text-muted mt-8">We are a results-driven team focused on building reliable, secure and scalable digital products. With 6+ years of experience we help companies move from prototypes to production, and maintain long-term solutions.</p>

        <div className="mt-8 grid grid-cols-3">
          <div className="card">
            <h4>Mission</h4>
            <div className="text-muted">Deliver customer-focused solutions that accelerate growth.</div>
          </div>
          <div className="card">
            <h4>Vision</h4>
            <div className="text-muted">Be the trusted partner for cloud-native transformation.</div>
          </div>
          <div className="card">
            <h4>Values</h4>
            <div className="text-muted">Quality, Transparency, Ownership.</div>
          </div>
        </div>
      </div>
    </section>
  )
}

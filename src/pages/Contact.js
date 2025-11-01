import React, {useState} from 'react';

export default function Contact(){
  const [status,setStatus] = useState(null);
  async function onSubmit(e){
    e.preventDefault();
    const fd = new FormData(e.target);
    const payload = {name:fd.get('name'), email:fd.get('email'), message:fd.get('message')};

    try{
      // If you have a backend API, change URL to your API endpoint.
      // For now we simulate success.
      await new Promise(r=>setTimeout(r,700));
      setStatus({ok:true,msg:'Message sent. We will contact you within 1 business day.'});
      e.target.reset();
    }catch(err){
      setStatus({ok:false,msg:'Failed to send — please email hello@dragoninfotech.com'});
    }
  }

  return (
    <section className="section">
      <div className="container">
        <h2>Contact</h2>
        <p className="text-muted mt-4">Reach out about a project, consultancy, or partnership — we typically respond within one business day.</p>

        <form onSubmit={onSubmit} className="card mt-8" style={{maxWidth:720}}>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12}}>
            <input name="name" required placeholder="Your name" style={{padding:12,borderRadius:8,border:'1px solid #e6eef5'}} />
            <input name="email" required placeholder="Email" type="email" style={{padding:12,borderRadius:8,border:'1px solid #e6eef5'}} />
          </div>
          <textarea name="message" required placeholder="Tell us about your project" rows={6} style={{marginTop:12,padding:12,borderRadius:8,border:'1px solid #e6eef5'}} />
          <div style={{marginTop:12,display:'flex',gap:12,alignItems:'center'}}>
            <button className="btn btn-primary" type="submit">Send message</button>
            <div className="text-muted">Or email <a href="mailto:hello@dragoninfotech.com">hello@dragoninfotech.com</a></div>
          </div>

          {status && (
            <div style={{marginTop:12,color: status.ok ? 'green' : 'crimson'}}>{status.msg}</div>
          )}
        </form>

      </div>
    </section>
  )
}

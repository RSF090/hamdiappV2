import React, { useRef, useState, useEffect } from 'react';

/* Erişilebilir accordion */
export default function Accordion({id,title,children,defaultOpen=false,revealOnScroll=true}){
  const [open,setOpen] = useState(defaultOpen);
  const panelRef = useRef(null);
  const wrapRef = useRef(null);

  // Scroll reveal görünürlüğü
  useEffect(()=>{
    if(!revealOnScroll || !wrapRef.current) return;
    const el = wrapRef.current;
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        if(e.isIntersecting){
          el.classList.add('visible');
          io.unobserve(el);
        }
      });
    },{threshold:0.1});
    io.observe(el);
    return ()=>io.disconnect();
  },[revealOnScroll]);

  useEffect(()=>{
    const panel = panelRef.current;
    if(!panel) return;
    if(open){
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }else{
      panel.style.maxHeight = 0;
    }
  },[open]);

  const toggle=()=>setOpen(o=>!o);

  return (
    <div ref={wrapRef} className="accordion reveal" id={id}>
      <h2>
        <button
          type="button"
          className="accordion-header-btn"
          aria-expanded={open}
          aria-controls={`${id}-panel`}
          id={`${id}-header`}
          onClick={toggle}
        >
          {title}
          <span className="chevron">▶</span>
        </button>
      </h2>
      <div
        ref={panelRef}
        id={`${id}-panel`}
        role="region"
        aria-labelledby={`${id}-header`}
        className={`accordion-panel${open?" open":""}`}
      >
        <div className="accordion-panel-content">{children}</div>
      </div>
    </div>
  );
}

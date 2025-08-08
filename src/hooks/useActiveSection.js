import { useEffect, useState, useRef } from 'react';

/*
  IntersectionObserver tabanlı aktif bölüm takibi.
  Nav'da hangi linkin vurgulanacağını belirlemek için kullanılır.
*/
export function useActiveSection(ids, options={rootMargin:'0px 0px -60% 0px',threshold:0}){
  const [activeId,setActiveId] = useState(ids?.[0] ?? null);
  const observer = useRef(null);

  useEffect(()=>{
    const elements = ids.map(id=>document.getElementById(id)).filter(Boolean);
    if(observer.current){observer.current.disconnect();}
    observer.current = new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          setActiveId(entry.target.id);
        }
      });
    },options);
    elements.forEach(el=>observer.current.observe(el));
    return ()=>observer.current && observer.current.disconnect();
  },[ids,options.rootMargin,options.threshold]);

  return activeId;
}
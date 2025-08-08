import { useEffect, useState } from 'react';

/* Sistem tercihini (prefers-color-scheme) okuyup başlangıç temasını belirler. */
export function usePrefersDarkMode(){
  const getPref = ()=>window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [prefersDark,setPrefersDark] = useState(getPref());
  useEffect(()=>{
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const listener = e=>setPrefersDark(e.matches);
    mq.addEventListener('change',listener);
    return ()=>mq.removeEventListener('change',listener);
  },[]);
  return prefersDark;
}
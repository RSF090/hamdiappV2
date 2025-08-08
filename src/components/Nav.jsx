import React from 'react';

export default function Nav({sections,activeId,children}){
  return (
    <nav className="main-nav" aria-label="Sayfa bölümleri">
      {sections.map(sec=>{
        const isActive = activeId===sec.id;
        return (
          <a key={sec.id} href={`#${sec.id}`} className={isActive?"active":""}>
            {sec.title.replace(/ .*/,'')} {/* İlk kelimeyi göster (isteğe bağlı) */}
          </a>
        );
      })}
      {children /* Tema butonu vb. */}
    </nav>
  );
}
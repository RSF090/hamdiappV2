import React, { useState, useEffect, useRef } from 'react';
import { aboutMe } from './data/aboutMe';
import { contactInfo } from './data/contact';
import { FaPhone, FaInstagram } from 'react-icons/fa';
import './App.css';

export const blogSections = [
  {
    id: 'podoloji',
    title: 'Podoloji Nedir?',
    content:
      'Podoloji, ayak sağlığı ve hastalıkları üzerine yoğunlaşan bir bilim dalıdır. Günümüzde ayak sağlığının genel vücut sağlığı üzerindeki etkisi daha iyi anlaşılmıştır. Podoloji, nasır, tırnak batması, mantar enfeksiyonu gibi yaygın sorunların çözümünde profesyonel destek sağlar.'
  },
  {
    id: 'podolog',
    title: 'Podolog Ne İş Yapar?',
    content:
      'Podolog, ayak ve tırnak sağlığı konusunda uzmanlaşmış kişidir. Podologlar, batık tırnakların düzeltilmesi, nasır temizliği, mantar bakımı ve ayak sağlığıyla ilgili danışmanlık sağlar.'
  },
  {
    id: 'diyabet',
    title: 'Diyabet Hastaları İçin Podolojinin Önemi',
    content:
      'Diyabet hastalarında ayak yaraları ve enfeksiyon riski yüksektir. Podologlar düzenli bakım ve profesyonel müdahalelerle bu riskleri en aza indirir.'
  },
  {
    id: 'bakim',
    title: 'Periyodik Bakımlar',
    content:
      'Ayak sağlığını korumak için periyodik bakım şarttır. Podologlar, düzenli tırnak kesimi, nasır temizliği ve cilt bakımı ile ayakların sağlıklı kalmasını sağlar.'
  },
  {
    id: 'tirnak',
    title: 'Tırnak Batması',
    content:
      'Yanlış tırnak kesimi ve dar ayakkabılar tırnak batmasına yol açabilir. Podologlar, batık tırnakları acısız yöntemlerle düzeltir.'
  },
  {
    id: 'nasir',
    title: 'Nasır Temizliği',
    content:
      'Nasır, yanlış ayakkabı veya fazla basınç nedeniyle oluşur. Podologlar nasırları temizleyerek ağrıyı azaltır ve önleyici çözümler önerir.'
  },
  {
    id: 'mantar',
    title: 'Mantar Enfeksiyonu',
    content:
      'Ayak mantarı ve tırnak mantarı, hijyen eksikliği ve nemli ortamda oluşur. Podologlar mantar tedavisi ve önleme yolları hakkında rehberlik eder.'
  },
  {
    id: 'sporcu',
    title: 'Sporcularda Podolojinin Önemi',
    content:
      'Sporcuların ayak sağlığı, performans için kritik önemdedir. Podoloji, yaralanmaları ve deformasyonları önlemek için özel bakım sağlar.'
  },
  {
    id: 'hamile',
    title: 'Hamilelerde Bakımın Önemi',
    content:
      'Hamilelikte ayaklarda şişme ve ağrılar artabilir. Podoloji bakımı bu dönemde konforu artırır ve olası problemleri önler.'
  }
];

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });

  const sectionsRef = useRef([]);

useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          // observer.unobserve(entry.target); // animasyon bir kere oynasın istersen bunu aç
        } else {
          entry.target.classList.remove('show');
        }
      });
    },
    {
      threshold: [0, 0.1, 0.25, 0.5],
      rootMargin: '0px 0px -100px 0px',
    }
  );

  sectionsRef.current.forEach((sec) => {
    if (sec) observer.observe(sec);
  });

  return () => observer.disconnect();
}, []);


  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      {/* Hero Bölümü */}
      <header className="hero fade-in-up" ref={(el) => { if (el) sectionsRef.current[0] = el; }}>
        <h1>HAMDİ ÖZBAY PODOLOJİ KLİNİĞİ</h1>
        <p>Sağlıklı ve bakımlı adımlar için profesyonel podoloji hizmetleri.</p>
        <div className="hero-buttons">
          <button
            className="primary-btn"
            onClick={() => window.open(contactInfo.instagram, '_blank')}
          >
            Instagram Sayfamıza Göz At
          </button>
          <button
            className="toggle-btn"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? '☀️ Aydınlık Mod' : '🌙 Karanlık Mod'}
          </button>
        </div>
      </header>

      {/* Hakkımızda */}
      <section className="about-simple fade-in-up" ref={(el) => { if (el) sectionsRef.current[1] = el; }}>
        <h2>{aboutMe.title}</h2>
        <p>{aboutMe.content}</p>
      </section>

      {/* Blog Bölümleri */}
      <section className="blog-list fade-in-up" ref={(el) => { if (el) sectionsRef.current[2] = el; }}>
        <h2>Blog Yazıları</h2>
        {blogSections.map((section) => (
          <div key={section.id} className="blog-card">
            <h3>{section.title}</h3>
            <p>{section.content}</p>

            {section.id === 'tirnak' && (
              <div className="before-after">
                <div className="before">
                  <p>Önce</p>
                  <img src="/images/tela.png" alt="Tırnak Batması Önce" />
                </div>
                <div className="after">
                  <p>Sonra</p>
                  <img src="/images/telb.png" alt="Tırnak Batması Sonra" />
                </div>
              </div>
            )}
            {section.id === 'nasir' && (
              <div className="before-after">
                <div className="before">
                  <p>Önce</p>
                  <img src="/images/catlakb.png" alt="Nasır Temizliği Önce" />
                </div>
                <div className="after">
                  <p>Sonra</p>
                  <img src="/images/catlaka.png" alt="Nasır Temizliği Sonra" />
                </div>
              </div>
            )}
            {section.id === 'mantar' && (
              <div className="before-after">
                <div className="before">
                  <p>Önce</p>
                  <img src="/images/mantarb.png" alt="Mantar Enfeksiyonu Önce" />
                </div>
                <div className="after">
                  <p>Sonra</p>
                  <img src="/images/mantara.png" alt="Mantar Enfeksiyonu Sonra" />
                </div>
              </div>
            )}
          </div>
        ))}
      </section>

      {/* İletişim */}
      <section className="contact-simple fade-in-up" ref={(el) => { if (el) sectionsRef.current[3] = el; }}>
        <h2>İletişim</h2>
        <p><FaPhone /> {contactInfo.phone}</p>
        <p>
          <FaInstagram />{' '}
          <a href={contactInfo.instagram} target="_blank" rel="noreferrer">
            Podoloji Instagram
          </a>
        </p>
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d518.1981643570707!2d27.844662154916527!3d37.840330731576934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b92bea772aba49%3A0x46fd2479ee2ce694!2sPodolog%20Hamdi%20%C3%96zbay!5e0!3m2!1str!2str!4v1754638119689!5m2!1str!2str"
            width="100%"
            height="400"
            style={{ border: 0, borderRadius: '10px', marginTop: '10px' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

      </section>

      {/* Footer */}
      <footer className="footer fade-in-up" ref={(el) => { if (el) sectionsRef.current[4] = el; }}>
        <p>© 2025 Hamdi ÖZBAY Podoloji Kliniği</p>
      </footer>
    </div>
  );
}

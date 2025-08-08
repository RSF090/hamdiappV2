import React from 'react';

const Section = ({ title, content, beforeImg, afterImg }) => {
  return (
    <section className="my-12 px-4 md:px-8 max-w-5xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-semibold text-pink-600 mb-4">{title}</h2>
      <p className="text-gray-800 leading-relaxed mb-6">{content}</p>

      {/* Eğer before-after görseller varsa göster */}
      {beforeImg && afterImg && (
        <div className="flex flex-col md:flex-row gap-6 mt-4">
          <div className="flex-1">
            <p className="text-center font-medium mb-2">Önce</p>
            <img src={beforeImg} alt={`${title} - Önce`} className="w-full rounded-xl shadow-lg" />
          </div>
          <div className="flex-1">
            <p className="text-center font-medium mb-2">Sonra</p>
            <img src={afterImg} alt={`${title} - Sonra`} className="w-full rounded-xl shadow-lg" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Section;

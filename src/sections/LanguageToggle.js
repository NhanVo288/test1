import React, { useState } from 'react';
import { allLangs } from 'src/locales/config-lang';
import { useLocales } from 'src/locales';
import Iconify from 'src/components/iconify';

const ToggleButtonGroup = () => {
  const { currentLang, onChangeLang } = useLocales();
  const [activeButton, setActiveButton] = useState('en');

  const buttonStyle = (isActive, isLeft) => ({
    position: 'relative',
    width: '70px',
    padding: '8px',
    cursor: 'pointer',
    color: isActive ? '#fff' : '#51b949',
    borderRadius: "2px",
    backgroundColor: isActive ? '#51b949' : '#fff',
    border: '1px solid #51b949',
    zIndex: isActive ? 1 : 0,
    clipPath: isLeft
      ? 'polygon(0 0, 100% 0, calc(100% - 15px) 100%, 0 100%)'
      : 'polygon(15px 0, 100% 0, 100% 100%, 0 100%)',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  });

  const handleKeyPress = (lang, event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleLanguageChange(lang);
    }
  };

  const handleLanguageChange = (lang) => {
    setActiveButton(lang);
    onChangeLang(lang);
  };

  // Filter only Korean and English languages
  const filteredLangs = allLangs.filter(lang => ['ko', 'en'].includes(lang.value));

  return (
    <div style={{ display: 'flex', width: '200px' }}>
      {filteredLangs.map((lang, index) => (
        <button
          key={lang.value}
          type="button"
          style={{
            ...buttonStyle(activeButton === lang.value, index === 0),
            marginLeft: index > 0 ? '-15px' : 0
          }}
          onClick={() => handleLanguageChange(lang.value)}
          onKeyDown={(e) => handleKeyPress(lang.value, e)}
          role="tab"
          aria-selected={activeButton === lang.value}
        >
          <Iconify icon={lang.icon} width={20} />
          {lang.value.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default ToggleButtonGroup;

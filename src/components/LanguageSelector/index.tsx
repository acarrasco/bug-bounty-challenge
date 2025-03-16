import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { useState } from "react";
import i18n from "../../i18n/i18n";

export interface LanguageSelectorProps {
  languages: string[];
}

function getFlagEmoji(countryCode: string) {
  if (countryCode === "en") {
    countryCode = "us";
  }
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
}

export const LanguageSelector = ({ languages }: LanguageSelectorProps) => {
  const [language, setLanguage] = useState(i18n.language);

  function handleChange(event: SelectChangeEvent) {
    const selectedLanguage = event.target.value;
    setLanguage(selectedLanguage);
    i18n.changeLanguage(selectedLanguage, console.log);
  }

  return (
    <Select value={language} label="" onChange={handleChange}>
      {languages.map((lang) => (
        <MenuItem value={lang} key={lang}>
          {getFlagEmoji(lang)}
        </MenuItem>
      ))}
    </Select>
  );
};

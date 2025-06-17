import React from 'react';
import './index.css'

type Option = { value: string; label: string };

interface RealSelectProps {
  options: Option[];
  value: string;
  onChange: (val: string) => void;
}

export const RealSelect: React.FC<RealSelectProps> = ({ options, value, onChange }) => {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value)}>
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
};

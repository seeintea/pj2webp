import { MenuItem, Select, SelectChangeEvent } from '@mui/material';
import useI18next from './useI18next';

export default function LanguageSwitch() {
  const [support, current, onChange] = useI18next();

  const handleChangeLang = (event: SelectChangeEvent) => {
    const { value } = event.target;
    onChange(value);
  };

  return (
    <Select
      variant="standard"
      value={current}
      label="lang"
      onChange={handleChangeLang}
    >
      {support.map(([value, label]) => (
        <MenuItem key={value} value={value}>
          {label}
        </MenuItem>
      ))}
    </Select>
  );
}

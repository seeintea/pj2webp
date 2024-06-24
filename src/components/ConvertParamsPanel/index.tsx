import { forwardRef, useImperativeHandle, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from '@mui/material';
import { isMatchNumber } from '@/utils';
import { InputNumber, Space } from '@/components/common';
import { SelectControl, Text } from './styles';

// support resize algorithms
// https://docs.rs/image/latest/image/imageops/enum.FilterType.html
const SUPPORT_RESIZE_ALGOS = [
  'Nearest',
  'Triangle',
  'CatmullRom',
  'Gaussian',
  'Lanczos3',
];

export interface ConvertParamsData {
  resizeWidth?: number;
  algorithm?: string;
  quality: number;
}

export interface ConvertParamsPanelRef {
  getConvertParams: () => ConvertParamsData;
}

const ConvertParamsPanel = forwardRef<ConvertParamsPanelRef>(
  function ParamsPanel(_, ref) {
    const { t } = useTranslation();

    const lazyStore = useRef<ConvertParamsData>({
      algorithm: SUPPORT_RESIZE_ALGOS[0],
      quality: 65,
    });

    useImperativeHandle(ref, () => {
      return {
        getConvertParams() {
          return lazyStore.current;
        },
      };
    }, []);

    const handleUpdateResizeWidth = (value?: number) => {
      if (isMatchNumber(value)) {
        lazyStore.current.resizeWidth = value;
      } else {
        delete lazyStore.current.resizeWidth;
      }
    };

    const handleUpdateAlgorithm = (event: SelectChangeEvent<string>) => {
      const { value } = event.target;
      lazyStore.current.algorithm = value;
    };

    const handleUpdateQuality = (value?: number) => {
      if (isMatchNumber(value)) {
        lazyStore.current.quality = value!;
      }
    };

    return (
      <Space gap={16}>
        <Text>{t('Settings')}</Text>
        <InputNumber
          label={t('Resize Width')}
          width={120}
          clear
          min={320}
          onChange={handleUpdateResizeWidth}
        />
        <SelectControl>
          <FormControl variant="standard" fullWidth>
            <InputLabel id="algorithms-selection-label">
              {t('Algorithm')}
            </InputLabel>
            <Select
              labelId="algorithms-selection-label"
              label={t('Algorithm')}
              defaultValue={SUPPORT_RESIZE_ALGOS[0]}
              onChange={handleUpdateAlgorithm}
            >
              {SUPPORT_RESIZE_ALGOS.map((name) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </SelectControl>
        <InputNumber
          width={60}
          defaultValue={65}
          max={100}
          min={1}
          label={t('Quality')}
          onChange={handleUpdateQuality}
        />
      </Space>
    );
  },
);

export default ConvertParamsPanel;

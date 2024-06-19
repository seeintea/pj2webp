import { useRef, useEffect, ChangeEvent } from 'react';
import { CloseOutlined } from '@mui/icons-material';
import { isMatchNumber } from '@/utils';
import useInputNumber from './useInputNumber';
import { CustomInput, ClearButton } from './styles';

interface InputNumberProps {
  label: string;
  width?: number;
  max?: number;
  min?: number;
  clear?: boolean;
  defaultValue?: number;
  onChange?: (value?: number) => void;
}

function getInputNumberOptions(options: InputNumberProps) {
  type Configs = Pick<InputNumberProps, 'min' | 'max' | 'defaultValue'>;
  const keys: (keyof Configs)[] = ['min', 'max', 'defaultValue'];
  const configs: Configs & { defaultShrink?: boolean } = {};
  keys.forEach((key) => {
    const item = options[key];
    if (typeof item !== 'undefined') {
      Object.assign(configs, { [key]: item });
    }
  });
  if (isMatchNumber(configs.defaultValue)) {
    configs.defaultShrink = true;
  }
  return configs;
}

export default function InputNumber(props: InputNumberProps) {
  const { label, width, clear, defaultValue } = props;

  const inputRef = useRef<HTMLInputElement>(null);

  const [shrink, setShrink, isChanged] = useInputNumber(
    inputRef,
    getInputNumberOptions(props),
  );

  const handleClearMaxWidth = () => {
    if (inputRef.current) {
      inputRef.current.value = '';
      setShrink(false);
    }
  };

  const handleChangeInputNumber = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (props?.onChange) {
      const update = value ? Number(value) : undefined;
      props.onChange(update);
    }
  };

  useEffect(() => {
    if (typeof defaultValue === 'number' && inputRef.current) {
      inputRef.current.value = defaultValue.toString();
      setShrink(true);
    }
  }, [defaultValue, setShrink]);

  useEffect(() => {
    if (props?.onChange) {
      const update = inputRef.current?.value
        ? Number(inputRef.current?.value)
        : undefined;
      props.onChange(update);
    }
  }, [isChanged, props?.onChange]);

  return (
    <CustomInput
      variant="standard"
      label={label}
      width={width}
      inputRef={inputRef}
      type="number"
      placeholder=""
      InputLabelProps={{ shrink }}
      InputProps={{
        endAdornment: clear ? (
          <ClearButton className="clear-button" onClick={handleClearMaxWidth}>
            <CloseOutlined fontSize="small" />
          </ClearButton>
        ) : null,
      }}
      onChange={handleChangeInputNumber}
    />
  );
}

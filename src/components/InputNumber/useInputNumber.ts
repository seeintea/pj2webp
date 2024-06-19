import { RefObject, useCallback, useState, useEffect, useMemo } from 'react';
import { bindHTMLElementEvent, isMatchNumber } from '@/utils';

export interface InputNumberOptions {
  min?: number;
  max?: number;
  defaultValue?: number;
  defaultShrink?: boolean
}

export default function useInputNumber(
  input: RefObject<HTMLInputElement>,
  options?: InputNumberOptions,
) {
  const [shrink, setShrink] = useState<boolean>(!!options?.defaultShrink);
  const [isChanged, setIsChanged] = useState<number>(0);

  const memoOptions = useMemo(() => {
    return {
      min: options?.min,
      max: options?.max,
      defaultValue: options?.defaultValue,
    };
  }, [options?.min, options?.max, options?.defaultValue]);

  const handleInputFocusEvent = useCallback(() => {
    setShrink(true);
  }, []);

  const handleInputBlurEvent = useCallback(() => {
    if (!input.current) return;
    if (input.current.value) return;
    if (isMatchNumber(memoOptions.defaultValue)) {
      input.current.value = (memoOptions.defaultValue as number).toString();
    } else {
      input.current.value = ''; // if user input `1-2`
      setShrink(false);
    }
    setIsChanged((prev) => prev + 1);
  }, [memoOptions]);

  const handleValidInputNumber = useCallback(() => {
    if (!input.current || !options || !input.current.value) return;

    // support in handleInputBlurEvent
    // if (!input.current.value && isMatchNumber(options.default)) {
    //   input.current.value = (options.default as number).toString();
    //   return;
    // }

    let value = Number(input.current.value);
    const { min, max } = options;
    if (min === 0) value = Math.abs(value);
    if (isMatchNumber(min) && value < min!) {
      value = min!;
    }
    if (isMatchNumber(max) && value > max!) {
      value = max!;
    }
    input.current.value = value.toString();
    setIsChanged((prev) => prev + 1);
  }, [memoOptions]);

  useEffect(() => {
    const removeListeners = (
      [
        ['focus', handleInputFocusEvent],
        ['blur', handleInputBlurEvent],
        ['blur', handleValidInputNumber],
      ] as const
    ).map(([eventName, handler]) => {
      return bindHTMLElementEvent(input.current, eventName, handler);
    });

    return () => {
      removeListeners.forEach((fn) => fn());
    };
  }, [handleInputFocusEvent, handleInputBlurEvent, handleValidInputNumber]);

  return [shrink, setShrink, isChanged] as const;
}

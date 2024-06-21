import { useRef } from 'react';
import ConvertParamsPanel, {
  type ConvertParamsPanelRef,
} from '@/components/ConvertParamsPanel';
import LanguageSwitch from './components/LanguageSwitch';

const App = () => {
  const paramsRef = useRef<ConvertParamsPanelRef>(null);

  return (
    <div>
      <ConvertParamsPanel ref={paramsRef} />
      <LanguageSwitch />
    </div>
  );
};

export default App;

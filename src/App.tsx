import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

import { Navigation, VisuallyHiddenInput } from './Styled';
import { useTranslation } from 'react-i18next';

const App = () => {
  const { t } = useTranslation();

  return (
    <>
      <Navigation>
        <Button
          component="label"
          role={undefined}
          variant="contained"
          tabIndex={-1}
          startIcon={<CloudUploadIcon />}
        >
          {t('Upload file')}
          <VisuallyHiddenInput type="file" />
        </Button>
      </Navigation>
    </>
  );
};

export default App;

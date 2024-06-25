import { useTranslation } from 'react-i18next';
import { ChangeEvent, useRef } from 'react';
import { Button } from '@mui/material';
import { CloudUpload } from '@mui/icons-material';
import ConvertParamsPanel, {
  type ConvertParamsPanelRef,
  type ConvertParamsData,
} from '@/components/ConvertParamsPanel';
import LanguageSwitch from '@/components/LanguageSwitch';
import { Space } from '@/components/common';
import {
  NavControl,
  NavContentControl,
  FlexEndControl,
  VisuallyHiddenInput,
} from './styles';

interface NavigatorProps {
  generate: boolean;
  contentWidth?: number;
  onUpload: (files: FileList | null) => void;
  onGenerate: (params: ConvertParamsData) => void;
}

export default function Navigator(props: NavigatorProps) {
  const paramRef = useRef<ConvertParamsPanelRef>(null);
  const { t } = useTranslation();

  const handleUploadImagesFiles = (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    props.onUpload(files);
  };

  const handleExecGenerate = () => {
    const params = paramRef.current?.getConvertParams() || { quality: 65 };
    props.onGenerate(params);
  };

  return (
    <NavControl>
      <NavContentControl width={props.contentWidth}>
        <Space gap={15}>
          <FlexEndControl>
            <Button
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              startIcon={<CloudUpload />}
            >
              {t('Upload file')}
              <VisuallyHiddenInput
                type="file"
                onChange={handleUploadImagesFiles}
                multiple
                accept="image/jpeg,image/png"
              />
            </Button>
          </FlexEndControl>
          <ConvertParamsPanel ref={paramRef} />
          <FlexEndControl>
            <Button
              disabled={props.generate}
              variant="outlined"
              onClick={handleExecGenerate}
            >
              {t('Generate')}
            </Button>
          </FlexEndControl>
        </Space>
        <FlexEndControl>
          <LanguageSwitch />
        </FlexEndControl>
      </NavContentControl>
    </NavControl>
  );
}

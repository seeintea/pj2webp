import { ChangeEvent, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { IconButton, Button } from '@mui/material';
import { Clear } from '@mui/icons-material';
import { getFileSize } from '@/utils';
import Space from '@/components/Space';
import {
  TableRow,
  TableCell,
  ImagePreview,
  RenameInput,
  FileSizeControl,
  CustomTooltip,
  CustomImage,
} from './styles';

export interface ImageData {
  id: string;
  file: File;
  convert?: File;
}

interface ImageDetailsProps extends ImageData {
  onDelete?: (id: string) => void;
  onRename?: (id: string, name: string) => void;
  onDownload?: (item: Pick<ImageData, 'id' | 'convert'>) => void;
}

export default function ImageDetails(props: ImageDetailsProps) {
  const { t } = useTranslation();

  const data = useMemo(() => {
    const { name } = props.file;
    const { size: os, type: ot } = props.file;
    const size = getFileSize(os);
    const type = ot.toUpperCase();
    const preview = URL.createObjectURL(props.file);
    return { name, size, type, preview };
  }, [props.file]);

  const handleUpdateName = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (props.onRename && value) {
      props.onRename(props.id, value);
    }
  };

  const handleDownloadItem = () => {
    if (props.onDownload) {
      props.onDownload({ id: props.id, convert: props.convert });
    }
  };

  const handleDeleteItem = () => {
    if (props.onDelete) {
      URL.revokeObjectURL(data.preview);
      props.onDelete(props.id);
    }
  };

  return (
    <TableRow>
      <TableCell width={300}>
        <Space>
          <ImagePreview>
            <CustomTooltip
              placement="right-start"
              title={<CustomImage src={data.preview} alt={data.name} />}
            >
              <img src={data.preview} alt={data.name} />
            </CustomTooltip>
          </ImagePreview>
          <p>{data.name}</p>
        </Space>
      </TableCell>
      <TableCell width={160}>
        <RenameInput
          placeholder={t('Rename File')}
          onChange={handleUpdateName}
        />
      </TableCell>
      <TableCell>{data.type}</TableCell>
      <TableCell color="#959595" width={200}>
        <FileSizeControl>
          <span>{data.size}</span>
          {!!props.convert && (
            <>
              <span>&#8594;</span>
              <span>{getFileSize(props.convert.size)}</span>
            </>
          )}
        </FileSizeControl>
      </TableCell>
      <TableCell width={120}>
        <Button disabled={!props.convert} onClick={handleDownloadItem}>
          {t('Download')}
        </Button>
      </TableCell>
      <TableCell>
        <IconButton aria-label="delete" onClick={handleDeleteItem}>
          <Clear />
        </IconButton>
      </TableCell>
    </TableRow>
  );
}

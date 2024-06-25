import { DataObject } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import ImageDetails, { type ImageData } from '@/components/ImageDetails';
import { SectionControl, EmptyControl, TableControl } from './styles';

interface ImageControlProps {
  images: ImageData[];
  onDelete?: (id: string) => void;
  onRename?: (id: string, name: string) => void;
  onDownload?: (id: string, url: string) => void;
}

export default function ImageControl(props: ImageControlProps) {
  const { t } = useTranslation();

  if (!props.images.length) {
    return (
      <SectionControl>
        <EmptyControl>
          <DataObject />
          <span>{t('Please Upload Pictures')}</span>
        </EmptyControl>
      </SectionControl>
    );
  }

  return (
    <SectionControl>
      <TableControl>
        {props.images.map((image) => (
          <ImageDetails
            key={image.id}
            {...image}
            onDelete={props.onDelete}
            onRename={props.onRename}
            onDownload={props.onDownload}
          />
        ))}
      </TableControl>
    </SectionControl>
  );
}

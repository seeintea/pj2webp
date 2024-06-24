import { DataObject } from '@mui/icons-material';
import ImageItem, { type ImageItemProps } from './ImageItem';
import { SectionControl, EmptyControl, TableControl } from './styles';
import { useTranslation } from 'react-i18next';

export { ImageItemProps };

interface ImageListProps {
  imageList: ImageItemProps[];
}

export default function ImageList(props: ImageListProps) {
  const { t } = useTranslation();

  return (
    <SectionControl>
      {!(props.imageList || []).length ? (
        <EmptyControl>
          <DataObject />
          <span>{t('Please Upload Pictures')}</span>
        </EmptyControl>
      ) : (
        <TableControl>
          {props.imageList.map((image) => (
            <ImageItem key={image.id} {...image} />
          ))}
        </TableControl>
      )}
    </SectionControl>
  );
}

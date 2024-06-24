import { Button, IconButton } from '@mui/material';
import { Space } from '@/components/common';
import { getFileSizeForHuman } from '@/utils';
import { Clear } from '@mui/icons-material';
import {
  TableRowControl,
  TableCellControl,
  PreviewControl,
  ConvertSizeControl,
} from './styles';

export interface ImageItemProps {
  id: string;
  name: string;
  file: File;
  preview: string;
  webpFile?: File;
  webp?: string;
}

export default function ImageItem(props: ImageItemProps) {
  return (
    <TableRowControl>
      <TableCellControl>
        <Space>
          <PreviewControl>
            <img src={props.preview} alt={props.name} />
          </PreviewControl>
          <p>{props.name}</p>
        </Space>
      </TableCellControl>
      <TableCellControl>{props.file.type}</TableCellControl>
      <TableCellControl>
        <ConvertSizeControl>
          <span>{getFileSizeForHuman(props.file.size)}</span>
          {!!props?.webpFile && (
            <>
              <span>&#8594;</span>
              <span>{getFileSizeForHuman(props.webpFile.size)}</span>
            </>
          )}
        </ConvertSizeControl>
      </TableCellControl>
      <TableCellControl width={150}>
        {!!props?.webpFile && <Button>Download</Button>}
      </TableCellControl>
      <TableCellControl>
        <IconButton aria-label='delete'>
          <Clear />
        </IconButton>
      </TableCellControl>
    </TableRowControl>
  );
}

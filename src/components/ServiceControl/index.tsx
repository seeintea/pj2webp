import { useCallback, useRef, useState } from 'react';
import { nanoid } from 'nanoid';
import { getConvertFile } from 'pj2webp-wasm';
import Navigator from '@/components/Navigator';
import ImageControl from '@/components/ImageControl';
import { type ConvertParamsData } from '@/components/ConvertParamsPanel';
import { type ImageData } from '@/components/ImageDetails';
import { downloadItem } from '@/utils';
import { MainControl } from './styles';

export default function ServiceControl() {
  const renameStore = useRef<Record<string, string>>({});
  const [images, setImages] = useState<ImageData[]>([]);

  const handleUploadFiles = useCallback((files: FileList | null) => {
    if (!files) return;
    const pushImageList: ImageData[] = [];
    Array.from(files).forEach((file) => {
      pushImageList.push({ id: nanoid(), file });
    });
    setImages((prev) => prev.concat(pushImageList));
  }, []);

  const handleCreateWebpFiles = async (params: ConvertParamsData) => {
    const tasks: Promise<null>[] = [];
    const update: ImageData[] = [];
    images.forEach((image) => {
      tasks.push(
        new Promise((resolve) => {
          getConvertFile(image.file, params)
            .then((file: File) => {
              update.push({
                ...image,
                convert: file,
              });
              resolve(null);
            })
            .catch(() => {
              update.push(image);
              resolve(null);
            });
        }),
      );
    });
    await Promise.allSettled(tasks);
    setImages(update);
  };

  const handleDeleteItem = useCallback((id: string) => {
    setImages((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const handleRenameItem = useCallback((id: string, name: string) => {
    renameStore.current[id] = name;
  }, []);

  const handleDownloadItem = useCallback(
    (item: Pick<ImageData, 'id' | 'convert'>) => {
      const name = renameStore.current[item.id] || item.convert!.name;
      const url = URL.createObjectURL(item.convert!);
      downloadItem(name, url);
      setTimeout(() => {
        URL.revokeObjectURL(url);
      }, 300);
    },
    [],
  );

  return (
    <MainControl>
      <Navigator
        generate={images.length <= 0}
        onUpload={handleUploadFiles}
        onGenerate={handleCreateWebpFiles}
      />
      <ImageControl
        images={images}
        onDelete={handleDeleteItem}
        onRename={handleRenameItem}
        onDownload={handleDownloadItem}
      />
    </MainControl>
  );
}

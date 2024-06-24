import { useCallback, useState } from 'react';
import styled from '@emotion/styled';
import Navigator from '@/components/Navigator';
import { type ConvertParamsData } from '@/components/ConvertParamsPanel';

const MainControl = styled.main`
  min-width: 880px;
  overflow: hidden scroll;
`;

interface ImageItem {
  name: string;
  file: File;
  preview: string;
  webp?: string;
}

const App = () => {
  const [imageList, setImageList] = useState<ImageItem[]>([]);

  const handleUploadImagesFiles = useCallback((files: FileList | null) => {
    if (!files) return;
    const pushImageList: ImageItem[] = [];
    Array.from(files).forEach((file) => {
      // TODO: image preview create
      pushImageList.push({
        name: file.name || '',
        file,
        preview: '',
        webp: '',
      });
    });
    setImageList((prev) => prev.concat(pushImageList))
  }, []);

  const handleGenerateWebPFiles = useCallback((params: ConvertParamsData) => {
    console.log(params);
  }, []);

  return (
    <MainControl>
      <Navigator
        generate={imageList.length > 0}
        onUpload={handleUploadImagesFiles}
        onGenerate={handleGenerateWebPFiles}
      />
    </MainControl>
  );
};

export default App;

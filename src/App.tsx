import { useCallback, useState } from 'react';
import { nanoid } from 'nanoid';
import styled from '@emotion/styled';
import Navigator from '@/components/Navigator';
import ImageList, { type ImageItemProps } from '@/components/ImageList';
import { type ConvertParamsData } from '@/components/ConvertParamsPanel';

const MainControl = styled.main`
  min-width: 880px;
  overflow: hidden scroll;
  min-height: 100vh;
`;

const App = () => {
  const [imageList, setImageList] = useState<ImageItemProps[]>([]);

  const handleUploadImagesFiles = useCallback((files: FileList | null) => {
    if (!files) return;
    const pushImageList: ImageItemProps[] = [];
    Array.from(files).forEach((file) => {
      // TODO: image preview create
      pushImageList.push({
        id: nanoid(),
        name: file.name || '',
        file,
        preview: '',
        webp: '',
      });
    });
    setImageList((prev) => prev.concat(pushImageList));
  }, []);

  const handleGenerateWebPFiles = useCallback((params: ConvertParamsData) => {
    console.log(params);
  }, []);

  return (
    <MainControl>
      <Navigator
        generate={imageList.length <= 0}
        onUpload={handleUploadImagesFiles}
        onGenerate={handleGenerateWebPFiles}
      />
      <ImageList imageList={imageList} />
    </MainControl>
  );
};

export default App;

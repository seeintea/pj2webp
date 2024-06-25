import { useCallback, useState } from 'react';
import { nanoid } from 'nanoid';
import styled from '@emotion/styled';
import Navigator from '@/components/Navigator';
import ImageControl from '@/components/ImageControl';
import { type ImageData } from '@/components/ImageDetails';
import { type ConvertParamsData } from '@/components/ConvertParamsPanel';

const MainControl = styled.main`
  min-width: 880px;
  overflow: hidden scroll;
  min-height: 100vh;
`;

const App = () => {
  const [imageList, setImageList] = useState<ImageData[]>([]);

  const handleUploadImagesFiles = useCallback((files: FileList | null) => {
    if (!files) return;
    const pushImageList: ImageData[] = [];
    Array.from(files).forEach((file) => {
      pushImageList.push({ id: nanoid(), file });
    });
    setImageList((prev) => prev.concat(pushImageList));
  }, []);

  const handleDeleteImage = useCallback((id: string) => {
    setImageList((prev) => prev.filter((item) => item.id !== id));
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
      <ImageControl images={imageList} onDelete={handleDeleteImage} />
    </MainControl>
  );
};

export default App;

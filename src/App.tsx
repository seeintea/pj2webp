import InputNumber from '@/components/InputNumber';

const App = () => {
  const handleOnChange = (value?: number) => {
    console.log(value);
  };

  return <InputNumber defaultValue={65} max={100} min={1} label="Quality" onChange={handleOnChange}/>;
};

export default App;

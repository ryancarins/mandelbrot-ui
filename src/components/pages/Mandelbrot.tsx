import {useState} from 'react';
import Image from 'mui-image';
import {Stack, TextField, Button, Paper, Checkbox, FormControlLabel} from '@mui/material';
import axios from 'axios';

const Mandelbrot = () => {
  const [image, setImageUrl] = useState('http://localhost:8000/images/1024-1024-256-256--0.75-0-2.5-1-7-false.png');
  const [width, setWidth] = useState(1024);
  const [height, setHeight] = useState(1024);
  const [scale, setScale] = useState(2.5);
  const [iterations, setIterations] = useState(256);
  const [x, setX] = useState(-0.75);
  const [y, setY] = useState(0);
  const [threads, setThreads] = useState(1);
  const [samples, setSamples] = useState(1);
  const [ocl, setOcl] = useState(false);
  const [colourise, setColourise] = useState(false);

  const handleWidthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWidth(Number(event.target.value));
  };
  
  const handleHeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHeight(Number(event.target.value));
  };
  
  const handleMaxIterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIterations(Number(event.target.value));
  };
  
  const handleScaleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setScale(Number(event.target.value));
  };
  const handleXChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setX(Number(event.target.value));
  };
  const handleYChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setY(Number(event.target.value));
  };
  const handleSamplesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSamples(Number(event.target.value));
  };
  const handleThreadsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setThreads(Number(event.target.value));
  };
  const handleOclChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOcl(event.target.checked);
  };
  const handleColouriseChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColourise(event.target.checked);
  };

  const updateImage = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/?width=${width}&height=${height}&max_iter=${iterations}&scale=${scale}&threads=${threads}&ocl=${ocl}&samples=${samples}&x=${x}&y=${y}&colourise=${colourise}`);
      console.log(response);
      setImageUrl(`http://localhost:8000/${response.data}`);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <Paper sx={{margin:'10px', padding:'10px'}}>
      <Stack spacing={2}>
        <Paper sx={{margin:'10px', padding:'10px'}}>
          <Image src={image} height='70vh' fit='scale-down'/>
        </Paper>
        <Paper sx={{margin:'10px', padding:'10px'}}>
          <Stack direction='row' textAlign='center' spacing={1}>
            <TextField type="number" onChange={handleWidthChange} label="width" value={width} variant="outlined" />
            <TextField type="number" onChange={handleHeightChange} label="height" value={height} variant="outlined" />
            <TextField type="number" onChange={handleMaxIterChange} label="max iterations" value={iterations} variant="outlined" />
            <TextField type="number" onChange={handleScaleChange} label="scale" value={scale} variant="outlined" />
            <TextField type="number" onChange={handleSamplesChange} label="samples" value={samples} variant="outlined" />
          </Stack>
        </Paper>
        <Paper sx={{margin:'10px', padding:'10px'}}>
          <Stack direction='row' textAlign='center' spacing={1}>
            <TextField type="number" onChange={handleXChange} label="x" value={x} variant="outlined" />
            <TextField type="number" onChange={handleYChange} label="y" value={y} variant="outlined" />
            <TextField type="number" onChange={handleThreadsChange} label="threads" value={threads} variant="outlined" />
            <FormControlLabel control={<Checkbox checked={ocl} onChange={handleOclChange}/>} label="OCL"/>
            <FormControlLabel control={<Checkbox checked={colourise} onChange={handleColouriseChange}/>} label="Colourise"/>
            <Button variant="outlined" onClick={updateImage}>Calculate</Button>
          </Stack>
        </Paper>
      </Stack>
      </Paper>
    </>
  );
}

export default Mandelbrot;

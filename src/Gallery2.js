import { Button, Container, Grid, TextField } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import axios from 'axios';
import React from 'react';
import './Gallery2.css';

// const customLimit = 10;

// const randDigits = Object.keys(Array.from({ length: customLimit }));

// const randomPick = (items) => items[Math.floor(Math.random() * items.length)];

const Gallery2 = ({ countries, search }) => {
  const [images, setImages] = React.useState([]);
  const [file, setFile] = React.useState();
  const [category, setCategory] = React.useState();
  const [load, setLoad] = React.useState(true);

  React.useEffect(() => {
    const fetch = async () => {
      // const response = await axios.get('https://picsum.photos/v2/list');
      // const nation = ['PH', 'US', 'UK'];

      // const newData = response.data.map(item => ({ ...item, ...{ country: randomPick(nation)}}))

      const response = await axios.get('api/get-files');

      if (response) {
        setImages(response.data);
      }
    };

    if (load) {
      fetch();
    }
  }, [load]);

  const display = images.filter((img) => img.category.toLowerCase().includes(search.toLowerCase()));

  const handleUpload = async () => {
    setLoad(false);

    const formData = new FormData();

    formData.append('category', category);
    formData.append('image', file);

    const response = await axios.post('/api/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    if (response) {
      console.log(response);
      setLoad(true);
    }
  };

  return (
    <Container>
      <Grid container direction="column" justify="center" alignContent="center">
        <Grid item>
          <TextField type="file" onChange={(e) => setFile(e.target.files[0])} />
        </Grid>

        <Grid item>
          <Autocomplete
            id="combo-box-demo"
            options={countries}
            getOptionLabel={(option) => option.name}
            style={{ width: 300 }}
            renderInput={(params) => (
              <TextField {...params} label="Select Category" variant="standard" />
            )}
            onChange={(e, data) => setCategory(data?.code ?? '')}
          />
        </Grid>

        <Grid item>
          <Button color="primary" variant="contained" onClick={handleUpload}>
            Upload
          </Button>
        </Grid>
      </Grid>

      <br />
      <br />
      <br />
      <br />

      <Grid container direction="row" justify="center" spacing={1}>
        {display.length !== 0 ? (
          display.map((img, key) => (
            <Grid item key={key}>
              <img src={img.download_url} alt={img.country} height="200" width="300" />
            </Grid>
          ))
        ) : (
          <span>No pictures uploaded on this country yet...</span>
        )}
        {/* {randDigits.map((digits, key) => (
                <Grid item key={key}>
                  <img src={`https://picsum.photos/150/150?random=${digits}`} alt={`ALTS ${digits}`} />
                </Grid>
              ))} */}
      </Grid>
    </Container>
  );
};

export default Gallery2;

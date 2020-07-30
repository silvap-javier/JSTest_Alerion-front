import React, {useState, useEffect, useRef} from 'react';

import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import Loading from '../components/Loading';
import {getItems} from '../repository';

import './styles.scss'
import Table from '../components/Table/table'
import Card from '../components/Cards/cards'
import Modal from '../components/Modal';



function ContainerPage({ t, history }) {
  const [items, setItems] = useState(false);
  const [item, setItem] = useState(false);
  const [view, setView] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [isLoading, setIsLoading] = useState(null);

  const getItemsApi = () => {
      setIsLoading(true)
      getItems((data) => {
          setIsLoading(false)
          setItems(data);
      }, (dataError) => {
        console.log('Algo salio mal')
        setIsLoading(false)
      })
  }

  useEffect(() => {
      if (!items) {
          getItemsApi();
      }
  }, []);

  const getHeaders = () =>{
    let headers = []
    headers.push('Id')
    headers.push('File Name')
    headers.push('Processed')
    headers.push('Image')
    headers.push('Views')
    headers.push('Options')
    return headers
  }

  const handleView = (view) => {
    setView(view)
  }

  const handleOnEdit = (item) => {
    setOpenModal(true)
    setItem(item)
  }

  const handleOnClose = () =>{
    setOpenModal(false)
  }

  return (
    <Container maxWidth="xl" className={'container'}>
      <Typography className={'container_title'} variant="h2" component="h2" gutterBottom>
        {`Listado de Imagenes`}
      </Typography>
      <Grid item xs={12} className={'container_actions'}>
        <Chip avatar={<Avatar>W</Avatar>} label="Ver en Formato Wall" onClick={() => handleView(true)} />
        <Chip avatar={<Avatar>L</Avatar>} label="Ver en Formato List" onClick={() => handleView(false)} />
      </Grid>
      <Divider />
      <Grid item xs={12} className={'container_options'}>
        {(items && !view) && (<Table
          data={items}
          headers={getHeaders()}
          handleOnEdit={handleOnEdit}
        />)}
        {(items && view) && (<Card
          data={items}
          headers={getHeaders()}
          handleOnEdit={handleOnEdit}
        />)}
      </Grid>
      <Modal
        item={item}
        open={openModal}
        handleOnClose={handleOnClose}
      />
      {isLoading === true ?
            <Loading/>
            :''
        }
    </Container>
  );
}

export default ContainerPage;
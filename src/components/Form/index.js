import React, {useState} from 'react';
import './style.scss';

import TextInput from '../TextInput';
import ButtonTextIcon from '../ButtonTextIcon';
import {editItem,createItem} from '../../repository'
import Loading from '../Loading';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';

const FormItem = ({item,handleClose}) => {
    const [id, setId] = useState((item) ? item.id : '');
    const [name, setName] = useState((item) ? item.file_name : '');
    const [fileSize, setFileSize] = useState((item) ? item.file_size : '');
    const [processed, setProcessed] = useState((item) ? item.processed : '');
    const [image, setImage] = useState((item) ? item.image : '');
    const [views, setViews] = useState((item) ? item.view : '');
    const [comments, setComments] = useState((item) ? item.comments : '');
    const [msgError, setMsgError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    
    const createItem = () => {
      let item = {}
      if (id)
        item.id = id
      if (name)
        item.file_name = name
      if (fileSize)
        item.file_size = fileSize
      if (processed)
        item.processed = processed
      if (image)
        item.image = image
      if (views)
        item.views = views
      if (comments)
        item.comments = comments
      return item
    }
    const onConfirm = () => {
        if (checkStatus()) {
            let itemEdit = createItem()
            setIsLoading(true)
            if (itemEdit.id){
                editItem(itemEdit, (message) => {
                    window.location.reload(false);
                    setIsLoading(false)
                }, (error) => {
                    setIsLoading(false)
                    setMsgError(error)
                })       
            }else{
                createItem(itemEdit, (message) => {
                    window.location.reload(false);
                    setIsLoading(false)
                }, (error) => {
                    setIsLoading(false)
                    setMsgError(error)
                })    
            }
        } else {
            setMsgError('Complete Form')
        }
    }

    const checkStatus = () => {
        if (name !== '') {
            return true
        } else {
            return false
        }
    }
    
    return (
        <>  
        <DialogContent>
            <div className={'content-form'}>
                <Card>
                  <img className={'content-form_media'} src={item.image}/>
                </Card>
                <Divider/>
                <Grid container spacing={3} className={'content-form_content-inputs'}>
                  <Grid item xs={6}>
                    <TextInput value={name}
                        label={
                            'File name'
                        }
                        onChange={
                            e => setName(e.target.value)
                        }/>
                  </Grid>
                  <Grid item xs={6}>
                    <TextInput value={processed}
                      label={
                          'Processed'
                      }
                      onChange={
                          e => setProcessed(e.target.value)
                      }/>
                  </Grid>
                  <Grid item xs={12}>
                    <TextInput value={comments}
                      label={
                          'Coments'
                      }
                      onChange={
                          e => setComments(e.target.value)
                      }/>
                  </Grid>
                </Grid>
            </div>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={onConfirm} color="primary" autoFocus>
            {(item) ? 'Edit' : 'New'}
          </Button>
        </DialogActions>
        {isLoading === true ?
            <Loading/>
            :''
        }
    </>
    );
};

export default FormItem;
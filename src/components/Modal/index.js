import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';

import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import FormItem from '../Form';
import './styles.scss'
export default function ResponsiveDialog({open,handleOnClose,item}) {

  const theme = useTheme();

  const handleClose = () => {
    handleOnClose();
  };
  
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        className={'modal'}
        maxWidth={'xl'}
      >
        <DialogTitle id="responsive-dialog-title"></DialogTitle>
          <FormItem item={item} handleClose={handleClose}/>
      </Dialog>
    </div>
  );
}
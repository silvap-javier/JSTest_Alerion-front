import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import './styles.scss'

export default function MediaCard({data,handleOnEdit}) {
  return (
    <>
    <Grid container spacing={2}>
        <Grid item xs={8} className={'items'}>
        {(data) && (data.map((row,index) => (
          <Card key={index} className={'item-card'}>
            <img className={'media'} src={row.image} onClick={() => {handleOnEdit(row)}}/>
          </Card>
          
        )))}
        </Grid>
    </Grid>
    </>
  );
}
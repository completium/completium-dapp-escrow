import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { price } from '../settings';

const Product = (props) => {
  console.log(process.env.PUBLIC_URL);
  return (
    <Card style={{ display: 'flex', marginTop: 50, marginBottom: 50 }}>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <CardMedia
          style={{ width: 335, height: 400, flex: '1 0 auto', }}
          image={process.env.PUBLIC_URL + "/armchair.jpg"}
        />
        <CardContent>
          <Grid container direction='row' justify="flex-start" alignItems="center">
            <Grid item xs={12}>
              <Typography variant='h5'>Armchair for Bedroom / Living Room / Lounge</Typography>
            </Grid>
            <Grid item xs={12}>
              <Grid container direction='row' justify="flex-start" alignItems="center">
                <Grid item><StarIcon color='secondary' /></Grid>
                <Grid item><StarIcon color='secondary' /></Grid>
                <Grid item><StarIcon color='secondary' /></Grid>
                <Grid item><StarIcon color='secondary' /></Grid>
                <Grid item><StarBorderIcon /></Grid>
                <Grid item style={{ marginLeft: 18 }}><Typography>139 ratings</Typography></Grid>
              </Grid>
            </Grid>
            <Grid item xs={1}><Typography>Price:</Typography></Grid>
            <Grid item xs={11} style={{ paddingLeft: 12}}><Typography variant='h5'>{price}ꜩ</Typography></Grid>
            <Grid item xs={1}><Typography>Color:</Typography></Grid>
            <Grid item xs={11} style={{ paddingLeft: 12}}><Typography>grey</Typography></Grid>
            <Grid item xs={12}><Typography variant="body1" style={{ width: '100%' }}>
              <ul>
                <li>Tub Chair Dimensions: 68 cm W x 62 cm D x 72 cm H.</li>
                <li>High quality fabric linen and supportive foam seating with soft upholstery, soft touching and durable; UK Fire Retardant foam and cover.</li>
                <li>Solid oak legs in natural colour finished, standing firm for daily use.</li>
                <li>With good packaging, simple to assemble, only 4 chair legs to attach.</li>
                <li>The occasional chair is suitable for living room, dining room, bedroom, office or conservatory with modern and stylish looking.</li>
              </ul>
            </Typography></Grid>
          </Grid>
        </CardContent>
      </div>
    </Card>
  )
}

export default Product;
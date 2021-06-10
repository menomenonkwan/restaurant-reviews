import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    fontSize: '50px',
    background: 'radial-gradient(farthest-corner at 40px 40px, var(--orange), var(--light-orange))',
    boxShadow: '0px 2px 6px rgba(0,0,0,0.7)',
  },
  btn: {
    fontSize: '2rem',
  }
});
export default function MediaCard({ info }) {
  const classes = useStyles();
  const thumb = getImage(info.thumb);

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <GatsbyImage image={thumb} alt={info.alt} />
        <CardContent>
          <Typography gutterBottom variant="h4" component="h2">
            {info.title}
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            {info.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="large" color="primary" className={classes.btn}>
          Share
        </Button>
        <Button size="large" color="primary" className={classes.btn}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
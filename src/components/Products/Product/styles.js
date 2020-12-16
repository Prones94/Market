import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    maxWidth: '90%',
    maxHeight: '100%',
  },
  media: {
    height: 0,
    paddingTop: '65%',
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  CardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  CardMedia: {
    height:'100%',
    width: '100%',
    objectFit: 'cover',
  }

}))
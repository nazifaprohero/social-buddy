import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



const Comment = (props) => {
    const {name, body, email, id} = props.comment;
   

    const useStyles = makeStyles({
        root: {
          minWidth: 275,
        },
        bullet: {
          display: 'inline-block',
          margin: '0 2px',
          transform: 'scale(0.8)',
        },
        title: {
          fontSize: 14,
        },
        pos: {
          marginBottom: 12,
        },
        comment:{
            margin: '10px',
            
        },
      });
    

    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    
return (
            <div className="comment">
              <div>
             <img src="https://via.placeholder.com/150/24f355" alt=""/>
             
              </div>
              <Card className={classes.root}>
            <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
                Comment
            </Typography>
            <Typography variant="h5" component="h2">
                {name}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
                {id}
            </Typography>
      <Typography variant="body2" component="p">
                {body}
                
     </Typography>
        </CardContent>
          <CardActions>
            <Button size="small">{email}</Button>
          </CardActions>
      </Card>
    </div>
);

};


export default Comment;
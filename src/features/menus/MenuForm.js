import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { patchMenu, postMenu } from './menusSlice';
import { 
  fetchMenu, 
  selectMenuById, 
} from './menusSlice'

const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: '2%',
    marginBottom: '3%',
  },
  desc: {
    textAlign: 'center',
  },
  field: {
    marginLeft: '5%',
    marginTop: '1%',
    marginBottom: '1%',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    width: '90%',
  },
  header: {
    color: '#fff',
    backgroundColor: '#000',
    marginBottom: '2%'
  },
  inputLabel: {
    marginTop: '15%',
    fontSize: '2rem',
  },
  paper: {
    marginRight: '2.5%',
    marginLeft: '2.5%',
    width: '95%',
  },
}));

export const MenuForm = ({match}) => {
  console.log('match:', match);
  let { restaurantId } = match.params;
  let url = match.url
  let dirs = url.split('/')
  let page = dirs[(dirs.length -1)]
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const userId = parseInt(useSelector(state => state.users.ids[0]));
  let menuToEdit = useSelector(state => selectMenuById(state, match.menuId));

  useEffect(() => {
    if (!menuToEdit && match.menuId) {
      dispatch(fetchMenu(match.menuId))
    }
  }, [dispatch, menuToEdit, match.menuId])

  const [state, setState] = useState({
    name: '' || menuToEdit?.attributes.name,
    menu_id: '' || menuToEdit?.id, 
    restaurant_id: restaurantId,
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value
    })
  }

  // setTimeout gives time for store to be updated before rendering.
  const handleSubmit = (e) => {
    e.preventDefault();
    if (menuToEdit) {
      dispatch(patchMenu(state)) 
      setTimeout(() => {
        history.push(`/menus/${menuToEdit.id}`)   
      }, 1000)
    } else {
      dispatch(postMenu(state))
      .then(setTimeout(() => {
        history.push(`/restaurants/${restaurantId}`)
      }, 1000))
    }
  };

  return (
    <div>
      { userId ?
        (
          <div>
            <Paper className={classes.paper}>
              <Typography className={classes.header} variant="h2">
                {page.toUpperCase()} MENU
              </Typography>
              <form noValidate autoComplete="on" onSubmit={handleSubmit}>
                <TextField 
                  className={classes.field} 
                  id="name" 
                  label="Menu Name" 
                  name="name" 
                  onChange={handleChange} 
                  required={true} 
                  style = {{width: '90%'}}
                  value={state.name}
                  variant="filled" 
                />
                <center>
                  <Button 
                    className={classes.button} 
                    color="secondary" 
                    size="large" 
                    type="submit"
                    variant="contained">
                    Submit
                  </Button>
                </center>
              </form>
            </Paper>
          </div>
        ) : 
        (<p>Please log in to view this page.</p>)
      }
    </div>
  )
}

MenuForm.propTypes = {
  match: PropTypes.object.isRequired,
}

export default MenuForm;
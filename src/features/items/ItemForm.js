import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { patchItem, postItem } from './itemsSlice';
import { 
  fetchItems, 
  selectItemById, 
} from './itemsSlice'

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

export const ItemForm = ({match}) => {
  let { restaurantId } = match.params
  let { sectionId } = match.params
  let url = match.url
  let dirs = url.split('/')
  let page = dirs[(dirs.length -1)]
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const userId = parseInt(useSelector(state => state.users.ids[0]));
  let itemToEdit = useSelector(state => selectItemById(state, match.params.itemId));

  useEffect(() => {
    if (page === 'edit' && !itemToEdit && match.params.itemId) {
      dispatch(fetchItems())
    }
  }, [dispatch, page, itemToEdit, match.params.itemId])

  const [state, setState] = useState({
    name: '' || itemToEdit?.attributes.name,
    desc: '' || itemToEdit?.attributes.desc, 
    price: '' || itemToEdit?.attributes.price, 
    item_id: '' || itemToEdit?.id, 
    section_id: sectionId,
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
    if (itemToEdit) {
      dispatch(patchItem(state)) 
      setTimeout(() => {
        history.push(`/restaurants/${restaurantId}`) 
      }, 1000)
    } else {
      dispatch(postItem(state))
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
                {page.toUpperCase()} ITEM
              </Typography>
              <form noValidate autoComplete="on" onSubmit={handleSubmit}>
                <TextField 
                  className={classes.field} 
                  id="name" 
                  label="Item Name" 
                  name="name" 
                  onChange={handleChange} 
                  required={true} 
                  style = {{width: '90%'}}
                  value={state.name}
                  variant="filled" 
                />
                <TextField 
                  className={classes.field} 
                  id="desc" 
                  label="Description" 
                  name="desc" 
                  onChange={handleChange} 
                  required={true} 
                  style = {{width: '90%'}}
                  value={state.desc}
                  variant="filled" 
                />
                <TextField 
                  className={classes.field} 
                  id="price" 
                  label="Price" 
                  name="price" 
                  onChange={handleChange} 
                  required={true} 
                  style = {{width: '20%'}}
                  value={state.price}
                  variant="filled" 
                />
                <center>
                  <Button className={classes.button} size="large" variant="contained" color="secondary" type="submit">
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

ItemForm.propTypes = {
  match: PropTypes.object.isRequired,
}

export default ItemForm;
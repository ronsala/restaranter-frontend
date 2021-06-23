import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { patchSection, postSection } from './sectionsSlice';
import { 
  fetchSections, 
  selectSectionById, 
} from './sectionsSlice'

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

export const SectionForm = ({match}) => {
  let { menuId } = match.params
  let { restaurantId } = match.params
  let url = match.url
  let dirs = url.split('/')
  let page = dirs[(dirs.length -1)]
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const userId = parseInt(useSelector(state => state.users.ids[0]));
  let sectionToEdit = useSelector(state => selectSectionById(state, match.params.sectionId));

  useEffect(() => {
    if (page === 'edit' && !sectionToEdit && match.params.sectionId) {
      dispatch(fetchSections())
    }
  }, [dispatch, page, sectionToEdit, match.params.sectionId])

  const [state, setState] = useState({
    name: '' || sectionToEdit?.attributes.name,
    section_id: '' || sectionToEdit?.id, 
    menu_id: menuId,
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
    if (sectionToEdit) {
      dispatch(patchSection(state)) 
      setTimeout(() => {
        history.push(`/restaurants/${restaurantId}`) 
      }, 1000)
    } else {
      dispatch(postSection(state))
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
                {page.toUpperCase()} SECTION
              </Typography>
              <form noValidate autoComplete="on" onSubmit={handleSubmit}>
                <TextField 
                  className={classes.field} 
                  id="name" 
                  label="Section Name" 
                  name="name" 
                  onChange={handleChange} 
                  required={true} 
                  style = {{width: '90%'}}
                  value={state.name}
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

SectionForm.propTypes = {
  match: PropTypes.object.isRequired,
}

export default SectionForm;
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import QuantityBox from './QuantityBox';
import Typography from '@material-ui/core/Typography';
import Buttons from '../../components/Buttons';
import { formatCurrency } from '../../helpers'

const useStyles = makeStyles((theme) => ({
  name: {
    fontWeight: "bold",
  },
}));

export const ItemsTable = (props) => {
  const classes = useStyles();
  let live = props.live

  return (
    <div style={{width: '109.25%'}}>
      <Grid container spacing={3}>
        {props.items.map((item) => (
          <div key={item.id}>
            <Grid item xs={8}>
              <TableRow 
                key={item.attributes.name}
              >
                <TableCell>
                  <Typography 
                    className={classes.name} 
                    variant="subtitle2" 
                  >
                    {item.attributes.name}
                  </Typography>
                </TableCell>
                <TableCell 
                  align="left"
                >
                  <Typography 
                    variant="body2"
                  >
                    {item.attributes.desc}
                  </Typography>
                </TableCell>
                <TableCell 
                  align="right">
                    {formatCurrency(item.attributes.price)}
                </TableCell>
                { live 
                    ? (<TableCell 
                        align="left"
                      >
                        <QuantityBox 
                          item={item} 
                        />
                      </TableCell>)
                    : (null)
                }
              </TableRow>
            </Grid>
            <Grid item 
              xs={4}
            > 
              { live 
                ? (<div></div>)
                : <Buttons 
                    handleDeleteButton={props.handleDeleteButtonClick} 
                    handleEditButton={props.handleEditButtonClick} 
                    modelId={parseInt(item?.id)} 
                  />
              }
            </Grid>
          </div>
        ))}
      </Grid>
    </div>
  );
}

ItemsTable.propTypes = {
  handleAddButtonClick: PropTypes.func, 
  handleDeleteButtonClick: PropTypes.func, 
  handleEditButtonClick: PropTypes.func, 
  items: PropTypes.array.isRequired, 
  live: PropTypes.bool, 
};

export default ItemsTable;
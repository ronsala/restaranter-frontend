import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
// import Grid from '@material-ui/core/Grid';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
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
    // <div style={{width: '109.25%'}}>
    <TableContainer>
      <Table aria-label="items table">
        <TableBody>
        {props.items.map((item) => (
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
                <TableCell
                  align="right"
                >
                  { live 
                    ? (<QuantityBox 
                          item={item} 
                        />)
                    : (<Buttons 
                        handleDeleteButton={props.handleDeleteButtonClick} 
                        handleEditButton={props.handleEditButtonClick} 
                        modelId={parseInt(item.id)} 
                      />)
                  }
                </TableCell>)
              </TableRow>
        ))}
        </TableBody>
      </Table>
    </TableContainer>
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
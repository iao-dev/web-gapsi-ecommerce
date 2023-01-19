import {  useEffect, useState } from "react";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
//import TablePagination from '@mui/material/TablePagination';
import Container from '@mui/material/Container';
//import '../../backend/ApiCall';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function ListSuppliers() {
// esta parte puede ir en el back como nodejs lo pongo aqui para visualizarlo rapido

  const [suppliers, setSuppliers] = useState([]);
  useEffect(()=> {
      fetch ('http://127.0.0.1:5500/src/apis/suppliers.json') //usamos liveserver para hacer la conexion
      .then((response) => response.json())
      .then ((data)=> {
        //  console.log(data);
          setSuppliers(data);
      })
      .catch((err)=>{
          console.lof(err.message);
      });
      ;
  },[]);

    return (
        <Container maxWidth="md">
            <h3 className="p-3 text-center">Lista de Proveedores</h3>
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
          <StyledTableCell>id</StyledTableCell>
                        <StyledTableCell>Nombre</StyledTableCell>
                        <StyledTableCell>Razón Social</StyledTableCell>
                        <StyledTableCell>Direccion</StyledTableCell>
                        <StyledTableCell>Email</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {suppliers && suppliers.map(supplier => (
            <StyledTableRow key={supplier.id}>
              <StyledTableCell component="th" scope="row">{supplier.id}</StyledTableCell>
              <StyledTableCell >{supplier.name}</StyledTableCell>
              <StyledTableCell >{supplier.social}</StyledTableCell>
              <StyledTableCell >{supplier.address}</StyledTableCell>
              <StyledTableCell >{supplier.email}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    </Container >
    );
}

export default ListSuppliers;
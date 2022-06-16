import React, { useEffect, useState } from 'react'
import axios from "axios"
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { ReactSession }  from 'react-client-session';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#0D6EFD',
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
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const TransactionTable = () => {

    const [product, setProduct] = useState([]);
    const [search, setSearch] = useState("");
    let id = ReactSession.get('walletID');

    const getTransactionData = async () => {
        try {
            const data = await axios.get(`http://localhost:8080/transaction/${id.id}`)
            console.log(data.data)
            setProduct(data.data)
        }
        catch (e) {
            console.log(e)
        }
    };

    useEffect(() => {
        getTransactionData()
    }, []);

    return (
        <div className='container'>
            <input
                type="text"
                placeholder="Wyszukaj"
                onChange={e => {
                    setSearch(e.target.value)
                }}
            />

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>ID</StyledTableCell>
                            <StyledTableCell align="left">Kwota</StyledTableCell>
                            <StyledTableCell align="left">Opis</StyledTableCell>
                            <StyledTableCell align="left">Typ</StyledTableCell>
                            <StyledTableCell align="left">Data</StyledTableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>

                        {product.filter(item => {
                            if (search === "") {
                                return item
                            }
                            else if (item.description.toLowerCase().includes(search.toLowerCase())) {
                                return item
                            }
                        })
                            .map((item) => {
                                return (
                                    <StyledTableRow key={item.id}>
                                        <StyledTableCell component="th" scope="row">
                                            {item.id}
                                        </StyledTableCell>

                                        <StyledTableCell align="left">
                                            {item.amount}
                                        </StyledTableCell>

                                        <StyledTableCell align="left">
                                            {item.description}
                                        </StyledTableCell>

                                        <StyledTableCell align="left">
                                            {item.type}
                                        </StyledTableCell>

                                        <StyledTableCell align="left">
                                            {item.transactionDate}
                                        </StyledTableCell>

                                    </StyledTableRow>
                                );
                            })}

                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default TransactionTable;
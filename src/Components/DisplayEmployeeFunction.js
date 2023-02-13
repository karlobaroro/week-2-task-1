import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateEmployee } from '../action';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';

const DisplayEmployeeFunction = () => {
    const employees = useSelector((state) => state.employees); //similar to mapStateToProps
    const dispatch = useDispatch(); // simlar to mapDispatchToProps

    const empList = employees.map(info => {
        return (
            <TableRow
                key={info.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell component="th" scope="row" style={{color:"white"}}>
                    {info.name}
                </TableCell>
                <TableCell align="right" style={{color:"white"}}>{info.age}</TableCell>
                <TableCell align="right" style={{color:"white"}}>{info.designation}</TableCell>
                <TableCell align="right" style={{color:"white"}}>{info.department}</TableCell>
            </TableRow>
        )
    });

    const handleUpdate = () => {
        const updateInfo = {
            age: 35,
            designation: "Manager"
        }

        dispatch(updateEmployee(updateInfo));
    };

    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 300 , backgroundColor:"#609EA2"}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Age</TableCell>
                            <TableCell align="right">Designation</TableCell>
                            <TableCell align="right">Department</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {empList}
                    </TableBody>
                </Table>
            </TableContainer>
            <Button variant="contained" onClick={handleUpdate}>Update Age and Designation</Button>
        </>
    );
};

export default DisplayEmployeeFunction;
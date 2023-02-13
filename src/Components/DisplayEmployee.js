import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateEmployee } from '../action';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';

class DisplayEmployee extends Component {
    render() {
        const empList = this.props.employees.map(info => {
            return (
                <TableRow
                    key={info.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                    <TableCell component="th" scope="row" style={{ color: "white" }}>
                        {info.name}
                    </TableCell>
                    <TableCell align="right" style={{ color: "white" }}>{info.age}</TableCell>
                    <TableCell align="right" style={{ color: "white" }}>{info.designation}</TableCell>
                    <TableCell align="right" style={{ color: "white" }}>{info.department}</TableCell>
                </TableRow>
            )
        });

        const updateEmployee = () => {
            const updateInfo = {
                age: 20,
                designation: "DevOps"
            };

            this.props.updateEmp(updateInfo);
        }

        return (
            <div>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 300, backgroundColor: "#537FE7" }} aria-label="simple table">
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
                <Button variant="contained" onClick={updateEmployee}>Update Age and Designation</Button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        employees: state.employees
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateEmp: (updateInfo) => dispatch(updateEmployee(updateInfo))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(DisplayEmployee);
import React from "react";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import {Paper} from "@material-ui/core";
import c from "./OurTable.module.css"
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TablePagination from "@material-ui/core/TablePagination";
import Input from "@material-ui/core/Input";

const OurTable = (props) => {

    const rows = props.rows

    return (
        <div className={c.tableWrapper}>
            <Container>
                <Grid container spacing={3}>
                    <Grid item xs={8}>
                        <TableContainer component={Paper}>
                            <Table aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="right">id</TableCell>
                                        <TableCell align="right">firstName</TableCell>
                                        <TableCell align="right">lastName</TableCell>
                                        <TableCell align="right">email</TableCell>
                                        <TableCell align="right">phone</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <TableRow hover={true} key={row.id}>
                                            <TableCell align="right" component="th" scope="row">
                                                {row.id}
                                            </TableCell>
                                            <TableCell align="right">{row.firstName}</TableCell>
                                            <TableCell align="right">{row.lastName}</TableCell>
                                            <TableCell align="right">{row.email}</TableCell>
                                            <TableCell align="right">{row.phone}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                            <TablePagination
                                component="div"
                                count={100}
                                page={1}
                                onChangePage={()=>{
                                    alert("onChangePage")
                                }}
                                rowsPerPage={1}
                                onChangeRowsPerPage={1}
                            />
                        </TableContainer>
                    </Grid>
                    <Grid item xs={4}>
                        <Box>
                            <div>
                                Выбран пользователь <b>Sue Corson</b>
                            </div>
                            <div>
                                Описание:
                                <div>
                                    <textarea>
                                    et lacus magna dolor...
                                </textarea>
                                </div>
                            </div>
                            <div>
                                Адрес проживания:
                                <b>9792 Mattis Ct</b>
                            </div>
                            <div>Город: <b>Waukesha</b></div>
                            <div>Провинция/штат: <b>WI</b></div>
                            <div>Индекс: <b>22178</b></div>
                        </Box>
                        <Box>
                            New user<br/>
                            <div>
                                <Input placeholder={"firstName "}></Input>
                            </div>
                            <div>
                                <Input placeholder={"lastName "}></Input>
                            </div>
                            <div>
                                <Input placeholder={"email "}></Input>
                            </div>
                            <div>
                                <Input placeholder={"phone "}></Input>
                            </div>
                        </Box>
                        <Box>
                            <Button onClick={() => {
                                alert('clicked')
                            }} variant="contained">Add</Button>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}
export default OurTable
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import theme from '../../../../theme'
import { Box, Button, IconButton, ThemeProvider } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import SuiTypography from 'components/SuiTypography'
import { fDate } from 'utils/formatTime'
import { renderTutorStatus } from 'utils/renderStatus'
import { useState } from 'react'
import ComfirmDelete from 'components/ComfirmDelete'
import { tutorApi } from 'apis/tutorApi'
import { USER_STATUS } from 'utils/enum'
import { set } from 'date-fns'

export default function TutorTableCard(props) {
    const { tutorInfo, deleteTutor, userStatus } = props

    const [openComfirm, setOpenConfirm] = useState(false)
    const [deleteValue, setDeleteValue] = useState(null)

    const renderStatusButton = (status) => {
        var objectStatus = renderTutorStatus(status)

        return (
            <SuiTypography color={objectStatus.color} variant="caption">
                {objectStatus.message}
            </SuiTypography>
        )
    }

    const handleOpenDelete = (id) => {
        setDeleteValue(id)
        setOpenConfirm(true)
    }

    const handleClose = () => {
        setOpenConfirm(false)
    }

    const handleDelete = (value) => {
        tutorApi
            .deleteTutor(value)
            .then((res) => {
                setOpenConfirm(false)
                deleteTutor()
            })
            .catch((err) => {
                setOpenConfirm(false)
            })
    }

    return (
        <>
            <Box
                display="flex"
                sx={{ justifyContent: 'space-between', alignItem: 'center' }}
            >
                <SuiTypography
                    variant="h4"
                    fontWeight="regular"
                    color="black"
                    my={2}
                >
                    Th??ng tin ng?????i gi??m h???
                </SuiTypography>
                <IconButton
                    aria-label="delete"
                    size="medium"
                    href="/trang-chu/nguoi-giam-ho/tao"
                >
                    <AddCircleIcon fontSize="medium" color="black" />{' '}
                    <SuiTypography variant="button" color="black">
                        Th??m th??ng tin ng?????i gi??m h???
                    </SuiTypography>
                </IconButton>
            </Box>
            <Paper elevation={3} sx={{ borderRadius: '10px' }}>
                <ThemeProvider theme={theme}>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>H??? t??n</TableCell>
                                    <TableCell>Ng??y sinh</TableCell>
                                    <TableCell>S??? ??i???n tho???i</TableCell>
                                    <TableCell width="40%">?????a ch???</TableCell>
                                    <TableCell>Quan h???</TableCell>
                                    <TableCell>Tr???ng th??i</TableCell>
                                    <TableCell align="center"></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {tutorInfo?.map((row) => (
                                    <TableRow
                                        key={row.id}
                                        sx={{
                                            '&:last-child td, &:last-child th':
                                                {
                                                    border: 0,
                                                },
                                        }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell>
                                            {fDate(row.birthday)}
                                        </TableCell>
                                        <TableCell>{row.phone}</TableCell>
                                        <TableCell>{row.address}</TableCell>
                                        <TableCell>{row.relation}</TableCell>
                                        <TableCell>
                                            {renderStatusButton(row.status)}
                                        </TableCell>
                                        {userStatus === USER_STATUS.VERIFIED ? (
                                            <>
                                                <TableCell align="center">
                                                    <IconButton
                                                        aria-label="delete"
                                                        size="small"
                                                        href={`/trang-chu/nguoi-giam-ho/${row.id}`}
                                                    >
                                                        <EditIcon fontSize="small" />
                                                    </IconButton>
                                                </TableCell>
                                            </>
                                        ) : (
                                            <>
                                                <TableCell align="center">
                                                    <IconButton
                                                        aria-label="delete"
                                                        size="small"
                                                        href={`/trang-chu/nguoi-giam-ho/${row.id}`}
                                                    >
                                                        <EditIcon fontSize="small" />
                                                    </IconButton>
                                                    <IconButton
                                                        aria-label="delete"
                                                        size="small"
                                                        onClick={() =>
                                                            handleOpenDelete(
                                                                row.id
                                                            )
                                                        }
                                                    >
                                                        <DeleteIcon fontSize="small" />
                                                    </IconButton>
                                                </TableCell>
                                            </>
                                        )}
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </ThemeProvider>
                <ComfirmDelete
                    open={openComfirm}
                    handleClose={handleClose}
                    title="ng?????i gi??m h???"
                    handleDelete={handleDelete}
                    value={deleteValue}
                />
            </Paper>
            {tutorInfo?.length === 0 ? (
                <SuiTypography
                    variant="caption"
                    fontWeight="regular"
                    color="error"
                >
                    Th??ng tin ng?????i gi??m h??? kh??ng ???????c ????? tr???ng
                </SuiTypography>
            ) : null}
        </>
    )
}

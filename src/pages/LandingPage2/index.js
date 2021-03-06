import {
    CardMedia,
    Container,
    Grid,
    Box,
    Divider,
    Slider,
    Radio,
    Paper,
    Card,
    Stack,
    IconButton,
    CardHeader,
    Avatar,
    CardContent,
} from '@mui/material'
import SuiButton from 'components/SuiButton'
import SuiTypography from 'components/SuiTypography'
import React, { useEffect, useState } from 'react'
import classes from './LandingPage.module.css'
import Navbar from './components/Navbar'
// import Navbar from "..//..//examples/Navbars/DefaultNavbar";
import LockIcon from '@mui/icons-material/Lock'
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications'
import PaidIcon from '@mui/icons-material/Paid'
import TodayIcon from '@mui/icons-material/Today'

import newLogo from 'assets/newLogo.png'

import Footer from './components/Footer'
import AccordionGuide from 'components/AccordionGuide'
import { systemConfigApi } from 'apis/systemConfigApi'
import { fCurrency } from 'utils/formatNumber'

function valuetext(value) {
    return `${value}..000`
}

export default function LandingPage() {
    const [moneyText, setMoneyText] = useState(50000000)

    const [config, setConfig] = useState(null)

    useEffect(() => {
        systemConfigApi.getFee().then((res) => {
            setConfig(res.data)
        })
    }, [])

    const handleSliderChange = (event, newValue) => {
        setMoneyText(newValue)
    }

    const handleResult = (money) => {
        var result =
            money * config?.transactionFee +
            (money * config?.interest) * config?.minDuration +
            money
        return fCurrency(result)
    }

    return (
        <>
            {/* <Box className={classes.welcome}> */}
            <Box
                sx={{
                    background: '#f7f5f2',
                    position: 'relative',
                    height: '100vh',
                    minHeight: '700px',
                }}
            >
                <Navbar title="StudentLoanPlatform" />

                <Container maxWidth="xl">
                    <Box padding="10% 20px 0 20px">
                        <Grid container spacing={2}>
                            <Grid item xs="12" md="12" lg="6">
                                <SuiTypography
                                    variant="h1"
                                    fontWeight="bold"
                                    margin="50px 0 0 0"
                                    color="black"
                                >
                                    Xin ch??o,
                                </SuiTypography>
                                <SuiTypography
                                    variant="h2"
                                    fontWeight="regular"
                                    marginBottom="40px"
                                    color="black"
                                >
                                    Student Loan s??? gi??p b???n k??u g???i m???t kho???n
                                    vay
                                </SuiTypography>
                                <SuiTypography
                                    variant="h6"
                                    fontWeight="regular"
                                    marginBottom="20px"
                                    color="text"
                                >
                                    ????y l?? n???n t???ng cho vay t??n ch???p d???a tr??n
                                    h??nh th???c g???i v???n c???ng ?????ng gi??p sinh vi??n
                                    c?? kh??? n??ng chi tr??? h???c ph??. B??n c???nh ????
                                    vi???c tr??? n??? r???t ??u ????i cho sinh vi??n
                                </SuiTypography>
                                <SuiButton color="dark">
                                    T??m hi???u th??m
                                </SuiButton>
                            </Grid>
                            <Grid item xs="12" md="12" lg="6">
                                <CardMedia
                                    src="https://www.usnewsglobaleducation.com/wp-content/uploads/2019/10/GettyImages-914314318-1024x683.jpg"
                                    component="img"
                                    sx={{
                                        height: 'auto',
                                        maxWidth: '100%',
                                        margin: '0px',
                                        borderRadius: 0,
                                        mt: 5,
                                        float: 'right',
                                        '@media (max-width: 786px)': {
                                            float: 'none',
                                        },
                                    }}
                                />
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box>
            <Box
                sx={{
                    background: '#ffffff',
                    p: 3,
                    '@media (max-width: 1024px)': {
                        marginTop: '150px',
                    },
                    '@media (max-width: 786px)': {
                        marginTop: '50px',
                    },
                }}
            >
                <Container maxWidth="lg">
                    <SuiTypography
                        variant="h3"
                        fontWeight="bold"
                        color="black"
                        align="center"
                    >
                        K??? ho???ch tr??? g??p h???c ph?? cho sinh vi??n
                    </SuiTypography>
                    <SuiTypography
                        variant="h6"
                        fontWeight="regular"
                        color="black"
                        align="center"
                        sx={{ mt: 1 }}
                    >
                        Cho d?? b???n l?? sinh vi??n n??m nh???t ?????i h???c hay ??ang h???c
                        ?????i h???c, ch??ng t??i c?? th??? h??? tr??? t??i ch??nh cho qu?? tr??nh
                        h???c t???p c???a b???n.
                    </SuiTypography>

                    <Card sx={{ mt: 5, boxShadow: 5 }}>
                        <Box sx={{ p: 3 }}>
                            <Grid container>
                                <Grid item xs={12} md={6}>
                                    <SuiTypography
                                        variant="h6"
                                        fontWeight="bold"
                                        color="black"
                                    >
                                        K??? ho???ch tr??? g??p h???c ph?? cho sinh vi??n
                                    </SuiTypography>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <SuiTypography
                                        variant="h6"
                                        fontWeight="regular"
                                        color="black"
                                    >
                                        K??? ho???ch chi tr??? h???c ph?? c???a Student
                                        Loan cung c???p cho sinh vi??n m???t c??ch
                                        thanh to??n h???c ph?? v???i th???i h???n thanh
                                        to??n d??i h??n, l??i su???t c???nh tranh v?? quy
                                        tr??nh tr???c tuy???n kh??ng r???c r???i.Sinh vi??n
                                        ch??? c???n thanh to??n m???t kho???n ti???n c???
                                        ?????nh trong l??c h???c v?? thanh to??n ph???n
                                        c??n l???i sau khi t???t nghi???p.
                                    </SuiTypography>
                                </Grid>
                            </Grid>
                        </Box>
                        <Divider />
                        <Box sx={{ background: '#f7f5f2', p: 3 }}>
                            <Grid container>
                                <Grid item xs={12} md={6}>
                                    <SuiTypography
                                        variant="h6"
                                        fontWeight="bold"
                                        color="black"
                                    >
                                        Kho???n ph???i tr??? trong qu?? tr??nh h???c
                                    </SuiTypography>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <SuiTypography
                                        variant="h6"
                                        fontWeight="regular"
                                        color="black"
                                    >
                                        {fCurrency(config?.fixedMoney)}
                                    </SuiTypography>
                                </Grid>
                            </Grid>
                        </Box>
                        <Divider />

                        <Box sx={{ p: 3 }}>
                            <Grid container>
                                <Grid item xs={12} md={6}>
                                    <SuiTypography
                                        variant="h6"
                                        fontWeight="bold"
                                        color="black"
                                    >
                                        Th???i h???n thanh to??n
                                    </SuiTypography>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <SuiTypography
                                        variant="h6"
                                        fontWeight="regular"
                                        color="black"
                                    >
                                        Thanh to??n h??ng th??ng
                                    </SuiTypography>
                                </Grid>
                            </Grid>
                        </Box>

                        <Divider />

                        <Box sx={{ background: '#f7f5f2', p: 3 }}>
                            <Grid container>
                                <Grid item xs={12} md={6}>
                                    <SuiTypography
                                        variant="h6"
                                        fontWeight="bold"
                                        color="black"
                                    >
                                        Th???i h???n tr???
                                    </SuiTypography>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <SuiTypography
                                        variant="h6"
                                        fontWeight="regular"
                                        color="black"
                                    >
                                        {config?.minDuration} th??ng -{' '}
                                        {config?.maxDuration} th??ng
                                    </SuiTypography>
                                </Grid>
                            </Grid>
                        </Box>
                        <Divider />
                        <Box sx={{ p: 3 }}>
                            <Grid container>
                                <Grid item xs={12} md={6}>
                                    <SuiTypography
                                        variant="h6"
                                        fontWeight="bold"
                                        color="black"
                                    >
                                        L??i su???t
                                    </SuiTypography>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <SuiTypography
                                        variant="h6"
                                        fontWeight="regular"
                                        color="black"
                                    >
                                        {config?.interest * 100} % m???t th??ng
                                    </SuiTypography>
                                </Grid>
                            </Grid>
                        </Box>
                    </Card>
                    <Box
                        mt={3}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <SuiTypography variant="button" fontWeight="regular">
                            *Khi h??? s?? ???? k??u g???i th??nh c??ng, sinh vi??n c?? th???
                            r??t ti???n v?? thanh to??n h???c ph?? cho tr?????ng
                        </SuiTypography>
                    </Box>
                </Container>
            </Box>
            <Divider />

            <Box p={3} pb={20}>
                <Container textAlign="center" maxWidth="xl">
                    <SuiTypography variant="h3">
                        H??y b???t ?????u v???i g??i vay ?????u ti??n c???a b???n
                    </SuiTypography>
                    <SuiTypography
                        variant="button"
                        fontWeight="regular"
                        sx={{
                            '@media (max-width: 780px)': {
                                maxWidth: '100%',
                            },
                        }}
                    >
                        Ch???n th??ng tin g??i vay c???a b???n ????? c?? ???????c ?????c t??nh v???
                        ph?? v?? l??? ph?? h??ng th??ng c???a b???n. ??i???u ch???nh s??? l?????ng v??
                        th???i gian ????? xem ??i???u g?? ph?? h???p nh???t v???i b???n.
                    </SuiTypography>

                    <Grid
                        container
                        marginTop="100px"
                        spacing={3}
                        sx={{
                            '@media (max-width: 1024px)': {
                                marginTop: '20px',
                            },
                        }}
                    >
                        <Grid item xs="12" md="12" lg="6">
                            <Box alignItems="center" justifyContent="center">
                                <SuiTypography
                                    variant="h6"
                                    fontWeight="bold"
                                    marginBottom="10px"
                                >
                                    S??? ti???n
                                </SuiTypography>
                                <SuiTypography
                                    variant="h3"
                                    fontWeight="regular"
                                    marginBottom="20px"
                                >
                                    {fCurrency(moneyText)}
                                </SuiTypography>

                                <Slider
                                    defaultValue={50000000}
                                    onChange={handleSliderChange}
                                    min={config?.minRaiseMoney}
                                    max={config?.maxRaiseMoney - 300000000}
                                    step={500000}
                                />
                                <Box
                                    display="flex"
                                    justifyContent="space-between"
                                    marginBottom="40px"
                                >
                                    <SuiTypography
                                        variant="h6"
                                        fontWeight="bold"
                                        color="text"
                                    >
                                        {fCurrency(config?.minRaiseMoney)}
                                    </SuiTypography>
                                    <SuiTypography
                                        variant="h6"
                                        fontWeight="bold"
                                        color="text"
                                    >
                                        {fCurrency(
                                            config?.maxRaiseMoney - 300000000
                                        )}
                                    </SuiTypography>
                                </Box>
                                <SuiTypography variant="h6" fontWeight="bold">
                                    Th???i h???n cho vay
                                </SuiTypography>
                                <Box display="flex" alignItems="center">
                                    <Radio
                                        checked={true}
                                        value="a"
                                        name="radio-buttons"
                                        inputProps={{ 'aria-label': 'A' }}
                                    />
                                    <SuiTypography
                                        variant="h6"
                                        fontWeight="light"
                                        color="text"
                                    >
                                        {config?.minDuration} th??ng
                                    </SuiTypography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs="12" md="12" lg="6">
                            <Box alignItems="center" justifyContent="center">
                                <Paper
                                    elevation={3}
                                    sx={{
                                        padding: '40px',
                                        borderRadius: '15px',
                                    }}
                                >
                                    <SuiTypography
                                        variant="h6"
                                        fontWeight="bold"
                                        color="text"
                                    >
                                        Kho???n ph???i thanh to??n c???a b???n
                                    </SuiTypography>
                                    <SuiTypography
                                        variant="h3"
                                        fontWeight="bold"
                                        color="dark"
                                        marginBottom="30px"
                                    >
                                        {handleResult(moneyText)}
                                    </SuiTypography>
                                    <Grid container marginBottom="30px">
                                        <Grid item xs="12" md="4">
                                            <SuiTypography
                                                variant="h6"
                                                fontWeight="bold"
                                                color="text"
                                            >
                                                L??i su???t
                                            </SuiTypography>
                                            <SuiTypography
                                                variant="h6"
                                                fontWeight="bold"
                                                color="inherit"
                                            >
                                                {config?.interest * 100}% /
                                                th??ng
                                            </SuiTypography>
                                        </Grid>
                                        <Grid item xs="12" md="4">
                                            <SuiTypography
                                                variant="h6"
                                                fontWeight="bold"
                                                color="text"
                                            >
                                                Ph?? n???n t???ng
                                            </SuiTypography>
                                            <SuiTypography
                                                variant="h6"
                                                fontWeight="bold"
                                                color="inherit"
                                            >
                                                {config?.transactionFee * 100}%
                                            </SuiTypography>
                                        </Grid>
                                        <Grid item xs="12" md="4">
                                            <SuiTypography
                                                variant="h6"
                                                fontWeight="bold"
                                                color="text"
                                            >
                                                Th???i h???n cho vay
                                            </SuiTypography>
                                            <SuiTypography
                                                variant="h6"
                                                fontWeight="bold"
                                                color="inherit"
                                            >
                                                {config?.minDuration} th??ng
                                            </SuiTypography>
                                        </Grid>
                                    </Grid>
                                    <SuiButton
                                        href="/xac-thuc/dang-nhap"
                                        variant="contained"
                                        color="dark"
                                        size="small"
                                    >
                                        K??u g???i m???t kho???n ?????u t??
                                    </SuiButton>
                                </Paper>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Divider />
            <Box sx={{ background: '#f7f5f2', p: 3, pb: 10 }}>
                <Container maxWidth="xl">
                    <SuiTypography variant="h3" sx={{ mb: 1 }}>
                        Student Loan h?????ng d???n nhanh
                    </SuiTypography>
                    <Box sx={{ mb: 3 }}>
                        <SuiTypography variant="button" fontWeight="regular">
                            ????y l?? nh???ng c??u h???i th?????ng g???p v??? Student Loan
                        </SuiTypography>
                    </Box>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6}>
                            <Stack spacing={1.5}>
                                <AccordionGuide
                                    title="C??c y??u c???u khi g???i v???n l?? g???"
                                    message="B???n c???n ph???i l?? c??ng d??n Vi???t Nam, ??t nh???t 18 tu???i v?? ???? l?? sinh vi??n ?????i h???c ho???c sau ?????i h???c t???i m???t tr?????ng ?????i h???c t???i Vi???t Nam."
                                />
                                <AccordionGuide
                                    title="L??m th??? n??o t??i c?? th??? thanh to??n ph?? h??ng th??ng c???a m??nh?"
                                    message="B???n c?? th??? thanh to??n qua Paypal - m???t d???ch v??? trung gian d??ng ????? thanh to??n v?? chuy???n ti???n qu???c t??? qua m???ng Internet."
                                />

                                <AccordionGuide
                                    title="M???t bao l??u ????? h??? s?? vay c???a t??i ???????c ch???p thu???n?"
                                    message="Th?????ng m???t t??? 3 ?????n 5 ng??y l??m vi???c ????? h??? s?? c???a b???n ???????c ch???p thu???n. ?????m b???o r???ng b???n cung c???p t???t c??? c??c th??ng tin c???n thi???t ????? tr??nh b???t k??? s??? ch???m tr??? n??o v?? qu?? tr??nh th???m ?????nh s??? di???n ra nhanh h??n."
                                />
                                <AccordionGuide
                                    title="T??i c?? th??? nh???n ???????c t??i tr??? cho c??? n??m h???c kh??ng?"
                                    message="T???t nhi??n, b???n c?? th???! B???n c?? th??? k??u g???i nhi???u h??? s?? vay ????? chi tr??? h???c ph??. ?????m b???o r???ng b???n thanh to??n c??c kho???n ph?? h??ng th??ng c???a m??nh ????ng h???n ????? ????? ??i???u ki???n cho nhi???u g??i tr??? g??p."
                                />

                                <AccordionGuide
                                    title="L??m c??ch n??o ????? ch???nh s???a th??ng tin h??? s?? c???a t??i (ho???c ng?????i b???o l??nh c???a t??i)?"
                                    message="G???i email cho ch??ng t??i t???i studentloanfpt@gmail.com ????? y??u c???u ch???nh s???a th??ng tin h??? s?? c???a b???n."
                                />
                                <AccordionGuide
                                    title="T???i sao kho???n k??u g???i kh??ng hi???n th??? tr??n trang ch??? c???a t??i"
                                    message="M???i t????ng t??c v???i h??? s?? vay hay kho???n ?????u t?? ?????u ???????c hi???n th??? trong chu??ng th??ng b??o ??? trang ch???.Li??n h??? v???i b??? ph???n ch??m s??c kh??ch h??ng c???a ch??ng t??i t???i studentloanfpt@gmail.com n???u c?? b???t k??? th???c m???c n??o."
                                />
                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box
                                display="flex"
                                height="100%"
                                sx={{
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                }}
                            >
                                <SuiTypography variant="h3" sx={{ mb: 1 }}>
                                    N???n t???ng c???a ch??ng t??i s???n s??ng gi???i ????p
                                    th???c m???c c???a b???n
                                </SuiTypography>
                                <Box>
                                    <SuiTypography
                                        variant="button"
                                        fontWeight="regular"
                                    >
                                        ???? c?? ch??ng t??i h??? tr??? cho b???n. B??? ph???n
                                        ch??m s??c kh??ch h??ng c???a ch??ng t??i lu??n
                                        t???n t??m gi??p ????? v??? nh???ng m???i quan t??m
                                        c???a b???n.
                                    </SuiTypography>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Divider />

            <Box
                p={3}
                sx={{
                    background: '#ffffff',
                }}
            >
                <Container textAlign="center" maxWidth="xl">
                    <SuiTypography variant="h3">
                        Xem c??ch ho???t ?????ng c???a Student Loan
                    </SuiTypography>
                    <SuiTypography
                        variant="button"
                        color="text"
                        fontWeight="regular"
                    >
                        T??m hi???u th??m v??? nh???ng g?? ch??ng t??i c?? th??? cung c???p v??
                        t??m hi???u c??ch b???n c?? th??? nh???n ???????c to??n b??? h???c ph?? c???a
                        m??nh.
                    </SuiTypography>
                    <Grid container spacing={3} sx={{ my: 15 }}>
                        <Grid item xs={12} md={3}>
                            <Card
                                sx={{
                                    p: 2,
                                    borderRadius: 3,
                                    boxShadow: 0,
                                    border: '0.1rem solid #DCDEDD',
                                }}
                            >
                                <Box sx={{ mb: 1 }}>
                                    <IconButton edge="start">
                                        <LockIcon fontSize="large" />
                                    </IconButton>
                                </Box>

                                <SuiTypography variant="button">
                                    ????ng k?? v?? x??c th???c tr???c tuy???n
                                </SuiTypography>
                                <Box>
                                    <SuiTypography
                                        variant="button"
                                        fontWeight="regular"
                                    >
                                        ????ng k?? Student Loan b???t c??? khi n??o b???n
                                        c???n. T???o m???t t??i kho???n, th??m th??ng tin
                                        nh???n di???n c???a b???n v?? g???i y???u c???u x??c
                                        th???c.
                                    </SuiTypography>
                                </Box>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Card
                                sx={{
                                    p: 2,
                                    borderRadius: 3,
                                    boxShadow: 0,
                                    border: '0.1rem solid #DCDEDD',
                                }}
                            >
                                <Box sx={{ mb: 1 }}>
                                    <IconButton edge="start">
                                        <SettingsApplicationsIcon fontSize="large" />
                                    </IconButton>
                                </Box>

                                <SuiTypography variant="button">
                                    T???o h??? s?? vay
                                </SuiTypography>
                                <Box>
                                    <SuiTypography
                                        variant="button"
                                        fontWeight="regular"
                                    >
                                        T???o h??? s?? ????? k??u g???i c??c kho???n ?????u t??.
                                        Qu?? tr??nh th???m ?????nh s??? ???????c th???c hi???n
                                        trong 3 - 5 ng??y l??m vi???c.
                                    </SuiTypography>
                                </Box>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Card
                                sx={{
                                    p: 2,
                                    borderRadius: 3,
                                    boxShadow: 0,
                                    border: '0.1rem solid #DCDEDD',
                                }}
                            >
                                <Box sx={{ mb: 1 }}>
                                    <IconButton edge="start">
                                        <PaidIcon fontSize="large" />
                                    </IconButton>
                                </Box>

                                <SuiTypography variant="button">
                                    R??t ti???n ???? k??u g???i t??? v??
                                </SuiTypography>
                                <Box>
                                    <SuiTypography
                                        variant="button"
                                        fontWeight="regular"
                                    >
                                        Khi h??? s?? k??u g???i th??nh c??ng ti???n s???
                                        chuy???n tr???c ti???p v??o v?? Student Loan c???a
                                        b???n. Sau ???? b???n c?? th??? th???c hi???n chi tr???
                                        h???c ph??.
                                    </SuiTypography>
                                </Box>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Card
                                sx={{
                                    p: 2,
                                    borderRadius: 3,
                                    boxShadow: 0,
                                    border: '0.1rem solid #DCDEDD',
                                }}
                            >
                                <Box sx={{ mb: 1 }}>
                                    <IconButton edge="start">
                                        <TodayIcon fontSize="large" />
                                    </IconButton>
                                </Box>

                                <SuiTypography variant="button">
                                    Thanh to??n h??ng th??ng
                                </SuiTypography>
                                <Box>
                                    <SuiTypography
                                        variant="button"
                                        fontWeight="regular"
                                    >
                                        Kho???n thanh to??n h??ng th??ng ?????u ti??n c???a
                                        b???n s??? ?????n h???n sau 30 ng??y k??? t??? ng??y
                                        gi???i ng??n. B???n c?? th??? thanh to??n ph??
                                        h??ng th??ng c???a m??nh tr???c tuy???n qua h???
                                        th???ng Student Loan.
                                    </SuiTypography>
                                </Box>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Divider />

            <Box
                px={3}
                py={15}
                sx={{
                    background: '#ffffff',
                }}
            >
                <Container maxWidth="xl">
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={4}>
                            <Box
                                display="flex"
                                height="100%"
                                sx={{
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                }}
                            >
                                <SuiTypography variant="h3">
                                    Gi??p sinh vi??n Vi???t Nam ti???n g???n h??n ?????n
                                    vi???c ?????t ???????c ?????c m?? c???a h???
                                </SuiTypography>
                                <Box mt={2} sx={{ lineHeight: 1 }}>
                                    <SuiTypography
                                        variant="button"
                                        fontWeight="regular"
                                        sx={{ fontStyle: 'italic' }}
                                    >
                                        Student Loan cam k???t x??y d???ng m???t ng??y
                                        mai t???t ?????p h??n cho ng?????i d??n Vi???t Nam
                                        b???ng c??ch cung c???p m???t n???n t???ng chi tr???
                                        h???c ph?? h???p l??. H??y tham gia c??ng h??ng
                                        ngh??n sinh vi??n vay ti???n b???ng Student
                                        Loan v?? t???p trung v??o vi???c ?????t ???????c ?????c
                                        m?? c???a b???n.
                                    </SuiTypography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <Grid container spacing={1}>
                                <Grid item xs={12} md={6}>
                                    <Card
                                        sx={{
                                            borderRadius: 3,
                                            boxShadow: 1,
                                            border: '0.1rem solid #DCDEDD',
                                            height: "245px"
                                        }}
                                    >
                                        <CardHeader
                                            avatar={
                                                <Avatar
                                                    variant="rounded"
                                                    src={newLogo}
                                                >
                                                    L
                                                </Avatar>
                                            }
                                            title="Tr???n Long"
                                            subheader="Tr?????ng ?????i h???c FPT"
                                        />
                                        <CardContent>
                                            <SuiTypography
                                                variant="caption"
                                                fontWeight="regular"
                                            >
                                                T??i th??ch c??ch Student Loan cho
                                                ph??p sinh vi??n tr??? m???t kho???n c???
                                                ?????nh r???t nh??? trong l??c h???c, ??i???u
                                                n??y gi??p ??ch r???t nhi???u cho nh???ng
                                                ai ??ang g???p kh?? kh??n v??? t??i
                                                ch??nh.
                                            </SuiTypography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Card
                                        sx={{
                                            borderRadius: 3,
                                            boxShadow: 1,
                                            border: '0.1rem solid #DCDEDD',
                                            height: "245px"
                                        }}
                                    >
                                        <CardHeader
                                            avatar={
                                                <Avatar
                                                    variant="rounded"
                                                    src={newLogo}
                                                >
                                                    L
                                                </Avatar>
                                            }
                                            title="Nguy???n Tr?????ng Phi"
                                            subheader="Tr?????ng ?????i h???c C??ng ngh??? Th??ng tin"
                                        />
                                        <CardContent>
                                            <SuiTypography
                                                variant="caption"
                                                fontWeight="regular"
                                            >
                                                Student Loan cung c???p c??c k???
                                                ho???ch h???c ph?? ????? gi??p ????? nh???ng
                                                sinh vi??n c?? nhu c???u nh?? t??i.
                                                T??i th??ch Student Loan v?? h???
                                                cung c???p cho ph??p t??i thanh to??n
                                                h??ng th??ng v???i s??? ti???n r???t nh???.
                                            </SuiTypography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Card
                                        sx={{
                                            borderRadius: 3,
                                            boxShadow: 1,
                                            border: '0.1rem solid #DCDEDD',
                                            height: "245px"
                                        }}
                                    >
                                        <CardHeader
                                            avatar={
                                                <Avatar
                                                    variant="rounded"
                                                    src={newLogo}
                                                >
                                                    L
                                                </Avatar>
                                            }
                                            title="Nguy???n Qu???c Th??i"
                                            subheader="Tr?????ng ?????i h???c Ngo???i th????ng"
                                        />
                                        <CardContent>
                                            <SuiTypography
                                                variant="caption"
                                                fontWeight="regular"
                                            >
                                                N???n t???ng cho vay d???a tr??n h??nh
                                                th???c g???i v???n c???ng ?????ng gi??p
                                                nhi???u ng?????i bi???t ?????n ho??n c???nh
                                                c???a t??i h??n. B??n c???nh ????, vi???c
                                                thuy???t ph???c m???t ai ???? ?????u t?? cho
                                                con ???????ng h???c t???p c???a b???n l?? m???t
                                                tr???i nghi???m ????ng nh???.
                                            </SuiTypography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Card
                                        sx={{
                                            borderRadius: 3,
                                            boxShadow: 1,
                                            border: '0.1rem solid #DCDEDD',
                                            height: "245px"
                                        }}
                                    >
                                        <CardHeader
                                            avatar={
                                                <Avatar
                                                    variant="rounded"
                                                    src={newLogo}
                                                >
                                                    L
                                                </Avatar>
                                            }
                                            title="??inh Ph?? C?????ng"
                                            subheader="Bachkhoa-Aptech"
                                        />
                                        <CardContent>
                                            <SuiTypography
                                                variant="caption"
                                                fontWeight="regular"
                                            >
                                                T??i l?? c???u sinh vi??n B??ch khoa
                                                ???? t???t nghi???p v?? ??ang l??m c??ng
                                                vi???c l???p tr??nh t??i mong mu???n,
                                                t???t c??? l?? nh??? c?? Student Loan ????
                                                gi??p ????? h???c ph?? trong l??c gia
                                                ????nh t??i g???p kh?? kh??n.
                                            </SuiTypography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <Footer />
        </>
    )
}

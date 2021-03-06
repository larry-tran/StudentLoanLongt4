/**
=========================================================
* Soft UI Dashboard React - v3.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState, useEffect } from 'react'

// react-router-dom components
import { Link, useHistory } from 'react-router-dom'

// @mui material components
import Card from '@mui/material/Card'
import Checkbox from '@mui/material/Checkbox'

// Soft UI Dashboard React components
import SuiBox from 'components/SuiBox'
import SuiTypography from 'components/SuiTypography'
import SuiInput from 'components/SuiInput'
import SuiButton from 'components/SuiButton'

// Authentication layout components
import BasicLayout from 'layouts/authentication/components/BasicLayout'
import Socials from 'layouts/authentication/components/Socials'
import Separator from 'layouts/authentication/components/Separator'

// Images
import curved6 from 'assets/images/curved-images/curved14.jpg'
import signupImage from '../../../assets/signupImage.svg'
import { userApi } from 'apis/userApi'
import { studentApi } from 'apis/studentApi'
import { ThemeProvider } from '@mui/material'
import theme from 'assets/theme'

function SignUp() {
    const userData = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
    }
    const defaultError = {
        firstName: null,
        lastName: null,
        email: null,
        password: null,
        confirmPassword: null,
        phone: null,
    }

    const [agreement, setAgremment] = useState(true)
    const [error, setError] = useState(defaultError)
    const history = useHistory()
    const [data, setData] = useState(userData)
    const handleSetAgremment = () => setAgremment(!agreement)

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!verification()) return
        try {
            const student = {
                email: data.email,
                password: data.password,
                firstName: data.firstName,
                lastName: data.lastName,
                type: 'STUDENT',
                phoneNumber: data.phone,
            }
            const res = await userApi.signUp(student)
            console.log(res.data.id)
            const studentRes = await studentApi.createNewStudent({
                userId: res.data.id,
                status: 'ACTIVE',
            })
            if (res.data && studentRes.data)
                history.push('/xac-thuc/dang-nhap')
        } catch (e) {
            console.log(e)
        }
        // checkEmail()
    }

    const handleChange = (e) => {
        e.preventDefault()
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const isEmail = (email) => {
        const emailExp = /\S+@\S+\.\S+/
        return emailExp.test(email)
    }
    const isPhone = (phone) => {
        const phoneExp = /(84|0[3|5|7|8|9])+([0-9]{8})\b/
        return phoneExp.test(phone)
    }

    const verification = () => {
        let verificationError = {}
        const { firstName, lastName, password, email, confirmPassword, phone } =
            data
        var flag = true
        if (firstName.length < 1) {
            verificationError = {
                ...verificationError,
                firstName: 'H??? kh??ng d?????c b??? tr???ng',
            }
            flag = false
        }
        if (lastName.length < 1) {
            verificationError = {
                ...verificationError,
                lastName: 'T??n kh??ng d?????c b??? tr???ng',
            }
            flag = false
        }

        if (!isEmail(email)) {
            verificationError = {
                ...verificationError,
                email: 'Email n??y b??? sai',
            }
            flag = false
        }

        if (!isPhone(phone)) {
            verificationError = {
                ...verificationError,
                phone: 'S??? ??i???n tho???i kh??ng ????ng',
            }
            flag = false
        }
        if (password.length < 6) {
            verificationError = {
                ...verificationError,
                password: 'M???t kh???u c?? ??t nh???t 6 ch??? s??',
            }
            flag = false
        }
        if (password !== confirmPassword) {
            verificationError = {
                ...verificationError,
                confirmPassword: 'X??c th???c m???t kh???u kh??ng ????ng',
            }
            flag = false
        }

        setError(verificationError)
        return flag
    }

    return (
        <BasicLayout
            title="Xin ch??o !"
            description="H??y t???o t??i kho???n ????? b???t ?????u kho???n vay."
            image={signupImage}
        >
            <ThemeProvider theme={theme}>
                <Card>
                    <SuiBox p={3} mb={1} textAlign="center">
                        <SuiTypography variant="h3" fontWeight="regular">
                            ????ng k??
                        </SuiTypography>
                    </SuiBox>
                    {/* <SuiBox mb={2}>
                        <Socials />
                    </SuiBox>
                    <Separator /> */}
                    <form onSubmit={handleSubmit}>
                        <SuiBox pb={3} px={3}>
                            <SuiBox>
                                <SuiBox mb={2}>
                                    <SuiInput
                                        placeholder="H???"
                                        type="text"
                                        name="firstName"
                                        error={error.firstName}
                                        value={data.firstName}
                                        onChange={handleChange}
                                    />
                                    {error.firstName && (
                                        <SuiTypography
                                            component="label"
                                            variant="caption"
                                            fontWeight="bold"
                                            color="error"
                                        >
                                            {error.firstName}
                                        </SuiTypography>
                                    )}
                                </SuiBox>
                                <SuiBox mb={2}>
                                    <SuiInput
                                        placeholder="T??n"
                                        type="text"
                                        name="lastName"
                                        error={error.lastName}
                                        value={data.lastName}
                                        onChange={handleChange}
                                    />
                                    {error.lastName && (
                                        <SuiTypography
                                            component="label"
                                            variant="caption"
                                            fontWeight="bold"
                                            color="error"
                                        >
                                            {error.lastName}
                                        </SuiTypography>
                                    )}
                                </SuiBox>
                                <SuiBox mb={2}>
                                    <SuiInput
                                        type="email"
                                        placeholder="Email"
                                        name="email"
                                        error={error.email}
                                        value={data.email}
                                        onChange={handleChange}
                                    />
                                    {error.email && (
                                        <SuiTypography
                                            component="label"
                                            variant="caption"
                                            fontWeight="bold"
                                            color="error"
                                        >
                                            {error.email}
                                        </SuiTypography>
                                    )}
                                </SuiBox>
                                <SuiBox mb={2}>
                                    <SuiInput
                                        type="phone"
                                        placeholder="S??? ??i???n tho???i"
                                        name="phone"
                                        error={error.phone}
                                        value={data.phone}
                                        onChange={handleChange}
                                    />
                                    {error.phone && (
                                        <SuiTypography
                                            component="label"
                                            variant="caption"
                                            fontWeight="bold"
                                            color="error"
                                        >
                                            {error.phone}
                                        </SuiTypography>
                                    )}
                                </SuiBox>
                                <SuiBox mb={2}>
                                    <SuiInput
                                        type="password"
                                        placeholder="M??t Kh???u"
                                        name="password"
                                        error={error.password}
                                        value={data.password}
                                        onChange={handleChange}
                                    />
                                    {error.password && (
                                        <SuiTypography
                                            component="label"
                                            variant="caption"
                                            fontWeight="bold"
                                            color="error"
                                        >
                                            {error.password}
                                        </SuiTypography>
                                    )}
                                </SuiBox>
                                <SuiBox mb={2}>
                                    <SuiInput
                                        type="password"
                                        placeholder="X??c Th???c M??t Kh???u"
                                        name="confirmPassword"
                                        error={error.confirmPassword}
                                        value={data.confirmPassword}
                                        onChange={handleChange}
                                    />
                                    {error.confirmPassword && (
                                        <SuiTypography
                                            component="label"
                                            variant="caption"
                                            fontWeight="bold"
                                            color="error"
                                        >
                                            {error.confirmPassword}
                                        </SuiTypography>
                                    )}
                                </SuiBox>
                                <SuiBox display="flex" alignItems="center">
                                    <Checkbox
                                        color="primary"
                                        checked={agreement}
                                        onChange={handleSetAgremment}
                                    />
                                    <SuiTypography
                                        variant="button"
                                        fontWeight="regular"
                                        onClick={handleSetAgremment}
                                        sx={{
                                            cursor: 'poiner',
                                            userSelect: 'none',
                                        }}
                                    >
                                        &nbsp;&nbsp;T??i ?????ng ?? v???i &nbsp;
                                    </SuiTypography>
                                    <SuiTypography
                                        component="a"
                                        href="#"
                                        variant="button"
                                        fontWeight="bold"
                                        color="primary"
                                    >
                                        ??i???u kho???n s??? d???ng
                                    </SuiTypography>
                                </SuiBox>
                                <SuiBox mt={4} mb={1}>
                                    <SuiButton
                                        color="primary"
                                        type="submit"
                                        fullWidth
                                    >
                                        ????ng k??
                                    </SuiButton>
                                </SuiBox>
                                <SuiBox mt={3} textAlign="center">
                                    <SuiTypography
                                        variant="button"
                                        color="text"
                                        fontWeight="regular"
                                    >
                                        B???n ???? c?? t??i kho???n ?&nbsp;
                                        <SuiTypography
                                            component={Link}
                                            to="/xac-thuc/dang-nhap"
                                            variant="button"
                                            color="primary"
                                            fontWeight="bold"
                                        >
                                            ????ng nh???p
                                        </SuiTypography>
                                    </SuiTypography>
                                    <SuiBox>
                                        <SuiTypography
                                            component={Link}
                                            to="/"
                                            variant="caption"
                                            color="dark"
                                            fontWeight="medium"
                                        >
                                            Quay l???i
                                        </SuiTypography>
                                    </SuiBox>
                                </SuiBox>
                            </SuiBox>
                        </SuiBox>
                    </form>
                </Card>
            </ThemeProvider>
        </BasicLayout>
    )
}

export default SignUp

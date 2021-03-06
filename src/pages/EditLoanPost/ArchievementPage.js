import { Box, Container, Divider, Grid } from '@mui/material'
import DropFileInput from 'components/DropFileZone'
import SuiButton from 'components/SuiButton'
import SuiInput from 'components/SuiInput'
import SuiTypography from 'components/SuiTypography'
import React, { useEffect, useState } from 'react'
import AchievementItem from './components/AchievementItem'
import UpdateAchievement from './components/UpdateAchievement'
import PlaceholderCard from 'examples/Cards/PlaceholderCard'
import { achievementApi } from 'apis/achievementApi'

export default function ArchievementPage(props) {
    const { handleChange } = props

    const [choseValue, setChoseValue] = useState(null)
    const [open, setOpen] = useState(false)
    const [achievements, setAchievements] = useState(null)

    useEffect(()=>{
        fetchData()
    },[])

    const fetchData = () =>{
        achievementApi.getByStudentId().then(res=>{
            setAchievements(res.data)
        })
    }

    const onClickItem = (item) => {
        setChoseValue(item)
        setOpen(true)
    }

    const onClickNewItem = () => {
        setChoseValue(null)
        setOpen(true)
    }

    const handleCloseAchieve = () => {
        setOpen(false)
    }
    
    const handleUpdateAchieve = (newItem) => {
        var temp = null
        if (newItem.status === 'create') {
            achievementApi
                .createByStudentId(newItem)
                .then((res) => fetchData())
                .catch((err) => {})
        } else {
            if (newItem.status === 'update') {
                temp = { ...newItem, status: 'ACTIVE' }
            } else {
                temp = { ...newItem, status: 'INACTIVE' }
            }
            achievementApi
                .updateById(temp)
                .then((res) => fetchData())
                .catch((err) => {})
        }
    }

    return (
        <>
            <Box
                component="div"
                sx={{ padding: '3rem 0rem' }}
                id="achievements"
            >
                <SuiTypography
                    variant="h4"
                    align="center"
                    color="black"
                    fontWeight="regular"
                >
                    H??y th??m th??nh t??ch c???a b???n
                </SuiTypography>
                <SuiTypography
                    variant="h6"
                    align="center"
                    fontWeight="regular"
                    color="text"
                >
                    Th??nh t??ch s??? thu h??t nh?? ?????u t?? v?? t???o uy t??n c???a b??i vay
                    c???a b???n
                </SuiTypography>
            </Box>
            <Divider />

            <Container sx={{ padding: '3rem 3rem' }} maxWidth="xl">
                <Grid container spacing={3}>
                    <Grid item xs="12" md="5">
                        <SuiTypography
                            variant="h6"
                            fontWeight="regular"
                            textTransform="capitalize"
                            color="black"
                        >
                            Nh???ng th??nh t??ch (kh??ng b???t bu???c)
                        </SuiTypography>
                        <SuiTypography
                            variant="button"
                            fontWeight="regular"
                            color="text"
                        >
                            ???? c?? th??? l?? nh???ng b???ng khen v??? h???c thu???t, t??i n??ng,
                            ... Ho???c nh???ng d??? ??n m?? b???n ???? l??m trong l??c h???c
                        </SuiTypography>
                    </Grid>
                    <Grid item xs="12" md="7">
                        <Grid container spacing={4}>
                            <Grid item xs="12" md="12">
                                {achievements?.map((item) => {
                                    return (
                                        <AchievementItem
                                            item={item}
                                            onClickItem={onClickItem}
                                        />
                                    )
                                })}

                                <UpdateAchievement
                                    open={open}
                                    onClose={handleCloseAchieve}
                                    choseValue={choseValue}
                                    handleUpdateAchieve={handleUpdateAchieve}
                                />

                                <Box>
                                    <PlaceholderCard
                                        onClick={onClickNewItem}
                                        title={{
                                            variant: 'h5',
                                            text: 'Th??m th??nh t???u',
                                        }}
                                        outlined
                                        hasBorder
                                    />
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
            <Divider />
        </>
    )
}

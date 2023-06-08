import { Box, Button, Container, Grid, Tab } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import MovieCards from './MovieCards';
import './dashboard.scss'
import { TabContext, TabList, TabPanel } from '@material-ui/lab';


const Dashboard = () => {
    const [data, setData] = useState()

    console.log("data : ----", data);
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=b7cd3340a794e5a2f35e3abb820b497f&language=en-US&page=1&region=IN`)
            .then((res) => res.json())
            .then((data) => setData(data?.results))
    }, [])

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        // <CarouselComp />
        <Container >
            <Grid className='hederContainer' xs={12} sm={12} md={12}>
                <div class="headerContent">
                    <div class="column_wrapper">
                        <div class="content_wrapper wrap">
                            <div class="title">
                                <h2>Welcome.</h2>
                                <h3>Millions of movies, TV shows and people to discover. Explore now.</h3>
                            </div>

                            <div class="search">
                                <form id="inner_search_form" action="/search" method="get" accept-charset="utf-8">

                                    <input className='searchBox' placeholder="Search for a movie, tv show, person......" value="" />
                                    {/* <Button className='searchButton' variant="contained">Search</Button> */}

                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </Grid>

            <Box sx={{ width: '100%', typography: 'body1' }}>
                <h2>What's Popular</h2>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="Streaming" value="1" />
                            <Tab label="on TV" value="2" />
                            <Tab label="For Rent" value="3" />
                            <Tab label="In Theatres" value="3" />
                        </TabList>
                    </Box>
                    <TabPanel value="1">Streaming</TabPanel>
                    <TabPanel value="2">on TV</TabPanel>
                    <TabPanel value="3">For Rent</TabPanel>
                    <TabPanel value="4">In Theatres</TabPanel>
                </TabContext>
            </Box>

            <Grid
                container
                spacing={{ xs: 2, md: 3, }}
                columns={{ xs: 2, sm: 8, md: 12, lg: 12 }}
                style={{ display: 'flex', justifyContent: 'center' }}
            >
                {data &&
                    data.map((i, key) => (
                        <>
                            {i.poster_path == null ? null : <Grid item xs={1} sm={4} md={3} key={key}>
                                <MovieCards passed={i} />
                            </Grid>}
                        </>

                    ))}
            </Grid>

        </Container>
    )
}

export default Dashboard
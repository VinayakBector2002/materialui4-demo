import React from "react";
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, Button } from "@material-ui/core";
import {PhotoCamera} from '@material-ui/icons';
const App = () => {
    return (
        <>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <PhotoCamera/>
                    <Typography variant="h6">
                        Photo Album
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                <div>
                    {/* In-line CSS using style Prop */}
                    <Container maxwidth="sm" style={{marginTop: '10px'}}> 
                        <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                            Heading
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary">
                            Hello everyone! This is a photo album
                        </Typography>
                        <div>
                            <Grid container spacing={2} justifyContent="center">
                                 <Grid item >
                                    <Button variant="contained" color="primary">
                                        Primary Action
                                    </Button>
                                 </Grid>
                                 <Grid item >
                                    <Button variant="outlined" color="primary">
                                        Secondary Action
                                    </Button>
                                 </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
            </main>       
        </>
    );
}

export default App;
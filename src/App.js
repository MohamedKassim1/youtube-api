import React from 'react'
import {Grid} from '@material-ui/core'
import youtube from './API/youtube';
import SearchBar from './Components/SearchBar';
import VideoDetail from './Components/VideoDetails'

class App extends React.Component{
    render(){
        return (
            <Grid justify="center" container spacing={16}>
                <Grid item xs={12}>
                    <Grid container spacing={16}>
                        <Grid item xs={12}>
                            <SearchBar />
                        </Grid>
                        <Grid item xs={8}>
                            <VideoDetail />
                        </Grid>
                        <Grid item xs={4}>
                            {/* Video Item */}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default App
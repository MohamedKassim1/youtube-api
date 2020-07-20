import React from 'react'
import {Grid} from '@material-ui/core'
import youtube from './API/youtube';
import SearchBar from './Components/SearchBar';
import VideoDetail from './Components/VideoDetails'

class App extends React.Component{
    state={
        video: [],
        selectedVideo: null,
    }
    handleSubmit = async (searchTerm) => {
        const response = await youtube.get('search', {
            params:{
            part: 'snippet',
            maxResults: 5,
            key: process.env.REACT_APP_API_KEY,
            q: searchTerm
        }
    });
        this.setState({
            videos: response.data.item,
            selectedVideo: response.data.items[0]
        });

    }
    render(){
        const {selectedVideo} = this.state;
        return (
            <Grid justify="center" container spacing={10}>
                <Grid item xs={12}>
                    <Grid container spacing={10}>
                        <Grid item xs={12}>
                            <SearchBar onFormSubmit={this.handleSubmit}/>
                        </Grid>
                        <Grid item xs={8}>
                            <VideoDetail video={selectedVideo}/>
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
import React from 'react';
import unsplashAPI from '../src/API/Unsplash';
import YouTubeAPI from '../src/API/YouTube';
import CommentFeed from '../src/CommentFeed/CommentFeed';
import ApprovalCard from '../src/ApprovalCard/ApprovalCard';
import SeasonDisplay from '../src//SeasonDisplay/SeasonDisplay';
import Spinner from '../src/UI/Spinner/Spinner';
import SearchBar from '../src/SearchBar/SearchBar';
import ImageList from '../src/ImageList/ImageList';
import YouTubeVideoList from '../src/YouTube/YouTubeVideoList';
import VideoDetail from '../src/YouTube/VideoDetail';
import faker from 'faker';
import SongList from '../src/Song/SongList';
import SongDetail from '../src/Song/SongDetail';
import './App.css';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            users : [{id : 1, name : faker.name.findName(), time : faker.date.future().toLocaleTimeString(), comment : faker.lorem.text(), imgURL : faker.image.avatar() },
                    {id : 2, name : faker.name.findName(), time : faker.date.future().toLocaleTimeString(), comment : faker.lorem.text(), imgURL : faker.image.avatar() },
                    {id : 3, name : faker.name.findName(), time : faker.date.future().toLocaleTimeString(), comment : faker.lorem.text(), imgURL : faker.image.avatar() },
                    {id : 4, name : faker.name.findName(), time : faker.date.future().toLocaleTimeString(), comment : faker.lorem.text(), imgURL : faker.image.avatar() },
                    {id : 5, name : faker.name.findName(), time : faker.date.future().toLocaleTimeString(), comment : faker.lorem.text(), imgURL : faker.image.avatar() },
                    {id : 6, name : faker.name.findName(), time : faker.date.future().toLocaleTimeString(), comment : faker.lorem.text(), imgURL : faker.image.avatar() },
                    {id : 7, name : faker.name.findName(), time : faker.date.future().toLocaleTimeString(), comment : faker.lorem.text(), imgURL : faker.image.avatar() },
                    {id : 8, name : faker.name.findName(), time : faker.date.future().toLocaleTimeString(), comment : faker.lorem.text(), imgURL : faker.image.avatar() }],
            latitude : null,
            errorMessage : null,
            isLoading : true,
            searchText : "",
            imageResults : [],
            youTubeSearchResults : [],
            selectedVideo : null,
            displayWeatherSection : false,
            displaySongList : false,
            displayBlogPost : false,
            displayMyYoutube : false,
            diaplayImageSearch : false
        }
    }

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition((pos)=>{this.setState({latitude : pos.coords.latitude, isLoading : false})},(err)=>this.setState({errorMessage : err.message, isLoading : false}));
    }

    handleSearchBarTextChange =(event)=>{
        this.setState({searchText : event.target.value});
    }

    handleFormSubmit = async (e) =>{
        e.preventDefault();
        const response = await unsplashAPI.get("/search/photos",{params : {query : this.state.searchText}});
        this.setState({imageResults : response.data.results})
    }

    handleYouTubeFormSubmit = async (e) =>{
        e.preventDefault();
        const response = await YouTubeAPI.get("/search",{params:{q : this.state.searchText}});
        this.setState({youTubeSearchResults : response.data.items, selectedVideo : response.data.items[0]});
    }

    handleSelectedVideo = (video) =>{
        this.setState({selectedVideo : video});
    }

    handleHeaderButtonClick = (btnType) =>{
        console.log(btnType)
        switch(btnType){
            case 'SONG':
                this.setState({displayWeatherSection : false, displaySongList : true, displayBlogPost : false, displayMyYoutube : false, diaplayImageSearch : false});
                break;
            case 'BLOG':
                this.setState({displayWeatherSection : false, displaySongList : false, displayBlogPost : true, displayMyYoutube : false, diaplayImageSearch : false});
                break;
            case 'YOUTUBE':
                this.setState({displayWeatherSection : false, displaySongList : false, displayBlogPost : false, displayMyYoutube : true, diaplayImageSearch : false});
                break;
            case 'IMAGE':
                this.setState({displayWeatherSection : false, displaySongList : false, displayBlogPost : false, displayMyYoutube : false, diaplayImageSearch : true});
                break;
            default:
                this.setState({displayWeatherSection : false, displaySongList : false, displayBlogPost : false, displayMyYoutube : false, diaplayImageSearch : false});

        }
    }

    render(){
    return(
        <div className="my-app">
            <div className="my-main-header">
                    <button className="controll-button" onClick={() => this.handleHeaderButtonClick("SONG")}>Song List</button>
                    <button className="controll-button" onClick={() => this.handleHeaderButtonClick("BLOG")}>Blog Post</button>
                    <button className="controll-button" onClick={() => this.handleHeaderButtonClick("IMAGE")}>Image Search</button>
                    <button className="controll-button" onClick={() => this.handleHeaderButtonClick("YOUTUBE")}>My YouTube</button>
            </div>
            <div className="ui container main-page">

                {this.state.displaySongList && <div className="ui grid">
                    <div className="ui row">
                        <div className="eight wide column">
                            <SongList/>
                        </div>
                        <div className="eight wide column">
                            <SongDetail/>
                        </div>
                    </div>
                </div>}



                {this.state.displayMyYoutube && 
                <div>
                    <SearchBar serchLabel={"Video Serch"} searchText={this.state.searchText} handleSearchBarTextChange={this.handleSearchBarTextChange} handleFormSubmit={this.handleYouTubeFormSubmit}/>
                    <div className="ui grid">
                        <div className="ui row">
                            <div className="eleven wide column">
                                {this.state.selectedVideo && <VideoDetail video={this.state.selectedVideo}/>}
                            </div>
                            <div className="five wide column">
                                <YouTubeVideoList videos={this.state.youTubeSearchResults} handleSelectedVideo={this.handleSelectedVideo}/>
                            </div>
                        </div>
                    </div>
                </div>}
                




                {this.state.diaplayImageSearch && 
                <div>
                    <SearchBar serchLabel={"Image Serch"} searchText={this.state.searchText} handleSearchBarTextChange={this.handleSearchBarTextChange} handleFormSubmit={this.handleFormSubmit}/>
                    <ImageList imageResults={this.state.imageResults}/>
                </div>}



                {/* {!this.state.isLoading ?  <SeasonDisplay latitude={this.state.latitude} errorMessage={this.state.errorMessage}/> : <Spinner />} */}

                {this.state.displayBlogPost && this.state.users.map(user =>  <ApprovalCard key={user.id} ><CommentFeed  name={user.name} time={user.time} comment={user.comment} imgURL={user.imgURL} /> </ApprovalCard>) }

                {!(this.state.displayBlogPost || this.state.diaplayImageSearch || this.state.displaySongList || this.state.displayMyYoutube) && <div className="no-opton-selected">Please select any option..!!!</div>}
            </div>
            </div>
        );
    }
}

export default App;


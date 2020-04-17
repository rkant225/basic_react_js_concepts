import React from 'react';

class CommentFeed extends React.Component{
    render(){
        return(
            <div>
                <div className="ui container comments">
                    <div className="comment">
                        <a href="/" className="avatar">
                            <img alt="avatar" src={this.props.imgURL}/>
                        </a>
                        <div className="content">
                            <a href="/" className="author">{this.props.name}</a>
                            <div className="metadata">
                                <span className="date">Today at {this.props.time}</span>
                            </div>
                            <div className="text">
                                {this.props.comment}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CommentFeed;
import React, { Component} from 'react';
import './style.css';
import ReactPlayer from 'react-player';


class ViewerScreen extends Component {
    render() {
        return (
            <div className = "ViewerScreenGrid">
                <div className = "ViewerScreen"><ReactPlayer url = "https://www.youtube.com/watch?v=8u8GZ44HVYE" playing muted loop width = "140px" height = "100px"/> </div>
                <div className = "ViewerScreen"> <ReactPlayer url = "https://www.youtube.com/watch?v=N3IBf8MjKFM" playing muted loop width = "140px" height = "100px"/></div>
                <div className = "ViewerScreen"> <ReactPlayer url = "https://www.youtube.com/watch?v=5nUUFHH5PMA" playing muted loop width = "140px" height = "100px"/></div>
                <div className = "ViewerScreen"> <ReactPlayer url = "https://www.youtube.com/watch?v=ocRSf9mgdT8" playing muted loop width = "140px" height = "100px"/> </div>
                <div className = "ViewerScreen"> <ReactPlayer url = "https://www.youtube.com/watch?v=6NW72oH38ZE" playing muted loop width = "140px" height = "100px"/> </div>
             </div>   
        )
    }

}

export default ViewerScreen;





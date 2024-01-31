import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
const Player = () => {
    return (
        <div className='sticky'>
            <AudioPlayer
                autoPlay
                src="http://example.com/audio.mp3"
                onPlay={e => console.log("onPlay")}
            // other props here
            />
        </div>
    );
};

export default Player;
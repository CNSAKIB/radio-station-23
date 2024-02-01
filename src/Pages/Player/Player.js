import React from 'react';
import './Player.css'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { useParams } from 'react-router';
const Player = () => {
    const { radioId } = useParams();
    return (
        <div className='player'>
            <AudioPlayer
                src={radioId}
                showJumpControls={false}
                layout="stacked"
                customProgressBarSection={[]}
                showSkipControls={true}
                customControlsSection={["ADDITIONAL_CONTROLS", "MAIN_CONTROLS", "VOLUME_CONTROLS"]}
                autoPlayAfterSrcChange={false}
            />
        </div>
    );
};

export default Player;
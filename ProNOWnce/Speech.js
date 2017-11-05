import React from 'react';
import {StyleSheet, Text, View, Button, Alert} from 'react-native';

import {default as Sound} from 'react-native-sound';

// import { ReactNativeAudioStreaming } from 'react-native-audio-streaming';

export default class Speech extends React.Component {
    constructor(props) {
        super(props);

    }

    playSound(url) {
        // ReactNativeAudioStreaming.play("http://72.19.107.126:5000/pron/squander",
        // {showIniOSMediaCenter: true, showInAndroidNotifications: true}); Load the
        // sound file 'whoosh.mp3' from the app bundle See notes below about preloading
        // sounds within initialization code below.
        var whoosh = new Sound(url, Sound.MAIN_BUNDLE, (error) => {
            if (error) {
                console.log('failed to load the sound', error);
                return;
            }
            // loaded successfully
            console.log('duration in seconds: ' + whoosh.getDuration() + 'number of channels: ' + whoosh.getNumberOfChannels());

            // Play the sound with an onEnd callback
            whoosh.play((success) => {
                if (success) {
                    console.log('successfully finished playing');
                } else {
                    console.log('playback failed due to audio decoding errors');
                    // reset the player to its uninitialized state (android only) this is the only
                    // option to recover after an error occured and use the player again
                    whoosh.reset();
                }
            });
        });

    }
    componentDidMount() {}

    render() {
        return (

            <View>
                <Text>Hello, world</Text>
                <Button onPress={() => this.playSound()} title="Play"/>
            </View>

        );
    }
}
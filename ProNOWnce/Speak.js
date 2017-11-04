import React, { Component } from 'react'
import { Button } from 'react-native'
import Sound from 'react-native-sound'

class RemoteSound extends Component {
  playTrack = () => {
    const track = new Sound('http://72.19.107.126:5000/pron/arroyo-a', null, (e) => {
      if (e) {
        console.log('error loading track:', e)
      } else {
        track.play()
      }
    })
  }

  render() {
    return <Button title="play me" onPress={this.playTrack} />
  }
}

export default RemoteSound

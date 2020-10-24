import React from 'react'
import { StyleSheet } from 'react-native'
import { color } from 'react-native-reanimated';

const colours = {
  gray: '#aaa',
  darkGray: '#555',
}

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  pictureButton: {
    backgroundColor: colours.gray,
    borderWidth: 0,
    width: '100%',
    height: '30%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  settingsButton: {
    backgroundColor: colours.gray,
    borderWidth: 0,
    width: '100%',
    height: '10%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 25,
    color: 'black',
    padding: 10
  },
  textOverImage: {
    fontSize: 25,
    backgroundColor: colours.darkGray + 'a',
    color: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
})

export default globalStyles;
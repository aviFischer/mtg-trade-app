import { StyleSheet } from 'react-native'

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
  box: {
    borderRightColor: 'grey',
    borderRightWidth: 5,
    borderLeftColor: 'grey',
    borderLeftWidth: 5,
    width: '100%',
    height: '100%',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  card: {
    flexDirection: 'row',
    height: 50,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderBottomWidth: 2,
  },
  autocompleteCard: {
    backgroundColor: colours.darkGray,
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },

  pictureButton: {
    backgroundColor: colours.gray,
    borderWidth: 0,
    width: '100%',
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  settingsButton: {
    backgroundColor: 'black',
    borderWidth: 0,
    width: '100%',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  },
  button: {
    backgroundColor: 'black',
    color: 'white',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 80,
    flex: 1
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
    alignItems: 'center',
    justifyContent: 'center',
  },
  whiteText: {
    fontSize: 25,
    color: 'white',
    padding: 20,
  },
  blackText: {
    fontSize: 25,
    color: 'black',
    padding: 20,
  },
  textOverImage: {
    fontSize: 25,
    backgroundColor: colours.darkGray + 'a',
    color: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  
  cardButton: {
    width: 40,
    height: 40,
    borderRadius: 4,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    fontSize: 25,
    padding: 15,
    color: 'white',
    backgroundColor: 'black',
    width: '100%',
    height: 80,
  },
})

export default globalStyles;
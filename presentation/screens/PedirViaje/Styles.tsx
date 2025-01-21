import { StyleSheet} from 'react-native';

const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
      },
      imageBackground: {
        width: '100%',
        height: '100%',
        opacity: 0.6
      },
      form: {
        width: '90%',
        height: '90%',
        position: 'absolute',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: 40,
        justifyContent: 'center',
        paddingHorizontal: 25
      },
      imageUser: {
        width: 150,
        height: 150,
        alignSelf: 'center',
        marginBottom: 15
      },
      textRegister: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center'
      },
      back:{
        position:'absolute',
        width:35,
        height:35,

      },
      viewbtn:{
        position:'absolute',
        bottom:15,
        left:10,
        right:10,
        zIndex:1
    }
});

export default styles;
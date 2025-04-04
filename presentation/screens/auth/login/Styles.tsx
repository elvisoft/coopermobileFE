import { StyleSheet} from 'react-native';

const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
      },
      imageBackground: {
        flex: 1,
        width: '100%',
        height: '100%',
        //resizeMode: 'contain',
        opacity: 0.6,
      },
      form: {
        width: '87%',
        height: '75%',
        position: 'absolute',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: 40,
        justifyContent: 'center',
        paddingHorizontal: 25
      },
      imageUser: {
        width: 250,
        height: 250,
        alignSelf: 'center',
        marginBottom: 15
      },
      textLogin: {
        color: 'black',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center'
      },
      
      containerTextDontHaveAccount: {
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
        marginTop: 15
      },
      textDontHaveAccount: {
        color: 'black',
        fontSize: 18
      },
      divider: {
        height: 2,
        width: 87,
        backgroundColor: 'grey',
        marginHorizontal: 5
      }
});
export default styles;
import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    container: {
        alignItems: 'center',
        width : '100%',
        marginBottom: 20
    },
    customContainerStyle: {
        width: '100%'
    },
    customButtonStyle:{
        backgroundColor : '$normalPink'
    },
    customIcon:{
        position: 'absolute',
        top: 10 ,
        right: 10
    },
    disabledColor:{
        backgroundColor: '$disabledPink'
    }



});
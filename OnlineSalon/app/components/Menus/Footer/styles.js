import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    container: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom:0,
        height: 60,
        backgroundColor: '#b3b3b3',
        paddingTop: 15,
        paddingLeft: 15
    },
    iconsRow:{
        flexWrap: 'wrap', 
        alignItems: 'center',
        flexDirection:'row',
        width: '100%'
    },
    notificationIcons:{
        position: 'absolute',
        right: 30,
        top:0,
        width : 100,
        flexWrap: 'wrap', 
        alignItems: 'center',
        flexDirection:'row',
        justifyContent: 'space-between'
    },
    iconAlertYellow:{
        position: 'absolute',
        top: 5,
        right: -8,
        alignItems: 'center',
        backgroundColor: '#f9af27',
        borderRadius: 50,
        width: 18,
        height: 18,
    },
    iconAlertRed: {
        position: 'absolute',
        top: 5,
        right: -8,
        alignItems: 'center',
        backgroundColor: 'red',
        borderRadius: 50,
        width: 18,
        height: 18,
    },
    favoriteText:{
        color: 'white',
        fontSize: 10,
        marginLeft: 10
    },
    textStyle: {
        color: 'white',
        fontWeight: '900',
        fontSize: 12,
    }
});
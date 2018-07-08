import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 90,
        backgroundColor: '$xDarkPink',
        paddingTop: 25,
        paddingLeft: 15,
        paddingRight: 15
    },
    iconsRow:{
        flexWrap: 'wrap', 
        alignItems: 'center',
        flexDirection:'row',
        justifyContent: 'space-between'
    },
    iconContent:{
        flexWrap: 'wrap', 
        alignItems: 'center',
        flexDirection:'column',
    },
    textTitle:{
        color: 'white',
        fontSize: 10,
        fontWeight: '900',
    },
    textDescription:{
        color: 'white',
        fontSize: 9
    }

});
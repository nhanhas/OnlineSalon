import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    container: {
        alignItems: 'center',
        width : '100%',
        marginBottom: 20
    },
    customContainerStyle: {
        width : '100%',
        borderBottomColor: '$darkPink'
    },
    customInputStyle: {
        width : '100%',
        textAlign: 'center',
        color: '$xDarkPink'
    },
    descriptionLabelPurple:{
        marginTop:0,
        fontSize: 10,
        color:'$xDarkPink'
    },
    descriptionLabelRed:{
        marginTop:0,
        fontSize: 10,
        color:'red'
    }

});
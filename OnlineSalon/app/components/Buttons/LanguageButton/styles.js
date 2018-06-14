import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor : 'rgba(255, 255, 255, 0.5)',
        width : '100%',
        marginBottom: 10
      },
      wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      
      text: {
        color: '$darkPink',
        fontSize: 16,
        fontWeight: '600',
        paddingVertical: 20
      },
});
/**
 * At render function we will use this
 */
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

 //# Render #//
 function render() {
    //#1 - Initiate Radio Button Options
    const radio_props = [
      {label: i18n.t('APP_LOGIN_REMEMBER_OPT_0') , value: 0 },
      {label: i18n.t('APP_LOGIN_REMEMBER_OPT_1') , value: 1 }
    ];

    return (
          <RadioForm
            formHorizontal={true}
            animation={true} >
          { radio_props.map((obj, i) => {
            return <RadioButton labelHorizontal={true} key={i} >
                  <RadioButtonInput
                    obj={obj}
                    index={i}
                    isSelected={this.state.rememberOptionSelected === i}
                    onPress={(value) => {this.setState({rememberOptionSelected:value})}}
                    borderWidth={1}
                    buttonInnerColor='#e74c3c'
                    buttonOuterColor={this.state.rememberOptionSelected === i ? '#2196f3' : '#000'}
                    buttonSize={40}
                    buttonOuterSize={80}
                    buttonStyle={{}}
                    buttonWrapStyle={{marginLeft: 10}}
                  />
                  <RadioButtonLabel
                    obj={obj}
                    index={i}
                    labelHorizontal={true}
                    labelStyle={{fontSize: 20, color: '#2ecc71'}}
                    labelWrapStyle={{}}
                  />
                  </RadioButton>
              })}
  
        </RadioForm>
    )
 }

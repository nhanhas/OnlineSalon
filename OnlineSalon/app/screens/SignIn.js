import i18n from '../i18n';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import {
    ScrollView,
    TouchableOpacity,
    Image,
    Text,
    View,
    PixelRatio
  } from 'react-native';

import {CustomInput} from '../components/TextInputs/CustomInput';
import {CustomButton} from '../components/Buttons/CustomButton';
import Icon from 'react-native-vector-icons/FontAwesome';
import ImagePicker from 'react-native-image-picker';

/**
 * Sign in Form
 */
export default class SignIn extends Component {

  constructor(props) {
    super(props);

    //#1 - Initiale state vars
    this.state = {
      step: 0,
      ImageSource : null,
      name: '',
      email: '',
      password: '',
      repeatPassword: '',
      phone: '',
      isFirstStepValid: false

    };

    this.onChangeInput = this.onChangeInput.bind(this);
  }

  /**
   * Declare All Component 
   * Properties
   */
  static propTypes = {
    navigation: PropTypes.object
  }

  //#A - Handler to next Step
  nextStep = () => {
    //#1 - Validate form
    //TODO
    
    //#2 - Update State to next Step
    this.setState({step : this.state.step+1});
  }

  //#B - Handler for stepFirst Input changes
  onChangeInput = (newValue) => {
    this.setState(newValue);
    //#1 - Depending on Step, make some validations
    switch (this.state.step) {
      case 0:
        //#1 - Reset valid flag
        this.setState({isFirstStepValid : false});

        //#2 - TODO do all the validations
        if(this.state.name != ''){
          this.setState({isFirstStepValid : true});
        }
        break;

      case 1:
        break;

      case 2:
        break;
    }

  }

  //#C - Handler to Open Gallery
  openPhotoGallery = () => {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true
      }
    };

    ImagePicker.launchImageLibrary(options, (response)  => {
      let source = { uri: response.uri };
  
          // You can also display the image using data:
          // let source = { uri: 'data:image/jpeg;base64,' + response.data };
  
          this.setState({
 
            ImageSource: source
 
          });
    });
  }

  //#D - Handler to Open Camera
  openCameraRoll = () => {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true
      }
    };

    ImagePicker.launchCamera(options, (response)  => {
      let source = { uri: response.uri };

        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({

          ImageSource: source

        });
    });
  
  }
  
  //# Render #//
  render() {
    return (
      <View style={styles.container}>
        
        {/* Steps */}
        <View style={styles.stepList}>
          <Text style={styles.stepSelected}>{i18n.t('APP_SIGNIN_STEP_0')}</Text>
          <Icon name="chevron-right" size={20} color={this.state.step > 0 ? '#67178c' : 'white'} />
          <Text style={ this.state.step >= 1 ? styles.stepSelected : styles.stepNotVisited}>{i18n.t('APP_SIGNIN_STEP_1')}</Text>
          <Icon name="chevron-right" size={20} color={this.state.step > 1 ? '#67178c' : 'white'} />
          <Text style={ this.state.step >= 2 ? styles.stepSelected : styles.stepNotVisited}>{i18n.t('APP_SIGNIN_STEP_2')}</Text>
        </View>
        
        {/* Identification */}
        {this.state.step === 0 && (
          <View style={styles.scrollViewContainer} width={'100%'}>
            <ScrollView  width={'100%'}>

              {/* Photo picker */}
              <View style={styles.photoContainer}>
                {/* Thumb */}
                <TouchableOpacity style={styles.photoButtons} onPress={this.openCameraRoll.bind(this)}>
                  <View style={styles.ImageContainer}>
                    { this.state.ImageSource === null ? 
                      (<Text style={{position:'absolute', top: 40, left:45, fontSize:16, color:'white'}}>+</Text>) 
                      :
                      (<Image style={styles.ImageContainer} source={this.state.ImageSource} />)  
                    }
                  </View>
                </TouchableOpacity>

                {/* Photo */}
                <TouchableOpacity style={styles.photoButtons} onPress={this.openCameraRoll.bind(this)}>
                  <Icon name="camera" size={35} color="#67178c" />
                  <Text style={{textAlign:'center', color: '#67178c'}}>{i18n.t('APP_SIGNIN_STEP_0_PHOTO_BTN')}</Text>
                </TouchableOpacity>
                  
                {/* Gallery */}
                <TouchableOpacity style={styles.photoButtons} onPress={this.openPhotoGallery.bind(this)}>
                  <Icon name="photo" size={35} color="#67178c" />
                  <Text style={{textAlign:'center', color: '#67178c'}}>{i18n.t('APP_SIGNIN_STEP_0_GALLERY_BTN')}</Text>
                </TouchableOpacity>

              </View>
              
              {/* inputs */}
              <View style={styles.inputsContainerFirst}>
                <CustomInput
                  label = {i18n.t('APP_SIGNIN_STEP_0_NAME')} 
                  description = {i18n.t('APP_SIGNIN_STEP_0_NAME_DESC')}
                  descriptionColor = {0}
                  onChange={(name) => {this.onChangeInput({name})}} />
                <CustomInput 
                  label = {i18n.t('APP_SIGNIN_STEP_0_EMAIL')} 
                  description = {i18n.t('APP_SIGNIN_STEP_0_EMAIL_DESC')}
                  descriptionColor = {1}
                  onChange={(email) => {this.onChangeInput({email})}} />
                <CustomInput 
                  isPassword={true}
                  label = {i18n.t('APP_SIGNIN_STEP_0_PASSWORD')} 
                  description = {i18n.t('APP_SIGNIN_STEP_0_PASSWORD_DESC')}
                  descriptionColor = {0}
                  onChange={(password) => {this.onChangeInput({password})}} />
                <CustomInput 
                  isPassword={true}
                  label = {i18n.t('APP_SIGNIN_STEP_0_REPEAT_PW')} 
                  description = {i18n.t('APP_SIGNIN_STEP_0_REPEAT_PW_DESC')}
                  descriptionColor = {1}
                  onChange={(repeatPassword) => {this.onChangeInput({repeatPassword})}} />
                <CustomInput 
                  label = {i18n.t('APP_SIGNIN_STEP_0_PHONE')} 
                  description = {i18n.t('APP_SIGNIN_STEP_0_PHONE_DESC')}
                  descriptionColor = {0}
                  onChange={(phone) => {this.onChangeInput({phone})}} />

              </View>

              <View style={styles.buttonsContainerFirst}>
                <CustomButton 
                  label={i18n.t('APP_SIGNIN_SAVE_BTN')}
                  onPress = {this.nextStep} />

                <CustomButton 
                  isDisabled={!this.state.isFirstStepValid}
                  hasIcon={true}
                  label={i18n.t('APP_SIGNIN_ADDRESS_BTN')}
                  onPress = {this.nextStep} />
              </View> 

            </ScrollView>
          </View>
        )}
        
        {/* Address */}
        {this.state.step === 1 && (
          <View style={styles.scrollViewContainer}>
            
              {/* inputs */}
              <View style={styles.inputsContainer}>
                <CustomInput
                  label = {i18n.t('APP_SIGNIN_STEP_1_ADDRESS1')} 
                  description = {i18n.t('APP_SIGNIN_STEP_1_ADDRESS1_DESC')}
                  descriptionColor = {0}
                  onChange={(address1) => {this.onChangeInput({address1})}} />
                <CustomInput             
                  description = {i18n.t('APP_SIGNIN_STEP_1_ADDRESS2_DESC')}
                  descriptionColor = {0}
                  onChange={(address2) => {this.onChangeInput({address2})}} />
                <CustomInput 
                  label = {i18n.t('APP_SIGNIN_STEP_1_ZIPCODE')} 
                  description = {i18n.t('APP_SIGNIN_STEP_1_ZIPCODE_DESC')}
                  descriptionColor = {0}
                  onChange={(zipcode) => {this.onChangeInput({zipcode})}} />
                <CustomInput 
                  label = {i18n.t('APP_SIGNIN_STEP_1_CITY')} 
                  description = {i18n.t('APP_SIGNIN_STEP_1_CITY_DESC')}
                  descriptionColor = {0}
                  onChange={(city) => {this.onChangeInput({city})}} />
              
              </View>

              <View style={styles.buttonsContainer}>
                <CustomButton 
                  label={i18n.t('APP_SIGNIN_SAVE_BTN')}
                  onPress = {this.nextStep} />

                <CustomButton 
                  isDisabled={!this.state.isFirstStepValid}
                  hasIcon={true}
                  label={i18n.t('APP_SIGNIN_PAYMENT_BTN')}
                  onPress = {this.nextStep} />
              </View> 

          </View>
        )}

        {/* Payment */}
        {this.state.step === 2 && (
          
          <View style={styles.scrollViewContainer}>
            
              {/* inputs */}
              <View style={styles.inputsContainer}>
                <Text style={styles.lastStepSelected}>{i18n.t('APP_SIGNIN_STEP_2_TITLE')} </Text>

                <CustomInput
                  label = {i18n.t('APP_SIGNIN_STEP_2_CARD_NAME')} 
                  description = {i18n.t('APP_SIGNIN_STEP_2_CARD_NAME_DESC')}
                  descriptionColor = {0}
                  onChange={(cardName) => {this.onChangeInput({cardName})}} />
                
                <View style={styles.inputsContainerCard}>
                  <View width={'30%'}>
                    <CustomInput                           
                      label = {i18n.t('APP_SIGNIN_STEP_2_CARD_MONTH')}         
                      description = {i18n.t('APP_SIGNIN_STEP_2_CARD_MONTH_DESC')}
                      descriptionColor = {0}
                      onChange={(cardMonth) => {this.onChangeInput({cardMonth})}} />
                  </View>
                  
                  <View marginLeft={15}  width={'30%'}>
                    <CustomInput 
                      label = {i18n.t('APP_SIGNIN_STEP_2_CARD_YEAR')} 
                      description = {i18n.t('APP_SIGNIN_STEP_2_CARD_YEAR_DESC')}
                      descriptionColor = {0}
                      onChange={(cardYear) => {this.onChangeInput({cardYear})}} />
                  </View>

                  <View marginLeft={15} width={'30%'}>
                    <CustomInput 
                      label = {i18n.t('APP_SIGNIN_STEP_2_CARD_CCV')} 
                      description = {i18n.t('APP_SIGNIN_STEP_2_CARD_CCV_DESC')}
                      descriptionColor = {0}
                      onChange={(cardCcv) => {this.onChangeInput({cardCcv})}} />
                  </View>
                </View>
              </View>

              <View style={styles.buttonsContainer} marginTop={80}>
                <CustomButton 
                  label={i18n.t('APP_SIGNIN_SAVE_BTN')}
                  onPress = {this.nextStep} />
              </View> 

          </View>

        )}



      </View>
    );
  }   
}   

/**
 * Screen Design
 */
const styles = EStyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '$lightPink',
    },
    stepList:{
      position: 'absolute',
      top: 150,
      flexDirection:'row', 
      flexWrap:'wrap',
      alignItems: 'center',
      justifyContent: 'center'
    },
    stepSelected:{
      fontWeight: '600',
      fontSize: 14,
      color: '$xDarkPink',
      marginLeft: 10,
      marginRight: 10
    },
    stepNotVisited: {
      fontWeight: '600',
      fontSize: 14,
      color: 'white',
      marginLeft: 10,
      marginRight: 10
    },
    scrollViewContainer: {
      flex:1, 
      marginTop:200,
      width: '75%'
    },
    photoContainer: {
      flexDirection:'row', 
      flexWrap:'wrap',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    photoButtons:{
      flexDirection:'column', 
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 20,
      marginLeft: 20
    },
    ImageContainer: {
      borderRadius: 50,
      width: 100,
      height: 100,
      borderColor: 'white',
      borderWidth: 5 / PixelRatio.get(),
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '$disabledPink',
    },
    inputsContainer: {
      width: '100%',
      marginTop: 20,
    },
    buttonsContainer: {
      width : '100%',
      marginTop: 20,
    },
    inputsContainerFirst: {
      marginTop: 20,
      marginLeft: 40,
      marginRight: 40
    },
    buttonsContainerFirst: {
      marginTop: 20,
      marginLeft: 40,
      marginRight: 40
    },
    inputsContainerCard:{
        flexDirection:'row',
    },
    lastStepSelected:{
      fontWeight: '600',
      fontSize: 16,
      color: '$xDarkPink',
      marginLeft: 10,
      marginRight: 10,
      marginBottom: 50
    }

});
  
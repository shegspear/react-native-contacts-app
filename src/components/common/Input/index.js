import React, {useState} from 'react';
import {TextInput, View, Text} from 'react-native';

import styles from './styles';
import colors from '../../../assets/theme/colors';

const Input = ({
  onChangeText, 
  iconPosition, 
  style, 
  value, 
  label, 
  icon,
  error,
  placeholder,
  ...props
  }) => {
    const [focused, setFocused] = useState(false);

    const getFlexDirection = () => {
      if(icon && iconPosition) {
        if(iconPosition === 'left') {
          return 'row';
        } else if (iconPosition === 'right') {
          return 'row-reverse';
        }
      };
    };

    const getBorderColor = () => {
      if(error) {
        return colors.danger;
      }

      if(focused) {
        return colors.primary;
      }else {
        return colors.grey;
      }
    };

    return(
      <View style={styles.inputContainer}>
        {label && (<Text>{label}</Text>)}

        <View style={[styles.wrapper, 
            {alignItems: icon ? 'center' : 'baseline'},
            { borderColor: getBorderColor(), flexDirection: getFlexDirection()}
          ]}>
         <View>{icon && icon}</View>

         <TextInput
            placeholder={placeholder}
            style={[styles.textInput, style]}
            onChangeText={onChangeText}
            value={value}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            {...props}
          />
        </View>

        {error && <Text style={styles.error}>{error}</Text>}
      </View>
    );
};

export default Input;
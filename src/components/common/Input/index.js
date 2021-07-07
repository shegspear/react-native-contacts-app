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
      if(focused) {
        return colors.primary;
      };

      if(error) {
        return colors.danger;
      } else {
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
            style={[styles.textInput, style]}
            defaultValue="You can type in me"
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
/* eslint-disable react/prop-types */
import React, { forwardRef } from 'react';
import RNPickerSelect from 'react-native-picker-select';

import { pickerSelectDarkStyles, pickerSelectLightStyles } from './styles';
import { fontSize } from '~/styles';

function PickerSelect(
    { fontSizeValue = fontSize.micro, theme = 'dark', ...rest },
    ref
) {
    const styles =
        theme === 'dark'
            ? pickerSelectDarkStyles(fontSizeValue)
            : pickerSelectLightStyles(fontSizeValue);
    return <RNPickerSelect {...rest} style={{ ...styles }} ref={ref} />;
}

export default forwardRef(PickerSelect);

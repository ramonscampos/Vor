import { StyleSheet } from 'react-native';
import { colors, fontSize } from '~/styles';

export const pickerSelectDarkStyles = fontSizeValue =>
    StyleSheet.create({
        inputIOS: {
            fontFamily: 'Roboto-Regular',
            borderBottomWidth: 1,
            borderColor: colors.light,
            height: 38,
            color: colors.light,
            fontSize: fontSizeValue,
            paddingLeft: 10,
            marginTop: 15,
        },
        inputAndroid: {
            fontFamily: 'Roboto-Regular',
            borderBottomWidth: 1,
            borderColor: colors.light,
            height: 38,
            color: colors.light,
            fontSize: fontSizeValue,
            paddingLeft: 10,
            marginTop: 15,
        },
    });

export const pickerSelectLightStyles = () =>
    StyleSheet.create({
        inputIOS: {
            fontFamily: 'Roboto-Regular',
            height: 40,
            color: colors.darker,
            fontSize: fontSize.xlarge,
            fontWeight: 'bold',
        },
        inputAndroid: {
            fontFamily: 'Roboto-Regular',
            height: 40,
            color: colors.darker,
            fontSize: fontSize.xlarge,
            fontWeight: 'bold',
        },
    });

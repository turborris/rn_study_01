import {StyleSheet} from 'react-native'

export const Colors = {
    dark: 'black',
    light: 'white',
    red: 'red'
};

const baseContainerStyles = {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
};

const baseBoxStyles = {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    height: 150,
    width: 150
};

const lightStyleSheet = StyleSheet.create({
    container: {
        ...baseContainerStyles,
        backgroundColor: Colors.light
    },
    box: {
        ...baseBoxStyles,
        borderColor: Colors.dark
    }
});

const darkStyleSheet = StyleSheet.create({
    container: {
        ...baseContainerStyles,
        backgroundColor: Colors.dark
    },
    box: {
        ...baseBoxStyles,
        borderColor: Colors.light
    }
});

const redStyleSheet = StyleSheet.create({
    container: {
        ...baseContainerStyles,
        backgroundColor: Colors.red
    },
    box: {
        ...baseBoxStyles,
        borderColor: Colors.light
    }
})

export default function getStyleSheet(themeType) {
    switch(themeType) {
        case 'dark':
            return darkStyleSheet;
        case 'light':
            return lightStyleSheet;
        case 'red':
            return redStyleSheet;
        default:
            return darkStyleSheet;
    }
}
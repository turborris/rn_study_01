import Cities from './components/cities/Cities'
import City from './components/cities/City'
import AddCity from './components/addcity/AddCity'

import { colors } from './theme'

import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'

const CitiesNav = createStackNavigator({
    Cities: Cities,
    City: City
},
{
    navigationOptions: {
        headerStyle: {
            backgroundColor: colors.primary1
        },
        headerTintColor: '#fff'
    }    
});

const AppTabs = createBottomTabNavigator({
    Cities: CitiesNav,
    AddCity: AddCity
});

const Tabs = createAppContainer(AppTabs);

export default Tabs;
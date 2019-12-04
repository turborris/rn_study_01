import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import RNAnim from '../component/animate/RNAnimations'
import FIAnimations from '../component/animate/FIAnimations'
import ROAnimations from '../component/animate/ROAnimations'
import ParAnimations from '../component/animate/ParAnimations'
import SEQAnimations from '../component/animate/SEQAnimations'
import STGAnimations from '../component/animate/STGAnimations'

// const AnimNav = createStackNavigator({
//     RNAnim: RNAnim,
//     FIAnim: FIAnimations,
//     ROAnim: ROAnimations,
//     ParAnim: ParAnimations,
//     SEOAnim: SEQAnimations
// })

const AppTabs = createBottomTabNavigator({
    RNAnim: RNAnim,
    FIAnim: FIAnimations,
    ROAnim: ROAnimations,
    ParAnim: ParAnimations,
    SEOAnim: SEQAnimations,
    STGAmin: STGAnimations
});

const GlobalNav = createAppContainer(AppTabs);

export default GlobalNav;
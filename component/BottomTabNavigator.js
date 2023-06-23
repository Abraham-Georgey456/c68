import * as React from 'react'
import {NavigationConatainer, TabNavigator, TabScreen} from 'react-native'
import SearchScreen from '../screens/Search';

export default class BottomTabNavigator extends Component{
    render(){
        return(
            <NavigationConatainer>
                <TabNavigator> 
                    <TabScreen name = "Transaction" component={TransactionScreen}/>
                    <TabScreen name = "Search" component={SearchScreen}/>
                </TabNavigator>
            </NavigationConatainer>
        );
    }
}
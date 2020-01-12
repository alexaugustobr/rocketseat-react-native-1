import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Main from './pages/main';

const AppStackNavigator = createStackNavigator({
        Main
    }, 
    {
        initialRouteName: 'Main',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: "#DA552F"
            },
            headerTintColor: "#FFF"
        },
    }
);

const Routes = createAppContainer(AppStackNavigator)

export default Routes;

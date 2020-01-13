import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Main from './pages/main';
import Product from './pages/product';

const AppStackNavigator = createStackNavigator({
        Main,
        Product
    }, 
    {
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

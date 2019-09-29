import React from 'react';
import {Router, Scene} from 'react-native-router-flux';
import HomeForm from './components/HomeForm';
import {Provider} from 'react-redux';
import configureStore from './configureStore';

const store = configureStore();

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Scene key={'root'}>
                        <Scene key={'home'} component={HomeForm}/>
                    </Scene>
                </Router>
				<View>
				</View>
				<View>
				</View>
				<View>
				</View>
				<View>
				</View>
				<View>
				</View>
            </Provider>
        )
    }
}

export default App;

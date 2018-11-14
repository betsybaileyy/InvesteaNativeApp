import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import { createStackNavigator } from 'react-navigation';

export default class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            renderFields: false
        }

        this.renderText = this.renderText.bind(this);
        this.handleTouch = this.handleTouch.bind(this);
    }

    renderText() {
        if (this.state.renderFields) {
            return ( <Text style={styles.renderedText}> REndered </Text>
            )
        }
    }

    handleTouch() {
        if (this.state.renderFields) {
            return this.setState({
                renderFields: false
            })
        }
        return this.setState({
            renderFields: true
        })
    }

    render() {
        return ( <View style ={styles.container}>
                <TouchableOpacity onPress={this.handleTouch}>
                    <Text> Open up App.js to start working on your app!: ) </Text>
                </TouchableOpacity>
                {this.renderText()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    renderedText: {
        paddingTop: 50,
    },
});

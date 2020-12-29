import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { connect } from 'react-redux';
import actions from '../reducers/actions';

const SettingsScreen = (props) => {
    return(
        <View>
            <TouchableOpacity onPress={props.clearWishlist}>
                <Text>Clear Wishlist</Text>
            </TouchableOpacity>
        </View>
    )
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
    clearWishlist: () => {
        dispatch(actions.clearWishlist());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen);
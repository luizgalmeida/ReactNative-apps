import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icon/FontAwesome';
import commonStyles from '../commonStyles';
export default props => {
    let check = null;
    if (props.doneAt !== null) {
        check = (<View style={styles.done}>
            <Icon name='check' size={20} color={commonStyles.colors.secondary}></Icon>
        </View>);
    }
    else {
        check = <View style={styles.pending}></View>;
    }
    const descStyle = props.doneAt !== null ?
        { textDecorationLine: 'line-through' } : {};
    return (<View style={styles.container}>
        <View style={styles.checkContainer}>{check}</View>
        <View>
            <Text style={[styles.description, descStyle]}>{props.desc}</Text>
        </View>
    </View>);
};

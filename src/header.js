// Import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

// Make a component
const Header = (props) => {
	const { textStyle, viewStyle } = styles;

	return (
		<View style={viewStyle}>
			<Text style={textStyle}>{props.headerText}</Text>
		</View>
		);
};

const styles = {
	viewStyle: {
		backgroundColor: '#D3D3D3',
		justifyContent: 'center',
		alignItems: 'center',
		height: 80,
		paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 10, height: -10 },
    shadowOpacity: 0.2,
    elevation: 4,
		position: 'relative',
	},
	textStyle: {
		fontSize: 30,
    color: '#FFFFFF',
	}
};

// Make the component available to other parts of the app
export default Header;

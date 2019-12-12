import React from 'react';
const firebase = require('firebase');

export default function Logout() {
	var user = firebase.auth().currentUser;

	user = null;
	
	return (<div>Logging out...</div>);
}
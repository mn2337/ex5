import React from 'react';
const firebase = require('firebase');
]
import { UserInformation } from "../../components/UserProfileComponents";

export default function UserProfile() {
	return (
		<div>
			<div>UserProfile</div>
			<UserInformation />
		</div>
	);
}
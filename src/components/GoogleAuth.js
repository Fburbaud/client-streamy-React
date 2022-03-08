import React from "react";

class GoogleAuth extends React.Component {
    state = { isSignedIn: null };

    componentDidMount() {
        //wiring up google api library
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '1094188205201-bjqcg95cnlr2frfvmhfben7t17riutff.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({ isSignedIn: this.auth.isSignedIn.get() })
            });
        });
    }
    
    render() {
        return(
            <div>
                google auth
            </div>
        );
    };
};

export default GoogleAuth;
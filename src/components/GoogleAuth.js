import React from "react";

class GoogleAuth extends React.Component {
    state = { isSignedIn: null };

    componentDidMount() {
        //wiring up google api library
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '1094188205201-bjqcg95cnlr2frfvmhfben7t17riutff.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => { //dès que le component render et qu'on récupère les infos de gapi
                //on tente de voir si le user est connecté ou non
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({ isSignedIn: this.auth.isSignedIn.get() });
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }
    
    onAuthChange = () =>{
        this.setState({ isSignedIn: this.auth.isSignedIn.get() });
    };

    onSignIn = () => {
        this.auth.signIn();
    };

    onSignOut = () => {
        this.auth.signOut();
    };

    renderAuthButton() {
        if(this.state.isSignedIn === null){
            return null;
        } else if (this.state.isSignedIn){
            return (
                <button className="ui red google button" onClick={this.onSignOut}>
                    <i className="google icon" />
                    Sign Out
                </button>
            );
        } else {
            return (
                <button className="ui red google button" onClick={this.onSignIn}>
                    <i className="google icon" />
                    Sign in with Google
                </button>
            );
        }
    };

    render() {
        return(
            <div>
                {this.renderAuthButton()}
            </div>
        );
    };
};

export default GoogleAuth;
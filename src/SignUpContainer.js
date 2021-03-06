import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Store2 from 'store2';
import { SignUp } from './Ducks/signUp';

import SignUpComponent from './SignUpComponent';

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    submitSignUp:()=> {
      dispatch(SignUp());
      // push('cv/edit');
    },
    handleSubmitSuccess: () => {
    }
  };
}

class SignUpContainer extends Component {


  render() {
    const { submitSignUp, handleSubmitSuccess } = this.props;
    return (
      <SignUpComponent
        {...this.props}
        onSubmit={submitSignUp}
        onSubmitSuccess={handleSubmitSuccess}
      />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpContainer)

import React, { Component } from 'react';
import { connect } from 'react-redux'
import Message from '../components/Message';

class MessageContainer extends Component {
    render() {
        const { message } = this.props;
        return (
            <Message message={message} />
        );
    }
}

const mapStateToProps = state => ({
    message: state.message
});

const mapDispatchToProps = dispatch => {
    return {
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(MessageContainer);

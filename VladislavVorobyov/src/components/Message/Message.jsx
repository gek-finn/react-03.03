import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import {Parser} from 'html-to-react';

const useStyles = makeStyles(theme => ({
    message: {
        backgroundColor: 'lightskyblue',
        padding: 10,
        margin: 10,
        listStyle: 'none',
        width: '30%',
        borderRadius: 5,
        alignSelf: 'flex-start',

    },
    messageCurrentUser: {
        alignSelf: 'flex-end',
    },
}));


export const Message = (props) => {
    const {senderId, senderName, content, currentUser} = props
    const classes = useStyles();
    const htmlToReactParser = new Parser();
    const formatContent = content.replace(/\n/g, '<br>');
    const contentElement = htmlToReactParser.parse(`<div>${formatContent}</div>`)
    const className = `${classes.message} ${senderId===1 ? classes.messageCurrentUser : ''}`;
    return (
        <li className={className}>
            <strong>{senderName}</strong><br />
            {contentElement}
        </li>
    )
};

// Message.propTypes = {
//     author: PropTypes.string.isRequired,
//     content: PropTypes.string.isRequired,
//     currentUser: PropTypes.string,
// };
//
// Message.defaultProps = {
//     currentUser: 'Vladislav',
// };

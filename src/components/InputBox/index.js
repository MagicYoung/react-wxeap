import React from 'react';
import {
    Popup,
    NavBar,
    TextareaItem,
    Icon,
    Toast
} from 'antd-mobile';
import wrapProps from '../../utils/wrapProps';


class InputBox extends React.Component {

    static propTypes = {
        onConfirm: React.PropTypes.func,
        title: React.PropTypes.string,
        placeholder: React.PropTypes.string,
        maxLength: React.PropTypes.number
    }

    state = {
        maxLength: 0,
        title: '输入',
        placeholder: '请输入',
        value: ''
    }

    onConfirm = () => {
        this.props.onConfirm && this.props.onConfirm(this.state.value);
        Popup.hide();
    }

    render() {
        const { title, placeholder, maxLength } = this.props;
        return (
            <div style={styles.container}>
                <NavBar
                    iconName={require('../../assets/close.svg')}
                    mode="light"
                    onLeftClick={Popup.hide}
                    rightContent={<div style={styles.tick} onClick={this.onConfirm}
                    >
                        <Icon type={require('../../assets/tick.svg')} />
                    </div>}
                >{title}</NavBar>
                <div style={styles.textarea}>
                    <TextareaItem
                        value={this.state.value}
                        onChange={(value) => this.setState({ value })}
                        placeholder={placeholder}
                        rows={5}
                        count={maxLength}
                    />
                </div>
            </div>
        );
    }

}
const styles = {
    container: {
        height: 400,
        width: '100%',
        backgroundColor: 'white',
    },
    tick: {
        height: '100%',
        padding: '0 0.3rem',
        marginRight: '-0.3rem',
        display: '-webkit-flex',
        alignItems: 'center',
    },
    textarea: {
        height: 310,
        width: '93%',
        marginLeft: '3%',
        fontSize: 25
    }
};

export default (options) => {
    Popup.show(<InputBox {...options}/>, { wrapProps });
};
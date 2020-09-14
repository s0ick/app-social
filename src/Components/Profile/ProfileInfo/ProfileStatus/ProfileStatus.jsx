import React from 'react';
import style from'../ProfileInfo.module.css';

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps != this.props || nextState != this.state;
  }

  activeteEditMode = () => {
    this.setState({
      editMode: true
    });
  }
  deactiveteEditMode = () => {
    this.setState({
      editMode: false
    });
    this.props.updateStatus(this.state.status);
  }
  onStatusChange = (event) => {
    this.setState({
      status: event.currentTarget.value
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status
      });
    }
  }

  render() {
    return (
      <div className={style.personalInfo}>
        <span className={style.subtitle}>Status:</span>
        <div className={style.statusPanel}>
          {
            !this.state.editMode &&
            <p onDoubleClick={this.activeteEditMode} className={style.status}>{!this.props.status ? 'Hi!' : this.props.status}</p>
          }
          {
            this.state.editMode &&
            <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactiveteEditMode} value={this.state.status} type="text" name="status" className={style.input}/>
          }
        </div>
      </div>
    )
  }
};

export default ProfileStatus;
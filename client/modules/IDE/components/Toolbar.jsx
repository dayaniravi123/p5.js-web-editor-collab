import PropTypes from 'prop-types';
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { Button, Modal, Form, ListGroup, InputGroup } from 'react-bootstrap';
import { AiOutlineClose } from 'react-icons/ai';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import classNames from 'classnames';
import { withTranslation } from 'react-i18next';
import * as IDEActions from '../actions/ide';
import * as preferenceActions from '../actions/preferences';
import * as projectActions from '../actions/project';

import PlayIcon from '../../../images/play.svg';
import StopIcon from '../../../images/stop.svg';
import PreferencesIcon from '../../../images/preferences.svg';
import EditProjectNameIcon from '../../../images/pencil.svg';
import myimg from './images/myself.png';

function Example() {
  const myButton = {
    border: '2px solid black',
    backgroundColor: 'white',
    color: 'black',
    padding: '10px 10px',
    fontSize: '16px',
    marginLeft: '10px',
    marginRight: '10px',
    position: 'absolute',
    right: '5%'
  };
  const myJoinTextInput = {
    width: '80%'
  };
  const myJoinButton = {
    border: '1px solid green',
    backgroundColor: 'white',
    color: 'black',
    width: '18%',
    marginLeft: '5px',
    paddingTop: '7px',
    paddingBottom: '9px',
    fontSize: 'larger'
  };
  const myFromControl = {
    width: '100%'
  };
  const myListItem = {
    width: '80%',
    textAlign: 'left',
    backgroundColor: '#fff',
    borderRadius: '30px',
    paddingBottom: '1%',
    marginTop: '1%',
    marginBottom: '1%'
  };
  const myListgroup = {
    flex: 1,
    marginTop: '2%',
    overflowY: 'scroll'
  };
  const myListsubItem = {
    float: 'right'
  };
  const myListsubItemFirst = {
    width: '80%'
  };
  const myImage = {
    width: '10%',
    marginRight: '2%'
  };
  const myCloseBtn = {
    float: 'right'
  };
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const myform = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_i7z3txn',
        'template_p4f8wzi',
        myform.current,
        'Zq_4ZjWUQ5tRqB3xi'
      )
      .then(
        (result) => {
          alert('Sucess');
        },
        (error) => {
          alert(error.text);
        }
      );
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow} style={myButton}>
        Share
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Share Document</Modal.Title>
          <Button variant="secondary" onClick={handleClose} style={myCloseBtn}>
            <AiOutlineClose />
          </Button>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="controlInput1">
              <Form.Label>Join</Form.Label>
              <br />
              <Form.Control
                type="text"
                style={myJoinTextInput}
                placeholder="Enter Link to Join"
              />
              <Button variant="outline-primary" style={myJoinButton}>
                Join
              </Button>
            </Form.Group>
            <br />
            <br />
            <Form.Group className="mb-3" controlId="ControlInput2">
              <Form.Label>Link to Share</Form.Label>
              <br />
              <Form.Control
                style={myFromControl}
                plaintext
                readOnly
                defaultValue="https://docs.google.com/document/d/1UeC6osYQIOCQxoI_9dvdIdFBmCdgwgIB_XFAHHO3YoM/edit?usp=sharing"
              />
            </Form.Group>
            <br />
            <br />
          </Form>
          <form ref={myform} onSubmit={sendEmail}>
            <Form.Group className="mb-3" controlId="ControlInput3">
              <Form.Label>Invite People</Form.Label>
              <br />
              <Form.Control
                type="text"
                style={myJoinTextInput}
                placeholder="Add People"
                name="user_email"
              />
              <input
                type="hidden"
                value="http://localhost:8000/"
                name="message"
              />
              <input
                type="submit"
                variant="outline-primary"
                style={myJoinButton}
                value="Send"
              />
            </Form.Group>
          </form>
          <Form.Group className="mb-3">
            <ListGroup style={myListgroup}>
              <ListGroup.Item action style={myListItem}>
                <InputGroup style={myListsubItemFirst}>
                  <InputGroup.Text>
                    <img style={myImage} src={myimg} alt="img" />
                  </InputGroup.Text>
                  <Form.Label>Ravi Dayani (You)</Form.Label>
                  <Form.Label style={myListsubItem}>Owner</Form.Label>
                </InputGroup>
              </ListGroup.Item>
              <ListGroup.Item action style={myListItem}>
                <InputGroup style={myListsubItemFirst}>
                  <InputGroup.Text>
                    <img style={myImage} src={myimg} alt="img" />
                  </InputGroup.Text>
                  <Form.Label>Dave</Form.Label>
                  <Form.Label style={myListsubItem}>Editor</Form.Label>
                </InputGroup>
              </ListGroup.Item>
              <ListGroup.Item action style={myListItem}>
                <InputGroup style={myListsubItemFirst}>
                  <InputGroup.Text>
                    <img style={myImage} src={myimg} alt="img" />
                  </InputGroup.Text>
                  <Form.Label>Cris</Form.Label>
                  <Form.Label style={myListsubItem}>Viewer</Form.Label>
                </InputGroup>
              </ListGroup.Item>
            </ListGroup>
          </Form.Group>
          <br />
        </Modal.Body>
      </Modal>
    </>
  );
}

class Toolbar extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleProjectNameChange = this.handleProjectNameChange.bind(this);
    this.handleProjectNameSave = this.handleProjectNameSave.bind(this);

    this.state = {
      projectNameInputValue: props.project.name
    };
  }

  handleKeyPress(event) {
    if (event.key === 'Enter') {
      this.props.hideEditProjectName();
      this.projectNameInput.blur();
    }
  }

  handleProjectNameChange(event) {
    this.setState({ projectNameInputValue: event.target.value });
  }

  handleProjectNameSave() {
    const newProjectName = this.state.projectNameInputValue.trim();
    if (newProjectName.length === 0) {
      this.setState({
        projectNameInputValue: this.props.project.name
      });
    } else {
      this.props.setProjectName(newProjectName);
      this.props.hideEditProjectName();
      if (this.props.project.id) {
        this.props.saveProject();
      }
    }
  }

  canEditProjectName() {
    return (
      (this.props.owner &&
        this.props.owner.username &&
        this.props.owner.username === this.props.currentUser) ||
      !this.props.owner ||
      !this.props.owner.username
    );
  }

  render() {
    /*
    const [show, setShow] = React.useState(false);}
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    */
    const playButtonClass = classNames({
      'toolbar__play-button': true,
      'toolbar__play-button--selected': this.props.isPlaying
    });
    const stopButtonClass = classNames({
      'toolbar__stop-button': true,
      'toolbar__stop-button--selected': !this.props.isPlaying
    });
    const preferencesButtonClass = classNames({
      'toolbar__preferences-button': true,
      'toolbar__preferences-button--selected': this.props.preferencesIsVisible
    });
    const nameContainerClass = classNames({
      'toolbar__project-name-container': true,
      'toolbar__project-name-container--editing': this.props.project
        .isEditingName
    });
    const canEditProjectName = this.canEditProjectName();
    return (
      <div className="toolbar">
        <Example />
        <button
          className="toolbar__play-sketch-button"
          onClick={() => {
            this.props.syncFileContent();
            this.props.startAccessibleSketch();
            this.props.setTextOutput(true);
            this.props.setGridOutput(true);
          }}
          aria-label={this.props.t('Toolbar.PlaySketchARIA')}
          disabled={this.props.infiniteLoop}
        >
          <PlayIcon focusable="false" aria-hidden="true" />
        </button>
        <button
          className={playButtonClass}
          onClick={() => {
            this.props.syncFileContent();
            this.props.startSketch();
          }}
          aria-label={this.props.t('Toolbar.PlayOnlyVisualSketchARIA')}
          disabled={this.props.infiniteLoop}
        >
          <PlayIcon focusable="false" aria-hidden="true" />
        </button>
        <button
          className={stopButtonClass}
          onClick={this.props.stopSketch}
          aria-label={this.props.t('Toolbar.StopSketchARIA')}
        >
          <StopIcon focusable="false" aria-hidden="true" />
        </button>
        <div className="toolbar__autorefresh">
          <input
            id="autorefresh"
            className="checkbox__autorefresh"
            type="checkbox"
            checked={this.props.autorefresh}
            onChange={(event) => {
              this.props.setAutorefresh(event.target.checked);
            }}
          />
          <label htmlFor="autorefresh" className="toolbar__autorefresh-label">
            {this.props.t('Toolbar.Auto-refresh')}
          </label>
        </div>
        <div className={nameContainerClass}>
          <button
            className="toolbar__project-name"
            onClick={() => {
              if (canEditProjectName) {
                this.props.showEditProjectName();
                setTimeout(() => this.projectNameInput.focus(), 140);
              }
            }}
            disabled={!canEditProjectName}
            aria-label={this.props.t('Toolbar.EditSketchARIA')}
          >
            <span>{this.props.project.name}</span>
            {canEditProjectName && (
              <EditProjectNameIcon
                className="toolbar__edit-name-button"
                focusable="false"
                aria-hidden="true"
              />
            )}
          </button>
          <input
            type="text"
            maxLength="128"
            className="toolbar__project-name-input"
            aria-label={this.props.t('Toolbar.NewSketchNameARIA')}
            value={this.state.projectNameInputValue}
            onChange={this.handleProjectNameChange}
            ref={(element) => {
              this.projectNameInput = element;
            }}
            onBlur={this.handleProjectNameSave}
            onKeyPress={this.handleKeyPress}
          />
          {(() => {
            if (this.props.owner) {
              return (
                <p className="toolbar__project-owner">
                  {this.props.t('Toolbar.By')}{' '}
                  <Link to={`/${this.props.owner.username}/sketches`}>
                    {this.props.owner.username}
                  </Link>
                </p>
              );
            }
            return null;
          })()}
        </div>
        <button
          className={preferencesButtonClass}
          onClick={this.props.openPreferences}
          aria-label={this.props.t('Toolbar.OpenPreferencesARIA')}
        >
          <PreferencesIcon focusable="false" aria-hidden="true" />
        </button>
      </div>
    );
  }
}

Toolbar.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  preferencesIsVisible: PropTypes.bool.isRequired,
  stopSketch: PropTypes.func.isRequired,
  setProjectName: PropTypes.func.isRequired,
  openPreferences: PropTypes.func.isRequired,
  owner: PropTypes.shape({
    username: PropTypes.string
  }),
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    isEditingName: PropTypes.bool,
    id: PropTypes.string
  }).isRequired,
  showEditProjectName: PropTypes.func.isRequired,
  hideEditProjectName: PropTypes.func.isRequired,
  infiniteLoop: PropTypes.bool.isRequired,
  autorefresh: PropTypes.bool.isRequired,
  setAutorefresh: PropTypes.func.isRequired,
  setTextOutput: PropTypes.func.isRequired,
  setGridOutput: PropTypes.func.isRequired,
  startSketch: PropTypes.func.isRequired,
  startAccessibleSketch: PropTypes.func.isRequired,
  saveProject: PropTypes.func.isRequired,
  currentUser: PropTypes.string,
  t: PropTypes.func.isRequired,
  syncFileContent: PropTypes.func.isRequired
};

Toolbar.defaultProps = {
  owner: undefined,
  currentUser: undefined
};

function mapStateToProps(state) {
  return {
    autorefresh: state.preferences.autorefresh,
    currentUser: state.user.username,
    infiniteLoop: state.ide.infiniteLoop,
    isPlaying: state.ide.isPlaying,
    owner: state.project.owner,
    preferencesIsVisible: state.ide.preferencesIsVisible,
    project: state.project
  };
}

const mapDispatchToProps = {
  ...IDEActions,
  ...preferenceActions,
  ...projectActions
};

export const ToolbarComponent = withTranslation()(Toolbar);
export default connect(mapStateToProps, mapDispatchToProps)(ToolbarComponent);

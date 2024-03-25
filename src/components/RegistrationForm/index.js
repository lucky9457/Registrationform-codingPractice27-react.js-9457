// Write your JS code here
import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    ErrorFrst: false,
    errorLast: false,
    Frstname: '',
    Lastname: '',
    submitClicked: false,
  }

  changeinput = event => {
    const frst = event.target.value
    this.setState({
      Frstname: frst,
    })
  }

  onChangeLast = event => {
    const last = event.target.value
    this.setState({
      Lastname: last,
    })
  }

  FrstblurFunc = event => {
    if (event.target.value === '') {
      this.setState({
        ErrorFrst: true,
      })
    } else {
      this.setState({
        ErrorFrst: false,
      })
    }
  }

  blurLastName = event => {
    if (event.target.value === '') {
      this.setState({
        errorLast: true,
      })
    } else {
      this.setState({
        errorLast: false,
      })
    }
  }

  submitFile = event => {
    event.preventDefault()
    const {Frstname, Lastname} = this.state
    if (Frstname === '' || Lastname === '') {
      if (Frstname === '' && Lastname === '') {
        this.setState({
          ErrorFrst: true,
          errorLast: true,
        })
      } else if (Frstname === '') {
        this.setState({
          ErrorFrst: true,
        })
      } else if (Lastname === '') {
        this.setState({
          errorLast: true,
        })
      }
    } else {
      this.setState({
        submitClicked: true,
      })
    }
  }

  submitView = () => {
    const a = 'a'
    return (
      <div className="succesCont">
        <img
          className="succesimg"
          src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
          alt="success"
        />
        <p className="submitedPara">Submitted Successfully</p>
        <button onClick={this.resubmit} className="btn" type="button">
          Submit another Response
        </button>
      </div>
    )
  }

  resubmit = () => {
    this.setState({
      ErrorFrst: false,
      errorLast: false,
      Frstname: '',
      Lastname: '',
      submitClicked: false,
    })
  }

  registerRender = () => {
    const {ErrorFrst, errorLast} = this.state
    console.log(errorLast)
    const errrorFrstnameMsg = ErrorFrst ? 'Required' : ''
    const errorLastNameMsg = errorLast ? 'Required' : ''
    const FrstnameErrorInputClass = ErrorFrst ? 'error-input-ele' : ''
    const LastNameErrorInputClass = errorLast ? 'error-input-ele' : ''
    return (
      <form onSubmit={this.submitFile}>
        <label className="labelEle" htmlFor="frstname">
          FIRST NAME
        </label>
        <br />
        <input
          onChange={this.changeinput}
          onBlur={this.FrstblurFunc}
          className={`input-ele ${FrstnameErrorInputClass}`}
          id="frstname"
          placeholder="FIRST NAME"
        />
        <p className="error-para">{errrorFrstnameMsg}</p>
        <br />
        <label className="labelEle" htmlFor="frstname">
          LAST NAME
        </label>

        <br />
        <input
          onChange={this.onChangeLast}
          onBlur={this.blurLastName}
          className={`input-ele ${LastNameErrorInputClass}`}
          id="frstname"
          placeholder="LAST NAME"
        />
        <p className="error-para">{errorLastNameMsg}</p>
        <br />
        <div className="btnCont">
          <button className="btn" type="submit">
            Submit
          </button>
        </div>
      </form>
    )
  }

  render() {
    const {submitClicked} = this.state
    return (
      <div className="main">
        <h1 className="head">Registration</h1>
        <div className="card">
          {submitClicked ? this.submitView() : this.registerRender()}
        </div>
      </div>
    )
  }
}

export default RegistrationForm

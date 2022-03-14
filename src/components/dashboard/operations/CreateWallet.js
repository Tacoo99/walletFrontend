import React, { Component } from "react";
import axios from "axios";

class CreateWallet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      accountNumber: "",
      description: "",
      priority: "",
    };
  }

  changeHandler = (event, fieldName) => {
    this.setState({
      [fieldName]: event.target.value,
    });
  };

  submitHandler = (event) => {
    const newWallet = {
      name: this.state.name,
      accountNumber: this.state.accountNumber,
      description: this.state.description,
      priority: this.state.priority,
    };
    axios
      .post("http://localhost:8080/wallet", newWallet)
      .then(() => {
        alert("Portfel został utworzony");
      })
      .catch(() => {
        alert("Błąd podczas tworzenia portfela");
      });
    event.preventDefault();
  };
  render() {
    return (
      <div class="project">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h5 className="display-4 text-center">Dodaj portfel</h5>
              <hr />
              <form onSubmit={(event) => this.submitHandler(event)}>
                <div className="form-group m-2">
                  <input
                    type="text"
                    onChange={(event) => this.changeHandler(event, "name")}
                    className="form-control form-control-lg"
                    id="validationCustom01"
                    placeholder="Nazwa konta"
                    required
                  />
                </div>
                <div className="form-group m-2">
                  <input
                    type="text"
                    onChange={(event) =>
                      this.changeHandler(event, "accountNumber")
                    }
                    className="form-control form-control-lg"
                    id="validationCustom01"
                    placeholder="Numer konta"
                    required
                  />
                </div>
                <div className="form-group m-2">
                  <textarea
                    onChange={(event) =>
                      this.changeHandler(event, "description")
                    }
                    className="form-control form-control-lg"
                    placeholder="Opis"
                    required
                  ></textarea>
                </div>
                <div className="form-group m-2">
                  <select
                    required
                    onChange={(event) => this.changeHandler(event, "priority")}
                    className="form-control form-control-lg"
                  >
                    <option value="">Priorytet</option>
                    <option value={3}>Wysoki</option>
                    <option value={2}>Średni</option>
                    <option value={1}>Niski</option>
                  </select>
                </div>
                <input
                  type="submit"
                  className="btn btn-primary btn-block m-2"
                  value="Utwórz"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateWallet;

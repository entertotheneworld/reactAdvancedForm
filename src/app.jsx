import React from 'react';
import styled from 'styled-components';
import Wallets from './config/wallet';
import Coins from './config/coins';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedWallet: '',
      selectedCoin: '',
      totalSpent: '',
      fees: '',
      quantities: '',
      leverage: '',
      clickedWallet: undefined,
      clickedCoin: undefined,
    };
    this.selectedWallet = this.selectedWallet.bind(this);
    this.selectedCoin = this.selectedCoin.bind(this);
    this.handleFees = this.handleFees.bind(this);
    this.handleLeverage = this.handleLeverage.bind(this);
    this.handleLeverage = this.handleLeverage.bind(this);
    this.selectedCoin = this.selectedCoin.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
    this.multistepsFormProgressRef2 = React.createRef();
    this.multistepsFormProgressRef3 = React.createRef();
    this.cardMultistepsFormProgressRef2 = React.createRef();
    this.cardMultistepsFormProgressRef3 = React.createRef();
    this.cardMultistepsFormProgressRef1 = React.createRef();
  }

  selectedWallet(event) {
    this.setState({
      selectedWallet: event.target.value,
    });
  }

  selectedCoin(event) {
    this.setState({
      selectedCoin: event.target.value,
    });
  }

  formSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }

  handleFees(event) {
    this.setState({
      fees: event.target.value,
    });
  }

  handleLeverage(event) {
    this.setState({
      leverage: event.target.value,
    });
  }

  handleQuantities(event) {
    this.setState({
      quantities: event.target.value,
    });
  }

  handleTotalSpent(event) {
    this.setState({
      totalSpent: event.target.value,
    });
  }

  render() {
    // CSS
    const GridTransaction = styled.div`
      box-sizing: border-box;
      display: flex;
      flex-flow: row wrap;
      margin-top: 5px;
      width: 100%;
      gap: 16px;
      @media (max-width: 1768px) {
      }
    `;

    const CardTransaction = styled.div`
      position: relative;
      color: rgb(55, 65, 81);
      transition: all 250ms ease 0s;
      border: 1px solid rgb(209, 213, 219) !important;
      border-radius: 0.25rem;
      flex: 1 0 auto;
      width: 30%;
      cursor: pointer;

      :hover {
        transform: translateY(-2px);
        background-color: rgb(243, 244, 246);
        cursor: pointer;
        box-shadow: rgb(60 66 87 / 12%) 0px 0.438rem 0.875rem, rgb(0 0 0 / 8%) 0px 0.188rem 0.375rem;
      }

      @media (max-width: 1768px) {
        width: 49%;
      }
    `;

    const CardTransactionLabel = styled.label`
      width: 100%;
      margin: 0; 
    `;
    const CardTransactionContent = styled.div`
      padding-left: 16px;
      padding-top: 8px;
      padding-bottom: 8px;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
    `;

    const CardTransactionInfo = styled.div`
      display: flex;
      align-items: center;
    `;

    const CardTransactionLogo = styled.div`
      margin: 8px;
      height: 30px;
      display: inline-flex;
      position: relative;
    `;

    const CardTransactionTitle = styled.p`
      paddingLeft: 0.25rem; 
      margin: 0;
    `;

    // Display Step Form
    const handleSecondStep = () => {
      this.multistepsFormProgressRef2.current.classList.add('js-active');
      this.cardMultistepsFormProgressRef2.current.classList.add('js-active');
      this.cardMultistepsFormProgressRef1.current.classList.remove('js-active');
    };

    const handleReturnFirstStep = () => {
      this.multistepsFormProgressRef2.current.classList.remove('js-active');
      this.cardMultistepsFormProgressRef2.current.classList.remove('js-active');
      this.cardMultistepsFormProgressRef1.current.classList.add('js-active');
    };

    const handleThirdStep = () => {
      this.multistepsFormProgressRef3.current.classList.add('js-active');
      this.cardMultistepsFormProgressRef3.current.classList.add('js-active');
      this.cardMultistepsFormProgressRef2.current.classList.remove('js-active');
    };

    const handleReturnSecondStep = () => {
      this.multistepsFormProgressRef3.current.classList.remove('js-active');
      this.cardMultistepsFormProgressRef3.current.classList.remove('js-active');
      this.multistepsFormProgressRef2.current.classList.add('js-active');
      this.cardMultistepsFormProgressRef2.current.classList.add('js-active');
    };

    // Form Data Validation
    const ButtonThirdStep = () => {
      if (this.state.selectedCoin === '') {
        return (
          <button className="btn bg-gradient-light ms-auto mb-0 js-btn-next" type="button" title="Next">Next</button>
        );
      }
      return (
        <button onClick={handleThirdStep} className="btn bg-gradient-dark ms-auto mb-0 js-btn-next" type="button" title="Next">Next</button>
      );
    };

    const ButtonSecondStep = () => {
      if (this.state.selectedWallet === '') {
        return (
          <button className="btn bg-gradient-light ms-auto mb-0 js-btn-next" type="button" title="Next">Next</button>
        );
      }
      return (
        <button onClick={handleSecondStep} className="btn bg-gradient-dark ms-auto mb-0 js-btn-next" type="button" title="Next">Next</button>
      );
    };

    const ButtonSubmit = () => {
      if (this.state.fees === '' || this.state.leverage === '' || this.state.totalSpent === '' || this.state.quantities === '') {
        return (
          <button className="btn bg-gradient-light ms-auto mb-0 js-btn-next" type="button" title="Next">Add Transaction</button>
        );
      }
      return (
        <button className="btn bg-gradient-dark ms-auto mb-0" type="submit" title="Send">Add Transaction</button>
      );
    };

    return (
      <div className="container-fluid py-4">
        <div className="row">
          <div className="col-12">
            <h3 className="mt-5 text-center">Add New Transaction</h3>
            <div className="multisteps-form mb-5">
              <div className="row">
                <div className="col-12 col-lg-8 mx-auto my-5">
                  <div className="multisteps-form__progress">
                    <button className="multisteps-form__progress-btn js-active" type="button" title="User Info">
                      <span>Exchange or Wallet</span>
                    </button>
                    <button ref={this.multistepsFormProgressRef2} className="multisteps-form__progress-btn" type="button" title="Address">
                      <span>Cryptocurrency</span>
                    </button>
                    <button ref={this.multistepsFormProgressRef3} className="multisteps-form__progress-btn" type="button" title="Order Info">
                      <span>Transaction Details</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-lg-8 m-auto">
                  <form onSubmit={this.formSubmit} className="multisteps-form__form">
                    <div ref={this.cardMultistepsFormProgressRef1} className="card multisteps-form__panel p-3 border-radius-xl bg-white js-active" data-animation="FadeIn">
                      <div className="row">
                        <div className="col-10 mx-auto text-center">
                          <h5 className="font-weight-normal">Select your exchange or wallet</h5>
                          <p>Choose the wallet on which you want to make a transaction</p>
                        </div>
                      </div>
                      <hr className="horizontal dark my-3" />
                      <h6 className="mb-0" style={{ float: 'left', marginTop: '16px' }}>Most Popular</h6>
                      <GridTransaction>
                        {Wallets.popular
                          .map((wallet, index) => (
                            <CardTransaction
                              key={wallet.name}
                              className={index === this.state.clickedWallet ? 'card-transaction_selected' : null}
                            >
                              <CardTransactionLabel>
                                <CardTransactionContent>
                                  <CardTransactionInfo>
                                    <CardTransactionLogo><img className="card-transaction_logo" src={wallet.image} alt="ok" /></CardTransactionLogo>
                                    <input
                                      type="radio"
                                      value={wallet.name}
                                      checked={this.state.selectedWallet === wallet.name}
                                      onChange={this.selectedWallet}
                                      style={{ display: 'none' }}
                                      onClick={() => this.setState({ clickedWallet: index })}
                                    />
                                    <CardTransactionTitle>{wallet.name}</CardTransactionTitle>
                                  </CardTransactionInfo>
                                  <div>
                                    {wallet.type.map((type) => (
                                      <span key={type} className="badge badge-secondary ms-auto" style={{ marginRight: '8px', fontSize: '9px' }}>{type}</span>
                                    ))}
                                  </div>
                                </CardTransactionContent>
                              </CardTransactionLabel>
                            </CardTransaction>
                          ))}
                      </GridTransaction>
                      <div className="button-row d-flex mt-4">
                        <ButtonSecondStep />
                      </div>
                    </div>
                    <div ref={this.cardMultistepsFormProgressRef2} className="card multisteps-form__panel p-3 border-radius-xl bg-white" data-animation="FadeIn">
                      <div className="row text-center">
                        <div className="col-10 mx-auto">
                          <h5 className="font-weight-normal">Select your cryptocurrency</h5>
                          <p>Choose the cryptocurrency on which you want to make a transaction</p>
                        </div>
                      </div>
                      <hr className="horizontal dark my-3" />
                      <div className="multisteps-form__content">
                        <GridTransaction>
                          {Coins.popular.map((coin, index) => (
                            <CardTransaction
                              key={coin.name}
                              className={index === this.state.clickedCoin ? 'card-transaction_selected' : null}
                            >
                              <CardTransactionLabel>
                                <CardTransactionContent>
                                  <CardTransactionInfo>
                                    <CardTransactionLogo><img className="card-transaction_logo" src={coin.image} alt="ok" /></CardTransactionLogo>
                                    <input
                                      type="radio"
                                      value={coin.name}
                                      checked={this.state.selectedCoin === coin.name}
                                      onChange={this.selectedCoin}
                                      style={{ display: 'none' }}
                                      onClick={() => this.setState({ clickedCoin: index })}
                                    />
                                    <CardTransactionTitle>{coin.name}</CardTransactionTitle>
                                  </CardTransactionInfo>
                                </CardTransactionContent>
                              </CardTransactionLabel>
                            </CardTransaction>
                          ))}
                          <div className="button-row d-flex mt-4">
                            <button onClick={handleReturnFirstStep} className="btn bg-gradient-dark mb-0 js-btn-prev" type="button" title="Prev">Prev</button>
                            <ButtonThirdStep />
                          </div>
                        </GridTransaction>
                      </div>
                    </div>
                    <div ref={this.cardMultistepsFormProgressRef3} className="card multisteps-form__panel p-3 border-radius-xl bg-white" data-animation="FadeIn">
                      <div className="row text-center">
                        <div className="col-10 mx-auto">
                          <h5 className="font-weight-normal">Transaction Details</h5>
                        </div>
                      </div>
                      <hr className="horizontal dark my-3" />
                      <div className="multisteps-form__content">
                        <div className="tab-content" id="v-pills-tabContent">
                          <div className="tab-pane fade show position-relative active height-400 border-radius-lg" id="cam1" role="tabpanel" aria-labelledby="cam1" style={{ backgroundSize: 'cover' }}>
                            <div className="row text-start">
                              <div className="col-5 col-md-5 m-auto mt-3">
                                <label>Total spent</label>
                                <input onChange={this.handleTotalSpent.bind(this)} className="multisteps-form__input form-control" type="number" />
                              </div>
                            </div>
                            <div className="row text-start">
                              <div className="col-5 col-md-5 m-auto mt-3">
                                <label>Quantities</label>
                                <input onChange={this.handleQuantities.bind(this)} className="multisteps-form__input form-control" type="number" />
                              </div>
                            </div>
                            <div className="row text-start">
                              <div className="col-5 col-md-5 m-auto mt-3">
                                <label>Fees</label>
                                <input onChange={this.handleFees.bind(this)} className="multisteps-form__input form-control" type="number" />
                              </div>
                            </div>
                            <div className="row text-start">
                              <div className="col-5 col-md-5 m-auto mt-3">
                                <label>Leverage</label>
                                <input onChange={this.handleLeverage.bind(this)} className="multisteps-form__input form-control" type="number" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="button-row d-flex mt-4 col-12">
                            <button onClick={handleReturnSecondStep} className="btn bg-gradient-dark mb-0 js-btn-prev" type="button" title="Prev">Prev</button>
                            <ButtonSubmit />
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

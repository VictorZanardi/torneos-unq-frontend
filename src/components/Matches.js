import React, { Component } from 'react';
import axios from 'axios';

class Matches extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      matches: [],
      matchWeek: 0
    };
  }

  componentDidMount() {
    fetch('/api/matchesPlayed')
      .then(response => response.json())
      .then(data =>
        this.setState({ matches: data }))
      .catch(error => { console.log(error.response) });

    fetch('/api/currentMatchWeek')
      .then(response => response.json())
      .then(data =>
        this.setState({ matchWeek: data }))
      .catch(error => { console.log(error.response) });
  }

  render() {

    const { matches } = this.state;
    const { matchWeek } = this.state;

    var liMatchWeek = [];
    var divMatches = [];
    for (var i = 1; i <= matchWeek; i++) {
      liMatchWeek.push(
        <li className="nav-item">
          <a className="nav-link" id="pills-home-tab" data-toggle="pill" href={"#pills-home" + i} role="tab" aria-controls="pills-home" aria-selected="true">Fecha {i}</a>
        </li>
      );
      divMatches.push(
        <div className="tab-pane fade show active" id={"pills-home" + i} role="tabpanel" aria-labelledby="pills-home-tab">
          <div className="row align-items-center">
            <div className="col-md-12">
              {matches.map((match, index) => {

                return match.matchweek == i ?
                  <div className="row bg-white align-items-center ml-0 mr-0 py-4 match-entry">
                    <div className="col-md-4 col-lg-4 mb-4 mb-lg-0">
                      <div className="text-center text-lg-left">
                        <div className="d-block d-lg-flex align-items-center">

                          <div className="text">
                            <h3 className="h5 mb-0 text-black">{match.teamA.name}</h3>
                            <span className="text-uppercase small country">Argentina</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-lg-4 text-center mb-4 mb-lg-0">
                      <div className="d-inline-block">
                        <div className="bg-black py-2 px-4 mb-2 text-white d-inline-block rounded"><span className="h5">{match.goalsTeamA}:{match.goalsTeamB}</span></div>
                      </div>
                    </div>
                    <div className="col-md-4 col-lg-4 text-center text-lg-right">
                      <div className>
                        <div className="d-block d-lg-flex align-items-center">

                          <div className="text order-1 w-100">
                            <h3 className="h5 mb-0 text-black">{match.teamB.name}</h3>
                            <span className="text-uppercase small country">Argentina</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  : <div></div>
              })}
            </div>
          </div>
        </div>
      );
    }

    return (

      <div className="row">
        <div className="col-md-12">
          <h2 className="h6 text-uppercase text-black font-weight-bold mb-3">Fechas jugadas</h2>
          <div className="site-block-tab">
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
              {liMatchWeek}
            </ul>
            <div className="tab-content" id="pills-tabContent">
              {divMatches}
            </div>
          </div>
        </div>
      </div>
    )
  }
} export default Matches;
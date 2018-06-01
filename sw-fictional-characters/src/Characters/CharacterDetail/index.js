import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CharacterDetail extends Component {
    constructor(props)  {
        super(props);
        this.state = { 
          detail: {},
          loading: true
        };
      }

      componentDidMount() {
        // const planetCalls = this.props.planetUrls.map(url => {
        //     return fetch(url).then(response => response.json())
        // })


        // console.log(this.props.match.params.filmId);
        const characterId = this.props.match.params.characterId;
        console.log("Character Id is: ", characterId);

        fetch(`https://swapi.co/api/people/${characterId}/`)
        .then(response => response.json())
        .then(data => {
          console.log(data)
          this.setState((prevState, props) => {
            return { 
                detail: data,
                loading: false
            };
          });
        })
        .catch(error => {
            console.log(error)
            this.setState((prevState, props) => {
              return {
                loading: false,
                error: 'Error when retrieving character details'
              };
            })
          });
        // .catch(error => console.log(error));
    }

    render() {
        console.log("Route ", this.props.match.params.characterId);
        const { name, height, mass, 
                hair_color, skin_color, 
                eye_color, birth_year, gender } = this.state.detail;

        return (
          

            <div>
                <nav>
                  <ul className="sw-navigation-bar">
                    <li> 
                        <Link to="/">Home</Link>
                    </li>
                    {/* <li> 
                        <Link to="/About">About</Link>
                    </li> */}
                  </ul>
                </nav>

                 <h3> Character Detail Page </h3>
                <h4>{name}</h4>
                <p>Gender: {gender}</p>
                <p>Height: {height}</p>
                <p>Weight: {mass}</p>
                <p>Eye-color: {eye_color}</p>
                <p>Hair-color: {hair_color}</p>
                <p>Skin-color: {skin_color}</p>
                <p>Birth-year: {birth_year}</p>
                {/* <h3>This is film detail.</h3> */}
            </div>
        );
    }
}

export default CharacterDetail;
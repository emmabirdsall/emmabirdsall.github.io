import React from 'react';

class Cats extends React.Component {

    state = { newData: []}

  //Call componentDidMount method and use fetch to get json object from URL
  //Set json object as the value of the catData array in state
    componentDidMount() { 
        let key = "nBbPPunbVg4VtwHbzj4sT34JcAwWIPTnBNQRTvtmroSOAy6oQw";
        let secret= "ypyAwTXGKc3scruPl8opOR0o59HzGRW86a9blyWU";

        //Fetch request to get OAuth token
        fetch('https://api.petfinder.com/v2/oauth2/token', {
        method: 'POST',
        body: 'grant_type=client_credentials&client_id=' + key + '&client_secret=' + secret,
        headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
        }})     
        //Return response as JSON
        .then((resp) => resp.json())
        //Log the token data
        .then((data) => {
            console.log('token', data)

            //Return a second API call using token to get data
            return fetch('https://api.petfinder.com/v2/animals?type=cat&status=adoptable&location=' + this.props.zipcode + '&distance=' + this.props.radius, {
                headers: {
                  'Authorization': data.token_type + ' ' + data.access_token,
                  'Content-Type': 'application/x-www-form-urlencoded'
                } 
            })//Closing for second Fetch request

            //Return second fetch response as JSON
            .then((resp) => resp.json())
            //Log the pet data
            .then((data) => {
                console.log('pets', data)
                //Set state equal to data
                this.setState({newData : [data]})
            });
        })//Closing for data response
    }//Closing for componentDidMount

    render() {
        //Set data from API equal to new variable
        let catData = this.state.newData[0];
        //Check new variable
        console.log(catData);

        //Conditional rendering of object to avoid TypeError of values being undefined
        if (!catData) {
            return (
                <div className="background--error">
                    <div className="pet__container--error">
                        <p className="pet__info">Your cats should load within a few seconds. If this message persists, try expanding your search radius.</p>
                    </div>
                </div>
            )
        }  

        return (
            <article className="pet">
                {catData.animals.map(catData => (
                    <div key={catData.id} className="pet__container">
                        <h3 className="pet__header">{catData.name}</h3>
                        <p>Age: {catData.age}</p>
                        <p className="pet__location">{catData.contact.address.city}, {catData.contact.address.state}</p>
                        <img src={catData.primary_photo_cropped !== null ? catData.primary_photo_cropped.small : ''} alt="Sorry you can't see how cute this cat is!" className="pet__photo"/>
                        <p className="pet__info">{catData.Age}</p>
                        <p className="pet__info">{catData.breeds.primary}</p>
                        <p className="pet__info">{catData.description}</p>
                        <p>Click to learn more about <a href={catData.url} className="pet__link">{catData.name}</a>.
                        </p>
                    </div>
                ))}
            </article>
        );
    }
}
    
export default Cats;
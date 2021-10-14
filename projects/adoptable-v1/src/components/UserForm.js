import React from 'react';

const UserForm = (props) => (
  <form className="form home__item home__container" onSubmit={props.onSubmit}>
    <label className="form__label">Zip Code: <input className="form__input" type="text" onChange={props.onChange}/></label><br />
    <label className="form__label">Radius (in miles): <input className="form__input" type="text" onInput={props.onInput}/></label><br />
    <button className="form__button" type="submit">Submit</button>
  </form>
);

export default UserForm;
import FacebookLogin from 'react-facebook-login';
import { Card, Image } from 'react-bootstrap';
import React, { useState } from 'react';
import { ReactSession }  from 'react-client-session';

function Facebook() {

  const redirect = () => {
    window.setTimeout(function () {
      window.location.href = 'http://localhost:3000/account';
    }, 3000);

  }

  const [login, setLogin] = useState(false);
  const [data, setData] = useState({});
  const [picture, setPicture] = useState('');

  const responseFacebook = (response) => {
    console.log(response);
    setData(response);
    setPicture(response.picture.data.url);
    if (response.accessToken) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }

  return (

    <div class="container">
      <div class="row">
        <div class="col-md-12 d-flex justify-content-center">
          <Card style={{ width: '600px' }}>
            <Card.Header>
              {!login &&
                <FacebookLogin
                  appId="517116913535389"
                  autoLoad={true}
                  fields="name,picture"
                  scope="public_profile"
                  callback={responseFacebook}
                  icon="fa-facebook" />
              }

              {login && ReactSession.set("loggedUser", data.name)}

              {login &&
                <Image src={picture} roundedCircle />

              }

            </Card.Header>
            {login &&
              <Card.Body>
                <Card.Title>Witaj {data.name}</Card.Title>
                {ReactSession.set(data.name, "0")}
                <Card.Body>Zalogowano pomyślnie, przekierowanie nastąpi za 3 sekundy</Card.Body>
              </Card.Body>
            }
          </Card>
        </div>
      </div>

      {login && redirect()}

    </div>

  );
}

export default Facebook;

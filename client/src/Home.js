import React from 'react'
import { useKeycloak } from '@react-keycloak/web'

function Home() {
    const { keycloak, initialized } = useKeycloak()
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>ELMSD Form Keycloak Sample</h1>
                </div>
            </div>
            {initialized ? (
                <div>
                    <div className="row">
                        <div className="col-md-12">
                            {!keycloak.authenticated ? 
                                <div>
                                    <p>Please login</p>
                                    <p><button type="button" className="btn btn-lg btn-primary" onClick={() => keycloak.login({ idpHint: 'idir' })}>Login</button><br /></p>
                                </div>
                                :
                                <div>
                                    <p>Welcome {keycloak.tokenParsed.given_name}</p>
                                    {keycloak.hasResourceRole("elmsd-form") ?
                                    <div>
                                        <a href="/form" className="btn btn-lg btn-dark">Protected Form</a><br/><br/>
                                    </div>
                                    :
                                        <p>You don't have any options. Unauthorized</p>
                                    }
                                </div>
                            }
                        </div>
                    </div>
                </div>
            )
                :
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            }
        </div>
    )
}

export default Home;
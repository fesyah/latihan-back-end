import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import Jumbotron from 'react-bootstrap/Jumbotron'


class Home extends React.Component {
    render () {
        return (
            <div className="home-container">
                <Jumbotron>
                    <h1>Home Page</h1>
                        <p>
                        <Link to="/product">
                            <Button>Go To Product</Button>
                        </Link>
                        </p>
                </Jumbotron>
            </div>
        )
    }
}

export default Home
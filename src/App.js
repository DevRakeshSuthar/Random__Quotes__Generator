import React, { Component } from "react";
import { Button, Card, CardContent, Typography } from "@material-ui/core";
import "./App.css";
import getQuote from "./getQuote";

class App extends Component {
  state = {
    quote: "love or hate but u can't ignore people",
    author: "aarVee",
  };

  handleClick = () => {
    getQuote().then((data) => {
      let dataCopy = JSON.parse(data);
      this.setState({
        quote: dataCopy[0].quote,
        author: dataCopy[0].author,
      });
    });
  };

  render() {
    return (
      <div className="App">
        <Typography variant="h2">Random Quotes Generator</Typography>
        <Card className="card">
          <CardContent>
            <Typography variant="h4">{this.state.quote}</Typography>
            <Typography className="margin-top" color="textSecondary">
              {this.state.author}
            </Typography>
            <hr />
            <Button
              className="margin-top"
              color="primary"
              variant="outlined"
              onClick={() => this.handleClick()}
            >
              Click to Change
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default App;

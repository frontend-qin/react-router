import React, { Component } from 'react';
import { getBanner } from '../service/home';
import axios from 'axios';
const CancelToken = axios.CancelToken;
const source = CancelToken.source();

class About extends Component {
  componentDidMount() {
    getBanner({}).then((res) => {
      console.log(res);
    });
  }
  render() {
    return <>About</>;
  }
}
export default About;

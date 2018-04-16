import React, { Component, Fragment } from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts'

import axios from 'axios'
import Button from '../components/Button'
import Input from '../components/Input'

const HIGHCOST = 0.0575
const LOWCOST = 0.078
const initialFundVal = 1000
const years = 30

function fundPerf() {
  const results = []
  let futureValueLowCost = initialFundVal
  let futureValueHighCost = initialFundVal

  for (let i = 0; i <= years; i++) {
    const data = { name: i, lowCost: 0, highCost: 0, amt: 0 }
    if (i === 0) {
      futureValueHighCost = futureValueHighCost * (1 - HIGHCOST) // simulate saleload
    } else {
      futureValueHighCost = Math.round(futureValueHighCost * (1 + HIGHCOST))
      futureValueLowCost = Math.round(futureValueLowCost * (1 + LOWCOST))
    }
    data.highCost = futureValueHighCost
    data.lowCost = futureValueLowCost
    data.amt = data.highCost + data.lowCost
    results.push(data)
  }
  return results
}

class IndexPage extends Component {
  state = {
    prelaunchEmail: '',
    prelaunchEmailSuccess: false,
    prelaunchEmailFail: false,
    letUsHelpYou: false,
  }

  handlePrelaunchEmailChange = event => {
    this.setState({
      prelaunchEmail: event.target.value,
      prelaunchEmailSuccess: false,
      prelaunchEmailFail: false,
    })
  }

  handlePrelaunchEmailSubmit = async event => {
    event.preventDefault()

    try {
      const res = await axios.post(
        'https://exrosqik52.execute-api.ap-southeast-1.amazonaws.com/dev/addToBetaUserList',
        { emailAddress: this.state.prelaunchEmail }
      )
      this.setState({ prelaunchEmailSuccess: true, prelaunchEmail: '' })
    } catch (e) {
      const errStatusCode = e.response.status
      if (errStatusCode === 400) {
        this.setState({
          prelaunchEmailSuccess: false,
          prelaunchEmailFail: true,
        })
      } else {
        this.setState({
          prelaunchEmailSuccess: false,
          prelaunchEmailFail: false,
          letUsHelpYou: true,
        })
      }
    }
  }
  render() {
    const { data } = this.props
    return (
      <Fragment>
        <section className="hero-section">
          <div className="container">
            <div className="flex-row">
              <div className="g-c6 g-c6--md">
                <h1 className="hero-headline">Keep more of your money</h1>
                <p className="mb-3 hero-subheadline">
                  A place that guarantees your fair share of stock market
                  returns by purposely keeping your costs and taxes low.
                </p>
                <div>
                  <p>Subscribe below to get early access to the beta.</p>
                  <form
                    onSubmit={this.handlePrelaunchEmailSubmit}
                    autoComplete="off"
                  >
                    <div className="flex-row prelaunch-form">
                      <Input
                        type="email"
                        className="prelaunch-form__email-input"
                        name="email"
                        required
                        placeholder="Enter your email"
                        value={this.state.prelaunchEmail}
                        onChange={this.handlePrelaunchEmailChange}
                      />
                      <Button
                        className="prelaunch-form__submit-btn"
                        type="submit"
                      >
                        Get Notified
                      </Button>
                    </div>
                  </form>
                  {this.state.prelaunchEmailSuccess && (
                    <p>Neato! We'll be in touch soon. 🎉</p>
                  )}
                  {this.state.prelaunchEmailFail && (
                    <p>Please try a different email address.</p>
                  )}
                  {this.state.letUsHelpYou && (
                    <p>
                      Let us help you.{' '}
                      <a href="mailto:kwei88@gmail.com?subject=Trouble with signing up to the Aryora beta release">
                        Contact us.
                      </a>
                    </p>
                  )}
                </div>
              </div>
              <div className="g-c6 g-c6--md" style={{ position: 'relative' }}>
                <Img
                  title="wholesome hug"
                  alt="Hugging with your significant other"
                  sizes={data.heroImg1.sizes}
                  imgStyle={{ zIndex: 10 }}
                  outerWrapperClassName="hero-img-1"
                />
                <Img
                  // imgStyle={{ transform: 'translate3d(-40px, -100%, 0px)' }}
                  title="travelling the world"
                  alt="Life is about leisure"
                  sizes={data.heroImg2.sizes}
                  outerWrapperClassName="hero-img-2"
                />
                <Img
                  // imgStyle={{ transform: 'translate3d(-40px, -100%, 0px)' }}
                  title="travelling the world"
                  alt="Life is about leisure"
                  sizes={data.heroImg3.sizes}
                  outerWrapperClassName="hero-img-3"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="one-of-us-section">
          <div className="container container-narrower one-of-us-container">
            <div className="">
              <h1 className="f-size-3">Not a stock picker wizard,</h1>
              <h1 className="mb-0 f-size-3">
                but need to achieve financial security?
              </h1>
              <h2 className="mb-3 f-size-2">Good, now you are one of us.</h2>
            </div>
            <div>
              <h4 className="f-w-600">You are not missing out</h4>
              <p className="p-quote">
                90% of actively managed funds underperformed their benchmark
                indexes from 2001 to 2016.
              </p>
            </div>
          </div>
        </section>
        <section className="cost-matters-section">
          <div className="container cost-matters-container">
            <h1 className="f-size-3 cost-matters-title mb-0">Cost Matters.</h1>
            <ResponsiveContainer width="100%" height={500}>
              <LineChart
                data={fundPerf()}
                margin={{ top: 40, right: 40, left: 40, bottom: 40 }}
              >
                <XAxis
                  hide
                  // tickLine={false}
                  // label={{
                  //   value: 'Years',
                  //   position: 'bottom',
                  //   offset: 10,
                  // }}
                  // // interval={9}
                  // dataKey="name"
                />
                <YAxis
                  hide
                  // label={{
                  //   value: 'Value (RM)',
                  //   position: 'left',
                  //   offset: 20,
                  //   angle: -90,
                  // }}
                  // // interval={1}
                  // tickLine={false}
                />
                <Tooltip labelFormatter={year => `Year: ${year}`} offset={25} />
                <CartesianGrid strokeDasharray="8 8" />
                <Legend
                  iconType="rect"
                  iconSize={35}
                  width={700}
                  verticalAlign="top"
                  wrapperStyle={{ top: 0, left: 40 }}
                />
                <Line
                  dot={false}
                  name="Low-cost Index Funds"
                  type="monotone"
                  dataKey="lowCost"
                  stroke="#8884d8"
                  activeDot={{ r: 8 }}
                  strokeWidth={6}
                />
                <Line
                  strokeWidth={6}
                  dot={false}
                  name="High-cost Unit Trust Funds"
                  type="monotone"
                  dataKey="highCost"
                  stroke="#82ca9d"
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </section>
      </Fragment>
    )
  }
}

export default IndexPage

export const heroImgQuery = graphql`
  query HeroImgQuery {
    heroImg1: imageSharp(id: { regex: "/futureprimitive/" }) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes_withWebp_noBase64
      }
    }
    heroImg2: imageSharp(id: { regex: "/beautifulday/" }) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes_withWebp_noBase64
      }
    }
    heroImg3: imageSharp(id: { regex: "/itsgonnabeokay/" }) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes_withWebp_noBase64
      }
    }
  }
`

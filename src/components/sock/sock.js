import React from 'react'
import { Link } from 'gatsby'
import styles from './sock.module.css'
import { StaticQuery } from 'gatsby'
import {
  EmailInput,
  InputDiv,
  DefaultContainer,
  SockForm
} from './sock-styles'
import { Button } from '../base/base-components'
import {
  BaseContainer
} from '../base/base-components'

export default () => (
  <StaticQuery query={graphql`
    query SockQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `
  }
    render={data => (
      <BaseContainer>
          <SockForm action="https://formspree.io/f/xdopejzj" method="POST">
            <EmailInput placeholder="enter your email address" type="email" name="email"></EmailInput>
            <Button as="input" type="submit" name="submit"></Button>
          </SockForm>
      </BaseContainer>
    )} />
)
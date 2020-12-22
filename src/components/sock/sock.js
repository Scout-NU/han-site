import React from 'react'
import {
  EmailInput,
  SockHeaderContainer,
  GoldBar,
  SockForm
} from './sock-styles'
import { Button } from '../base/base-components'
import { BaseMarginContainer } from '../base/base-components'
import { HANh2, HANsubh3 } from '../base/fonts'

export default () => (
      <BaseMarginContainer>
        <SockHeaderContainer>
          <GoldBar />
          <HANh2>Keep in touch</HANh2>
        </SockHeaderContainer>
        <SockForm action="https://formspree.io/f/xdopejzj" method="POST">
          <EmailInput placeholder="enter your email address" type="email" name="email"></EmailInput>
          <Button as="input" type="submit" name="submit"></Button>
        </SockForm>
      </BaseMarginContainer>
)
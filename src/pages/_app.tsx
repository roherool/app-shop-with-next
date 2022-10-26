import { AppProps } from "next/app"
import Image from 'next/image'

import { globalStyles } from "../styles/global"

import * as s from '../styles/pages/app.styles'

import logoImg from "../assets/logo.svg"

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <s.Container>
      <s.Header>
        <Image src={logoImg} alt="" />
      </s.Header>
      <Component {...pageProps} />
    </s.Container>
  )
}

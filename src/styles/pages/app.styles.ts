import { styled } from "../stitches.config";

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column',
  justifyContent: 'center',
  minHeight: '100vh',
})

export const Header = styled('header', {
  margin: '0 auto',
  maxWidth: 1180,
  padding: '2rem 0',
  width: '100%',
})
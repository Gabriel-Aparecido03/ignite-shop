import { styled } from "..";

export const Container = styled('div',{
  display : "flex",
  flexDirection: "column",
  alignContent: "flex-start",
  justifyContent : "center",
  minHeight : "100vh"
})

export const Header = styled('header',{
  padding : "2rem 0",
  width : "100%",
  maxWidth : 1180,
  marginInline : 'auto',
  display : 'flex',
  alignItems : 'center',
  justifyContent : 'space-between'
})

export const Button = styled('button',{
  position : 'relative',
  backgroundColor: '$gray800',
  display : 'flex',
  justifyContent: 'center',
  alignItems : 'center',
  width : '3rem',
  height : '3rem',
  border: 'none',
  borderRadius : 6,
  cursor : 'pointer',
  svg: {
    color : '$gray100',
  },

  span : {
    position : 'absolute',
    width : '1.5rem',
    height : '1.5rem',
    top : 'calc(0% - 0.75rem)',
    right : 'calc(0% - 0.75rem)',
    backgroundColor : '$green300',
    color : '$gray100',
    fontWeight : 'bold',
    display : 'flex',
    justifyContent : 'center',
    alignItems : 'center',
    borderRadius : 999,


    '&:hover' : {
      opacity : 0.9,
    }
  }
})
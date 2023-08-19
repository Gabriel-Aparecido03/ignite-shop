import { styled } from "..";

export const SuccessContainer = styled('main',{
  display : 'flex',
  flexDirection: 'column',
  alignItems : 'center',
  justifyContent : 'center',
  height : 556,
  margin : '0 auto',

  h1: {
    fontSize : '$2xl',
    color : '$gray100'
  },

  p: {
    fontSize : '$xl',
    color : '$gray300',
    maxWidth : 360,
    marginTop : '2rem',
    lineHeight : 1.4
  },
  
  a: {
    display : 'block',
    marginTop : '5rem',
    fontSize : '$lg',
    textDecoration : 'none',
    color : '$green500',
    fontWeight : 'bold',

    '&:hover': {
      color : '$green500',
    }
  }
})

export const ImagesContainer = styled('div',{
  display : 'flex',
  height : 230,
  justifyContent : 'center',
  'div:not(:first-child)' : {
    div : {
      left : 'calc( 0% - 46px)'
    }
  }
})

export const WrapperImageContaier = styled('div',{
  position : 'relative',
  height : 145,
  width : 145,
})

export const ImageContainer = styled('div',{
  position : 'absolute',
  marginTop : '4rem',
  width : 130,
  height : 130,
  borderRadius : 999,
  padding : '0.25rem',
  background: 'linear-gradient(180deg,#1ea483 0%,#7465d4 100%)',
  boxShadow : '0 0 10px 10px rgba(0,0,0,0.3)',
  display : 'flex',
  alingItems : 'center',
  justifyContent : 'center',

  img : {
    objectFit : 'cover'
  }
})
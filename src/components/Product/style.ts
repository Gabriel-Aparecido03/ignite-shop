import { styled } from "@/styles";

export const ProductContaner = styled('div',{
  display: 'flex',
  alignItems : 'stretch',
  justifyContent : 'center',
  gap : '1.25rem',
  height : 94,
})

export const ProductContainerImage = styled('div',{
  background: 'linear-gradient(180deg,#1ea483 0%,#7465d4 100%)',
  borderRadius : 8,
  display: 'flex',
  alignItems : 'center',
  justifyContent : 'center',
  padding : 4
})

export const ProductContainerInfos = styled('div',{
  height : '100%',
  flex : 1,
  display : 'flex',
  flexDirection : 'column',
  justifyContent : 'space-between',
  alignItems : 'flex-start',

  p : {
    color : '$gray300',
    fontSize : '$md',
  },

  span : {
    color : '$gray100',
    fontSize : '$md'
  },

  button : {
    border : 'none',
    background : 'transparent',
    color : '$green500',
    fontSize: '$md',
    transition : 'all 0.2s',

    '&:hover' : {
      cursor : 'pointer',
      color : '$green500'
    }
  }
})
import { styled } from "@/styles";

export const DrawerContainer = styled('div',{
  position : 'fixed',
  height:'100vh',
  right : '0%',
  width: '30rem',
  backgroundColor: '$gray800',
  padding : '3rem',
  display : 'flex',
  flexDirection : 'column',
  justifyContent : 'space-between',

  header : {
    display : 'flex',
    flexDirection : 'column',
    gap : '1rem',
    alignItems : 'flex-start',

    svg : {
      cursor : 'pointer',
    },

    div : {
      width : '100%',
      display : 'flex',
      justifyContent : 'flex-end'
    },

    span : {
      fontSize : '$lg',
      color : '$gray100'
    }
  }
})

export const ProductsContainer = styled('div',{
  display: 'flex',
  gap : '1rem',
  flexDirection : 'column',
  marginTop : '1.5rem'
})

export const SummaryContainer = styled('div',{
  button : {
    padding : '1.25rem 2rem',
    backgroundColor : '$green500',
    textAlign : 'center',
    fontWeight : 'bold',
    fontSize : '$md',
    color : '$gray100',
    border : 'none',
    width : '100%',
    borderRadius : 10,
    marginTop : '3rem',
    transition : 'all 0.2s'
  },

  'button:hover':{
    backgroundColor : '$green300',
    cursor : 'pointer',
  }
})

export const PriceContainer = styled('div',{
  display : 'flex',
  justifyContent : 'space-between',
  marginBottom : '0.2rem',

  span : {
    fontSize : '$sm',
    color : '$gray100'
  },

  p : {
    fontSize : '$md',
    color : '$gray300'
  }
})

export const FinalPriceContainer = styled('div',{
  display : 'flex',
  justifyContent : 'space-between',

  span : {
    fontSize : '$md',
    color : '$gray100',
    fontWeight : 'bold'
  },

  p : {
    fontSize : '$xl',
    color : '$gray100',
    fontWeight : 'bold'
  }
})
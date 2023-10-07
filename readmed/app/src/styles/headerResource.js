export const headerResource = () => {
  
  const showOn = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 100,
      transition: {
        duration: 3,            
      }
    }
  }

  const showLeftMove = {
    initial: {
      left: 10,
    },
    animate: {
      right: 10,
      transition: {
        duration: 6,            
      }
    }
  }

  return {
    showOn,
    showLeftMove,
  }

}
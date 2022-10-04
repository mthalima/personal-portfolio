import React from 'react';
import Keyboard, { Cursor } from 'react-mk';


const Headline = () => {
  return (
    <div>
        <Keyboard keyPressDelayRange={[0, 200]}>
            A software developer passionate for programing,
        </Keyboard>
        <br />
        <Keyboard keyPressDelayRange={[0, 200]}>
      {({ type }) =>
        type(
          4500,
          'building clean, simplistic and modern systems.'
        )}
        </Keyboard>
        <Cursor />
    </div>
  )
}

export default Headline

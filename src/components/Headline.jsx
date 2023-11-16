import React from "react";
import Keyboard, { Cursor } from "react-mk";

const Headline = () => {
  return (
    <div>
      <p>
        <Keyboard keyPressDelayRange={[0, 200]}>
          {({ type }) =>
            type(
              1000,
              "A software developer passionate for programing, \nbuilding clean, simplistic and modern systems."
            )
          }
        </Keyboard>
      </p>
      <Cursor />
    </div>
  );
};

export default Headline;

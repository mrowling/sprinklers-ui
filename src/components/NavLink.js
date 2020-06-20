import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

function NavButton(props) {
  const { to, color, children } = props;

  const renderLink = React.useMemo(
    () =>
      React.forwardRef((itemProps, ref) => (
        <Link to={to} ref={ref} {...itemProps} />
      )),
    [to]
  );

  return (
    <Button color={color} component={renderLink}>
      {children}
    </Button>
  );
}

export default NavButton;

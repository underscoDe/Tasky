import React from "react";
import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";

const Trigger = ({ triggerText, buttonRef, showModal, classes, tooltipText }) => {
  const tooltipPlacement = "right";
  return (
    <OverlayTrigger
      key={tooltipPlacement}
      placement={tooltipPlacement}
      overlay={<Tooltip id={`tooltip-${tooltipPlacement}`}>{tooltipText}</Tooltip>}
    >
      <Button
        className={classes}
        ref={buttonRef}
        onClick={showModal}
      >
        {triggerText}
      </Button>
    </OverlayTrigger>
  );
};

export default Trigger;

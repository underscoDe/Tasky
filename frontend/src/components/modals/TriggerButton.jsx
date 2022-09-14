import React from "react";
import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";

const Trigger = ({ triggerText, buttonRef, showModal }) => {
  const tooltipPlacement = "right";
  return (
    <OverlayTrigger
      key={tooltipPlacement}
      placement={tooltipPlacement}
      overlay={<Tooltip id={`tooltip-${tooltipPlacement}`}>Add a new board</Tooltip>}
    >
      <Button
        className="collapse-icon"
        ref={buttonRef}
        onClick={showModal}
      >
        {triggerText}
      </Button>
    </OverlayTrigger>
  );
};

export default Trigger;

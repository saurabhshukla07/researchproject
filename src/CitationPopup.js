import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

function CitationPopup() {
  return (
    <>
      {['top', 'right', 'bottom', 'left'].map((placement) => (
        <OverlayTrigger
          key={placement}
          placement={placement}
          overlay={
            <Tooltip id={`tooltip-${placement}`}>
              Add a citation @
            </Tooltip>
          }
        >
          <Button variant="white" style={{border:'2px solid #8c8ca1'}}>Citrate Here {placement}</Button>
        
        </OverlayTrigger>
      ))}
      
    </>
  );
}

export default CitationPopup;
import Form from 'react-bootstrap/Form';

function SwitchButton() {

  return (
    <Form>
      <Form.Check // prettier-ignore
        type="switch"
        id="custom-switch"
      label="Academic"
  style={{display:'flex' , justifyContent:'center' , padding: '10px' , color:'green'}}  />
    </Form>
  );
}

export default SwitchButton;
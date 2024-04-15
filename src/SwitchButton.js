import Form from 'react-bootstrap/Form';

function SwitchButton() {

  return (
    <Form><div className='searchwala'>
       Academic
      <Form.Check // prettier-ignore
        type="switch"
        id="custom-switch"
      
  />
 </div>
   </Form>
  );
}

export default SwitchButton;
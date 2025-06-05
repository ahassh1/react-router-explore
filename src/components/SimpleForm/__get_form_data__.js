/**
 * 
 * 1. e.target.[name of the input field].value
 * 2. use form action and formData in the action handler. formData .get('name of the input field')
 * 3. controlled component.one per each field use state on change of the field . Useful to dynamically handle error
 * 
 * 3. handle all controlled field on the state object const [formData, setData]= useState({
 * 
 * name: '',
 * password: '',
 * phone: '',
 * })
 * 
 * 4. uncontrolled usign useRef
 *  
 */
  
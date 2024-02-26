import { $ } from 'react-jquery-plugin'

const Form = () => {
    $(document).ready(function(){
        $('#AddBtn').click(function(){
            $(this).hide();
        });
    });
    

    return ( 
    <div>
        <h2>title</h2><input type="text" />
        <h2>task</h2><input type="text" />
        <input id="AddBtn" type="button" value="Add" />
        <input type="button" value="delete" />
    </div>
     );
}
 
export default Form;
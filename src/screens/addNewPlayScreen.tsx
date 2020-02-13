import * as React from 'react'
import AddPlayForm from 'src/forms/addPlayForm';

export default class AddNewPlayScreen extends React.Component<AddNewPlayScreenProps> {
    render() {
        return(
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <AddPlayForm 
                            editing={false}
                            title=''
                            theatre=''
                            category=''
                            link=''
                            description=''
                        />
                    </div>
                </div>
            </div>
        )
    }
}

interface AddNewPlayScreenProps {
    editing: boolean,
    title: string,
    theatre: string
}
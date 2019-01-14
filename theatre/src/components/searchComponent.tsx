import * as React from 'react';
import plays from 'src/database/playsDatabase';

export default class SearchComponent extends React.Component<SearchComponentProps, SearchComponentState> {
    constructor(props: any) {
        super(props);
        this.state = {
            search: ''
        }
    }

    onInputChange(event: any) {
        this.setState({ search: event.target.value })
    }

    render() {
        let filteredThings = plays
        return (
    <div>
        <ul>
            {filteredThings.map((play)=> {
                return <li>{play.title}</li>
            })}
        </ul>
    </div>
)
    }

}

interface SearchComponentProps {

}

interface SearchComponentState {
    search: string
}
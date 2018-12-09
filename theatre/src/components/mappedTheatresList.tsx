import * as React from 'react'
import theatres from 'src/database/theatresDatabase';

function MappedTheatresListComponent() {
    return (
        <>
            <option>Wybierz teatr...</option>
            {
                theatres.map((theatre, index) =>
                    <option key={theatre.name + index}>
                        {theatre.name}
                    </option>
                )
            }
        </>
    )
}

export default MappedTheatresListComponent
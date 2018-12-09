import * as React from 'react'
import categories from 'src/database/categoriesDatabase';

function MappedCategoriesListComponent() {
    return (
        <>
            <option>
                Wybierz kategorię...
            </option>
            {categories.map((category, index) =>
                <option key={category + index}>
                    {category}
                </option>
            )}
        </>
    )
}

export default MappedCategoriesListComponent
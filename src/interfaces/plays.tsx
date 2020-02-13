interface AddPlayFormProps {
    history: any
}

interface AddPlayFormState {
    title: string,
    description: string,
    category: string,
    theatre: string,
    link: string,
    isError: boolean,
    theatreError: boolean,
    categoryError: boolean,
    titleError: boolean,
    descriptionError: boolean,
    linkError: boolean
}

interface EditPlayFormProps {
    isAdmin: boolean
}

interface EditPlayFormState {
    isEditing: boolean,
    title: string,
    description: string,
    category: string,
    link: string,
    titleError: boolean,
    descriptionError: boolean,
    categoryError: boolean,
    linkError: boolean
}
import { SessionState } from './session/session.state';
import { PlaysState } from './plays/Plays.state';
import { TheatresState } from './theatres/theatres.state';
import { EditingState } from './editing/editing.state';
import { UsersState } from './users/users.state';

export interface State {
    users: UsersState,
    session: SessionState,
    plays: PlaysState,
    theatres: TheatresState,
    editing: EditingState,

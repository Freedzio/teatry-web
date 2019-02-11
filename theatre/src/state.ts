import { SessionState } from './session/session.state';
import { PlaysState } from './plays/Plays.state';
import { TheatresState } from './theatres/theatres.state';
import { EditingState } from './editing/editing.state';

export interface State {
    session: SessionState
    plays: PlaysState
    theatres: TheatresState
    editing: EditingState
};
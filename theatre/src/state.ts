import { SessionState } from './session/session.state';
import { PlaysState } from './plays/Plays.state';
import { TheatresState } from './theatres/theatres.state';

export interface State {
    session: SessionState
    plays: PlaysState
    theatres: TheatresState
};
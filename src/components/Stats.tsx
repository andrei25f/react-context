import Avatar from './Avatar'
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { changeStats } from '../features/stats/statsSlice';

const Stats = () => {
    const {followers, following} = useAppSelector(state => state.stats);
    const name = useAppSelector(state => state.user.name);
    const dispatch = useAppDispatch();

    return (
        <div className='user-stats'>
            <div>
                <Avatar />
                {name}
            </div>
            <div className='stats'>
                <div onClick={() => dispatch(changeStats('followers', 1))}
                    onContextMenu={e => {
                        e.preventDefault();
                        dispatch(changeStats('followers', -1));
                    }}
                >
                    Followers: {followers}
                </div>
                <div onClick={() => dispatch(changeStats('following', 1))}
                    onContextMenu={e => {
                        e.preventDefault();
                        dispatch(changeStats('following', -1));
                    }}
                >
                    Following: {following}
                </div>
            </div>
        </div>
    )
}

export default Stats
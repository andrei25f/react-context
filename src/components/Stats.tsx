import { useAppSelector } from '../app/hooks';
import { AppDispatch } from '../app/store';
import { changeStats } from '../features/stats/statsSlice';
import Avatar from './Avatar'
import { useDispatch } from 'react-redux';

const Stats = () => {
    const { followers, following } = useAppSelector(state => state.statsSlice);
    const name = useAppSelector(state => state.userSlice.name);
    const dispatch = useDispatch<AppDispatch>();

    return (
        <div className='user-stats'>
            <div>
                <Avatar />
                {name}
            </div>
            <div className='stats'>
                <div onClick={() => dispatch(changeStats({ statsType: 'followers', sum: 1 }))}
                    onContextMenu={e => {
                        e.preventDefault();
                        dispatch(changeStats({ statsType: 'followers', sum: -1 }));
                    }}
                >
                    Followers: {followers}
                </div>
                <div onClick={() => dispatch(changeStats({ statsType: 'following', sum: 1 }))}
                    onContextMenu={e => {
                        e.preventDefault();
                        dispatch(changeStats({ statsType: 'following', sum: -1 }));
                    }}
                >
                    Following: {following}
                </div>
            </div >
        </div >
    )
}

export default Stats
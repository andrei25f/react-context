import { useDispatch } from 'react-redux';
import { AppDispatch } from '../app/store';
import { useAppSelector } from '../app/hooks';
import { changeAvatar, changeName } from '../features/user/userSlice';

interface Props {
    size?: string
}

const Avatar = ({ size }: Props) => {
    const { name, avatar } = useAppSelector(state => state.userSlice);
    const dispatch = useDispatch<AppDispatch>();

    return (
        <img
            onClick={() => {
                const url = prompt('Enter new avatar url');
                dispatch(dispatch(changeAvatar(url)));
            }}
            onContextMenu={e => {
                e.preventDefault();
                const name = prompt('Enter new name');
                dispatch(dispatch(changeName(name)));
            }}
            className={`user-avatar ${size ?? ''}`}
            src={avatar}
            alt={name}
        />
    )
}

export default Avatar
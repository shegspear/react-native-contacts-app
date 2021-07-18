import {
    REGISTER_LOADING, 
    REGISTER_SUCCESS, 
    REGISTER_FAIL,
    CLEAR_AUTH_STATE,
} from '../../../constants/actionTypes/index';
import axiosInstance from '../../../helpers/axiosInterceptor';

export const clearAuthState = () => (dispatch) => {
  dispatch({
    type: CLEAR_AUTH_STATE,
  });
};

export default ({
    email,
    password,
    userName: username,
    firstName: first_name,
    lastName: last_name,
}) => dispatch => {
    dispatch({
        type: REGISTER_LOADING
    });
    axiosInstance.post('/auth/register', {
        email,
        password,
        username,
        first_name,
        last_name,
    })
    .then((res) => {
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        });
        console.log('success: >>', res.data);
        console.log('form: >>', {
        email,
        password,
        username,
        first_name,
        last_name,
    });
    })
    .catch((err) => {
        dispatch({
            type: REGISTER_FAIL,
            payload: err.response
            ? err.response.data
            : {error: 'Something went wrong, try agin'},
        });
        console.log('fail: >>', err);
        console.log('form: >>', {
        email,
        password,
        username,
        first_name,
        last_name,
    });
    });
};
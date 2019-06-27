import { createStore,combineReducers} from 'redux';
import Home from '@/views/home/store';
import Cart from '@/views/cart/store';
import Kind from '@/views/kind/store';
import Release from '@/views/release/store';
import User from '@/views/user/store';
import Particulars from '@/views/particulars/store';
import Sign from '@/views/Sign/store';

const reducer = combineReducers ({
  Home, Cart, Kind, Release, User,Particulars,Sign
})
const Duo = createStore(reducer);
export default Duo;
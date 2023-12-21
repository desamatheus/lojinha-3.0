import data from './data';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomeScreen from './components/pages/Home';
import ProductScreen from './components/pages/ProductScreen';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
import { useContext } from 'react';
import { Store } from './Store';
import CartScreen from './components/pages/CartScreen';
import SigninScreen from './components/pages/SigninScreen';
import ShippingAddressScreen from './components/pages/ShippingAddressScreen';
import SignupScreen from './components/pages/SignupScreen';
import PaymentMethodScreen from './components/pages/PaymentMethodScreen';
import PlaceOrderScreen from './components/pages/PlaceOrderScreen';
import OrderScreen from './components/pages/OrderScreen';

function App() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;

  const signoutHandler = () => {
    ctxDispatch({ type: 'USER_SIGNOUT' });
    localStorage.removeItem('userInfo');
    localStorage.removeItem('shippingAddress');
    localStorage.removeItem('paymentMethod');
  };
  return (
    <BrowserRouter>
      <div className='d-flex flex-column site-container'>
        <ToastContainer position='bottom-center' limit={1} />
        <header>
          <Navbar bg='dark' variant='dark'>
            <Container>
              <LinkContainer to='/'>
                <Navbar.Brand>lojinha 3.0</Navbar.Brand>
              </LinkContainer>
              <Nav className='me-auto'>
                <Link to='/cart' className='nav-link'>
                  Carrinho
                  {cart.cartItems.length > 0 && (
                    <Badge pill bg='danger'>
                      {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                    </Badge>
                  )}
                </Link>

                {userInfo ? (
                  <NavDropdown title={userInfo.name} id='basic-nav-dropdown'>
                    <LinkContainer to='/profile'>
                      <NavDropdown.Item>Perfil do usuario</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to='/orderhistory'>
                      <NavDropdown.Item>Order History</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Divider />
                    <Link
                      className='dropdown-item'
                      to='#signout'
                      onClick={signoutHandler}>
                      Sign Out
                    </Link>
                  </NavDropdown>
                ) : (
                  <Link className='nav-link' to='/signin'>
                    Sign In
                  </Link>
                )}
              </Nav>
            </Container>
          </Navbar>
        </header>
        <main>
          <Container className='mt-3'>
            <Routes>
              <Route path='/product/:slug' element={<ProductScreen />} />
              <Route path='/cart' element={<CartScreen />} />
              <Route path='/signin' element={<SigninScreen />} />
              <Route path='/signup' element={<SignupScreen />} />
              <Route path='/placeorder' element={<PlaceOrderScreen />} />
              <Route path='/order/:id' element={<OrderScreen />}></Route>
              <Route path='/shipping' element={<ShippingAddressScreen />} />
              <Route path='/payment' element={<PaymentMethodScreen />} />

              <Route path='/' element={<HomeScreen />} />
            </Routes>
          </Container>
        </main>
        <footer>
          <div>
            <Nav className='d-flex justify-content-center'>
              <Link to='#' className='p-2'>
                Facebook
              </Link>
              <Link to='#' className='p-2'>
                Twitter
              </Link>
              <Link to='#' className='p-2'>
                Pinterest
              </Link>
              <Link to='#' className='p-2'>
                Instagram
              </Link>
              <Link to='#' className='p-2'>
                Youtube
              </Link>
            </Nav>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}
export default App;

import React from 'react';
import { Switch, BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import { Navbar, Homepage, Exchanges, Cryptocurrencies, CryptoDetails, News } from './components';
import './App.css';

const { Title } = Typography;

const App = () => {
	return (
		<Router>
			<div className='app'>
				<div className='navbar'>
					<Navbar />
				</div>

				<div className='main'>
					<Layout>
						<div className='routes'>
							<Switch>
								<Route exact path='/'>
									<Homepage />
								</Route>

								<Route exact path='/exchanges'>
									<Exchanges />
								</Route>

								<Route exact path='/cryptocurrencies'>
									<Cryptocurrencies />
								</Route>

								{/* coin detail is dynamic based on id */}
								<Route exact path='/crypto/:coinId'>
									<CryptoDetails />
								</Route>

								<Route exact path='/news'>
									<News />
								</Route>
							</Switch>
						</div>
					</Layout>
					<div className='footer'>
						<Title level={5} style={{ color: '#fff', textAlign: 'center' }}>
							CryptoMarket <br />
							All rights reserved.
						</Title>
						<Space>
							<Link to='/'>Home</Link>
							<Link to='/exchanges'>Exchanges</Link>
							<Link to='/news'>News</Link>
						</Space>
					</div>
				</div>
			</div>
		</Router>
	);
};

export default App;

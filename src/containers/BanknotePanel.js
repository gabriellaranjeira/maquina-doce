import React from 'react';
import { connect } from 'react-redux';
import { incrementBalance } from '../actions';
import PropTypes from 'prop-types';

const BanknotePanel = (
	({ banknotes, onBanknoteClick }) => (
		<section className="panel panel-primary">
			<div className="panel-heading">
				Colocar Dinheiro
			</div>
			<div className="panel-body">
				<section className="row center-block">
					{banknotes.map(banknote => (
						<div key={banknote} className="col-md-4 text-center" style={{ marginBottom: '.5em' }}>
							<button className="btn btn-primary" onClick={() => onBanknoteClick(banknote)}>R${banknote}</button>
						</div>
					))}
				</section>
			</div>
		</section>
	)
);

BanknotePanel.propTypes = {
	banknotes: PropTypes.arrayOf(PropTypes.number).isRequired,
	onBanknoteClick: PropTypes.func.isRequired
};

const mapStateToProps = () => ({
});

const mapDispatchToProps = dispatch => ({
	onBanknoteClick: amount =>  dispatch(incrementBalance(amount))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(BanknotePanel);

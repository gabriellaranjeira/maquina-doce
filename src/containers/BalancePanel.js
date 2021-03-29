import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const BalancePanel = (
	({ balance }) => (
		<section className="panel panel-default">
			<div className="panel-heading">
				Saldo
			</div>
			<div className="panel-body text-center">
				{
					balance.loading ?
					'Carregando saldo...' :
					`R$${balance.value.toFixed(2)}`
				}
			</div>
		</section>
	)
);

BalancePanel.propTypes = {
	balance: PropTypes.shape({
		loading: PropTypes.bool.isRequired,
		value: PropTypes.number.isRequired
	})
};

const mapStateToProps = state => ({
	balance: state.balance
});

const mapDispatchToProps = () => ({
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(BalancePanel);

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

/// @title Omnichain Payroll Receiver
/// @notice Menerima payload gaji dari Solana (via LayerZero)

contract PayrollReceiver {
    event PayrollReceived(address indexed employee, uint256 amount, uint16 sourceChainId);

    /// @notice Fungsi dummy untuk menerima payload dari LayerZero
    /// Di versi production, ini harus dipanggil oleh LayerZero endpoint
    function receivePayroll(address employee, uint256 amount, uint16 sourceChainId) external {
        emit PayrollReceived(employee, amount, sourceChainId);
    }
}
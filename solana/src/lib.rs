use anchor_lang::prelude::*;

declare_id!("omnichain_payroll1111111111111111111111111111111");

#[program]
pub mod omnichain_payroll {
    use super::*;

    pub fn send_payroll(
        ctx: Context<SendPayroll>,
        employee: Pubkey,
        amount: u64,
        chain_id: u16,
    ) -> Result<()> {
        msg!("Sending payroll to {:?} for {} lamports, chain_id {}", employee, amount, chain_id);
        // Simulasi payload, di real-nya akan dipaketkan ke LayerZero OApp SDK

        Ok(())
    }
}

#[derive(Accounts)]
pub struct SendPayroll {}
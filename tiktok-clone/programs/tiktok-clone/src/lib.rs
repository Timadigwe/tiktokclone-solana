use anchorlang::prelude::*;
use solana_program::entrypoint::ProgramResult;
use std::men::size_of;
use anchor_lang::solana_program::log::{
    sol_log_compute_units
};


declare_id!("111111111111111111");

// username length
const USER_NAME_LENGTH: usize = 100;
// user profile url length
const USER_URL_LENGTH: usize=225;
const VIDEO_URL_LENGTH: usize = 225;

#[program]
mod tiktok_clone {
    use super::;

    pub fn create_user(
        ctx: Context<CreateUser>,
        name: String,
        profile_url: String
    ) -> ProgramResult {
            let user = &mut ctx.accounts.user;
            // set authority 
            user.user_wallet_address = ctx.accounts.authority.key();
            // set text
            user.user_name = name;
            user.user_profile_image_url = profile_url;

            msg!("User added!");  // just like console logging
            sol_log_compute_units(); //Logs how many compute units are left, important for budgeting
            
            Ok(())
    }
}


#[derive(Accounts)]
pub struct CreateUser<'info>{


    #[account(
        init,
        seeds = [b"user".as_ref(), authority.key().as_ref()],
        bump,
        payer = authority,
        space = size_of::<UserAccount>() + USER_NAME_LENGTH + VIDEO_URL_LENGTH + 8
    )]
    pub user: Account<'info, UserAccount>,

    // Authority (this  is signer who paid transaction fees)
    #[account(mut)]
    pub authority: Signer<'info>,

    pub system_program: UncheckedAccount<'info>,

    pub clock:Sysvar<'info, clock>
}
   #[account]
   pub struct UserAccount{
    pub user_name: String,
    pub user_wallet_address: PubKey,
    pub user_profile_image_url: String,
   }
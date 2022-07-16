import { clusterApiUrl, PublicKey } from "@solana/web3.js";
import tiktok from "./tiktok_clone.json";

    export const SOLANA_HOST = clusterApiUrl('devnet')

export const TIKTOK_PROGRAM_ID = new PublicKey(
    "2TXzhibg7dxHBWW1KBd1CP17WeB9wdsyWKPK58ZicPjw"
)
export const TIKTOK_IDL = tiktok;
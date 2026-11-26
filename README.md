# The Painfully Honest Out-of-Office

[![make.fun · u-po-pu-the-painfully-honest-out-of-office-63e7ca0b](https://make.fun/badge/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b.svg)](https://make.fun/bounty/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b)
[![rank](https://make.fun/badge/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b/cashbags/makefun-honest-out-of-office/rank.svg)](https://make.fun/bounty/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b)
[![reward](https://make.fun/badge/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b/cashbags/makefun-honest-out-of-office/reward.svg)](https://make.fun/bounty/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b)

One painfully honest out-of-office auto-reply: **"Thank you for writing; I am away until Monday, and the honest truth is that I am not behind on email, I am simply not reading it, so I will catch up then."** — 154 characters, one sentence, the private truth is conduct (deliberately not reading) rather than an unread count, bookended by politeness. See `DESIGN.md`.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, stdlib only) holds the line as one constant and writes it to `$MAKEFUN_OUTPUT_DIR/entry.txt` (fallback `/output`). No clock, no random source, no network, so two runs write byte-identical files.

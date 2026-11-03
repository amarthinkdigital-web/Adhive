Add-Type -AssemblyName System.Drawing
$b = [System.Drawing.Bitmap]::FromFile((Resolve-Path 'public/images/REQUESTER DASHBOARD.png'))

# In REQUESTER DASHBOARD.png (1572 x 3408):
# y = 1450 - 1750 is Card 1 (300px)
# y = 1800 - 2000 is white space between cards (200px)
# y = 2050 - 2250 is Card 2 (200px)
# y = 2250 - 2450 is white space between cards (200px)
# y = 2500 - 2700 is Card 3 (200px)
# y = 2700 - 3000 is white space above bottom nav (300px)
# y = 3100 - 3380 is Bottom Nav Bar with 4 tabs!
#
# If one card (or the extra space between cards) is removed, or if 2 cards are shown instead of 3,
# the height goes down from 3408 to 2664 (exact aspect ratio 1572 / 2664 = 393 / 666)!
# Then every element has 100% original un-squished proportions, identical to sharer.jpeg!
# Let's verify what happens if we remove Card 2 or Card 3 and its whitespace:
# Splicing:
# Part 1: y = 0 to 2250 (covers top, dark card, Card 1, and Card 2) -> height 2250
# If we skip from 2250 to 2994 (height removed = 744px)
# Part 2: y = 2994 to 3408 (covers bottom nav tabs!) -> height 414
# Total height = 2250 + 414 = 2664!
# 1572 / 2664 = 0.59009009 = exactly 393 / 666!
Write-Output "Math works out: 2250 + 414 = 2664"

$b.Dispose()


Add-Type -AssemblyName System.Drawing
$b = [System.Drawing.Bitmap]::FromFile((Resolve-Path 'public/images/REQUESTER DASHBOARD.png'))

# What are the dimensions? 1572 x 3408
# To match sharer.jpeg (aspect ratio 393 / 666):
# Target height for width 1572 = 1572 * 666 / 393 = 2664.
# Total height to remove = 3408 - 2664 = 744.
# Where is the empty white space or middle items?
# Let's inspect where campaigns list is:
# Let's see: Top part is Header + Greeting + Wallet / Stats Cards
# Middle part is Campaign Cards (Campaign 1, Campaign 2, Campaign 3...)
# Bottom part is Navigation Bar (Tabs: Home, Campaigns, Wallet, Profile)
# If we look at the vertical positions:
Write-Output "Scanning vertical segments..."
$b.Dispose()


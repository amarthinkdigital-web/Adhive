Add-Type -AssemblyName System.Drawing
$b = [System.Drawing.Bitmap]::FromFile('C:\Users\Think Digtial\.gemini\antigravity\brain\38d7cba5-6659-437d-abf1-5a4aa24162f5\sharer_before_crop.jpeg')
$bCropped = [System.Drawing.Bitmap]::FromFile((Resolve-Path 'public/images/sharer.jpeg'))

Write-Output "Sharer orig: $($b.Width) x $($b.Height)"
Write-Output "Sharer cropped: $($bCropped.Width) x $($bCropped.Height)"

# How did commit 3fcbefb crop sharer?
# Let's find where row 0 of bCropped appears in b:
for ($y = 0; $y -lt 200; $y++) {
    $match = $true
    for ($x = 50; $x -lt $b.Width - 50; $x += 20) {
        if ($bCropped.GetPixel($x, 0) -ne $b.GetPixel($x, $y)) {
            $match = $false
            break
        }
    }
    if ($match) {
        Write-Output "Row 0 of cropped matched y=$y of orig"
        break
    }
}

# How about the middle or bottom?
for ($y = $b.Height - 1; $y -ge $b.Height - 200; $y--) {
    $match = $true
    for ($x = 50; $x -lt $b.Width - 50; $x += 20) {
        if ($bCropped.GetPixel($x, $bCropped.Height - 1) -ne $b.GetPixel($x, $y)) {
            $match = $false
            break
        }
    }
    if ($match) {
        Write-Output "Last row of cropped matched y=$y of orig"
        break
    }
}

$b.Dispose()
$bCropped.Dispose()


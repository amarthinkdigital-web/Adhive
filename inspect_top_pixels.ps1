Add-Type -AssemblyName System.Drawing
$b = [System.Drawing.Bitmap]::FromFile('C:\Users\Think Digtial\.gemini\antigravity\brain\38d7cba5-6659-437d-abf1-5a4aa24162f5\req_top750.png')
# Check what text or icons are in req_top750.png
# Let's see non-white pixels
for ($y = 0; $y -lt $b.Height; $y += 50) {
    $nw = 0
    for ($x = 0; $x -lt $b.Width; $x += 10) {
        $c = $b.GetPixel($x, $y)
        if ($c.R -lt 240 -or $c.G -lt 240 -or $c.B -lt 240) { $nw++ }
    }
    if ($nw -gt 0) {
        Write-Output "y=$y non-white: $nw"
    }
}
$b.Dispose()


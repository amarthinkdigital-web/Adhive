Add-Type -AssemblyName System.Drawing
for ($i = 0; $i -lt 10; $i++) {
    $file = "C:\Users\Think Digtial\.gemini\antigravity\brain\38d7cba5-6659-437d-abf1-5a4aa24162f5\slice_$i.png"
    $b = [System.Drawing.Bitmap]::FromFile($file)
    # Check average color and variance
    $cMid = $b.GetPixel([int]($b.Width / 2), [int]($b.Height / 2))
    $cLeft = $b.GetPixel(100, [int]($b.Height / 2))
    Write-Output "Slice $i (y=$($i*340) to $(($i+1)*340)): Left=($($cLeft.R),$($cLeft.G),$($cLeft.B)), Mid=($($cMid.R),$($cMid.G),$($cMid.B))"
    $b.Dispose()
    Remove-Item $file
}


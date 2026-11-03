# Remove theme toggle button from all HTML files
$files = @('about.html', 'faq.html', 'industries.html', 'products.html')
foreach ($f in $files) {
    $c = Get-Content $f -Raw -Encoding UTF8
    $c = $c -replace '(?s)        <button id="themeToggleBtn" class="theme-toggle" aria-label="Toggle Theme Mode">\r?\n          <i class="fas fa-sun"></i>\r?\n        </button>\r?\n', ''
    Set-Content $f $c -Encoding UTF8 -NoNewline
    Write-Host "Done: $f"
}
Write-Host "All complete"

#Region Global Functions Variables
function CheckPath($path) { 
    if (-not (Test-Path $path)) { 
        Write-Host "File not found: $path" -ForegroundColor Red
        exit 
    } 
}

function Wait-ForFile($filePath) {
    while (-not (Test-Path -Path $filePath -IsValid)) {
        Start-Sleep -Milliseconds 400
    }
}

$scriptPath = $MyInvocation.MyCommand.Path
$scriptDirectory = [System.IO.Path]::GetDirectoryName($scriptPath)

$newPageFile = Join-Path -Path $scriptDirectory -ChildPath "旧中国小说\红楼梦\_校注前言\000.md"
CheckPath $newPageFile

$newPageFileName = [System.IO.Path]::GetFileNameWithoutExtension($newPageFile)

$newPageWordsFile = Join-Path -Path $scriptDirectory -ChildPath "旧中国小说\红楼梦\PageRendering\words-$newPageFileName.js"
$newPageReferencesFile = Join-Path -Path $scriptDirectory -ChildPath "旧中国小说\红楼梦\PageRendering\references-$newPageFileName.js"

$outputFile = $newPageFile.Replace(".md", "-commented.txt")
Set-Content $outputFile $null -Encoding UTF8

$allWordsFile = Join-Path -Path $scriptDirectory -ChildPath "words-all.js"
CheckPath $allWordsFile

$allReferencesFile = Join-Path -Path $scriptDirectory -ChildPath "references-all.js"
CheckPath $allReferencesFile

$newPageWordsTemplate = Join-Path -Path $scriptDirectory -ChildPath "words-template.js"
CheckPath $newPageWordsTemplate

$newPageReferencesTemplate = Join-Path -Path $scriptDirectory -ChildPath "references-template.js"
CheckPath $newPageReferencesTemplate

$newPageHeaderFile = Join-Path -Path $scriptDirectory -ChildPath "pageHeader.md"
CheckPath $newPageHeaderFile

$newPageFooterFile = Join-Path -Path $scriptDirectory -ChildPath "pageFooter.md"
CheckPath $newPageFooterFile

$GlobalRenderedPageFile = ""
$GlobalAllWords = @{}
$GlobalAllReferences = @()
$GlobalWordsFromWordsFile = @{}
$GlobalReferencesFromReferencesFile = @()
#EndRegion

#Region Read All Words
# Read and process the content of allWordsFile
CheckPath $allWordsFile

$allRepeatedWords = @()
$allWordsFileLines = (Get-Content -Path $allWordsFile -Encoding UTF8 |
    Where-Object { $_.Trim() -ne "" } |
    ForEach-Object { $_.Trim() } |
    Where-Object { -not $_.Contains("/") }) |
    Select-Object -Skip 1 | Select-Object -SkipLast 1

# Process each line and populate $GlobalAllWords
$allWordsFileLines | ForEach-Object {
    $parts = $_.Split(":", 2)
    $wordKey = $parts[0].Trim().Trim("`"")
    $wordValue = $parts[1].Trim()
    if (-not $GlobalAllWords.Contains($wordKey)) {
        $GlobalAllWords[$wordKey] = $wordValue
    }
    else {
        $allRepeatedWords += "`"" + $wordKey + "`": " + $GlobalAllWords[$wordKey]
    }
}
#EndRegion

#Region Repetead Words for All
Wait-ForFile $outputFile
Add-Content $outputFile "======================= Repeated Words for All =======================" -Encoding UTF8
if ($allRepeatedWords.Count -eq 0) {
    Add-Content -Path $outputFile -Value "No repeated words found." -Encoding UTF8
}
else {
    $allRepeatedWords -join "`n" | Add-Content -Path $outputFile -Encoding UTF8
    Add-Content -Path $outputFile -Value ">>>> Processing interrupted. <<<<" -Encoding UTF8
    exit
}
#EndRegion

#Region Read Page Words
$pageRepeatedWords = @()

# Read and process the content of newPageWordsFile
if (-not (Test-Path $newPageWordsFile)) {
    $newPageWordsFile = Join-Path -Path (Split-Path $newPageWordsFile -Parent) -ChildPath "words-$newPageFileName.js"
    Copy-Item -Path $newPageWordsTemplate -Destination $newPageWordsFile
}
else {
    $newPageWordsFileLines = (Get-Content -Path $newPageWordsFile -Encoding UTF8 |
        Where-Object { $_.Trim() -ne "" } |
        ForEach-Object { $_.Trim() } |
        Where-Object { -not $_.Contains("/") }) |
        Select-Object -Skip 1 | Select-Object -SkipLast 1

        # Process each line and populate $GlobalWordsFromWordsFile
        $newPageWordsFileLines | ForEach-Object {
        $parts = $_.Split(":", 2)
        $wordKey = $parts[0].Trim().Trim("`"")
        $wordValue = $parts[1].Trim()
        if (-not $GlobalWordsFromWordsFile.Contains($wordKey)) {
            $GlobalWordsFromWordsFile[$wordKey] = $wordValue
        }
        else {
            $pageRepeatedWords += "`"" + $wordKey + "`": " + $GlobalWordsFromWordsFile[$wordKey]
        }
    }
}
#EndRegion

#Region Repetead Words for Page
Wait-ForFile $outputFile
Add-Content $outputFile "======================= Repeated Words for Page =======================" -Encoding UTF8
if ($pageRepeatedWords.Count -eq 0) {
    Add-Content -Path $outputFile -Value "No repeated words found." -Encoding UTF8
}
else {
    $pageRepeatedWords -join "`n" | Add-Content -Path $outputFile -Encoding UTF8
    Add-Content -Path $outputFile -Value ">>>> Processing interrupted. <<<<" -Encoding UTF8
    exit
}
#EndRegion

#Region Read Page References
$pageRepeatedReferences = @()

if (-not (Test-Path $newPageReferencesFile)) {
    $newPageReferencesFile = Join-Path -Path (Split-Path $newPageReferencesFile -Parent) -ChildPath "references-$newPageFileName.js"
    Copy-Item -Path $newPageReferencesTemplate -Destination $newPageReferencesFile
    $newPageReferencesLines = Get-Content -Path $newPageReferencesFile -Encoding UTF8
    $newPageReferencesLines[1] = "    // existing references`n"
    $newPageReferencesLines | Add-Content -Path $newPageReferencesFile -Encoding UTF8
}
else {
    $newPageReferencesLines = Get-Content -Path $newPageReferencesFile -Encoding UTF8

    # Only get lines that contain "summary"
    $newPageReferences = $newPageReferencesLines | Where-Object { $_.Contains("summary") } |
        ForEach-Object { $_.Split(":")[1].Trim().Trim(",").Trim("`"") }
    
    # Process each line and populate $GlobalReferencesFromReferencesFile
    $newPageReferences | ForEach-Object {
        if (-not $GlobalReferencesFromReferencesFile.Contains($_)) {
            $GlobalReferencesFromReferencesFile += $_
        } else {
            $pageRepeatedReferences += $_
        }
    }
}
#EndRegion

#Region Repetead Refers for Page
Wait-ForFile $outputFile

Add-Content $outputFile "======================= Repeated References for Page =======================" -Encoding UTF8
if ($pageRepeatedReferences.Count -eq 0) {
    Add-Content -Path $outputFile -Value "No repeated references found." -Encoding UTF8
}
else {
    $pageRepeatedReferences -join "`n" | Add-Content -Path $outputFile -Encoding UTF8
    Add-Content -Path $outputFile -Value ">>>> Processing interrupted. <<<<" -Encoding UTF8
    exit
}

#Region Read All References
CheckPath $allReferencesFile

$allRepeatedReferences = @()

#read all references file, only get lines that contain "summary"
$allReferencesLines = Get-Content -Path $allReferencesFile -Encoding UTF8 |
    Where-Object { $_.Contains("summary") } |
    ForEach-Object { $_.Split(":")[1].Trim().Trim(",").Trim("`"") }

# Process each line and populate $GlobalAllReferences
$allReferencesLines | ForEach-Object {
    if (-not $GlobalAllReferences.Contains($_)) {
        $GlobalAllReferences += $_
    } else {
        $allRepeatedReferences += $_
    }
}

# Order by the length of the wordKey, and then by the wordKey
$GlobalAllReferences = $GlobalAllReferences
#EndRegion

#Region Repetead Refers for All
Wait-ForFile $outputFile

Add-Content $outputFile "======================= Repeated References for All =======================" -Encoding UTF8
if ($allRepeatedReferences.Count -eq 0) {
    Add-Content -Path $outputFile -Value "No repeated references found." -Encoding UTF8
}
else {
    $allRepeatedReferences -join "`n" | Add-Content -Path $outputFile -Encoding UTF8
    Add-Content -Path $outputFile -Value ">>>> Processing interrupted. <<<<" -Encoding UTF8
    exit
}
#EndRegion

#Region New and Diff Words in Page
$newPageWords = $GlobalWordsFromWordsFile.Keys | Where-Object { $GlobalAllWords.Keys -notcontains $_ }
Wait-ForFile $outputFile

Add-Content $outputFile "======================= New Words =======================" -Encoding UTF8
if ($newPageWords.Count -eq 0) {
    Add-Content -Path $outputFile -Value "No new words found." -Encoding UTF8
}
else {
    $newPageWords -join "`n" | Add-Content -Path $outputFile -Encoding UTF8
    Add-Content -Path $outputFile -Value ">>>> Processing interrupted. <<<<" -Encoding UTF8
    exit
}

$diffWords = $GlobalWordsFromWordsFile.Keys | Where-Object { $GlobalAllWords.Keys -contains $_ -and $GlobalAllWords[$_] -ne $GlobalWordsFromWordsFile[$_] }
Wait-ForFile $outputFile

Add-Content $outputFile "======================= Different Words =======================" -Encoding UTF8
if ($diffWords.Count -eq 0) {
    Add-Content -Path $outputFile -Value "No different words found." -Encoding UTF8
}
else {
    $diffWords -join "`n" | Add-Content -Path $outputFile -Encoding UTF8
    Add-Content -Path $outputFile -Value ">>>> Processing interrupted. <<<<" -Encoding UTF8
    exit
}

#Region New References
$newPageReferences = $GlobalReferencesFromReferencesFile | Where-Object { $GlobalAllReferences -notcontains $_ }
Wait-ForFile $outputFile

Add-Content $outputFile "======================= New References =======================" -Encoding UTF8
if ($newPageReferences.Count -eq 0) {
    Add-Content -Path $outputFile -Value "No new references found." -Encoding UTF8
}
else {
    $newPageReferences -join "`n" | Add-Content -Path $outputFile -Encoding UTF8
    Add-Content -Path $outputFile -Value ">>>> Processing interrupted. <<<<" -Encoding UTF8
    exit
}
#EndRegion

#Region Create Rendered Page
# Create a new rendered page file copying the content of the new page file
$GlobalRenderedPageFile = $newPageFile.Replace(".md", "-rendered.md")
Set-Content $GlobalRenderedPageFile $null -Encoding UTF8
Copy-Item -Path $newPageFile -Destination $GlobalRenderedPageFile

Wait-ForFile $GlobalRenderedPageFile

# Process the content of the rendered page file
$renderedPageContent = (Get-Content -Path $GlobalRenderedPageFile -Encoding UTF8 |
    Where-Object { $_.Trim() -notmatch "^<|^=" -and $_.Trim() -ne "" } |
    ForEach-Object { $_.Trim() }) -join "`n`n"

$renderedPageContent | Set-Content -Path $GlobalRenderedPageFile -Encoding UTF8
#EndRegion

#Region Read Poem Lines
Wait-ForFile $GlobalRenderedPageFile

$poemLines = Get-Content -Path $GlobalRenderedPageFile -Encoding UTF8 | Where-Object { $_.Trim() -eq "****" }
# check if the count of $poemLines is even.
if ($poemLines.Count % 2 -ne 0) {
    Add-Content $outputFile "======================= Poem Lines =======================" -Encoding UTF8
    Add-Content -Path $outputFile -Value "Poem lines count is not even. Count: $($poemLines.Count)" -Encoding UTF8
    Add-Content -Path $outputFile -Value ">>>> Processing interrupted. <<<<" -Encoding UTF8
    exit
}
#EndRegion

#Region Update Page Refers
Wait-ForFile $GlobalRenderedPageFile

# Get all references from the rendered page file
$pageAllReferences = @()
$renderedPageFileLines = Get-Content -Path $GlobalRenderedPageFile -Encoding UTF8
foreach ($line in $renderedPageFileLines) {
    foreach ($reference in $GlobalAllReferences) {
        if ($line.Contains($reference)) {
            if (-not $pageAllReferences.Contains($reference)) {
                $pageAllReferences += $reference
            }
        }
    }
}

Wait-ForFile $allReferencesFile

# Convert all references file to JSON format
$allReferencesFileLines = Get-Content -Path $allReferencesFile -Encoding UTF8
$allReferencesFileLines[0] = "["
$allReferencesFileLines[-1] = "]"
for ($i = 1; $i -lt $allReferencesFileLines.Count - 1; $i++) {
    $line = $allReferencesFileLines[$i]
    $line = $line -replace "summary:", "`"summary`":"
    $line = $line -replace "paragraphs:", "`"paragraphs`":"
    $line = $line -replace "images:", "`"images`":"

    if ($line.Trim() -eq "],") {
        if ($allReferencesFileLines[$i + 1].Trim() -match "^(},?)$") {
            $line = "]"
        }
    }

    if ($line.Trim().EndsWith("`",")) {
        if ($allReferencesFileLines[$i + 1].Trim() -eq "],") {
            $line = $line.TrimEnd(",")
        }
    }

    $allReferencesFileLines[$i] = $line
}

$allReferencesJson = $allReferencesFileLines | ConvertFrom-Json

# Get the JSON references for the page
$pageJsonReferences = @()
foreach ($reference in $pageAllReferences) {
    foreach ($json in $allReferencesJson) {
        if ($json.summary -eq $reference) {
            $pageJsonReferences += $json
        }
    }
}

# Format the JSON references for the page
$referencesJsonFormatted = ""
$pageJsonReferences | ForEach-Object {
    if ($referencesJsonFormatted -ne "") {
        $referencesJsonFormatted += ",`n"
    }

    $referencesJsonFormatted += "    {`n"
    foreach ($property in $_.PSObject.Properties) {
        if($property.Name -eq "summary") { 
            $referencesJsonFormatted += "        " + $property.Name + ": `"" + $property.Value + "`",`n"
        }
        else {
            $tempValues = @()
            foreach ($value in $property.Value) {
                $tempValues += "`"" + $value + "`","
            }
            $referencesJsonFormatted += "        " + $property.Name + ": [`n        " + ($tempValues -join "`n        ") + "`n        ],`n"
        }
    }
    $referencesJsonFormatted += "    }"
}

# Update the page references file
Wait-ForFile $newPageReferencesFile

Set-Content -Path $newPageReferencesFile $null -Encoding UTF8
$templateReferencesLines = Get-Content -Path $newPageReferencesTemplate -Encoding UTF8
$templateReferencesLines[0..1] | Add-Content -Path $newPageReferencesFile -Encoding UTF8
$referencesJsonFormatted | Add-Content -Path $newPageReferencesFile -Encoding UTF8
$templateReferencesLines[3..5] | Add-Content -Path $newPageReferencesFile -Encoding UTF8

# output how many of $pageJsonReferences updated.
Wait-ForFile $outputFile

Add-Content $outputFile "======================= Updated References =======================" -Encoding UTF8
Add-Content -Path $outputFile -Value "Updated references: $($pageJsonReferences.Count)" -Encoding UTF8
#EndRegion

#Region Update Page Words
Wait-ForFile $GlobalRenderedPageFile

# Get all words from the rendered page file
$pageAllWords = @()
foreach ($line in $renderedPageFileLines) {
    foreach ($word in $GlobalAllWords.Keys) {
        if ($line.Contains($word)) {
            if (-not $pageAllWords.Contains($word)) {
                $pageAllWords += $word
            }
        }
    }
}

# Get all words from the references of the page
Wait-ForFile $newPageReferencesFile
$pageReferencesLines = Get-Content -Path $newPageReferencesFile -Encoding UTF8 | ForEach-Object { $_.Trim() } | Where-Object { $_ -match "^`"&#" }

$pageReferenceWords = @()
foreach ($line in $pageReferencesLines) {
    foreach ($word in $GlobalAllWords.Keys) {
        if ($line.Contains($word) -and -not $pageReferenceWords.Contains($word)) {
            $pageReferenceWords += $word
        }
    }
}

# Combine the words from the page and the references
foreach ($word in $pageReferenceWords) {
    if (-not $pageAllWords.Contains($word)) {
        $pageAllWords += $word
    }
}

# Format the words for the page
$pageAllWordsFormatted = ""
$pageAllWords = $pageAllWords | Sort-Object { ($_.Split(":")[0].Trim().Trim("`"")).Length }, { $_.Split(":")[0].Trim().Trim("`"") }
$pageAllWords | ForEach-Object {
    if ($pageAllWordsFormatted -ne "") {
        $pageAllWordsFormatted += "`n"
    }

    $pageAllWordsFormatted += "    `"" + $_ + "`": " + $GlobalAllWords[$_] + ""
}

# Update the page words file
Wait-ForFile $newPageWordsFile

Set-Content -Path $newPageWordsFile $null -Encoding UTF8
$templateWordsLines = Get-Content -Path $newPageWordsTemplate -Encoding UTF8
$templateWordsLines[0..1] | Add-Content -Path $newPageWordsFile -Encoding UTF8
$pageAllWordsFormatted | Add-Content -Path $newPageWordsFile -Encoding UTF8
$templateWordsLines[3..5] | Add-Content -Path $newPageWordsFile -Encoding UTF8

# output how many of $pageAllWords updated.
Wait-ForFile $outputFile

Add-Content $outputFile "======================= Updated Words =======================" -Encoding UTF8
Add-Content -Path $outputFile -Value "Updated words: $($pageAllWords.Count)" -Encoding UTF8
#EndRegion

#Region Add Refers to Page
Wait-ForFile $GlobalRenderedPageFile

$updatedLines = New-Object System.Text.StringBuilder
$pageReferencesCopy = $pageAllReferences.Clone()
$renderedPageLines = Get-Content -Path $GlobalRenderedPageFile -Encoding UTF8

$isPoemBegin = $true
foreach ($lineInNewPage in $renderedPageLines) {
    $trimedLine = $lineInNewPage.Trim()

    # Process the poem lines
    if ($trimedLine -eq "****") {
        if ($isPoemBegin) {
            $updatedLines.AppendLine("<div class=`"poem-container`">") | Out-Null
            $isPoemBegin = $false
        } else {
            $updatedLines.AppendLine("</div>") | Out-Null
            $isPoemBegin = $true
        }
        continue
    }

    $updatedLines.AppendLine($lineInNewPage) | Out-Null

    # Skip empty lines, lines starting with "<", and lines starting with "-"
    if ($trimedLine -eq "" -or $trimedLine.StartsWith("<") -or $trimedLine.StartsWith("-")) { continue }

    $isContainerAdded = $false
    $referencesToRemove = @()

    # Check if the line contains words in the all sorted words file
    foreach ($reference in $pageReferencesCopy) {
        if ($trimedLine.Contains($reference)) {
            if (-not $isContainerAdded) {
                $updatedLines.AppendLine("<div class=`"tab-container`">") | Out-Null
                $isContainerAdded = $true
            }
            $updatedLines.AppendLine("==" + $reference) | Out-Null
            $referencesToRemove += $reference
        }
    }

    if ($isContainerAdded) {
        $updatedLines.AppendLine("</div>") | Out-Null
    }

    # Remove matched references from the copy
    $pageReferencesCopy = $pageReferencesCopy | Where-Object { $referencesToRemove -notcontains $_ }
}

# Update the rendered page file
$pageUpdatedLines = $updatedLines.ToString()
Set-Content $GlobalRenderedPageFile $null -Encoding UTF8
Set-Content $GlobalRenderedPageFile -Value $pageUpdatedLines -Encoding UTF8

# output how many of $pageUpdatedLines updated.
Wait-ForFile $outputFile

Add-Content $outputFile "======================= Added References to Rendered Page =======================" -Encoding UTF8
Add-Content -Path $outputFile -Value "Updated lines: $($pageUpdatedLines.Split("`n").Count)" -Encoding UTF8
#EndRegion

#Region Add Header to Rendered Page
Wait-ForFile $GlobalRenderedPageFile

# Insert the header content to the rendered page file
$headerContent = Get-Content -Path $newPageHeaderFile -Encoding UTF8
$renderedPageContent = Get-Content -Path $GlobalRenderedPageFile -Encoding UTF8

$combinedContent = $headerContent + $renderedPageContent
Set-Content -Path $GlobalRenderedPageFile -Value $combinedContent -Encoding UTF8

# output how many of $headerContent updated.
Wait-ForFile $outputFile

Add-Content $outputFile "======================= Added Header to Rendered Page =======================" -Encoding UTF8
Add-Content -Path $outputFile -Value "Updated lines: $($headerContent.Split("`n").Count)" -Encoding UTF8
#EndRegion

#Region Add Footer to Page
Wait-ForFile $GlobalRenderedPageFile

# Insert the footer content to the rendered page file
$footerContent = Get-Content -Path $newPageFooterFile -Encoding UTF8
$footerContent = $footerContent -replace "xxx", $newPageFileName
$renderedPageContent = Get-Content -Path $GlobalRenderedPageFile -Encoding UTF8

$combinedContent = $renderedPageContent + $footerContent

Set-Content -Path $GlobalRenderedPageFile -Value $combinedContent -Encoding UTF8

# output how many of $footerContent updated.
Wait-ForFile $outputFile

Add-Content $outputFile "======================= Added Footer to Rendered Page =======================" -Encoding UTF8
Add-Content -Path $outputFile -Value "Updated lines: $($footerContent.Split("`n").Count)" -Encoding UTF8
#EndRegion

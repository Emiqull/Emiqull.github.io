document.addEventListener("DOMContentLoaded", function() {
    // Update references for tabs
    updateTabReferences();
    
    // Wrap poem lines in paragraphs
    wrapPoemLinesInParagraphs();

    // Highlight quotes that span across paragraphs, skipping tabs
    highlightQuotesAcrossParagraphsSkippingTabs();
    
    // Highlight quote symbols
    highlightQuoteSymbols();
    
    // Apply tooltips to elements
    applyTooltips();
    
    // Add event listeners for tab interactions
    addTabEventListeners();
    
    // Add event listeners for tooltip interactions
    addTooltipEvents();
    
    // Adjust the position of tooltips
    adjustTooltipPosition();
    
    // Refine the bold style in H1 elements
    refineBoldStyleInH1();
});

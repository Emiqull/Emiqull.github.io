function updateTabReferences() {
    const TAB_CONTAINER_CLASS = 'tab-container';
    const TAB_TITLES_CLASS = 'tab-titles';
    const TAB_CONTENTS_CLASS = 'tab-contents';
    const TAB_TITLE_CLASS = 'tab-title';
    const TAB_CONTENT_CLASS = 'tab-content';

    document.querySelectorAll(`div.${TAB_CONTAINER_CLASS}`).forEach((container, containerIndex) => {
        const tabTitlesContainer = document.createElement('div');
        tabTitlesContainer.classList.add(TAB_TITLES_CLASS);
        const tabContentsContainer = document.createElement('div');
        tabContentsContainer.classList.add(TAB_CONTENTS_CLASS);

        const tabContents = container.innerHTML.split('==').filter(item => item.trim());

        tabContents.forEach((tabContentText, tabIndex) => {
            const tabTitleText = tabContentText.trim();
            const reference = extraReferences.find(ref => ref.summary === tabTitleText);

            if (reference) {
                const tabId = `container${containerIndex}-tab${tabIndex}`;

                // Create tab title
                const tabTitle = document.createElement('div');
                tabTitle.classList.add(TAB_TITLE_CLASS);
                const tabTitleParagraph = document.createElement('p');
                tabTitleParagraph.textContent = `${reference.summary}✤`;
                tabTitle.appendChild(tabTitleParagraph);
                tabTitlesContainer.appendChild(tabTitle);

                // Create tab content
                const tabContent = document.createElement('div');
                tabContent.classList.add(TAB_CONTENT_CLASS);
                tabContent.id = tabId;
                tabContent.innerHTML = reference.paragraphs.map(paragraph => `<p>${paragraph}</p>`).join('');
                tabContentsContainer.appendChild(tabContent);

                // if reference.image is exists, add it to the tab content.
                if (reference.images) {

                    // iterate over each image in the reference
                    reference.images.forEach(image => {
                        const imageElement = document.createElement('img');
                        imageElement.src = image;
                        imageElement.style.width = '15vw';
                        imageElement.style.margin = '0.1rem';
                        imageElement.style.verticalAlign = 'middle';
                        tabContent.appendChild(imageElement);
                    });
                }
            }
        });

        container.innerHTML = ''; // Clear original content
        container.appendChild(tabTitlesContainer);
        container.appendChild(tabContentsContainer);
    });
}

function addTabEventListeners() {
    const TAB_CONTAINER_CLASS = 'tab-container';
    const TAB_TITLE_CLASS = 'tab-title';
    const ACTIVE_TITLE_CLASS = 'active-title';
    const TAB_CONTENT_CLASS = 'tab-content';

    document.querySelectorAll(`div.${TAB_CONTAINER_CLASS}`).forEach((container, containerIndex) => {
        const tabTitlesContainer = container.querySelector('.tab-titles');
        const tabContentsContainer = container.querySelector('.tab-contents');
        let activeTabIndex = null;

        tabTitlesContainer.querySelectorAll(`.${TAB_TITLE_CLASS}`).forEach((tabTitle, tabIndex) => {
            tabTitle.onclick = () => toggleTab(containerIndex, tabIndex);
        });

        function toggleTab(containerIndex, tabIndex) {
            const tabContentElement = document.getElementById(`container${containerIndex}-tab${tabIndex}`);
            const tabTitleElement = tabTitlesContainer.children[tabIndex];

            if (activeTabIndex === tabIndex) {
                tabContentElement.style.display = 'none';
                tabTitleElement.classList.remove(ACTIVE_TITLE_CLASS);
                activeTabIndex = null;
            } else {
                tabContentsContainer.querySelectorAll(`.${TAB_CONTENT_CLASS}`).forEach(tabContent => {
                    tabContent.style.display = 'none';
                });

                tabTitlesContainer.querySelectorAll(`.${TAB_TITLE_CLASS}`).forEach(tabTitle => {
                    tabTitle.classList.remove(ACTIVE_TITLE_CLASS);
                });

                tabContentElement.style.display = 'block';
                tabTitleElement.classList.add(ACTIVE_TITLE_CLASS);
                activeTabIndex = tabIndex;

                // Query all elements with the .tooltip class within the tabContentElement
                const tooltips = tabContentElement.querySelectorAll('.tooltip');
                // Iterate over each tooltip element
                tooltips.forEach(tooltip => {
                    // Measure the tooltip's dimensions
                    const tooltipRect = tooltip.getBoundingClientRect();
                    const viewportWidth = window.innerWidth;
                
                    // Adjust the position if the tooltip exceeds half the viewport width
                    if (tooltipRect.right > viewportWidth / 2) {
                        tooltip.style.setProperty('--tooltip-transform', 'translateX(calc(-100% + 1rem))');
                    } else {
                        tooltip.style.setProperty('--tooltip-transform', 'translateX(0%)');
                    }
                });
            }
        }
    });
}

function highlightQuotesAcrossParagraphsSkippingTabs() {
    const paragraphs = document.querySelectorAll('p');
    var openQuoteRight = 0;
    let openQuote = false;

    paragraphs.forEach(p => {
        const parentClass = p.parentElement.classList;

        if (parentClass.contains('tab-title')) {
            return;
        }

        let content = p.innerHTML;

        if (parentClass.contains('tab-content')) {
            p.innerHTML = content.replace(/“([^”]*)”/g, '“<span class="highlight">$1</span>”');
            return;
        }

        if (openQuote) {
            p.style.textIndent = `${openQuoteRight}px`;
            content = `<span class="highlight">${content}</span>`;
        }

        if (content.includes('“') && content.includes('”')) {
            // Handle single paragraph quote
            content = content.replace(/“([^”]*)”/g, '“<span class="highlight">$1</span>”');
        } else if (content.includes('“')) {
            // Handle open quote start
            openQuote = true;
            content = content.replace(/“([^”]*)/, '“<span class="highlight">$1');

            // Get the index of the open quote symbol within the content
            const openQuoteIndex = content.indexOf('“');
            // Get the width between the start of p and open quote symbol in characters
            const beforeOpenQuoteWidth = content.slice(0, openQuoteIndex).length;
            // Convert the width to pixels (1rem = 18px), and add half the quote symbol width (9px)
            const beforeOpenQuoteWidthInPixels = beforeOpenQuoteWidth * 18;

            openQuoteRight = beforeOpenQuoteWidthInPixels + (2 * 18) + 18;// 18 or 9
        } else if (content.includes('”')) {
            // Handle closing quote end
            openQuote = false;
            content = content.replace(/([^“]*)”/, '$1</span>”');
            openQuoteRight = 0;
        }

        p.innerHTML = content;
    });
}

function highlightQuoteSymbols() {
    const PARAGRAPH_TAG = 'p';
    const OPEN_QUOTE_CLASS = 'open-quote';
    const CLOSE_QUOTE_CLASS = 'close-quote';
    const QUOTE_SYMBOLS_REGEX = /([“’”‘])/g;

    document.querySelectorAll(PARAGRAPH_TAG).forEach(paragraph => {
        let text = paragraph.innerHTML;

        text = text.replace(QUOTE_SYMBOLS_REGEX, match => {
            switch (match) {
                case '“':
                case '’':
                    return `<span style="text-align: right;font-family: monospace;display: inline-block;width:1rem" class="${OPEN_QUOTE_CLASS}">${match}</span>`;
                case '”':
                case '‘':
                    return `<span style="text-align: left;font-family: monospace;display: inline-block;width:1rem" class="${CLOSE_QUOTE_CLASS}">${match}</span>`;
                default:
                    return match;
            }
        });

        paragraph.innerHTML = text;
    });
}

function applyTooltips() {
    const text = document.body.innerHTML;
    const positions = [];
    const sortedTooltips = Object.entries(tooltips).sort((a, b) => b[0].length - a[0].length);

    // Store positions of longer items (length > 1)
    sortedTooltips.forEach(([word]) => {
        if (word.length > 1) {
            const regex = new RegExp(`(?<!<[^>]*)(${word})(?![^<]*>)`, 'g');
            let match;
            while ((match = regex.exec(text)) !== null) {
                positions.push({ start: match.index, end: match.index + match[0].length });
            }
        }
    });

    // Function to check if a position overlaps with stored positions
    function isOverlapping(offset) {
        return positions.some(pos => offset >= pos.start && offset < pos.end);
    }

    // Create a map for quick lookups
    const tooltipMap = new Map(sortedTooltips);

    // Iterate over the entire text to apply tooltips
    let result = '';
    let index = 0;

    while (index < text.length) {
        let foundMatch = false;

        // Look ahead to find the longest match
        for (let length = Math.min(20, text.length - index); length > 0; length--) {
            const word = text.slice(index, index + length);
            const tooltip = tooltipMap.get(word);

            if (tooltip) {
                if (word.length > 1 || !isOverlapping(index)) {
                    result += `<span class="base-tooltip tooltip" data-tooltip="${tooltip}">${word}</span>`;
                    index += word.length;
                    foundMatch = true;
                    break;
                }
            }
        }

        if (!foundMatch) {
            result += text[index];
            index++;
        }
    }

    document.body.innerHTML = result;
}

function adjustTooltipPosition() {
    const tooltips = document.querySelectorAll('.tooltip');

    tooltips.forEach(element => {
        // Activate tooltip to measure its dimensions
        element.classList.add('active');
    });
    
    const tooltipElements = document.querySelectorAll('.active');
    tooltipElements.forEach(element => {
        // Measure the tooltip's dimensions
        const tooltipRect = element.getBoundingClientRect();
        const viewportWidth = window.innerWidth;
    
        // Adjust the position if the tooltip exceeds the viewport width
        if (tooltipRect.right > viewportWidth / 2) {
            element.style.setProperty('--tooltip-transform', 'translateX(calc(-100% + 1rem))');
        } else {
            element.style.setProperty('--tooltip-transform', 'translateX(0%)');
        }
    });

    tooltips.forEach(element => {
        // Activate tooltip to measure its dimensions
        element.classList.remove('active');
    });
}

function refineBoldStyleInH1() {
    const h1Elements = document.querySelectorAll('h1');

    h1Elements.forEach(h1 => {
        const words = h1.childNodes;

        words.forEach(wordNode => {
            if (wordNode.nodeType === Node.TEXT_NODE) {
                return;  // Skip text nodes that don't contain spans
            } else if (wordNode.nodeType === Node.ELEMENT_NODE && wordNode.tagName === 'SPAN') {
                // Append the font-weight style to existing span elements
                wordNode.style.fontWeight = 'bold';
            }
        });
    });
}

function addTooltipEvents() {
    const tooltips = document.querySelectorAll('.tooltip');
    let activeTooltip = null;
    let mouseenterTooltip = null;

    tooltips.forEach(function (tooltip) {
        tooltip.addEventListener('mouseenter', function () {
            // Hide the previously mouserentered tooltip
            if (mouseenterTooltip && mouseenterTooltip !== tooltip) {
                mouseenterTooltip.classList.remove('active');
            }
            
            // Toggle the clicked tooltip unrepeatedly
            if (mouseenterTooltip !== tooltip) {
                tooltip.classList.toggle('active');
                if (mouseenterTooltip){
                    mouseenterTooltip.classList.remove('active');
                }
                activeTooltip = null;
            }

            // Update the mouseenterTooltip
            mouseenterTooltip = tooltip;
        });

        tooltip.addEventListener('click', function (event) {
            // Hide the previously active tooltip
            if (activeTooltip && activeTooltip !== tooltip) {
                activeTooltip.classList.remove('active');
            }

            // Toggle the clicked tooltip if it's not the mouseentered tooltip
            if (mouseenterTooltip !== tooltip) {
                tooltip.classList.toggle('active');
            }

            // Update the active tooltip
            activeTooltip = tooltip;

            event.stopPropagation();
        });
    });

    // Hide the active tooltip when clicking anywhere else
    document.addEventListener('click', function () {
        if (activeTooltip) {
            activeTooltip.classList.remove('active');
            activeTooltip = null;
        }
        if (mouseenterTooltip) {
            mouseenterTooltip.classList.remove('active');
            mouseenterTooltip = null;
        }
    });

    // Hide the mouserentered tooltip when hovering anywhere else
    document.addEventListener('mouseover', function () {
        if (mouseenterTooltip && mouseenterTooltip !== activeTooltip) {
            mouseenterTooltip.classList.remove('active');
            mouseenterTooltip = null;
        }
    });
}

function wrapPoemLinesInParagraphs() {
    document.querySelectorAll('.poem-container').forEach(poemContainer => {
        const lines = poemContainer.innerHTML.split('\n').filter(line => line.trim());
        const paragraphLines = lines.map(line => `<p>${line.trim()}</p>`).join('');
        poemContainer.innerHTML = paragraphLines;
    });
}

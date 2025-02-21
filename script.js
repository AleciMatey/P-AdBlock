// ==UserScript==
// @name         AdBlock on Pornhub
// @namespace    https://github.com/AleciMatey/P-AdBlock
// @version      0.2
// @description  Block Ads on Pornhub
// @author       Aleci Matey
// @match        https://www.pornhub.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    function shouldExclude(element) {
        return element.tagName.toLowerCase() === 'video' ||
            element.tagName.toLowerCase() === 'input' ||
            element.tagName.toLowerCase() === 'aside' ||
            element.tagName.toLowerCase() === 'label' ||
            element.tagName.toLowerCase() === 'style';
    }

    // Function to hide tags of exactly 5 characters
    function hideFiveCharTags() {
        // Get all elements in the document
        const allElements = document.getElementsByTagName('*');
        // Loop through all elements
        for(let i = 0; i < allElements.length; i++) {
            const element = allElements[i];
            // Check if the tag name length is exactly 5 characters
            if (element.tagName.length === 5 && !shouldExclude(element)) {
                console.log("<---BLOCKED---> Find Ad! <---BLOCKED--->")
                element.style.display = 'none';
            } else if (element.id === "customSkin") {
                console.log("<---BLOCKED---> Find AdSkin! <---BLOCKED--->")
                element.style.display = 'none';
            }
        }
    }

    // Run the function when the page loads
    document.addEventListener('DOMContentLoaded', hideFiveCharTags);

    // Monitor for new elements being added
    const observer = new MutationObserver(hideFiveCharTags);
    observer.observe(document.body, { childList: true, subtree: true });
})();

walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bWhite Male\b/g, "Jew");
	v = v.replace(/\bWhite male\b/g, "Jew");
	v = v.replace(/\bwhite Male\b/g, "Jew");
	v = v.replace(/\bwhite male\b/g, "Jew");
	
	textNode.nodeValue = v;
}



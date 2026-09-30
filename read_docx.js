const mammoth = require("mammoth");
mammoth.extractRawText({path: "public/images/content.docx"})
    .then(function(result){
        const text = result.value; // The raw text
        console.log(text);
    })
    .catch(function(err){
        console.error(err);
    });

var adminPart = (function() {
    return {
        addTag : function(element) {
            var tagName = element.value;
            if(tagName.charAt(tagName.length - 1) === ' ') {
                adminPart.createTag(tagName.substr(0,tagName.length -1));
                element.value = "";
            }
        },
        createTag : function(tagName) {
            var tag = "<div>" + tagName + '<span onclick="adminPart.removeTag("' + tagName + '")">x</span></div>';
            document.getElementById('tags').insertAdjacentHTML('beforeend', tag);
            document.getElementById('tags_data').value += (';' + tagName);
        },
        removeTag : function() {

        },

        addSpecification : function(element) {
            var specName = element.value;
            if(specName.charAt(specName.length - 1) === ' ') {
                adminPart.createSpecification(specName.substr(0,specName.length -1));
                element.value = "";
            }
        },
        createSpecification : function(specName) {
            var specification = "<div>" + specName + '<span onclick="adminPart.removeTag("' + specName + '")">x</span></div>';
            document.getElementById('specifications').insertAdjacentHTML('beforeend', specification);
            document.getElementById('specifications_data').value += (';' + specName);
        }
    }
})();
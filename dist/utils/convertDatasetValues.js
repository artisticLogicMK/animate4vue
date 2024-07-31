export default function convertDatasetValues(dataset) {
    var convertedValues = {};
    for (var key in dataset) {
        if (dataset.hasOwnProperty(key)) {
            // Attempt to convert the value to a number
            var value = dataset[key];
            var numValue = parseFloat(value);
            // Ensure value is not undefined before processing
            if (value !== undefined) {
                // Attempt to convert the value to a number
                var numValue_1 = parseFloat(value);
                // Check if conversion results in a valid number
                if (!isNaN(numValue_1)) {
                    convertedValues[key] = numValue_1;
                }
                else {
                    // If conversion fails, keep the original string value
                    convertedValues[key] = value;
                }
            }
        }
    }
    return convertedValues;
}

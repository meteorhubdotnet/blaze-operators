// ===================================================
// HELPER: eq
// Checks for equality between 2 provided variables
// @arg Mixed: value1
// @arg Mixed: value2
// @return Boolean: whether the 2 values are equal or not
// ===================================================
UI.registerHelper('eq', function(value1, value2) {

    // Do it
    return value1 === value2;

});

// ===================================================
// HELPER: or
// Checks for presence of either value
// @arg Mixed: value1
// @arg Mixed: value2
// @return Boolean: whether either value is present
// ===================================================
UI.registerHelper('or', function(value1, value2) {

    // Do it
    return value1 || value2;

});

// ===================================================
// HELPER: inc
// Checks inf value2 is in value1
// @arg Mixed: value1
// @arg Mixed: value2
// @return Boolean whether value2 is in value1
// ===================================================
UI.registerHelper('inc', function(value1, value2) {

    // Do it
    return value1?.includes(value2);

});
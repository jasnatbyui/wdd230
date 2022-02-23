function toggleHighlightingOfCell(cell) {
    isHighlighted = cell.hasClass('highlighted');
    if (isHighlighted) {
        cell.removeClass('highlighted');
    } else {
        cell.addClass('highlighted');
    }
}
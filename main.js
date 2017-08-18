$(function() {

    // меню категории
    var category = '.js-options-category';
    var categoryList = '.options__cat__list';
    var categoryText = '.options__cat__text';
    var $category = $(category);
    var $categoryAll = $category.find('.js-options-category-all');
    var $categoryShowMore = $category.find('.js-options-more');
    var active = 'active '; // пробел отставить!
    var chosen = 'chosen ';


    // возврат ко всем категориям
    $categoryAll.on('click', function () {
        var $allList = $category.find(categoryList);
        $category.removeClass(active);
        $allList.removeClass(active + chosen);
        $category.find(categoryText).removeClass(active);
        $categoryShowMore.show();
        $categoryAll.hide();
    });

    // навигация
    $(categoryText).on('click', function () {
        var $currentText = $(this);
        var $currentList = $currentText.parent();
        var $parrentsList = $currentList.parents(categoryList);
        var $parrentsText = $currentList.parents(categoryList).find('+' + categoryText);
        $category.addClass(active);
        $currentText.addClass(active);
        $currentList.addClass(active);
        $parrentsList.addClass(active + chosen);
        $parrentsText.removeClass(active).addClass(chosen);
        $categoryShowMore.hide();
        $categoryAll.show();
    });

    $category.on('click', '.chosen > .options__cat__text', function () {
        var $currentText = $(this);
        var $currentList = $currentText.parent();
        var $nextInnerList = $currentText.next();
        var $allInnerList = $currentList.find(categoryList);
        var $innerText = $nextInnerList.find(categoryText);
        $currentList.removeClass(chosen);
        $allInnerList.removeClass(active + chosen);
        $innerText.removeClass(active);
    });

});


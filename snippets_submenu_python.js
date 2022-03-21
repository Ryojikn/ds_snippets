define([
    "require",
    "./snippets_submenus_python/numpy",
    "./snippets_submenus_python/numba",
    "./snippets_submenus_python/scipy",
    "./snippets_submenus_python/matplotlib",
    "./snippets_submenus_python/pandas",
    "./snippets_submenus_python/python",
], function (require, numpy, numba, scipy, matplotlib, pandas, python) {
    return {
        numpy: numpy,
        numba: numba,
        scipy: scipy,
        matplotlib: matplotlib,
        pandas: pandas,
        python: python,
    };
});

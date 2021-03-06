module.exports = {
  extends: ["stylelint-prettier/recommended"],
  plugins: ["stylelint-scss", "stylelint-order", "stylelint-prettier"],
  rules: {
    "prettier/prettier": true,
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": true,
    "order/properties-alphabetical-order": true,
    "no-empty-source": null,
    "rule-empty-line-before": null,
    "selector-list-comma-newline-after": null,
    "no-descending-specificity": null,
    "declaration-colon-newline-after": null,
    "color-hex-length": null,
  },
}
